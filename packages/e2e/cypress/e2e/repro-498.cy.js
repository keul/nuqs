/// <reference types="cypress" />

if (
  Cypress.env('windowHistorySupport') !== 'true' &&
  Cypress.env('nextJsVersion') !== '14.1.0' // See issue #498
) {
  it('Reproduction for issue #498', () => {
    cy.config('retries', 0)
    cy.visit('/app/repro-498')
    cy.contains('#hydration-marker', 'hydrated').should('be.hidden')
    cy.get('#start').click()
    cy.location('hash').should('eq', '#section')
    cy.get('button').click()
    cy.location('search').should('eq', '?q=test')
    cy.location('hash').should('eq', '#section')
  })
}
