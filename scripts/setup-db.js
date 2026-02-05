
const { Client } = require('pg');

const dbConfig = {
    user: 'postgres',
    password: 'YoForex@101',
    host: 'localhost',
    port: 5432,
    database: 'postgres', // Connect to default DB first to create new DB
};

async function setupDatabase() {
    const client = new Client(dbConfig);

    try {
        await client.connect();
        console.log('Connected to postgres...');

        // 1. Check if flexy_db exists
        const checkDbRes = await client.query("SELECT 1 FROM pg_database WHERE datname = 'flexy_db'");
        if (checkDbRes.rowCount === 0) {
            console.log('Creating database flexy_db...');
            await client.query('CREATE DATABASE flexy_db');
            console.log('Database flexy_db created.');
        } else {
            console.log('Database flexy_db already exists.');
        }

        await client.end();

        // 2. Connect to flexy_db
        const flexyClient = new Client({
            ...dbConfig,
            database: 'flexy_db'
        });

        await flexyClient.connect();
        console.log('Connected to flexy_db...');

        // 3. Create posts table
        await flexyClient.query(`
            CREATE TABLE IF NOT EXISTS posts (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                slug VARCHAR(255) UNIQUE NOT NULL,
                excerpt TEXT,
                content TEXT,
                image_url VARCHAR(255),
                author VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('Table posts created/verified.');

        // 4. Seed Data
        const checkData = await flexyClient.query('SELECT COUNT(*) FROM posts');
        if (parseInt(checkData.rows[0].count) === 0) {
            console.log('Seeding data...');
            const posts = [
                {
                    title: "Mastering Forex: Top Strategies for 2026",
                    slug: "mastering-forex-strategies-2026",
                    excerpt: "Discover the most effective trading strategies that are dominating the market this year. Learn how to adapt to volatility and maximize returns.",
                    content: "Full content about strategies...",
                    image_url: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000&auto=format&fit=crop",
                    author: "Alex Morgan"
                },
                {
                    title: "Understanding Market Sentiment",
                    slug: "understanding-market-sentiment",
                    excerpt: "Market sentiment analysis is crucial for predicting price movements. We break down how to read the mood of the market effectively.",
                    content: "Full content about sentiment...",
                    image_url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop",
                    author: "Sarah Jenkins"
                },
                {
                    title: "Crypto vs Forex: Which is Right for You?",
                    slug: "crypto-vs-forex",
                    excerpt: "A comprehensive comparison between the volatile world of Cryptocurrency and the massive liquidity of the Forex market.",
                    content: "Full content about comparison...",
                    image_url: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1000&auto=format&fit=crop",
                    author: "Michael Chen"
                },
                {
                    title: "Risk Management 101",
                    slug: "risk-management-101",
                    excerpt: "Protect your capital with these essential risk management rules. Never trade without a plan.",
                    content: "Full content about risk...",
                    image_url: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=1000&auto=format&fit=crop",
                    author: "David Ross"
                }
            ];

            for (const post of posts) {
                await flexyClient.query(
                    'INSERT INTO posts (title, slug, excerpt, content, image_url, author) VALUES ($1, $2, $3, $4, $5, $6)',
                    [post.title, post.slug, post.excerpt, post.content, post.image_url, post.author]
                );
            }
            console.log('Seeded 4 posts.');
        } else {
            console.log('Table already has data, skipping seed.');
        }

        await flexyClient.end();
        console.log('Setup complete!');

    } catch (err) {
        console.error('Setup failed:', err);
    }
}

setupDatabase();
