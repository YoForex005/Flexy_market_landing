// scripts/test-cron.js

async function testCron() {
    const args = process.argv.slice(2);
    const isProd = args.includes('--prod');
    const domain = isProd ? 'https://flexymarkets.com' : 'http://localhost:3000';
    const url = `${domain}/api/indexnow/sync`;

    // Use the secret provided via --secret=... or default to local testing secret
    const customSecretArg = args.find(a => a.startsWith('--secret='));
    const cronSecret = customSecretArg ? customSecretArg.split('=')[1] : 'yourcronsecrethere';

    console.log(`Testing IndexNow Sync (Cron) API at ${url} using GET...`);

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${cronSecret}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log('✅ SUCCESS: Cron API responded with 200 OK');
            console.log('Response:', JSON.stringify(data, null, 2));
        } else {
            const text = await response.text();
            console.log(`❌ FAILED: Cron API responded with ${response.status}`);
            console.log('Error:', text);
        }
    } catch (error) {
        console.error('❌ ERROR: Could not connect to API');
        console.error(error);
    }

    console.log('\nTesting IndexNow Sync (Cron) API using POST and legacy header...');
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'x-cron-secret': cronSecret
            }
        });

        if (response.ok) {
            const data = await response.json();
            console.log('✅ SUCCESS: legacy header POST responded with 200 OK');
        } else {
            console.log(`❌ FAILED: legacy header POST responded with ${response.status}`);
        }
    } catch (error) {
        console.error('❌ ERROR: Could not connect to API');
    }
}

testCron();
