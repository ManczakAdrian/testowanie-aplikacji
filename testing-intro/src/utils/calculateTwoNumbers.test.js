import { calculateTwoNumbers } from "./calculateTwoNumbers";

describe("calculate two numbers feature", () => {
  test("calculateTwoNumbers with correct input", () => {
    const result1 = calculateTwoNumbers(10, 10, "+");
    const result2 = calculateTwoNumbers(10, 5, "-");
    const result3 = calculateTwoNumbers(10, 2, "*");
    const result4 = calculateTwoNumbers(10, 2, "/");

    expect(result1).toBe(20);
    expect(result2).toBe(5);
    expect(result3).toBe(20);
    expect(result4).toBe(5);
  });

  it("returns error message on invalid operator", () => {
    const expectedResult = "Błędny operator";
    const result1 = calculateTwoNumbers(10, 10);
    const result2 = calculateTwoNumbers(10, 5, "test");
    const result3 = calculateTwoNumbers(10, 2, null);

    expect(result1).toBe(expectedResult);
    expect(result2).toBe(expectedResult);
    expect(result3).toBe(expectedResult);
  });

  it("throws error on invalid numbers", () => {
    expect(() => calculateTwoNumbers("test", "test", "+")).toThrow();
    expect(() => calculateTwoNumbers("test", 12, "+")).toThrow();
    expect(() => calculateTwoNumbers(12, "test", "/")).toThrow();
    expect(() => calculateTwoNumbers(null, true, "-")).toThrow();
  });

  it("returns error msg on dividing by 0", () => {
    const result = calculateTwoNumbers(10, 0, "/");

    expect(result).toBe("Hej nie dziel przez zero co Ty sobie myślisz");
  });
});
