class Article {
    header(headerText) {
        return cy.contains('.article h1', headerText);
    }

    overlay() {
        return cy.get('.app__overlay');
    }
}

export default Article;
