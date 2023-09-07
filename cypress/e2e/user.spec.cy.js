import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js' 
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import InfoPage from '../pages/myInfoPage'

const Change = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new InfoPage()



describe('Orange HRM Tests', () => {


  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myInfoPage.fillEmployeeDetails(chance.ssn({ dashes: false }), chance.ssn({ ssnFour: true }), chance.ssn({ dashes: false }), '2025-09-10', chance.ssn(), chance.cpf())
    myInfoPage.fillStatusDetails('Japanese', 'Married', '1996-07-29', chance.ssn({ dashes: false }))
    myInfoPage.fillCustomField('AB+', 'imageTest.jpg', chance.sentence({ words: 3 }) )
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
    // menuPage.accessMaintenance()

  })
  
})