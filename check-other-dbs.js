
const { Client } = require('pg');

const databases = ['trading_engine', 'tradecopier_db', 'eamanage'];
const connectionStringBase = 'postgresql://postgres:YoForex%40101@localhost:5432/';

async function checkOtherDbs() {
    for (const dbName of databases) {
        console.log(`\nChecking database: ${dbName}...`);
        const client = new Client({ connectionString: connectionStringBase + dbName });

        try {
            await client.connect();
            const res = await client.query(`
                SELECT table_name 
                FROM information_schema.tables 
                WHERE table_schema = 'public'
            `);

            if (res.rows.length > 0) {
                console.log(`Tables in ${dbName}:`, res.rows.map(r => r.table_name));

                // key tables check
                const potentialTables = res.rows.filter(r =>
                    r.table_name.includes('post') ||
                    r.table_name.includes('blog') ||
                    r.table_name.includes('article') ||
                    r.table_name.includes('news')
                );

                if (potentialTables.length > 0) {
                    console.log('!!! FOUND POTENTIAL CONTENT TABLES !!!');
                    for (const t of potentialTables) {
                        const count = await client.query(`SELECT COUNT(*) FROM "${t.table_name}"`);
                        console.log(` - ${t.table_name} (${count.rows[0].count} rows)`);

                        // Show columns
                        const columns = await client.query(`
                            SELECT column_name, data_type 
                            FROM information_schema.columns 
                            WHERE table_name = '${t.table_name}'
                        `);
                        console.log(`   Columns: ${columns.rows.map(c => c.column_name).join(', ')}`);
                    }
                }
            } else {
                console.log(`Database ${dbName} is empty (public schema).`);
            }

            await client.end();
        } catch (err) {
            console.log(`Could not connect to ${dbName}: ${err.message}`);
        }
    }
}

checkOtherDbs();
