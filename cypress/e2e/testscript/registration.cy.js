describe("Fill all the details", () => {
  it("Complete Registration", () => {
    cy.viewport(1920, 1080);
    cy.visit(
      "http://seleniumpractise.blogspot.com/2022/02/sample-registration-form.html"
    );
    cy.get("#fname").type("Cypress");
    cy.get("select[name='city']")
      .select("Bhopal")
      .find(":selected")
      .contains("Bhopal");

    cy.get("select[name='Hobbies']").select(["Dance", "Singing"]);

    //cy.get("input[type='checkbox']").check({ force: true });
    cy.get("input[type='checkbox']").first().check().should("be.checked");
  });
});
