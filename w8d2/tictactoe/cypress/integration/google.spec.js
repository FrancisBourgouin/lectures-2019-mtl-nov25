context("Google search !", () => {
  beforeEach(() => {
    cy.visit("http://google.com");
  });
  it("should type inside the search box", () => {
    cy.get('input[name="q"]')
      .type("Chicken")
      .should("have.value", "Chicken");
  });
});
