import React, { useState } from "react";

export const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleValidateClick = () => {
    const specialCharacters = ["!", "@", "#", "$", "%"];
    let msg = "Hasło jest OK";
    if (password.length > 8) {
      msg = "Hasło jest za długie max 8 znaków";
    } else if (password.length < 3) {
      msg = "Hasło jest za krótkie min 3 znaki";
    } else if (!specialCharacters.some((char) => password.includes(char))) {
      msg = "Hasło powinno zawierać jeden ze znaków specjalnych ! @ # $ %";
    }
    setMessage(msg);
  };

  
  return (
    <article>
      <p>Password validator</p>

      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <p>{message}</p>
      <button onClick={handleValidateClick}>Validate</button>
    </article>
  );
};