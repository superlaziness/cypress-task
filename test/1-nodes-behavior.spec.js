describe("1 Nodes behavior", () => {
  beforeEach(() => {
    cy.visit("https://www.jetbrains.com/help/idea/installation-guide.html");
  });

  it("1 Menu should be visible", () => {
    cy.get("[data-test=toc]").should("be.visible");
  });

  it("2 Selected by default parent node should be expanded", () => {});

  it("3 Parent node with content should show content and expand on click", () => {});

  it("4 Parent node without content should expand on click", () => {});

  it("5 Child node with content should show content on click", () => {});

  it("6 All parents of selected node should be expanded", () => {});

  xit("7 Node should change its background color on hover", () => {});

  xit("8 Scroll should navigate to item selected out of visible area", () => {});
});
