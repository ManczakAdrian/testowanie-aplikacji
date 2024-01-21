import React from "react";
import { PasswordValidator } from "./components/PasswordValidator";

export const Intro = () => {
  return (
    <>
      <article>
        <h1>Intro</h1>
        <p>Testowanie wstęp</p>
        {/* Niech przycisk wyświetla napis "you clicked me" zamiast "Click me" w chwili po kliknięciu przycisku */}
        <button>Click me</button>
      </article>
      <article>
        <input type="checkbox" name="" id="" />
        {/* Niech słowa "zaznaczony/nie zaznaczony" wyświetlają się w zależności od stanu checkboxa obok */}
        <span>Status checkboxa: zaznaczony/nie zaznaczony</span>
      </article>
      <PasswordValidator />
    </>
  );
};
