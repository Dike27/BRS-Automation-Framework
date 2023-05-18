class local_authority_or_government_start_page_PO {
    getOtherStartPageDetails() {
      cy.get("#cookie-banner-accept-all").click();
      cy.get(".govuk-button--start").click();
      cy.get("#radio-option-5").click();
      cy.get('#save-and-continue').click();
    }
  }
  export default local_authority_or_government_start_page_PO;

  