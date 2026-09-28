import assert from 'node:assert/strict';

// Check the production server's actual HTTP output without executing page JS.
// Usage: npm run verify:seo -- --base-url=http://127.0.0.1:3100
const baseUrl = process.argv.find((arg) => arg.startsWith('--base-url='))?.slice(11)
    || 'http://127.0.0.1:3100';
const canonicalOrigin = 'https://flexymarkets.com';
const checks = [];

function check(name, condition) {
    assert.ok(condition, name);
    checks.push(name);
}

function tags(html, name) {
    return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'gi'))].map(([tag]) =>
        Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]))
    );
}

function meta(html, key) {
    return tags(html, 'meta').find((tag) => tag.name === key || tag.property === key)?.content;
}

function canonical(html) {
    return tags(html, 'link').filter((tag) => tag.rel === 'canonical').map((tag) => tag.href);
}

function schemas(html) {
    return [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
        .flatMap(([, text]) => {
            const data = JSON.parse(text);
            return data['@graph'] || [data];
        });
}

async function get(path, options) {
    const response = await fetch(new URL(path, baseUrl), {
        signal: AbortSignal.timeout(30000),
        ...options,
    });
    return { response, html: await response.text() };
}

try {
    const { response, html } = await get('/');
    check('Homepage responds HTTP 200', response.status === 200);
    const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
    check('Homepage has a descriptive title and a single brand name',
        title?.includes('Forex') && title.includes('CFD') && (title.match(/Flexy Markets/g) || []).length === 1);
    check('Homepage has a useful meta description', (meta(html, 'description')?.length || 0) >= 120);
    check('Homepage has one production canonical', canonical(html).length === 1 && new URL(canonical(html)[0]).href === `${canonicalOrigin}/`);
    check('Homepage is indexable', !/noindex/i.test(meta(html, 'robots') || ''));
    check('Homepage declares English and a mobile viewport', /<html[^>]*lang="en"/.test(html) && !!meta(html, 'viewport'));

    const markup = html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
    const headings = [...markup.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)];
    check('One descriptive H1 is present in server HTML', headings.length === 1 && /Forex.*CFD/s.test(headings[0][1]));
    check('Account information is present before client data loads', markup.includes('Compare Trading') && markup.includes('Account Types'));
    check('Homepage content is not hidden in JavaScript-dependent streaming segments', !/<div hidden[^>]*id="S:/.test(markup));
    check('Every image declares an alt attribute', tags(markup, 'img').every((tag) => Object.hasOwn(tag, 'alt')));
    const homeSchemas = schemas(html);
    for (const type of ['Organization', 'WebSite', 'WebPage']) {
        check(`${type} JSON-LD is present and valid JSON`, homeSchemas.some((schema) => schema['@type'] === type));
    }
    for (const property of ['og:title', 'og:description', 'og:url', 'og:image', 'twitter:card', 'twitter:image']) {
        check(`${property} is present`, !!meta(html, property));
    }
    const imagePath = new URL(meta(html, 'og:image')).pathname;
    const preview = await fetch(new URL(imagePath, baseUrl), { signal: AbortSignal.timeout(30000) });
    check('Social preview returns an image', preview.status === 200 && preview.headers.get('content-type')?.startsWith('image/'));
    await preview.arrayBuffer();

    // Follow every local navigation link (including policy PDFs) from the page.
    const links = [...new Set(tags(markup, 'a').map((tag) => tag.href)
        .filter((href) => href?.startsWith('/') && !href.startsWith('//')))];
    for (let offset = 0; offset < links.length; offset += 4) {
        await Promise.all(links.slice(offset, offset + 4).map(async (href) => {
            const { response: linkResponse } = await get(href, { method: 'HEAD' });
            check(`Internal link resolves: ${href}`, linkResponse.ok);
        }));
    }

    const { html: robots } = await get('/robots.txt');
    check('robots.txt advertises the production sitemap', robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));
    check('No robots rule blocks /promotions', !robots.split('\n').some((line) => {
        const rule = line.match(/^Disallow:\s*(\S+)/i)?.[1];
        if (!rule) return false;
        const expression = rule.replace(/[.+?^{}()|[\]\\]/g, '\\$&').replaceAll('*', '.*');
        return new RegExp(`^${expression}`).test('/promotions');
    }));
    const { response: sitemapResponse, html: sitemap } = await get('/sitemap.xml');
    check('Sitemap responds HTTP 200', sitemapResponse.ok);
    check('Privacy policy is in the sitemap', sitemap.includes(`${canonicalOrigin}/privacy-policy</loc>`));
    check('Authentication pages are excluded from the sitemap', !/<loc>[^<]*\/(sign-in|sign-up|reset-password)<\/loc>/.test(sitemap));
    const staticEntries = [...sitemap.matchAll(/<url>(.*?)<\/url>/gs)].filter(([, entry]) => !entry.includes('/blog/'));
    check('Static sitemap entries do not invent modification dates', staticEntries.every(([, entry]) => !entry.includes('<lastmod>')));

    for (const path of ['/about', '/account', '/forex-trading', '/promotions', '/privacy-policy']) {
        const { html: page } = await get(path);
        check(`${path} has a self-referencing canonical`, canonical(page)[0] === `${canonicalOrigin}${path}`);
        check(`${path} has its own Open Graph URL`, meta(page, 'og:url') === `${canonicalOrigin}${path}`);
        check(`${path} title does not repeat the brand`, (page.match(/<title>(.*?)<\/title>/s)?.[1].match(/Flexy Markets/g) || []).length <= 1);
    }
    for (const path of ['/sign-in', '/sign-up', '/reset-password']) {
        const { html: page } = await get(path);
        check(`${path} is excluded from search indexing`, /noindex/.test(meta(page, 'robots')) && /noindex/.test(meta(page, 'googlebot')));
        check(`${path} has the correct canonical`, canonical(page)[0] === `${canonicalOrigin}${path}`);
    }
    for (const path of ['/forex-trading', '/cryptocurrencies', '/equity-indices', '/thematic-indices', '/stock-derivatives', '/turbo-stocks', '/shares', '/commodities', '/precious-metals', '/energies']) {
        const { html: page } = await get(path);
        const data = schemas(page);
        check(`${path} describes a service instead of an incomplete product`, !data.some((item) => item['@type'] === 'Product') && data.some((item) => item['@type'] === 'Service' && item.url === `${canonicalOrigin}${path}`));
    }
    console.log(JSON.stringify({ target: baseUrl, passed: checks.length, checks }, null, 2));
} catch (error) {
    console.error(JSON.stringify({ target: baseUrl, passed: checks.length, error: error.message }, null, 2));
    process.exitCode = 1;
}
