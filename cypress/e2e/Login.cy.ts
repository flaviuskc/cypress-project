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
        cy.intercept('POST', 'http://localhost:3000/user/login', {
            statusCode: 201
        }).as('postLogin')
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.wait('@postLogin')
    })
    
    it('should fill correctly the inputs but with no corresponding data on DB', () => {
        cy.intercept('POST', 'http://localhost:3000/user/login', {
            statusCode: 400
        }).as('stubPost')
        cy.login('antonio', '123now')
        cy.wait('@stubPost')
    })

    it('validate login API', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/user/login',
            body: Cypress.env()
        }).then(res => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(3)
        })
    })
})