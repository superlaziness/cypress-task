describe('4 External navigation', () => {
    beforeEach(() => {
        cy.visit('https://www.jetbrains.com/help/idea/installation-guide.html');
    });

    it('1 Next article link should lead to next page regardless of menu hierarchy', () => {});

    it('2 Previous article link should lead to previous page regardless of menu hierarchy', () => {});

    it('3 Browser Previous button should navigate to previous page', () => {});

    it('4 Browser Next button should navigate to next page', () => {});
});
