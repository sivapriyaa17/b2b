
import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432, // Ensure this is correct
      user: 'postgres', // your DB username
      password: 'hello@2027', // your DB password
      database: 'tenders', // your DB name
    },
    migrations: {
      directory: './migrations',
      extension: 'ts',
    },
  },
};

export default config;
