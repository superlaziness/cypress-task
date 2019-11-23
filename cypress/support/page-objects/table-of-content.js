class TableOfContent {
    instance() {
        return cy.get('[data-test=toc]');
    }

    item(itemText) {
        return cy.get('[data-test=toc-item]').contains(itemText);
    }

    itemExpander(itemText) {
        return cy
            .get('[data-test=toc-item]')
            .contains(itemText)
            .find('[data-test=toc-expander]');
    }
}

export default TableOfContent;
