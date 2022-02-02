/**
 * @jest-environment jsdom
 */

import fs from "fs";
window.document.body.innerHTML = fs.readFileSync("./public/report.html");
const mockSurveyReport = jest.mock("../../public/survey-report.js");

describe("surveyReport", function () {
  it("should getData on init", function () {
    mockSurveyReport.getData = jest.fn();
    const { init } = jest.requireActual("../../public/survey-report.js");

    init();
    expect(surveyReport.getData).toHaveBeenCalled();
  });

  it("should calculate an average when given an array with some integers", function () {
    const testArray = [1, "2", 4, 5];
    const avg = mockSurveyReport.calculateAverage(testArray);
    expect(avg).toEqual(3);
  });
});
