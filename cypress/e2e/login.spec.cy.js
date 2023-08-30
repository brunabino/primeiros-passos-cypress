describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectoinTitleTopBar: '.oxd-topbar-header-breadcrumb',
    wrongCredentialAlert: "[role='alert']"
  }
  it('login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField) .type('Admin')
    cy.get(selectorList.passwordField) .type('admin123')  
    cy.get(selectorList.loginButton).click()
    cy.location('pathname') .should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectoinTitleTopBar).contains('Dashboard')
  })
  it('login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField) .type('Admiin')
    cy.get(selectorList.passwordField) .type('admin4123')  
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})