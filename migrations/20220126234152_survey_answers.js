/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("survey_answers", (table) => {
    table.increments(); // this represents the primary key.
    table.string("name");
    table.string("email");
    table.integer("age");
    table.string("gender");
    table.string("country");
    table.string("experience");
    table.string("suggestions");
    table.string("origin");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
