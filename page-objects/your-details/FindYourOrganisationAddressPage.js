class FindYourOrganisationAddressPage {
    enterPostCode(postcode) {
        return cy.get('#org-postcode-lookup-input').type('SW1E 5LB');
    }

    lookUpAddress() {
        return cy.get("#lookup-button").click();
    }

    selectAddress() {
        return cy.get("#select-box").select(12);
    }
}

export default FindYourOrganisationAddressPage;

