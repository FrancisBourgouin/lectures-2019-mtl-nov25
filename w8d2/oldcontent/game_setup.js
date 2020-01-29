context("Game setup", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  //Make sure input works
  describe("Make sure name inputs works", () => {
    it("Types and keep value for player 1", () => {
      cy.get("#player1_input")
        .type("Johnny Boy")
        .should("have.value", "Johnny Boy");
    });
    it("Types and keep value for player 2", () => {
      cy.get("#player2_input")
        .type("Surgy Girl")
        .should("have.value", "Surgy Girl");
    });
  });
  //Clicking on start should show the grid, when inputs are filled (valid)
  describe("Clicking on start should show the grid", () => {
    it("should show the grid if input are valid", () => {
      cy.get("#player1_input").type("Johnny Boy");

      cy.get("#player2_input").type("Surgy Girl");

      cy.get("#start").click();

      cy.get("#grid").should("be.visible");
    });
    it("should not show the grid if input are invalid", () => {
      cy.visit("/");

      cy.get("#start").click();

      cy.get("#grid").should("not.be.visible");
    });
  });
  //Player name alternates between the two players on each click
  describe("Player name alternates between the two players on each click", () => {
    it("Should show the name of player one after clicking on start", () => {
      cy.get("#player1_input").type("Johnny Boy");

      cy.get("#player2_input").type("Surgy Girl");

      cy.get("#start").click();

      cy.get("h2").should("have.text", "Johnny Boy");
    });
    it("Should show the name of a player after each click on a button", () => {
      cy.get("#player1_input").type("Johnny Boy");

      cy.get("#player2_input").type("Surgy Girl");

      cy.get("#start").click();

      cy.get("h2").should("have.text", "Johnny Boy");

      cy.get("#grid button:first-of-type").click();

      cy.get("h2").should("have.text", "Surgy Girl");
    });

    it("Should show the name of a player after each click on a button but fancy", () => {
      cy.get("#player1_input").type("Johnny Boy");

      cy.get("#player2_input").type("Surgy Girl");

      cy.get("#start").click();

      cy.get("h2").should("have.text", "Johnny Boy");

      cy.get("#grid").click("topLeft");

      cy.get("h2").should("have.text", "Surgy Girl");

      cy.get("#grid").click("center");

      cy.get("h2").should("have.text", "Johnny Boy");
    });
  });

  //Clicking on boxes should alternate between X and O
});
