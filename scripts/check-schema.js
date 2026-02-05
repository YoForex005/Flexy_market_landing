
const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: false
});

async function checkSchema() {
    console.log('Checking blogs table schema...');
    try {
        const client = await pool.connect();
        const res = await client.query(`
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'blogs';
        `);
        console.log('Columns in blogs table:');
        res.rows.forEach(row => {
            console.log(`- ${row.column_name} (${row.data_type})`);
        });
    } catch (err) {
        console.error('ERROR:', err);
    } finally {
        await pool.end();
    }
}

checkSchema();
