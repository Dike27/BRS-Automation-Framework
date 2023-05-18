class regulated_activity_volunteers_start_page_PO {
    getOtherStartPageDetails() {
      cy.get("#cookie-banner-accept-all").click();
      cy.get(".govuk-button--start").click();
      cy.get("#radio-option-2").click();
      cy.get('#save-and-continue').click();
    }
  }
  export default regulated_activity_volunteers_start_page_PO;

  