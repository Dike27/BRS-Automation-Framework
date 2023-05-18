class regulated_activity_employer_start_page_PO {
    getOtherStartPageDetails() {
      cy.get("#cookie-banner-accept-all").click();
      cy.get(".govuk-button--start").click();    
      cy.get("#for-radio-option-1").click();
      cy.get("#save-and-continue").click();
 
    }
  }
  export default regulated_activity_employer_start_page_PO;
  