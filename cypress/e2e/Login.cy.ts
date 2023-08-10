import Login from 'cypress/support/pages/login'

const login = new Login()

describe('login page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should not be able to login', () => {
        login.failLogin()
    })

    it('should login correctly', () => {
        login.successfullLogin()
    })
    
    it('should fill correctly the inputs but with no corresponding data on DB', () => {
        login.noDataOnDB()
    })

    it('validate login API', () => {
       login.validationAPI()
    })
})