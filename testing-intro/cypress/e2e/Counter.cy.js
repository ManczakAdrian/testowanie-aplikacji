/// <reference types="cypress" />

describe("Counter", { testIsolation: false }, () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("clicks counter link and navigates to /counter path", () => {
    cy.contains("a", "Counter").click();
    cy.url().should("include", "/counter");
  });
  // .skip - pomnięcie testu przez cypresa
  //   it.skip("counter", () => {
  it("renders counter with initial state", () => {
    cy.contains("h1", "Counter").should("be.visible");
    cy.contains("button", "+1").should("be.visible");
    cy.contains("button", "-1").should("be.visible");

    cy.get('input[type="text"]')
      .should("be.visible")
      .and("have.value", "0")
      .and("have.attr", "readOnly");

    cy.contains("button", "Save score").should("be.visible");
    cy.contains("button", "Reset counter value").should("be.visible");
    cy.contains("p", "No scores yet").should("be.visible");
  });

  it("interacts with counter", () => {
    cy.getByTestId("increaseBtn").click();
    cy.getByTestId("counterOutput").should("have.value", "1");
    cy.getByTestId("decreaseBtn").dblclick();
    cy.getByTestId("counterOutput").should("have.value", "-1");
  });

  it("saves score and renders score in the list", () => {
    cy.getByTestId("saveBtn").click();
    cy.getByTestId("emptyState").should("not.exist");
    cy.contains("li", "-1");
  });

  it("resets state", () => {
    cy.getByTestId("resetBtn").click();
    cy.getByTestId("emptyState").should("be.visible");
    cy.contains("li", "-1").should("not.exist");
    cy.getByTestId("counterOutput").should("have.value", "0");
  });
});
