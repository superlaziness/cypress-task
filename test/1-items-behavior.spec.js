import TableOfContent from '../cypress/support/page-objects/table-of-content';
import Article from '../cypress/support/page-objects/article';

let tableOfContent = new TableOfContent();
let article = new Article();

describe('1 Items behavior', () => {
    beforeEach(() => {
        cy.visit('https://www.jetbrains.com/help/idea/installation-guide.html');
    });

    it('1 Menu should be visible', () => {
        tableOfContent.menu().should('be.visible');
    });

    it('2 Selected by default parent item should show content and be expanded', () => {
        tableOfContent
            .item('Install IntelliJ IDEA')
            .should('have.class', 'toc-item--selected');

        article.header('Install IntelliJ IDEA').should('be.visible');

        tableOfContent
            .item('Run IntelliJ IDEA for the first time')
            .should('be.visible');
    });

    it('3 Parent item with content should show content and expand on click', () => {
        tableOfContent.item('Getting started').click();

        tableOfContent
            .item('Getting started')
            .should('have.class', 'toc-item--selected');

        tableOfContent
            .item('Install IntelliJ IDEA')
            .should('not.have.class', 'toc-item--selected');

        tableOfContent
            .item('Overview of the user interface')
            .should('be.visible');

        article.header('Getting started').should('be.visible');
    });

    it('4 Parent item without content should expand on click', () => {
        tableOfContent.item('Analyzing application').click();

        tableOfContent
            .item('Install IntelliJ IDEA')
            .should('have.class', 'toc-item--selected');

        tableOfContent.item('Profiling tools').should('be.visible');

        article.header('Install IntelliJ IDEA').should('be.visible');
    });

    it('5 Child item with content should show content on click', () => {
        tableOfContent.item('Run IntelliJ IDEA for the first time').click();

        tableOfContent
            .item('Run IntelliJ IDEA for the first time')
            .should('have.class', 'toc-item--selected');

        tableOfContent
            .item('Install IntelliJ IDEA')
            .should('not.have.class', 'toc-item--selected');

        article
            .header('Run IntelliJ IDEA for the first time')
            .should('be.visible');
    });

    it('6 All parents of selected item should be expanded', () => {
        // TODO: ugly, maybe move to separate describe section?
        cy.visit(
            'https://www.jetbrains.com/help/idea/share-code-with-gists.html'
        );

        tableOfContent.item('Version control').should('be.visible');
        tableOfContent.item('Git').should('be.visible');
        tableOfContent.item('GitHub').should('be.visible');
    });

    // @Manual
    it.skip('7 Item should change its background color on hover', () => {
        // Hover mouse to "Install IntelliJ IDEA" item
        // Item background should change it's color
        // Leave mouse from "Install IntelliJ IDEA" item
        // Item background should return to default state
    });

    // @Manual
    it.skip('8 Scroll should navigate to item selected out of visible area', () => {
        // Select "Run IntelliJ IDEA for the first time" item
        // Click "Check out an existing project from a version control system" link in content area
        // "Version control" item should be selected
        // Scroll should smoothly navigate to "Version control" item
    });
});
