import TableOfContent from '../cypress/support/page-objects/table-of-content';

describe('2 Expander control', () => {
    let tableOfContent = new TableOfContent();

    beforeEach(() => {
        cy.visit('https://www.jetbrains.com/help/idea/installation-guide.html');
    });

    it('1 Parent node should have expander control', () => {
        tableOfContent
            .itemExpander('Install IntelliJ IDEA')
            .should('be.visible');
    });

    it('2 Child node should not have expander control', () => {
        tableOfContent
            .itemExpander('Run IntelliJ IDEA for the first time')
            .should('not.be.visible');
    });

    it('3 Collapsed parent control should expand on click on expander', () => {
        tableOfContent
            .itemExpander('Getting started')
            .should('not.have.class', 'toc-icon--opened');

        tableOfContent.itemExpander('Getting started').click();

        tableOfContent
            .itemExpander('Getting started')
            .should('have.class', 'toc-icon--opened');

        tableOfContent
            .item('Overview of the user interface')
            .should('be.visible');
    });

    it('4 Expanded parent control should collapse on click on expander', () => {
        tableOfContent.itemExpander('Getting started').click();

        tableOfContent
            .itemExpander('Getting started')
            .should('have.class', 'toc-icon--opened');

        tableOfContent.itemExpander('Getting started').click();

        tableOfContent
            .itemExpander('Getting started')
            .should('not.have.class', 'toc-icon--opened');

        tableOfContent
            .item('Overview of the user interface')
            .should('not.be.visible');
    });

    it('5 Selected item should not be changed on arrow click', () => {
        tableOfContent.itemExpander('Getting started').click();

        tableOfContent
            .item('Overview of the user interface')
            .should('be.visible');

        tableOfContent
            .item('Getting started')
            .should('not.have.class', 'toc-item--selected');

        tableOfContent
            .item('Install IntelliJ IDEA')
            .should('have.class', 'toc-item--selected');
    });
});
