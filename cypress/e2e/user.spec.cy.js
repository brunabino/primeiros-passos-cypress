import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js' 
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()


describe('Orange HRM Tests', () => {

  const selectorList = {
  
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: ".oxd-date-input",
    dateFieldClearButton: ".--clear",
    closeDateButton: ".--close",
    saveButton: "[type='submit']",
    arrowButton: ".oxd-select-text--arrow",
    genericComboboxList: ".oxd-select-dropdown",
    genericLabelSelection: ".--label-right",
    attachmentButton: ".oxd-button--text",
    insertButton: ".oxd-file-input-icon",
    commentField: ".oxd-textarea"
  }


  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()
  
    cy.get(selectorList.firstNameField).clear().type('firstNametest')
    cy.get(selectorList.lastNameField).clear().type('lastNameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('nicknameTest')
    cy.get(selectorList.genericField).eq(4).clear().type('employee')
    cy.get(selectorList.genericField).eq(5).clear().type('otherIdTest')
    cy.get(selectorList.genericField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorList.dateField).eq(0).click()
    cy.get(selectorList.dateFieldClearButton).click()
    cy.get(selectorList.dateField).eq(0).type('2024-09-02')
    cy.get(selectorList.genericField).eq(8).clear().type('ssnNumberTest')
    cy.get(selectorList.genericField).eq(9).clear().type('sinTest')
    cy.get(selectorList.arrowButton).eq(0).click({ force: true })
    cy.get(selectorList.genericComboboxList).contains('Brazilian').click()
    cy.get(selectorList.arrowButton).eq(1).click({ force: true })
    cy.get(selectorList.genericComboboxList).contains('Other').click()
    cy.get(selectorList.dateField).eq(1).click()
    cy.get(selectorList.dateFieldClearButton).click()
    cy.get(selectorList.dateField).eq(1).type('1995-09-02')
    cy.get(selectorList.genericLabelSelection).eq(1).click({ force: true })
    cy.get(selectorList.genericField).eq(12).clear().type('MilitaryServiceTest')
    cy.get(selectorList.genericLabelSelection).eq(2).click({ force: true })
    cy.get(selectorList.saveButton).eq(0).click({ force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    cy.get(selectorList.arrowButton).eq(2).click({ force: true })
    cy.get(selectorList.genericComboboxList).contains('O+').click()
    cy.get(selectorList.saveButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    cy.get(selectorList.attachmentButton).click()
    cy.get(selectorList.insertButton).click({ force: true })
    cy.get('input[type=file]').selectFile('imageTest.jpg', { force: true })
    cy.get(selectorList.commentField).clear().type('commentTest')
    
    menuPage.accessAdmin()
    menuPage.accessPim()
    menuPage.accessLeave()
    menuPage.accessTime()
    menuPage.accessRecruitment()
    menuPage.accessPerformance()
    menuPage.accessDirectory()
    menuPage.accessClaim()
    menuPage.accessBuzz()
    menuPage.accessMaintenance()
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField) .type(userData.userFail.username)
    cy.get(selectorList.passwordField) .type(userData.userFail.password)  
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})