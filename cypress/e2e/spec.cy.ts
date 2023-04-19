const baseURL = 'http://127.0.0.1:8000/';

describe('My First Test', () => {
    beforeEach(() => {
        cy.visit(baseURL);
    });

    it('Finds Main Title', () => {
        cy.contains(/loden gendun/i);
    });

    describe('Content Skipper', () => {
        let contentSkipper;

        beforeEach(() => {
            contentSkipper = cy.get('#content-skipper');
        });

        it('is hidden at first', () => {
            contentSkipper.should('not.be.visible');
        });

        it('is revealed on focus', () => {
            contentSkipper.focus();
            contentSkipper.should('be.visible');
        });
    });

    describe('Nav Bar', () => {
        let nav;

        beforeEach(() => {
            nav = cy.get('nav');
        });

        it('can navigate user to the About section', () => {
            nav.contains(/about/i).click();
            cy.url().should('include', '#about');
        });

        it('can navigate user to the Skills section', () => {
            nav.contains(/skills/i).click();
            cy.url().should('include', '#skills');
        });

        it('can navigate user to the Projects section', () => {
            nav.contains(/projects/i).click();
            cy.url().should('include', '#projects');
        });

        it('can navigate user to the contact section', () => {
            nav.contains(/contact/i).click();
            cy.url().should('include', '#contact');
        });

        it('can open resume page', () => {
            nav.contains(/resume/i);
        });
    });
});
