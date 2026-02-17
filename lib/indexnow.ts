import sitemap from '@/app/sitemap';

const INDEXNOW_KEY = process.env.INDEXNOW_KEY;
const INDEXNOW_HOST = (process.env.INDEXNOW_HOST || 'https://flexymarkets.com').replace(/\/$/, '');
const INDEXNOW_ENDPOINT = process.env.INDEXNOW_ENDPOINT || 'www.bing.com';


/**
 * Submit a single URL to IndexNow
 */
export async function submitSingleUrl(url: string) {
    if (!INDEXNOW_KEY) {
        throw new Error('INDEXNOW_KEY is not defined in environment variables');
    }

    const payload = {
        host: INDEXNOW_HOST.replace(/^https?:\/\//, ''),
        key: INDEXNOW_KEY,
        keyLocation: `${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: [url],
    };

    console.log(`Submitting single URL to IndexNow: ${url}`);

    const response = await fetch(`https://${INDEXNOW_ENDPOINT}/indexnow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`IndexNow submission failed (${response.status}): ${errorText}`);
    }

    return { status: response.status, message: 'URL submitted successfully' };
}

/**
 * Submit bulk URLs to IndexNow
 */
export async function submitBulkUrls(urls: string[]) {
    if (!INDEXNOW_KEY) {
        throw new Error('INDEXNOW_KEY is not defined in environment variables');
    }

    const payload = {
        host: INDEXNOW_HOST.replace(/^https?:\/\//, ''),
        key: INDEXNOW_KEY,
        keyLocation: `${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
    };

    console.log(`Submitting ${urls.length} URLs to IndexNow`);

    const response = await fetch(`https://${INDEXNOW_ENDPOINT}/indexnow`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`IndexNow bulk submission failed (${response.status}): ${errorText}`);
    }

    return { status: response.status, message: `${urls.length} URLs submitted successfully` };
}

/**
 * Verify that the key file exists and matches the key in .env
 */
export async function verifyKeyFile() {
    if (!INDEXNOW_KEY) {
        throw new Error('INDEXNOW_KEY is not defined in environment variables');
    }

    const keyLocation = `${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;
    console.log(`Verifying key file at: ${keyLocation}`);

    try {
        const response = await fetch(keyLocation);
        if (!response.ok) {
            return { success: false, error: `Key file not found at ${keyLocation} (Status: ${response.status})` };
        }
        const content = await response.text();
        const isValid = content.trim() === INDEXNOW_KEY;
        return { success: isValid, content: content.trim(), expected: INDEXNOW_KEY };
    } catch (error: any) {
        return { success: false, error: error.message };
    }
}

/**
 * Fetch all URLs from the sitemap
 */
export async function getSitemapUrls(): Promise<string[]> {
    try {
        const sitemapData = await sitemap();
        // Check if sitemapData is an array
        if (!Array.isArray(sitemapData)) {
            console.error('Sitemap function did not return an array:', sitemapData);
            return [];
        }
        return sitemapData.map(item => item.url);
    } catch (error: any) {
        console.error('Error fetching sitemap URLs:', error);
        throw new Error(`Failed to fetch sitemap URLs: ${error.message}`);
    }
}
