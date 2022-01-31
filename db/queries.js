import knex from "knex";
import dotenv from "dotenv";
import connection from "./knexfile.js";
dotenv.config();

const database = knex(connection[process.env.NODE_ENV || "development"]);

const queries = {
  getSurveyQuestions() {
    return database("survey_questions");
  },
  getSurveyAnswers() {
    return database("survey_answers");
  },
  postSurveyAnswers(payload) {
    return database("survey_answers")
      .insert(payload)
      .then((result) => {
        return { status: 200, success: true, message: "ok" };
      })
      .catch((err) => {
        return { status: 400, message: "unable to save response" };
      });
  },
};

export default queries;
