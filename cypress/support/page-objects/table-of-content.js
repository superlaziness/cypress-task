class TableOfContent {
    menu() {
        return cy.get('[data-test=toc]');
    }

    container() {
        return cy.get('.layout .app__sidebar');
    }

    burgerButton() {
        return cy.get('[data-test="header-hamburger"]');
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
