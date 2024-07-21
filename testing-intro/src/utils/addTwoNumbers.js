export const addTwoNumbers = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return "podane argumenty są nie poprawne";
  }

  return a * 1 + b * 1;
};
