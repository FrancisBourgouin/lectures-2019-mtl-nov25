context("Game preparation", () => {
  beforeEach(() => {
    cy.visit("http://wasteful-addition.surge.sh");
  });

  it("can type in the player 1 input", () => {
    cy.get("#player1_input")
      .type("Chicken")
      .should("have.value", "Chicken");
  });
  it("can type in the player 2 input", () => {
    cy.get("#player2_input")
      .type("Bob")
      .should("have.value", "Bob");
  });
  it("Can start the game once player1 and player2 entered their names", () => {
    cy.get("#player1_input")
      .type("Chicken")
      .should("have.value", "Chicken");

    cy.get("#player2_input")
      .type("Bob")
      .should("have.value", "Bob");

    cy.get("button#start").click();
    cy.get("#grid").should("be.visible");
  });
  it("wont start the game if a name is missing", () => {
    cy.get("button#start").click();
    cy.get("#grid").should("not.be.visible");
  });
});

context("Winning conditions", () => {
  beforeEach(() => {
    cy.visit("http://wasteful-addition.surge.sh");

    cy.get("#player1_input")
      .type("Pollo")
      .should("have.value", "Pollo");

    cy.get("#player2_input")
      .type("Roberto")
      .should("have.value", "Roberto");

    cy.get("button#start").click();
  });

  it("should show the player 1 name if it wins", () => {
    cy.get("#0").click();
    cy.get("#6").click();
    cy.get("#1").click();
    cy.get("#7").click();
    cy.get("#2").click();

    cy.get("p#result").should("contain.text", "Pollo");
  });

  it("should show the player 2 name if it wins", () => {
    cy.get("#0").click();
    cy.get("#6").click();
    cy.get("#1").click();
    cy.get("#7").click();
    cy.get("#3").click();
    cy.get("#8").click();

    cy.get("p#result").should("contain.text", "Roberto");
  });
});
