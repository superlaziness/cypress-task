describe('TOC tree test', () => {
  beforeEach(() => {
    cy.visit('https://www.jetbrains.com/help/idea/installation-guide.html');
  });

  it('shows TOC', () => {
    cy.get('[data-test=toc]').should('be.visible');
  });
});
