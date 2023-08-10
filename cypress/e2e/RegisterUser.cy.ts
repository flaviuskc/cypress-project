class RegisterNewUserTest {
  private data: {
    email: string,
    name: string,
    user: string,
    password: string
  }

  constructor(){
    this.data = require('../fixtures/fakeData')
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

const users = require('../fixtures/users')
const registerNewUserTest = new RegisterNewUserTest()

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

  it('should visit register page and type incorrectly data for inputs', () => {
    registerNewUserTest.registerIncorrectly()
  })
})