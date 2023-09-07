class InfoPage {

    selectorList() {
        const selectors = {
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
            commentField: ".oxd-textarea",
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName, nickName) {
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
       cy.get(this.selectorList().genericField).eq(3).clear().type(nickName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, licenseExpiryDate, ssnNumber, sinNumber) {
        cy.get(this.selectorList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorList().genericField).eq(6).clear().type(driversLicenseNumber)
        cy.get(this.selectorList().dateField).eq(0).click()
        cy.get(this.selectorList().dateFieldClearButton).click()
        cy.get(this.selectorList().dateField).eq(0).type(licenseExpiryDate)
        cy.get(this.selectorList().genericField).eq(8).clear().type(ssnNumber)
        cy.get(this.selectorList().genericField).eq(9).clear().type(sinNumber)
    }

    saveForm() {
        cy.get(this.selectorList().saveButton).eq(0).click({ force: true })
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
        cy.get(this.selectorList().saveButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')

    }

    fillStatusDetails(nacionality, maritaStatus, dateOfBirth, militaryService) {
        cy.get(this.selectorList().arrowButton).eq(0).click({ force: true })
        cy.get(this.selectorList().genericComboboxList).contains(nacionality).click()
        cy.get(this.selectorList().arrowButton).eq(1).click({ force: true })
        cy.get(this.selectorList().genericComboboxList).contains(maritaStatus).click()
        cy.get(this.selectorList().dateField).eq(1).click()
        cy.get(this.selectorList().dateFieldClearButton).click()
        cy.get(this.selectorList().dateField).eq(1).type(dateOfBirth)
        cy.get(this.selectorList().genericLabelSelection).eq(1).click({ force: true })
        cy.get(this.selectorList().genericField).eq(12).clear().type(militaryService)
        cy.get(this.selectorList().genericLabelSelection).eq(2).click({ force: true })
    }

    fillCustomField(bloodType, imageSelection, commentField) {
        cy.get(this.selectorList().arrowButton).eq(2).click({ force: true })
        cy.get(this.selectorList().genericComboboxList).contains(bloodType).click()
        cy.get(this.selectorList().attachmentButton).click()
        cy.get(this.selectorList().insertButton).click({ force: true })
        cy.get('input[type=file]').selectFile(imageSelection, { force: true })
        cy.get(this.selectorList().commentField).clear().type(commentField)
    }

} 


export default InfoPage