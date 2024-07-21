/**
 * Napisz funckje która przyjmie 3 parametery
 * pierwsze 2 parametry będą liczbami które chcemy przeliczyć na podstawie 3 parametru
 * który będzie znakiem: + - / *
 * niech funckja calculateTwoNumbers wykorzysta istniejące funckje liczące
 * tj.
 * addTwoNumbers
 * subtractTwoNumbers
 * multiplyTwoNumbers
 * divideTwoNumbers
 *
 *
 *
 * 1) nie dzielimy przez 0 - niech funcja zwraca stosowny komunikat
 * 2) brak podanego znaku
 * 3) brak podanego znaku i liczb
 * 4) złe parametry
 */

export const calculateTwoNumbers = (number1, number2, operation) => {
  const allowedOperations = ["+", "-", "/", "*"];

  if (!allowedOperations.includes(operation)) {
    return "Błędny operator";
  }

  if (isNaN(parseInt(number1)) || isNaN(parseInt(number2))) {
    throw new Error("Nie poprawne liczby");
  }

  if (operation === "/" && number2 * 1 === 0) {
    return "Hej nie dziel przez zero co Ty sobie myślisz";
  }

  if (operation === "+") return number1 * 1 + number2 * 1;
  if (operation === "-") return number1 - number2;
  if (operation === "*") return number1 * number2;

  return number1 / number2;
};
