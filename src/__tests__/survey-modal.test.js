/**
 * @jest-environment jsdom
 */

import fs from "fs";
window.document.body.innerHTML = fs.readFileSync("./public/index.html");
import surveyModal from "../../public/survey-modal.js";

describe("surveyModal", function () {
  it("should exist", function () {
    expect(surveyModal.open).toBeDefined();
  });
  it("should open modal on surveyLink click", function () {
    $("#surveyLink").trigger("click");
    expect(surveyModal.close.toHaveBeenCalled());
    expect($("iframe").length).toEqual(1);
  });

  it("should close modal on close button click", function () {
    $("#surveyClose").trigger("click");
    expect(surveyModal.open.toHaveBeenCalled());
    expect($("iframe").length).toEqual(0);
  });
});
