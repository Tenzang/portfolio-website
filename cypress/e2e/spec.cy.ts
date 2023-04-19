const baseURL = 'http://127.0.0.1:8000/';

describe('My First Test', () => {
    it('Finds Main Title', () => {
        cy.visit(baseURL);

        cy.contains(/loden gendun/i);

        cy.contains(/about/i).click();

        cy.url().should('include', '#about');
    });
});
