/// <reference types="cypress" />

Cypress.Commands.add('writeInput', (selector, text) => {
    cy.get(`[data-test=${selector}]`).type(text)
})

Cypress.Commands.add('getButton', selector => {
    cy.get(`[data-test="${selector}"]`).click()
})