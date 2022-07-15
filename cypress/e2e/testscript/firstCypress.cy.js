/// <reference types="cypress" />

describe("OrangeHRM Test Suite", function () {
  it("Verify URL", function () {
    cy.visit("/");

    cy.url().should("include", "orangehrmlive.com");

    cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/");
  });

  it("Verify Title", function () {
    cy.visit("/");

    cy.title().should("include", "HRM");

    cy.title().should("eq", "OrangeHRM");
  });

  it("Login and Logout", function () {
    cy.visit("/");

    cy.get("input#txtUsername").type("Admin").should("have.value", "Admin");

    cy.get("input[name=txtPassword")
      .type("admin123")
      .should("have.value", "admin123");

    cy.get(".button").click();

    cy.get("a#welcome").click();

    //cy.get("a[href='/index.php/auth/logout']").click();
    cy.get("#welcome-menu > :nth-child(1) > :nth-child(3) > a").click();

    cy.title().should("eq", "OrangeHRM");
  });
});
