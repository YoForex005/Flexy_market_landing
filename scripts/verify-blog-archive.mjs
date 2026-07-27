import { createHash } from 'node:crypto';
import process from 'node:process';
import pg from 'pg';

const { Client } = pg;
const PAGE_SIZE = 12;
const DEFAULT_TARGET_ID = 490;
const DEFAULT_TARGET_SLUG = 'white-label-forex-broker-solution-2';

function option(name, fallback) {
    const prefix = `--${name}=`;
    const value = process.argv.find((arg) => arg.startsWith(prefix));
    return value ? value.slice(prefix.length) : fallback;
}

function archiveIds(html) {
    const chunks = [];
    for (const match of html.matchAll(/self\.__next_f\.push\((\[.*?\])\)<\/script>/gs)) {
        const payload = JSON.parse(match[1]);
        if (payload[0] === 1 && typeof payload[1] === 'string') {
            chunks.push(payload[1]);
        }
    }

    const flight = chunks.join('');
    return [...flight.matchAll(/"post":\{"id":(\d+)/g)].map((match) => Number(match[1]));
}

function totalPages(html) {
    const match = html.match(
        /Page\s*(?:<!-- -->)?1(?:<!-- -->)?\s*of\s*(?:<!-- -->)?(\d+)/i
    );
    if (!match) throw new Error('Could not determine the archive page count.');
    return Number(match[1]);
}

async function fetchText(url) {
    const response = await fetch(url, {
        cache: 'no-store',
        headers: { 'user-agent': 'FlexyMarketsArchiveVerifier/1.0' },
    });
    if (!response.ok) {
        throw new Error(`${url} returned HTTP ${response.status}`);
    }
    return { response, text: await response.text() };
}

async function expectedArchiveIds() {
    if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is required to verify omissions.');
    }

    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false },
        connectionTimeoutMillis: 10_000,
        statement_timeout: 30_000,
    });

    await client.connect();
    try {
        const result = await client.query(`
            SELECT b.id
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
            ORDER BY
                COALESCE(b.updated_at, b.published_at, b.created_at) DESC NULLS LAST,
                b.id DESC
        `);
        return result.rows.map((row) => Number(row.id));
    } finally {
        await client.end();
    }
}

async function scan(baseUrl, pageCount) {
    const pages = await Promise.all(
        Array.from({ length: pageCount }, async (_, index) => {
            const page = index + 1;
            const { text } = await fetchText(`${baseUrl}/blog?page=${page}`);
            const ids = archiveIds(text);
            if (ids.length === 0 || ids.length > PAGE_SIZE) {
                throw new Error(`Page ${page} exposed ${ids.length} archive IDs.`);
            }
            return ids;
        })
    );
    return pages;
}

function differences(expected, actual) {
    const actualSet = new Set(actual);
    const expectedSet = new Set(expected);
    return {
        omitted: expected.filter((id) => !actualSet.has(id)),
        unexpected: actual.filter((id) => !expectedSet.has(id)),
    };
}

async function main() {
    const baseUrl = option('base-url', 'http://127.0.0.1:3000').replace(/\/$/, '');
    const canonicalOrigin = option('canonical-origin', baseUrl).replace(/\/$/, '');
    const scans = Number(option('scans', '3'));
    const targetId = Number(option('target-id', String(DEFAULT_TARGET_ID)));
    const targetSlug = option('target-slug', DEFAULT_TARGET_SLUG);

    if (!Number.isInteger(scans) || scans < 1) throw new Error('scans must be a positive integer.');
    if (!Number.isInteger(targetId) || targetId < 1) throw new Error('target-id must be a positive integer.');

    const expected = await expectedArchiveIds();
    const firstPage = await fetchText(`${baseUrl}/blog?page=1`);
    const pageCount = totalPages(firstPage.text);
    const sequences = [];
    let targetPage = null;

    for (let scanIndex = 0; scanIndex < scans; scanIndex += 1) {
        const pages = await scan(baseUrl, pageCount);
        const sequence = pages.flat();
        const unique = new Set(sequence);
        const { omitted, unexpected } = differences(expected, sequence);
        const duplicates = sequence.filter((id, index) => sequence.indexOf(id) !== index);
        const digest = createHash('sha256').update(sequence.join(',')).digest('hex');

        if (sequence.length !== expected.length) {
            throw new Error(`Scan ${scanIndex + 1}: expected ${expected.length} rows, received ${sequence.length}.`);
        }
        if (unique.size !== sequence.length || duplicates.length > 0) {
            throw new Error(`Scan ${scanIndex + 1}: duplicate IDs: ${[...new Set(duplicates)].join(', ')}`);
        }
        if (omitted.length || unexpected.length) {
            throw new Error(
                `Scan ${scanIndex + 1}: omitted [${omitted.join(', ')}], unexpected [${unexpected.join(', ')}].`
            );
        }
        if (sequence.join(',') !== expected.join(',')) {
            throw new Error(`Scan ${scanIndex + 1}: archive order differs from the database order.`);
        }

        const targetIndex = sequence.indexOf(targetId);
        const currentTargetPage = targetIndex < 0 ? null : Math.floor(targetIndex / PAGE_SIZE) + 1;
        if (currentTargetPage !== 1) {
            throw new Error(`Scan ${scanIndex + 1}: target ID ${targetId} is on page ${currentTargetPage ?? 'none'}.`);
        }
        targetPage = currentTargetPage;
        sequences.push({ sequence, digest });
        console.log(
            `Scan ${scanIndex + 1}: ${sequence.length} rows, ${unique.size} unique, digest ${digest}`
        );
    }

    const firstDigest = sequences[0].digest;
    if (!sequences.every(({ digest }) => digest === firstDigest)) {
        throw new Error('Archive ordering changed between consecutive scans.');
    }

    const articleUrl = `${baseUrl}/blog/${targetSlug}`;
    const article = await fetchText(articleUrl);
    const sitemap = await fetchText(`${baseUrl}/sitemap.xml`);
    const canonicalArticleUrl = `${canonicalOrigin}/blog/${targetSlug}`;
    const sitemapOccurrences = sitemap.text.split(canonicalArticleUrl).length - 1;

    if (sitemapOccurrences !== 1) {
        throw new Error(`Expected the article once in the sitemap; found ${sitemapOccurrences}.`);
    }

    console.log(`Direct article: HTTP ${article.response.status}`);
    console.log(`Sitemap occurrence count: ${sitemapOccurrences}`);
    console.log(`Target ID ${targetId}: page ${targetPage}`);
    console.log(`Stable across ${scans} scan(s): yes`);
}

main().catch((error) => {
    console.error(`Archive verification failed: ${error.message}`);
    process.exitCode = 1;
});
