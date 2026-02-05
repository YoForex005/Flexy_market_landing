
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false
});

async function testConnection() {
    console.log('Testing connection to flexy_db...');
    try {
        const client = await pool.connect();

        // Check featured_image values
        const res = await client.query('SELECT id, title, featured_image FROM blogs ORDER BY id DESC LIMIT 5');
        console.log('Latest 5 posts images:');
        res.rows.forEach(row => {
            console.log(`ID ${row.id}: ${row.featured_image}`);
        });

        const fs = require('fs');
        const path = require('path');
        const testImage = 'img_67c99743c587f8.51261861.png'; // from user JSON

        // Search for this image in public folder recursively
        function findFile(dir, filename) {
            const files = fs.readdirSync(dir);
            for (const file of files) {
                const fullPath = path.join(dir, file);
                const stat = fs.statSync(fullPath);
                if (stat.isDirectory()) {
                    const found = findFile(fullPath, filename);
                    if (found) return found;
                } else if (file === filename) {
                    return fullPath;
                }
            }
            return null;
        }

        const foundPath = findFile(path.join(__dirname, '../public'), testImage);
        console.log(`Image ${testImage} found at:`, foundPath || 'NOT FOUND');
    } catch (err) {
        console.error('CONNECTION ERROR:', err);
    } finally {
        await pool.end();
    }
}

testConnection();
