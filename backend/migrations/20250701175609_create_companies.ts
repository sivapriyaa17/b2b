
  import { Knex } from 'knex';



export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('companies');
}


export async function up(knex: any) {
  const exists = await knex.schema.hasTable('companies');
  if (!exists) {
    return knex.schema.createTable('companies', (table: any) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('industry').notNullable();
      table.string('services').notNullable();
      table.string('location').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('logo_url');
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
  }
}
