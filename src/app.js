const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const queries = require("../db/queries");
const { logger } = require("./lib");
const apiRoutes = require("./api-routes");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);
app.use("/api", apiRoutes);

module.exports = app;
