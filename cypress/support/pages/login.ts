class Login{
    failLogin(){
        cy.contains('user name is required!', { matchCase: false }).should('be.visible')
        cy.contains('password is required!', { matchCase: false }).should('be.visible')
    }

    successfullLogin(){
        cy.intercept('POST', 'http://localhost:3000/user/login', {
            statusCode: 201
        }).as('postLogin')
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.wait('@postLogin')
    }

    noDataOnDB(){
        cy.intercept('POST', 'http://localhost:3000/user/login', {
            statusCode: 400
        }).as('stubPost')
        cy.login('antonio', '123now')
        cy.wait('@stubPost')
    }

    validationAPI(){
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
    }
}

export default Login