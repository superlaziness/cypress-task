import TableOfContent from '../cypress/support/page-objects/table-of-content';
import Article from '../cypress/support/page-objects/article';

describe('3 Compact mode', () => {
    let tableOfContent = new TableOfContent();
    let article = new Article();

    beforeEach(() => {
        cy.visit('https://www.jetbrains.com/help/idea/installation-guide.html');
        cy.viewport(900, 660);
    });

    it('1 Menu button should show menu and overlay', () => {
        tableOfContent
            .container()
            .should('not.have.class', 'app__sidebar--visible');

        tableOfContent.burgerButton().click();

        tableOfContent
            .container()
            .should('have.class', 'app__sidebar--visible');

        article.overlay().should('be.visible');
    });

    it('2 Close button should hide menu and overlay', () => {
        tableOfContent.burgerButton().click();

        tableOfContent
            .container()
            .should('have.class', 'app__sidebar--visible');

        tableOfContent.burgerButton().click();

        tableOfContent
            .container()
            .should('not.have.class', 'app__sidebar--visible');

        article.overlay().should('not.be.visible');
    });

    it('3 Click outside menu should hide menu', () => {
        tableOfContent.burgerButton().click();

        tableOfContent
            .container()
            .should('have.class', 'app__sidebar--visible');

        article.overlay().click();

        tableOfContent
            .container()
            .should('not.have.class', 'app__sidebar--visible');

        article.overlay().should('not.be.visible');
    });

    it('4 Click on toc item should open content and hide menu', () => {
        tableOfContent.burgerButton().click();

        tableOfContent.item('Run IntelliJ IDEA for the first time').click();

        tableOfContent
            .container()
            .should('not.have.class', 'app__sidebar--visible');

        article.overlay().should('not.be.visible');

        article
            .header('Run IntelliJ IDEA for the first time')
            .should('be.visible');
    });

    it('5 Click on arrow should not close menu', () => {
        tableOfContent.burgerButton().click();

        tableOfContent.itemExpander('Getting started').click();

        tableOfContent
            .item('Overview of the user interface')
            .should('be.visible');

        tableOfContent
            .container()
            .should('have.class', 'app__sidebar--visible');

        article.overlay().should('be.visible');
    });

    it('6 Page navigation should be integrated into menu', () => {
        tableOfContent.burgerButton().click();

        tableOfContent.item('On this page').should('be.visible');
    });
});
