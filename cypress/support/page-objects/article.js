class Article {
    header(headerText) {
        return cy.contains('.article h1', headerText);
    }
}

export default Article;
