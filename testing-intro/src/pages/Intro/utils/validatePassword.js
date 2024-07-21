export const validatePassword = (password) => {
  const specialCharacters = ["!", "@", "#", "$", "%"];
  let msg = "Hasło jest OK";
  if (password.length > 8) {
    msg = "Hasło jest za długie max 8 znaków";
  } else if (password.length < 3) {
    msg = "Hasło jest za krótkie min 3 znaki";
  } else if (!specialCharacters.some((char) => password.includes(char))) {
    msg = "Hasło powinno zawierać jeden ze znaków specjalnych ! @ # $ %";
  }

  return msg;
};
