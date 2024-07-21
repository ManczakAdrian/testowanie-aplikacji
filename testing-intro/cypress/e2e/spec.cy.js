/// <reference types="cypress" />

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

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
});
