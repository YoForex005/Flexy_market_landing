
import { Pool } from 'pg';

// Use a global variable to store the pool instance in development
// prevents "too many clients" errors during hot-reloading
const globalForDb = global as unknown as { pool: Pool };

const pool = globalForDb.pool || new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    // Connection timeout settings to prevent hanging on production
    connectionTimeoutMillis: 5000, // 5 seconds to connect
    idleTimeoutMillis: 30000, // Close idle connections after 30s
    query_timeout: 15000, // 15 seconds max query time
    statement_timeout: 15000, // 15 seconds max statement time
    max: 5, // Limit pool size to prevent connection flooding
});

if (process.env.NODE_ENV !== 'production') globalForDb.pool = pool;

export default pool;
