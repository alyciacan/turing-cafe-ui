describe('Reservation app main page', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/reservations', [
      {
      id: 1,
      name: "Christie",
      date: "12/29",
      time: "7:00",
      number: 12
      },
      {
      id: 2,
      name: "Leta",
      date: "4/5",
      time: "7:00",
      number: 2
      },
      {
      id: 3,
      name: "Pam",
      date: "1/21",
      time: "6:00",
      number: 4
      }
  ])
    cy.visit('http://localhost:3000/')
  })
  it('has a header', () => {
    cy.contains('Turing Cafe Reservations');
  })
  it('has a form', () => {
    cy.get('.res-form').should('be.visible');
  })
  it('shows the reservations that exist in the system', () => {
    cy.get('.reservation-container > :nth-child(1)').contains('Christie')
  })
  it('should accept new reservations via the form', () => {
    cy.get('.res-form').within(($form) => {
      cy.get('input[id="name"]').type('Alycia')
      cy.get('input[id="name"]').should('have.value', 'Alycia')
      cy.get('input[id="date"]').type('2022-12-12')
      cy.get('input[id="date"]').should('have.value', '2022-12-12')
      cy.get('input[id="time"]').type('8:00')
      cy.get('input[id="time"]').should('have.value', '8:00')
      cy.get('input[id="number"]').type(2)
      cy.get('input[id="number"]').should('have.value', '02')
      cy.get('button').click()
    })
    cy.get('.reservation-container > :nth-child(1)').contains('Alycia')
  })
})