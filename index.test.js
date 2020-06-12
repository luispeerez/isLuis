var isLuis = require("./index");

describe("Testing isLuis", function () {
  it("should return true passing Luis", function () {
    expect(isLuis("Luis")).toBeTruthy();
  });

  it("should return false passing Google", function () {
    expect(isLuis("Google")).toBeFalsy();
  });
});
