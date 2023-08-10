import Home from 'cypress/support/pages/home'

const home = new Home()

describe('homepage of the application', () => {
    before(() => {
        cy.visit('/')
    })
    
    it('API should return users photos', () => {
        home.validatePhotosAPI()
    })
})