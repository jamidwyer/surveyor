import express from "express";
import request from "supertest";
import apiRoutes from "../api-routes";
import { getSurveyAnswers } from "../../db/queries";
const app = express();

jest.mock("../../db/queries", () => ({
  getSurveyQuestions: jest.fn(),
  postSurveyAnswers: jest.fn(),
  getSurveyAnswers: jest.fn(),
}));

app.use("/api", apiRoutes);

describe("api-routes", () => {
  it("should load survey results", async () => {
    const response = await request(app).get("/api/survey-answers");
    console.log("test response is", response);
    expect(response).toEqual({});

    expect(response.statusCode).toBe(200);
  });

  // it("should load survey questions", async () => {
  //   const body = await request(app).get("/api/survey-questions");
  //   expect(body).toEqual({});
  //   expect(getSurveyAnswers).toHaveBeenCalledWith();
  // });

  // it("should post survey answers", async () => {
  //   const body = await request(app).post("/api/survey-answers");
  //   expect(body).toEqual({});
  //   expect(postSurveyAnswers).toHaveBeenCalledWith();
  // });
});
