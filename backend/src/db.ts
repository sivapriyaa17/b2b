

import knex from 'knex';
import knexConfig from '../knexfile';

const environment = process.env.NODE_ENV || 'development';
const config = knexConfig[environment];

if (!config) {
  throw new Error(`Knex config for environment "${environment}" is missing`);
}

const db = knex(config);
export default db;
