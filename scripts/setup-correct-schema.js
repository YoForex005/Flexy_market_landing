
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgresql://postgres:YoForex%40101@localhost:5432/flexy_db',
    ssl: false
});

async function migrate() {
    console.log('Starting migration for flexy_db...');
    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        // 1. Create admins table
        console.log('Creating table: admins');
        await client.query(`
            CREATE TABLE IF NOT EXISTS admins (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255),
                email VARCHAR(255) UNIQUE,
                username VARCHAR(255),
                phone VARCHAR(50),
                password VARCHAR(255),
                role VARCHAR(50),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                profile_pic VARCHAR(255)
            );
        `);

        // Insert sample admin data from user JSON
        await client.query(`
            INSERT INTO admins (id, name, email, username, phone, password, role, created_at, profile_pic)
            VALUES 
            (1, 'Abhishek', 'admin@flexymarkets.com', 'admin', '1234567890', '$2y$10$gg6yZYeVNhYJr2LLfCw1eedzK9j5qW4ikob1t/UII9WxbCSGdcAKa', 'admin', '2025-03-03 12:55:19', '../uploads/profile_67c5ae9ee188d.png'),
            (5, 'Payel', 'payel@flexymarkets.com', 'payel', '9876543210', '$2y$10$ECeib1MPlJzGlBY5IDDxOenzhqv/voGYE0lAfuAKFbrcKXcgF5Md6', 'admin', '2025-03-05 13:15:20', '../uploads/profile.jpg'),
            (6, 'Sayan', 'sayan@flexymarkets.com', 'sayan', '9876543211', '$2y$10$1KU5nWpe1kIfBAdZWTGXLejZKhxPerBZlUxoJOthvgMiNCSxhQ/oC', 'editor', '2025-03-05 13:15:20', '../uploads/profile.jpg')
            ON CONFLICT (id) DO NOTHING;
        `);

        // 2. Create blogs table (matching user schema)
        console.log('Creating table: blogs');
        await client.query(`
            CREATE TABLE IF NOT EXISTS blogs (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255),
                slug VARCHAR(255),
                seo_slug VARCHAR(255),
                status VARCHAR(50) DEFAULT 'published',
                views VARCHAR(50),
                created_at TIMESTAMP,
                updated_at TIMESTAMP,
                content TEXT,
                author VARCHAR(100),
                featured_image VARCHAR(255),
                tags TEXT,
                category_id VARCHAR(50),
                download_link VARCHAR(255)
            );
        `);

        // Insert the sample blog post from user JSON
        const sampleContent = `<p>Sample content for auto-trading blog...</p>`; // abbreviated for script
        await client.query(`
            INSERT INTO blogs (id, title, slug, seo_slug, status, views, created_at, updated_at, content, author, featured_image, tags)
            VALUES 
            (66, 'The Scent of Success Understanding Auto-Trading and EA Trading Systems', '', '', 'published', '245', '2025-03-06 12:38:27', '2025-03-06 12:38:27', $1, 'Swarnalata', 'img_67c99743c587f8.51261861.png', 'Auto Trading,EA Trading,Forex Trading')
            ON CONFLICT (id) DO NOTHING;
        `, [sampleContent]);

        // Fix sequence to avoid collision with id=66
        await client.query("SELECT setval('blogs_id_seq', (SELECT MAX(id) FROM blogs));");

        // 3. Generate dummy posts to simulate "350+" records if less than 10 exist
        const countRes = await client.query('SELECT COUNT(*) FROM blogs');
        const count = parseInt(countRes.rows[0].count);

        if (count < 350) {
            console.log(`Generating dummy posts to reach 350+ (current: ${count})...`);
            // Generate simple series
            await client.query(`
                INSERT INTO blogs (title, slug, status, views, created_at, updated_at, content, author, featured_image, tags)
                SELECT 
                    'Market Analysis Post ' || generate_series,
                    'market-analysis-' || generate_series,
                    'published',
                    floor(random() * 1000)::text,
                    NOW() - (generate_series || ' days')::interval,
                    NOW(),
                    '<p>Generated content for testing pagination.</p>',
                    'Flexy Team',
                    '/images/candlestick-chart-3d.png',
                    'Market,Analysis'
                FROM generate_series(${count + 1}, 355);
            `);
        }

        await client.query('COMMIT');
        console.log('Migration complete. Tables created and populated.');

    } catch (err) {
        await client.query('ROLLBACK');
        console.error('Migration failed:', err);
    } finally {
        client.release();
        await pool.end();
    }
}

migrate();
