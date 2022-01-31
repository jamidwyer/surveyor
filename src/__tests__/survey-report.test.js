import surveyReport from "../../public/survey-report.js";

describe("surveyReport", function () {
  it("should exist", function () {
    expect(surveyReport).toBeDefined();
  });

  it("should calculate an average when given an array with some integers", function () {
    const testArray = [1, "2", 4, 5];
    const avg = surveyReport.calculateAverage(testArray);
    expect(avg).toEqual(3);
  });
});
