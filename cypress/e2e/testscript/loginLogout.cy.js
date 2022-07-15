/// <reference types="cypress-xpath" />

describe("OrangeHRM Login Logout Suite", function () {
  it("Login and Logout", function () {
    cy.visit("/");

    cy.xpath("//input[@id='txtUsername']")
      .type("Admin")
      .should("have.value", "Admin");

    cy.xpath("//input[@name='txtPassword']")
      .type("admin123")
      .should("have.value", "admin123");

    cy.xpath("//input[@id='btnLogin']").click();

    cy.xpath("//a[contains(text(),'Welcome ')]").click();

    cy.xpath("//a[contains(text(),'Logout')]").click();

    cy.title().should("eq", "OrangeHRM");
  });
});
