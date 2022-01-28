/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, name: "Val Roe" },
        { id: 2, name: "Roe Vale" },
        { id: 3, name: "Jami" },
      ]);
    });
};
