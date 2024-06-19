import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database : 'fbooking',
    password   : 'fbb3b3',
    port : 5432,
});

export default pool;
