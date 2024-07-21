/// <reference types="cypress" />

const todos = [
  {
    title: "pouczyć się jsa",
    description: "porobić zadania z algorytmów",
  },
  {
    title: "pouczyć się reacta",
    description: "test",
  },
  {
    title: "pouczyć się cssa",
    description: "zakdować jakis design",
  },
];

describe("Todo list", { testIsolation: false }, () => {
  before(() => {
    cy.visit("http://localhost:3000/todo-list");
  });

  it("adds new todos", () => {
    todos.forEach((todo) => {
      /**
       * 1. wpisanie tytułu przy użyciu todo.title
       * 2. wpisanie des przy użyciu todo.description
       */
      cy.get("input").first().type(todo.title);
      cy.get("input").last().type(todo.description);
      cy.contains("button", "Submit").click();
    });
  });

  it("renders table based on user input", () => {
    todos.forEach((todo, index) => {
      cy.get("tbody > tr").eq(index).contains(todo.title);
      cy.get("tbody > tr").eq(index).contains(todo.description);
    });
  });
});
