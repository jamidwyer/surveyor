/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("survey_questions", (table) => {
    table.increments(); // this represents the primary key.
    table.string("createdDate");
    table.string("question");
    table.string("type");
    table.string("field_type");
    table.string("options");
    table.boolean("required");
    table.boolean("hidden");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
