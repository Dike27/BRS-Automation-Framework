class employment_personnel_supplier_PO {
    getOtherStartPageDetails() {
      cy.get("#cookie-banner-accept-all").click();
      cy.get(".govuk-button--start").click();
      cy.get("#radio-option-3").click();
      cy.get('#save-and-continue').click();
    }
  }
  export default employment_personnel_supplier_PO;

  