class Home{
    validatePhotosAPI(){
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.request({
            method: 'GET',
            url: `http://localhost:3000/${Cypress.env('userName')}/photos`
        }).then(res => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('icon stock')
        })
    }
}

export default Home