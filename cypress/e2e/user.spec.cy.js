import userData from '../fixtures/userData.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    closeDateButton: ".--close",
    saveButton: ".orangehrm-horizontal-padding [type='submit']"

  }


  it.only('User Info Update - Sucess', () => {

    cy.visit('/auth/login')
    cy.get(selectorList.usernameField) .type(userData.userSuccess.username)
    cy.get(selectorList.passwordField) .type(userData.userSuccess.password)  
    cy.get(selectorList.loginButton).click()
    cy.location('pathname') .should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('firstNametest')
    cy.get(selectorList.lastNameField).clear().type('lastNameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('nicknameTest')
    cy.get(selectorList.genericField).eq(4).clear().type('employee')
    cy.get(selectorList.genericField).eq(5).clear().type('otherIdTest')
    cy.get(selectorList.genericField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorList.dateField).eq(0).clear().type('2025-09-02')
    cy.get(selectorList.closeDateButton).click()
    cy.get(selectorList.genericField).eq(8).clear().type('ssnNumberTest')
    cy.get(selectorList.genericField).eq(9).clear().type('sinTest')
    cy.get(selectorList.saveButton).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')

  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField) .type(userData.userFail.username)
    cy.get(selectorList.passwordField) .type(userData.userFail.password)  
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})