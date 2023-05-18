class HarmedPersonDetails_PO {
  getHarmedPersonDetails() {
    cy.get(':nth-child(5) > .app-task-list__task-name > a').click();
    cy.get(".page-heading").should(
      "contain.text",
      "Who has been harmed or put at risk of harm?"
    );
    cy.get("#radio-option-1").click();
    cy.get("#save-and-continue").click();
    cy.get("#radio-option-1").click();
    cy.get("#first-and-middle-name-input").type(data.first_middle_name3);
    cy.get("#last-name-input").type(data.last_name3);
    cy.get("#save-and-continue").click();
    cy.get("#radio-option-1").click();
    cy.get("#dob-input-DD").type(data.dob_DD);
    cy.get("#dob-input-MM").type(data.dob_MM);
    cy.get("#dob-input-YYYY").type(data.dob_YYYY);
    cy.get("#save-and-continue").click();
    cy.get("#radio-option-Male").click();
    cy.get("#save-and-continue").click();
    cy.get("#harmed-person-relationship-input").type(data.Event_Desc);
    cy.get("#save-and-continue").click();
    cy.get("#harmed-person-vulnerability-input").type(data.vulnerability_Desc);
    cy.get("#save-and-continue").click();
    cy.get("#risk-or-harm-2").click();
    cy.get("#risk-or-harm-4").click();
    cy.get("#save-and-continue").click();
    cy.get("#harmed-person-harm-suffered-details-input").type(
      data.Risk_Details
    );
    cy.get("#save-and-continue").click();
    cy.get("#radio-option-0").click();
    cy.get("#save-and-continue").click();
  }
}
export default HarmedPersonDetails_PO;
