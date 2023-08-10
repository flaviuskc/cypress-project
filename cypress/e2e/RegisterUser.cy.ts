import RegisterNewUser from 'cypress/support/pages/registration'

const users = require('../fixtures/users')
const registerNewUserTest = new RegisterNewUser()

describe('register user page', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="register"]').click()
  })

  users.forEach(user => {
    it('should visit register page and create a new user successfully', () => {
      cy.writeInput('email', user.email)
      cy.writeInput('fullName', user.fullName)
      cy.writeInput('registerUserName', user.userName)
      cy.writeInput('registerPassword', user.password)
      cy.getButton('btnRegister')
    })
  })

  it('should visit register page and create a new user successfully', () => {
    registerNewUserTest.registerCorrectly()
  })

  it('should visit register page and type incorrectly data at inputs', () => {
    registerNewUserTest.registerIncorrectly()
  })
})