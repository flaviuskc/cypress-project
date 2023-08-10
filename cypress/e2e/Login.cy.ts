describe('login page', () => {
    before(() => {
        cy.fixture('fakeData').then(data => {
            this.data = data
        })
    })
    beforeEach(() => {
        cy.visit('/')
    })
    it('should not be able to login', () => {
        cy.contains('user name is required!', { matchCase: false }).should('be.visible')
        cy.contains('password is required!', { matchCase: false }).should('be.visible')
    })
    it('should login correctly', () => {
        cy.login(this.data.user, this.data.password)
        cy.url().should('contain', `/user/${this.data.user}`)
    })
    it('should fill correctly the inputs but with no corresponding data on DB', () => {
        cy.intercept('POST', 'http://localhost:3000/user/login', {
            statusCode: 400
        }).as('stubPost')
        cy.login('antonio', '123now')
        cy.wait('@stubPost')
    })
})