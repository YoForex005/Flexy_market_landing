import fs from 'fs';
import path from 'path';

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const BING_ENDPOINT = 'https://www.bing.com/indexnow';

interface IndexNowParams {
    host: string;
    key: string;
    keyLocation?: string;
    urlList?: string[];
    url?: string;
}

export async function submitSingleUrl(url: string) {
    const host = process.env.INDEXNOW_HOST;
    const key = process.env.INDEXNOW_KEY;
    const keyLocation = `https://${host}/${key}.txt`;

    if (!host || !key) {
        throw new Error('Missing INDEXNOW_HOST or INDEXNOW_KEY environment variables');
    }

    const body = {
        host,
        key,
        keyLocation,
        url,
    };

    try {
        const response = await fetch(INDEXNOW_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`IndexNow submission failed: ${response.status} ${response.statusText} - ${errorText}`);
        }

        return { success: true, status: response.status };

    } catch (error) {
        console.error('IndexNow submission error:', error);
        throw error;
    }
}

export async function submitBulkUrls(urls: string[]) {
    const host = process.env.INDEXNOW_HOST;
    const key = process.env.INDEXNOW_KEY;
    const keyLocation = `https://${host}/${key}.txt`;

    if (!host || !key) {
        throw new Error('Missing INDEXNOW_HOST or INDEXNOW_KEY environment variables');
    }

    const body = {
        host,
        key,
        keyLocation,
        urlList: urls,
    };

    try {
        const response = await fetch(INDEXNOW_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`IndexNow bulk submission failed: ${response.status} ${response.statusText} - ${errorText}`);
        }

        return { success: true, status: response.status };

    } catch (error) {
        console.error('IndexNow bulk submission error:', error);
        throw error;
    }
}

export async function verifyKeyFile() {
    const key = process.env.INDEXNOW_KEY;
    if (!key) {
        throw new Error("INDEXNOW_KEY not set in environment variables.");
    }

    const keyFilePath = path.join(process.cwd(), 'public', `${key}.txt`);
    try {
        if (fs.existsSync(keyFilePath)) {
            const content = fs.readFileSync(keyFilePath, 'utf-8');
            if (content.trim() === key) {
                return { success: true, message: "Key file found and content matches." };
            } else {
                return { success: false, message: "Key file found but content does not match INDEXNOW_KEY." };
            }
        } else {
            return { success: false, message: `Key file not found at ${keyFilePath}` };
        }
    } catch (error) {
        return { success: false, message: `Error checking key file: ${error}` };
    }
}

// Helper to extract URLs from sitemap.xml
// Note: This is a basic XML parser. For complex sitemaps, consider a dedicated XML parser library.
export async function getSitemapUrls(): Promise<string[]> {
    const host = process.env.INDEXNOW_HOST;
    if (!host) return [];

    const sitemapUrl = `https://${host}/sitemap.xml`;

    try {
        const response = await fetch(sitemapUrl);
        if (!response.ok) {
            console.error(`Failed to fetch sitemap from ${sitemapUrl}: ${response.statusText}`);
            return [];
        }

        const xmlText = await response.text();
        const locRegex = /<loc>(.*?)<\/loc>/g;
        const urls: string[] = [];
        let match;

        while ((match = locRegex.exec(xmlText)) !== null) {
            urls.push(match[1]);
        }

        return urls;
    } catch (error) {
        console.error("Error parsing sitemap:", error);
        return [];
    }
}
