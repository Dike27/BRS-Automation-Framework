class Common {

    get banner() {
        return cy.get('#dbs-cookie-banner')
    }

    get hideButton() {
        return cy.get('#cookie-banner-confirmation-hide');
    }

    get mainPageBody() {
        return cy.get('.govuk-grid-row');
    }

    acceptCookies() {
        this.banner.find('button').contains('Accept').click();
        this.hideButton.click();
    }
    rejectCookies() {
        this.banner.find('button').contains('Reject').click();
        this.hideButton.click();
    }


    clickButton(partialUniqueButtonString) {

        cy.get(`.govuk-button--${partialUniqueButtonString}`).click();
    }

    continue() {
        cy.contains('Continue').click();
    }

    inputField(fieldLabel, inputValue = "") { //inputValue is now optional as default value has been provided
        cy.get('.form').find('label').contains(fieldLabel).type(inputValue);
    }

    get pageHeader() {
        return cy.get('.page-heading');
    }

    primarycontactPhone() {
        cy.get('#referrer-telephone-input').type('02067654245')
    }

    secondarycontactPhone() {
        cy.get('#referrer-telephone-secondary-input').type('07876567899')
    }

    referrerEmail() {
        return cy.get('#referrer-email-input').type('roger@mail.com')
    }

    referrerRelationship() {
        return cy.get('#referrer-relationship-input').type('Line Manager')
    }
}

export default Common