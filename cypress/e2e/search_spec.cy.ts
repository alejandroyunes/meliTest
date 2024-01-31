describe('add product', () => {
  it('passes', () => {
    cy.log('Before visiting the page')
    cy.visit('http://localhost:5173')
    cy.get('[data-testid="input"]').type('camisetas')
    cy.get('[data-testid="input-button"]').click()
    cy.wait(2000)
    cy.get('[data-testid="input-button"]').click()
    cy.get('[data-testid="product"] div:first').click()
  })
})