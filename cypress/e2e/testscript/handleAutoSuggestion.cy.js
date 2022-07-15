describe("Handle Auto Suggestion", () => {
  it("Select value from google auto suggestion", () => {
    cy.visit("https://www.google.com/");

    cy.get("input[name='q']").type("data structures");
    cy.wait(4000);

    cy.get("div[role='option']").each(function ($ele, index, $list) {
      cy.log($ele.text());
      if ($ele.text() === "data structures in python") {
        cy.log("Found!!!");
        cy.wrap($ele).click();
      } else {
        cy.log($ele.text());
      }
    });
  });
});
