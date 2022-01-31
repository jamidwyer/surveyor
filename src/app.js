import express from "express";
import bodyParser from "body-parser";
import { logger } from "./lib.js";
import apiRoutes from "./api-routes.js";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger);
app.use("/api", apiRoutes);

export default app;
