import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js' 
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import InfoPage from '../pages/myInfoPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new InfoPage()



describe('Orange HRM Tests', () => {


  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('First Name', 'Last Name', 'Nickname')
    myInfoPage.fillEmployeeDetails('employeeId', 'otherId', '123456789', '2025-09-10', '00602513', '6543210')
    myInfoPage.fillStatusDetails('Japanese', 'Married', '1996-05-05', '0003000')
    myInfoPage.fillCustomField('AB+', 'imageTest.jpg', 'Any Comment Here' )
    myInfoPage.saveForm()

    
    
   
    
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