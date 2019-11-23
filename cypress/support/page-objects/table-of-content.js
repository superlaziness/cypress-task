class TableOfContent {
    instance() {
        return cy.get('[data-test=toc]');
    }

    item(itemText) {
        return cy.get('[data-test=toc-item]').contains(itemText);
    }
}

export default TableOfContent;
