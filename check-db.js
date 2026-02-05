
const { Client } = require('pg');

const client = new Client({
    connectionString: 'postgresql://postgres:YoForex%40101@localhost:5432/postgres',
});

async function checkDb() {
    try {
        await client.connect();
        console.log('Connected to postgres database successfully');

        const res = await client.query('SELECT datname FROM pg_database WHERE datistemplate = false;');
        console.log('Available databases:');
        res.rows.forEach(row => console.log(' - ' + row.datname));

    } catch (err) {
        console.error('Error connecting to database:', err);
    } finally {
        await client.end();
    }
}

checkDb();
