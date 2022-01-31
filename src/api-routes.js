const { Router } = require("express");
const queries = require("../db/queries");

const router = new Router();
router.get("/survey_questions", (req, res) => {
  queries.getSurveyQuestions().then((results) => res.send(results));
});

router.post("/survey_answers", (req, res) => {
  let payload = req.body;
  queries.postSurveyAnswers(payload).then((results) => res.send(results));
});

router.get("/survey_answers", (req, res) => {
  queries.getSurveyAnswers().then((results) => res.send(results));
});

module.exports = router;
