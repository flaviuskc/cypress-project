import CommonUtilities from './utils'

class RegisterNewUserTest {
  private data: {
    email: string,
    name: string,
    user: string,
    password: string
  }

  constructor(){
    this.data = require('../fixtures/fakeData.json')
  }

  registerCorrectly(){
    cy.writeInput('email', this.data.email)
    cy.writeInput('fullName', this.data.name)
    cy.writeInput('registerUserName', this.data.user)
    cy.writeInput('registerPassword', this.data.password)
    cy.getButton('btnRegister')
  }

  registerIncorrectly(){
    cy.getButton('btnRegister')
    cy.getButton('btnRegister')
    cy.contains('Email is required!').should('be.visible')
    cy.contains('Full name is required!').should('be.visible')
    cy.contains('User name is required!').should('be.visible')
    cy.contains('Password is required!').should('be.visible')
  }
}

const commonUtilities = new CommonUtilities()
const registerNewUserTest = new RegisterNewUserTest()

describe('register user page', () => {
  beforeEach(() => {
    commonUtilities.visitPage()
    cy.get('[data-test="register"]').click()
  })
  it('should visit register page and create a new user successfully', () => {
    registerNewUserTest.registerCorrectly()
  })
  it('should visit register page and type incorrectly data for inputs', () => {
    registerNewUserTest.registerIncorrectly()
  })
})