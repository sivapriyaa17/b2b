
  import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('companies', (table: Knex.TableBuilder) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('industry').notNullable();
    table.string('services').notNullable();
    table.string('location').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.string('logo_url');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('companies');
}
