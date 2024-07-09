import { add } from "..";

jest.spyOn(global.console, "log");

describe("@liqtags/utils", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
