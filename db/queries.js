import knex from "knex";
import dotenv from "dotenv";
// eslint-disable-next-line import/extensions
import connection from "./knexfile.js";
dotenv.config();

const database = knex(connection[process.env.NODE_ENV || "development"]);

const queries = {
  getSurveyQuestions() {
    return database("survey_questions").catch((err) => ({
      status: 400,
      message: "unable to get survey questions",
      err,
    }));
  },
  getSurveyAnswers() {
    return database("survey_answers").catch((err) => ({
      status: 400,
      message: "unable to get survey answers",
      err,
    }));
  },
  postSurveyAnswers(payload) {
    return database("survey_answers")
      .insert(payload)
      .then((result) => ({ status: 200, success: true, message: "ok" }))
      .catch((err) => ({
        status: 400,
        message: "unable to save response",
        err,
      }));
  },
};

export default queries;
