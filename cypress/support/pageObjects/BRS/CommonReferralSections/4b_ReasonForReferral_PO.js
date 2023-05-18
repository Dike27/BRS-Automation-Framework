class ReasonForReferral_PO {
  getReasonForReferral() {
    cy.get(":nth-child(5) > .app-task-list__task-name > a").click();
    cy.get(".page-heading").should(
      "have.text",
      "Events leading to this referral"
    );
    cy.get('a[href="/reason-for-referral/circumstances-summary"]').click();
    cy.contains("Continue").click();
    cy.get("#circumstances-summary-input").type(data.textField_char_Lenght_255);
    cy.get("#save-and-continue").click();
    cy.get("#event-description-input").type(data.textField_char_Lenght_190);
    cy.get("#event-start-input-DD").type(data.event_start_Date_DD);
    cy.get("#event-start-input-MM").type(data.event_start_Date_MM);
    cy.get("#event-start-input-YYYY").type(data.event_start_Date_YYYY);
    cy.get("#save-and-continue").click();
    cy.get("#radio-option-0").click();
    cy.get("#save-and-continue").click();
  }
}
export default ReasonForReferral_PO;
