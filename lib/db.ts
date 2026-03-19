
import { Pool } from 'pg';

// Use a global variable to store the pool instance in development
// prevents "too many clients" errors during hot-reloading
const globalForDb = global as unknown as { pool: Pool };

/**
 * Lazily create and return the database pool.
 * This avoids crashing at import time during `next build`
 * when DATABASE_URL is not available in the build environment.
 */
function getPool(): Pool {
    if (globalForDb.pool) return globalForDb.pool;

    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
        throw new Error('DATABASE_URL is not defined in environment variables');
    }

    const pool = new Pool({
        connectionString,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
        connectionTimeoutMillis: 5000,
        idleTimeoutMillis: 30000,
        query_timeout: 15000,
        statement_timeout: 15000,
        max: 5,
    });

    globalForDb.pool = pool;
    return pool;
}

// Default export: a Proxy that forwards all property access / method calls
// to the lazily-initialised pool, so every existing `import pool from './db'`
// continues to work without changes.
const lazyPool = new Proxy({} as Pool, {
    get(_target, prop, receiver) {
        const pool = getPool();
        const value = Reflect.get(pool, prop, receiver);
        return typeof value === 'function' ? value.bind(pool) : value;
    },
});

export { getPool };
export default lazyPool;

