const _ = Cypress._

describe('Login', () => {
  it('should redirect', () => {
    cy.visit('/')
    cy.url().should('match', /login/)
  })

  it('logs in through google', () => {
    cy.get('#g-signin2')
      .wait(5000)
      .click('center')
      .invoke('submit')

    const username = Cypress.env('googleSocialLoginUsername')
    const password = Cypress.env('googleSocialLoginPassword')
    const loginUrl = Cypress.env('loginUrl')

    const socialLoginOptions = {
      isPopup: true,
      popupDelay: 5000,
      username,
      password,
      loginUrl,
      headless: true,
      logs: true,
      loginSelector: '#g-signin2',
      postLoginSelector: '.alert-success',
    }

    return cy
      .task('GoogleSocialLogin', socialLoginOptions)
      .then(({ cookies }) => {
        cy.clearCookies()

        const cookie = cookies
          .filter((cookie) => cookie.name === cookieName)
          .pop()
        if (cookie) {
          cy.setCookie(cookie.name, cookie.value, {
            domain: cookie.domain,
            expiry: cookie.expires,
            httpOnly: cookie.httpOnly,
            path: cookie.path,
            secure: cookie.secure,
          })

          Cypress.Cookies.defaults({
            preserve: cookieName,
          })
        }
      })
  })
})
