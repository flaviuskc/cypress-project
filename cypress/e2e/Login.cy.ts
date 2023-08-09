import CommonUtilities from './utils';

const commonUtilities = new CommonUtilities()

describe('login page', () => {
    before(() => {
        cy.fixture('fakeData').then(data => {
            this.data = data
        })
    })
    beforeEach(() => {
        commonUtilities.visitPage()
    })
    it('should login correctly', () => {
        cy.writeInput('email', this.data.email)
    })
})