import { logger } from "../lib.js";

console.log = jest.fn();

describe("logger", function () {
  it("should exist", function () {
    expect(logger).toBeDefined();
  });

  it("should log a well-formed request", function () {
    const req = {
      method: "GET",
      url: "/",
      body: {},
    };
    const res = { body: {} };
    const next = () => {};
    logger(req, res, next);
    expect(console.log).toHaveBeenCalled();
  });

  it("should error", function () {
    const req = {
      method: "POST",
      url: "/",
      body: {},
    };
    const res = {};
    const next = () => {};
    logger(req, res, next);
    expect(console.log).toHaveBeenCalled();
  });
});
