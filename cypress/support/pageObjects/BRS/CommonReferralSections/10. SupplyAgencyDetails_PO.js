
class SupplyAgencyDetails_PO{
    getSupplyAgencyDetails(){
          cy.get(":nth-child(4) > .app-task-list__task-name > a").click();
    cy.get("#contract-start-input-DD").type(data.ref_per_startdate_DD);
    cy.get("#contract-start-input-MM").type(data.ref_per_startdate_MM);
    cy.get("#contract-start-input-YYYY").type(data.ref_per_startdate_YYYY);
    cy.get("#contract-end-input-DD").type(data.ref_per_enddate_DD);
    cy.get("#contract-end-input-MM").type(data.ref_per_enddate_MM);
    cy.get("#contract-end-input-YYYY").type(data.ref_per_enddate_YYYY);
    cy.get('#save-and-continue').click()
    cy.get('#organisation-name-input').type(data.organisation)
    cy.get('#engagement-start-input-DD').type(data.eng_startdate_DD)
    cy.get('#engagement-start-input-MM').type(data.eng_per_startdate_MM)   
    cy.get('#engagement-start-input-YYYY').type(data.eng_per_startdate_YYYY)  
    cy.get('#save-and-continue').click()
    cy.get('#radio-option-0').click()
    cy.get('#save-and-continue').click()
    cy.get('#radio-option-0').click()
    cy.get('#save-and-continue').click() 

    }
}
export default SupplyAgencyDetails_PO;