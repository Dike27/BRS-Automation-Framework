class OtherAgencies_PO {
  getOtherAgencies() {
    cy.get(":nth-child(8) > .app-task-list__task-name > a").click();
    cy.get("#radio-group-has-details-input > .govuk-heading-l").should(
      "have.text",
      "Do you have contact details for other organisations involved in investigating this incident?"
    );
    cy.get("#radio-option-1").click();
    cy.get("#save-and-continue").click();
    cy.get("#organisation-name-input").type(data.Org_name_input);
    cy.get("#save-and-continue").click();
    cy.get("#org-postcode-lookup-input").type("SW1E 5LB");
    cy.get("#lookup-button").click();
    cy.get("#select-box").select(11);
    cy.get("#save-and-continue").click();
    cy.get("#first-and-middle-name-input").type(data.contact_first_middle_name);
    cy.get("#last-name-input").type(data.contact_last_name);
    cy.get("#save-and-continue").click();
    cy.get("#job-title-input").type(data.contact_role);
    cy.get("#save-and-continue").click();
    cy.get("#contact-telephone-input").type(data.contact_phone);
    cy.get("#contact-telephone-secondary-input").type(
      data.contact_optional_Phone
    );
    cy.get("#save-and-continue").click();
    cy.get("#contact-email-input").type(data.contact_email);
    cy.get("#save-and-continue").click();
    cy.get("#radio-option-0").click();
    cy.get("#save-and-continue").click();    
    
  }
}
export default OtherAgencies_PO;