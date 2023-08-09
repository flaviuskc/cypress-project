import './commands'


declare global {
    namespace Cypress {
        interface Chainable {
            writeInput(selector:string, text:string): Cypress.Chainable<JQuery<HTMLElement>>
            getButton(selector:string): Cypress.Chainable<HTMLButtonElement>
        }
    }
}