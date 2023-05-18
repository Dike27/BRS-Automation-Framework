class keeper_register_supervisory_authority_start_page_PO {
    getOtherStartPageDetails() {
      cy.get("#cookie-banner-accept-all").click();
      cy.get(".govuk-button--start").click();
      cy.get("#radio-option-6").click();
      cy.get('#save-and-continue').click();
    }
  }
  export default keeper_register_supervisory_authority_start_page_PO;

  