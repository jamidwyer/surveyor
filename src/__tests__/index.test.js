import appMock from "../app";
require("../index.js");

jest.mock("../app");

describe("index.js entrypoint", () => {
  it("should call app.listen", () => {
    expect(appMock.listen).toHaveBeenCalled();
  });
});
