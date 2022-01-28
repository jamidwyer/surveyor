const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 9000;
const queries = require("./queries");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`listening on port: ${port}`));

app.get("/api/survey_questions", (request, response) => {
  queries.getSurveyQuestions().then((results) => response.send(results));
});

app.post("/api/survey_answers", (req, res) => {
  let payload = req.body;
  queries.postSurveyAnswers(payload).then((results) => res.send(results));
});

app.get("/api/survey_answers", (request, response) => {
  queries.getSurveyAnswers().then((results) => response.send(results));
});
