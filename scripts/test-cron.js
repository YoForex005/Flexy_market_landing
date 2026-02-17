// scripts/test-cron.js

async function testCron() {
    const url = 'http://localhost:3000/api/indexnow/sync';
    // Use the CRON_SECRET found in .env (yourcronsecrethere)
    const cronSecret = 'yourcronsecrethere';

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
