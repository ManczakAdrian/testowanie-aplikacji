import React, { useState } from "react";
import { PasswordValidator } from "./components/PasswordValidator";

export const Intro = () => {
  const [btnLabel, setBtnLabel] = useState("Click me");
  const [isChecked, setisChecked] = useState(false);

  const handleCheckboxChange = () => {
    setisChecked(!isChecked);
  };

  let label = "nie zaznaczony";

  if (isChecked) {
    label = "zaznaczony";
  }

  return (
    <>
      <article>
        <h1>Intro</h1>
        <p>Testowanie wstęp</p>
        {/* Niech przycisk wyświetla napis "you clicked me" zamiast "Click me" w chwili po kliknięciu przycisku */}
        <button
          onClick={() => {
            setBtnLabel("you clicked me");
          }}
        >
          {btnLabel}
        </button>
      </article>
      <article>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          name=""
          id=""
        />
        {/* Niech słowa "zaznaczony/nie zaznaczony" wyświetlają się w zależności od stanu checkboxa obok */}
        <span>{label}</span>
      </article>
      <PasswordValidator />
    </>
  );
};
