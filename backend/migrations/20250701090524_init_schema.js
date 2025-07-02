/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
exports.up = function (knex) {
    return knex.schema
      .createTable('companies', table => {
        table.increments('id').primary();
        table.string('name');
        table.string('industry');
        table.text('description');
        table.string('logo_url');
      })
      .createTable('users', table => {
        table.increments('id').primary();
        table.string('email').unique().notNullable();
        table.string('password_hash').notNullable();
        table.integer('company_id').unsigned().references('companies.id').onDelete('SET NULL');
      });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('users').dropTable('companies');
  };
  
