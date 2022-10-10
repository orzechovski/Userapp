describe('UserApp', () => {
  beforeEach(function () {
    cy.visit('http://127.0.0.1:5173/')
  })

  describe('navigation', function () {
    it('navigaton can be made beetwen routes', function () {
      cy.get('.nav__buttons__addusers').click()
      cy.url().should('include', 'adduser')
      cy.url().should('eq', 'http://127.0.0.1:5173/adduser')

      cy.get('.nav__buttons__showusers').click()
      cy.url().should('eq', 'http://127.0.0.1:5173/')
    })
  })

  describe('user page', function () {
    it('user page can opened', function () {
      cy.get('.link__show').first().click()
      cy.url().should('eq', 'http://127.0.0.1:5173/5')
    })

    it('user can be edited from user page', function () {
      cy.get('.link__show').first().click()
      cy.get('.btn-edit').click()
      cy.get('.modal__form__section > label> input').first().type(' anythink')
      cy.get('.modal__buttons__section > button[type=submit]').first().click()
      cy.get('.user__view__personal  h5').first().should('contain', 'Chelsey Dietrich anythink')
    })
  })
})

//should be much more test but deadline won't let me do it
