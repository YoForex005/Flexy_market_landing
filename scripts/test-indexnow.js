// scripts/test-indexnow.js

async function testIndexNow() {
    const url = 'http://localhost:3000/api/indexnow/submit';
    // Use the key found in .env (yoursecretkeyhere) for local testing
    const apiKey = 'yoursecretkeyhere';

    const payload = {
        url: 'https://flexymarkets.com/test-verification-script'
    };

    console.log(`Testing IndexNow API at ${url}...`);

    if (!global.fetch) {
        console.error("❌ ERROR: Native fetch is not available. Please use Node.js 18+");
        process.exit(1);
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const data = await response.json();
            console.log('✅ SUCCESS: API responded with 200 OK');
            console.log('Response:', JSON.stringify(data, null, 2));
        } else {
            const text = await response.text();
            console.log(`❌ FAILED: API responded with ${response.status}`);
            console.log('Error:', text);
        }
    } catch (error) {
        console.error('❌ ERROR: Could not connect to API');
        console.error(error);
    }
}

testIndexNow();
