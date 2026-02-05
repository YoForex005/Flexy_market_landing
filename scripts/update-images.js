
const { Client } = require('pg');

const client = new Client({
    connectionString: 'postgresql://postgres:YoForex%40101@localhost:5432/flexy_db',
});

async function updateImages() {
    try {
        await client.connect();
        console.log('Connected to flexy_db...');

        const updates = [
            {
                id: 1,
                image: "/images/candlestick-chart-3d.png"
            },
            {
                id: 2,
                image: "/images/trade-instantly.webp"
            },
            {
                id: 3,
                image: "/images/copy-trading-hero.png"
            },
            {
                id: 4,
                image: "/platform-desktop.png"
            }
        ];

        for (const update of updates) {
            await client.query('UPDATE posts SET image_url = $1 WHERE id = $2', [update.image, update.id]);
            console.log(`Updated post ${update.id}`);
        }

        console.log('All images updated to reliable placeholders.');

    } catch (err) {
        console.error('Update failed:', err);
    } finally {
        await client.end();
    }
}

updateImages();
