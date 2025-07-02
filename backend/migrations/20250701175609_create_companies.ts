import { Knex } from "knex";








export async function up(knex) {
    return knex.schema.createTable('companies', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('industry').notNullable();
      table.string('services').notNullable();
      table.string('logo').nullable(); // If storing logo URL or filename
      table.timestamps(true, true); // created_at and updated_at
    });
  }
  
  export async function down(knex) {
    return knex.schema.dropTable('companies');
  }
  