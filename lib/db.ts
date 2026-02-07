
import { Pool } from 'pg';

// Use a global variable to store the pool instance in development
// prevents "too many clients" errors during hot-reloading
const globalForDb = global as unknown as { pool: Pool };

const pool = globalForDb.pool || new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

if (process.env.NODE_ENV !== 'production') globalForDb.pool = pool;

export default pool;
