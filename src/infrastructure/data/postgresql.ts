import { Client, QueryResult } from 'pg';
import { Pool } from 'pg';
require('dotenv').config()

console.log("DB conecting....................")
const PostgresDB = new Pool({
  host: process.env.DB_PG_HOST,
  port: 5432,
  user: process.env.DB_PG_USER,
  password: process.env.DB_PG_PASSWORD,
  database: process.env.DB_PG_NAME
});


export { PostgresDB }