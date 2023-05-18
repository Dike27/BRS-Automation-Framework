
class YourDetails_PO{
    getReferrerDetails(){   
        cy.get("#first-name-input").type(data.first_name);
        cy.get("#last-name-input").type(data.last_name);
        cy.get("#save-and-continue").click();
        cy.get("#job-title-input").type(data.job_title);
        cy.get("#save-and-continue").click();
        cy.get("#work-sector-input").select(7);
        cy.get("#work-sub-sector-input").select(4);
        cy.get("#save-and-continue").click();
        cy.get("#organisation-name-input").type(data.organisation);
        cy.get("#save-and-continue").click();
        cy.get("#org-postcode-lookup-input").type(data.postcode);
        cy.get("#lookup-button").click();
        cy.get("#select-box").select(12);
        cy.get("#save-and-continue").click();
        cy.get("#referrer-telephone-input").type(data.phone);
        cy.get("#referrer-telephone-secondary-input").type(data.optionalPhone);
        cy.get("#save-and-continue").click();
        cy.get("#referrer-email-input").type(data.email);
        cy.get("#save-and-continue").click();
        cy.get("#referrer-relationship-input").type(data.workingRelationship);
        cy.get("#save-and-continue").click();
        cy.get("#radio-option-0").click();
        cy.get("#save-and-continue").click();

    }
}
export default YourDetails_PO;