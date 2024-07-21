import { addTwoNumbers } from "./addTwoNumbers";

// addTwoNumbers(10,10); // 20

test("addTwoNumbers with correct string arguments", () => {
  const result = addTwoNumbers("10", "10");
  expect(result).toBe(20);
});

test("addTwoNumbers with correct number arguments", () => {
  const result = addTwoNumbers(10, 10);
  expect(result).toBe(20);
});

test("addTwoNumbers with incorrect string arguments", () => {
  const result = addTwoNumbers("hej", "kup se klej");
  expect(result).toBe("podane argumenty są nie poprawne");
});

// TDD
