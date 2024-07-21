/// <reference types="cypress" />

const testPasswordForm = (userInput, msg) => {
  cy.get("@passwordInput").type(userInput);
  cy.get("@validateButton").click();
  cy.contains("p", msg);
};

describe("Intro", { testIsolation: false }, () => {
  // beforeEach(() => {

  // });

  before(() => {
    cy.visit("http://localhost:3000");
  });

  // after(()=>{

  // })

  // afterEach(()=>{

  // })

  it("article 1 - intro", () => {
    // cy.contains("h1", /intro/i);
    cy.contains("h1", "Intro");

    cy.get("article").first().contains("Testowanie wstęp").should("be.visible");
    // cy.get("article").last();
    // cy.get("article").eq(2);

    // cy.contains("article"); // powoduje błąd ze względu na wystąpienie 3 elementów article
    cy.contains("button", "Click me").click();
    cy.contains("button", "you clicked me").should("be.visible");
    cy.contains("button", "Click me").should("not.exist");
  });

  it("article 2 - interactions with checkbox", () => {
    // stan początkowy
    cy.contains("span", "nie zaznaczony");
    cy.get('input[type="checkbox"]').as("checkbox").should("not.be.checked");
    // interakcja
    cy.get("@checkbox").check();
    // weryfikacja reackji po zaznaczeniu checkboxa
    cy.contains("span", "zaznaczony");
    cy.get("@checkbox").should("be.checked");
    // interakcja
    cy.get("@checkbox").uncheck();
    // weryfikacja reackji po zaznaczeniu checkboxa
    cy.contains("span", "nie zaznaczony");
    cy.get("@checkbox").should("not.be.checked");
  });

  it("article 3 - password correctness", () => {
    const msgShortPassword = "Hasło jest za krótkie min 3 znaki";
    const msgCorrectPassword = "Hasło jest OK";
    const msgLongPassword = "Hasło jest za długie max 8 znaków";
    const msgSpecialCharacters =
      "Hasło powinno zawierać jeden ze znaków specjalnych ! @ # $ %";
    const messages = [
      msgCorrectPassword,
      msgLongPassword,
      msgShortPassword,
      msgSpecialCharacters,
    ];
    // initial check
    cy.contains("p", "Password validator").should("be.visible");
    cy.get('input[type="password"]').as("passwordInput").should("be.visible");
    cy.contains("button", "Validate").as("validateButton");

    messages.forEach((message) => {
      cy.contains("p", message).should("not.exist");
    });

    // interactions
    testPasswordForm("te", msgShortPassword);
    testPasswordForm("st", msgSpecialCharacters);
    testPasswordForm("testtest", msgLongPassword);
    cy.get("@passwordInput").clear();
    testPasswordForm("test@", msgCorrectPassword);
  });
});
