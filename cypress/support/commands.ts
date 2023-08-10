/// <reference types="cypress" />

Cypress.Commands.add('writeInput', (selector, text) => {
    cy.get(`[data-test=${selector}]`).type(text)
})

Cypress.Commands.add('getButton', selector => {
    cy.get(`[data-test="${selector}"]`).click()
})

Cypress.Commands.add('login', (user,password) => {
    cy.writeInput('loginUserName', user)
    cy.writeInput('loginPassword', password)
    cy.getButton('loginBtn')
})