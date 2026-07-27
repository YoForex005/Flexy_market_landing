import process from 'node:process';
import pg from 'pg';

const { Client } = pg;

function option(name, fallback) {
    const prefix = `--${name}=`;
    const value = process.argv.find((arg) => arg.startsWith(prefix));
    return value ? value.slice(prefix.length) : fallback;
}

function expectedFaqItems(value, blogId) {
    const candidates = Array.isArray(value)
        ? value
        : value && typeof value === 'object'
            ? ['faqs', 'faq', 'items', 'mainEntity', 'faq_json']
                .map((key) => value[key])
                .find(Array.isArray)
            : null;

    if (!Array.isArray(candidates)) {
        throw new Error(`Blog ${blogId}: faq_json does not contain an FAQ array.`);
    }

    return candidates.map((item, index) => {
        const questionValue = item?.question ?? item?.q ?? item?.name;
        const acceptedAnswer = item?.acceptedAnswer;
        const answerValue = item?.answer
            ?? item?.answer_html
            ?? item?.a
            ?? item?.text
            ?? acceptedAnswer?.text;
        const question = typeof questionValue === 'string' ? questionValue.trim() : '';
        const answer = typeof answerValue === 'string' ? answerValue.trim() : '';

        if (!question || !answer) {
            throw new Error(`Blog ${blogId}: FAQ item ${index + 1} lacks a non-empty question or answer.`);
        }

        return { question, answer };
    });
}

function jsonLdValues(html) {
    const values = [];

    for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
        if (!/\btype=(?:"application\/ld\+json"|'application\/ld\+json')/i.test(match[1])) {
            continue;
        }

        try {
            values.push(JSON.parse(match[2]));
        } catch (error) {
            throw new Error(`Invalid JSON-LD: ${error.message}`);
        }
    }

    return values;
}

function schemaNodes(value) {
    if (Array.isArray(value)) return value.flatMap(schemaNodes);
    if (!value || typeof value !== 'object') return [];

    const nodes = [value];
    if (Array.isArray(value['@graph'])) nodes.push(...value['@graph'].flatMap(schemaNodes));
    return nodes;
}

function hasSchemaType(value, type) {
    const schemaType = value?.['@type'];
    return schemaType === type || (Array.isArray(schemaType) && schemaType.includes(type));
}

function assertFaqSchema(schema, expectedItems, blogId) {
    if (schema['@context'] !== 'https://schema.org') {
        throw new Error(`Blog ${blogId}: FAQPage has an invalid @context.`);
    }

    if (!Array.isArray(schema.mainEntity) || schema.mainEntity.length !== expectedItems.length) {
        throw new Error(`Blog ${blogId}: FAQPage mainEntity count does not match faq_json.`);
    }

    schema.mainEntity.forEach((question, index) => {
        const expected = expectedItems[index];
        if (!hasSchemaType(question, 'Question') || question.name !== expected.question) {
            throw new Error(`Blog ${blogId}: FAQPage question ${index + 1} does not match faq_json.`);
        }
        if (
            !hasSchemaType(question.acceptedAnswer, 'Answer')
            || question.acceptedAnswer.text !== expected.answer
        ) {
            throw new Error(`Blog ${blogId}: FAQPage answer ${index + 1} does not match faq_json.`);
        }
    });
}

async function publishedFaqPosts(client) {
    const result = await client.query(`
        SELECT b.id, sm.seo_slug, b.faq_json
        FROM blogs b
        INNER JOIN LATERAL (
            SELECT BTRIM(sm.seo_slug) AS seo_slug
            FROM seo_meta sm
            WHERE sm.post_id = b.id
              AND NULLIF(BTRIM(sm.seo_slug), '') IS NOT NULL
            ORDER BY sm.id DESC
            LIMIT 1
        ) sm ON TRUE
        WHERE b.status = 'published'
          AND b.faq_json IS NOT NULL
          AND b.faq_json <> 'null'::jsonb
        ORDER BY b.id
    `);

    return result.rows;
}

async function main() {
    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is required.');
    }

    const baseUrl = option('base-url', 'http://127.0.0.1:3000').replace(/\/$/, '');
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 10_000,
        statement_timeout: 30_000,
    });

    await client.connect();
    try {
        const posts = await publishedFaqPosts(client);
        const verifiablePosts = posts
            .map((post) => ({
                ...post,
                expectedItems: expectedFaqItems(post.faq_json, post.id),
            }))
            .filter((post) => post.expectedItems.length > 0);

        if (verifiablePosts.length === 0) {
            throw new Error('No eligible published posts contain FAQ items.');
        }

        for (const post of verifiablePosts) {
            const url = `${baseUrl}/blog/${post.seo_slug}`;
            const response = await fetch(url, {
                cache: 'no-store',
                headers: { 'user-agent': 'FlexyMarketsFaqVerifier/1.0' },
            });
            if (!response.ok) {
                throw new Error(`Blog ${post.id}: ${url} returned HTTP ${response.status}.`);
            }

            const html = await response.text();
            if (!/<section\b[^>]*\bdata-blog-faq="true"/i.test(html)) {
                throw new Error(`Blog ${post.id}: visible FAQ section is missing.`);
            }
            if (!html.includes('Frequently Asked Questions')) {
                throw new Error(`Blog ${post.id}: FAQ heading is missing.`);
            }

            const visibleItems = [...html.matchAll(/<details\b[^>]*>/gi)]
                .filter(([tag]) => /\bdata-blog-faq-item="true"/i.test(tag))
                .length;
            if (visibleItems !== post.expectedItems.length) {
                throw new Error(
                    `Blog ${post.id}: expected ${post.expectedItems.length} visible FAQ items, found ${visibleItems}.`
                );
            }

            const faqSchemas = jsonLdValues(html)
                .flatMap(schemaNodes)
                .filter((schema) => hasSchemaType(schema, 'FAQPage'));
            if (faqSchemas.length !== 1) {
                throw new Error(`Blog ${post.id}: expected one FAQPage schema, found ${faqSchemas.length}.`);
            }

            assertFaqSchema(faqSchemas[0], post.expectedItems, post.id);
            console.log(
                `Blog ${post.id}: HTTP ${response.status}, ${visibleItems} visible FAQs, valid FAQPage JSON-LD`
            );
        }

        console.log(`Verified ${verifiablePosts.length} published FAQ blog page(s).`);
    } finally {
        await client.end();
    }
}

main().catch((error) => {
    console.error(`FAQ verification failed: ${error.message}`);
    process.exitCode = 1;
});
