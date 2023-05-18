class AdditionalInformation_PO {
    getAdditionalInformation() {
      cy.get(':nth-child(6) > .app-task-list__task-name > a').click();
        cy.get("#radio-option-1").click();
        cy.get("#save-and-continue").click();
        cy.get("#other-work-details-input").type(data.Other_work_details);
        cy.get("#save-and-continue").click();
        cy.get("#radio-group-misconduct-q-input > .govuk-heading-l").should(
          "include.text",
          "Do you know of any other previous misconduct, disciplinary action or complaints against"
        );
        cy.get('#radio-option-0').click()
        cy.get('#save-and-continue').click()
        cy.get('#radio-option-1').click()
        cy.get('#save-and-continue').click()
        cy.get('#first-name-input').type(data.Add_first_name)
        cy.get('#last-name-input').type(data.Add_last_name)
        cy.get('#dob-input-DD').type(data.dob_DD)
        cy.get('#dob-input-MM').type(data.dob_MM)
        cy.get('#dob-input-YYYY').type(data.dob_YYYY)    
        cy.get('#save-and-continue').click()
        cy.get('#radio-option-0').click()
        cy.get('#save-and-continue').click()      
    }
  }
  export default AdditionalInformation_PO;
  