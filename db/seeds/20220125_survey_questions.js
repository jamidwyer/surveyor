/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("survey_questions")
    .del()
    .then(function () {
      return knex("survey_questions").insert([
        { id: 1, question: "Name", required: true, type: "text" },
        { id: 2, question: "Email", required: true, type: "text" },
        { id: 3, question: "Age", type: "integer" },
        { id: 4, question: "Gender", type: "text", field_type: "radio" },
        {
          id: 5,
          question: "Country",
          type: "array",
          field_type: "dropdown",
          options: "United States, Mexico, Canada",
        },
        {
          id: 6,
          question: "Experience Level",
          type: "integer",
          field_type: "radio",
          options: "1, 2, 3, 4, 5",
        },
        {
          id: 7,
          question: "Suggested Improvements",
          type: "text",
          field_type: "textarea",
        },
        {
          id: 8,
          question: "Origin Page",
          type: "text",
          hidden: true,
        },
      ]);
    });
};
