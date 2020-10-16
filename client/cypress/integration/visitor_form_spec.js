describe('Visitor Form', () => {
  beforeEach(() => {
    cy.visit('/')
    window.localStorage.setItem('token', Cypress.env('token'))
  })

  const updateVisitor = (id) => {
    cy.route('POST', `http://localhost:5000/visitor/visits/${id}`).as(
      'update visitor'
    )
  }

  it('adds a visitor', () => {
    cy.get('.new-visitor').click()
    cy.get('input[type="email"]').type('foo@gmail.com')
    cy.get('#first').type('Foo')
    cy.get('#last').type('Baz')
    cy.get('#company').type('FooBaz')
    cy.get('select').select('Asia Huels')

    cy.server()
    cy.route('POST', 'http://localhost:5000/visitor').as('userSuccess')
    cy.get('form').submit()
  })

  it('displays an error if name.length < 3', () => {
    cy.get('.new-visitor').click()
    cy.get('input[type="email"]').type('foo@gmail.com')
    cy.get('#first').type('F')
    cy.get('#last').type('Baz')
    cy.get('#company').type('FooBaz')
    cy.get('select').select('Asia Huels')

    cy.server()
    cy.route('POST', 'http://localhost:5000/visitor').as('userSuccess')
    cy.get('form').submit()
    cy.get('.alert-danger').should(
      'contain',
      'Your name should be more than 3 characters.'
    )
  })

  it('updates visitor', () => {
    cy.visit('/')
    cy.server()
    cy.get('.status-btn')
      .first()
      .click()
    updateVisitor('1')
  })

  it('logs out', () => {
    cy.get('[data-name="logout-btn"]').click()
    cy.get('.modal-overlay').should('be.visible')

    cy.get('[data-name="logout-fn-btn"]')
      .wait(2500)
      .click({ force: true })
      .click({ force: true })
      .then(() => {
        const token = window.localStorage.getItem('token')
        expect(token).to.be.null
      })

    cy.url().should('match', /login/)
  })
})
