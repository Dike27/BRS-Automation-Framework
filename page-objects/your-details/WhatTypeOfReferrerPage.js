class WhatTypeOfReferrerPage {

    static Regulated_Employer = 'Regulated activity provider (employer)';
    static Local_Authority = 'Local authority or government';
    static Regulated_Volunteers = 'Regulated activity provider (for volunteers)';
    static Employment_Supplier = 'Employment personnel supplier';
    static Educational_Institute = 'Educational institute';
    static Keeper_Authority = 'Keeper of register or supervisory authority';
    static Other_Types = 'Other';

    constructor(name) {
        this.name = name;
    }

    navigateToPage() {
        cy.visit('https://www.submit-a-barring-referral.service.gov.uk/start');
    }

    radioOption(option) {
        return cy.get('.govuk-radios__item').find('label').contains(`${option}`);
    }

}

export default WhatTypeOfReferrerPage
