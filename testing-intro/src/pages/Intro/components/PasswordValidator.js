import React, { useState } from "react";
import { validatePassword } from "../utils/validatePassword";

export const PasswordValidator = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleValidateClick = () => {
    const msg = validatePassword(password);
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
