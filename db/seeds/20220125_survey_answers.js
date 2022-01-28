/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("survey_answers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("survey_answers").insert([
        {
          id: 1,
          name: "Val Roe",
          email: "vroe@v.com",
          gender: "female",
          country: "Romania",
          suggestions: "More arrival documents",
          origin: "/hints",
        },
        {
          id: 2,
          name: "Roe Val",
          email: "none@none.com",
          gender: "male",
          experience: 2,
          suggestions: "Check for duplicate photos in hints",
          origin: "/hints",
        },
        {
          id: 3,
          name: "Jami",
          email: "jamidwyer@yahoo.com",
          suggestions: "hints sorted by quality",
          origin: "/hints",
        },
        {
          id: 4,
          name: "Kev",
          email: "kev@kid.com",
          age: 6,
          suggestions: "more turtles",
          origin: "/",
        },
      ]);
    });
};
