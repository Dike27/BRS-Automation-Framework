
class ReferredPersonEmpDetails_PO{
    getReferredPersonEmpDetails(){
        //cy.get("a[href='/referred-person-employment/role-or-job-title']").click();
        cy.get(':nth-child(3) > .app-task-list__task-name > a').click()
        cy.get("#radio-option-1").click();
        cy.get("#job-title-input").type(data.Referred_Person_Job_Title);
        cy.get("#save-and-continue").click();
        cy.get("#work-sector-input").select(6);
        cy.get("#work-sub-sector-input").select(4);
        cy.get("#save-and-continue").click();
        cy.get("#radio-option-3").click();
        cy.get("#save-and-continue").click();
        cy.get("#radio-option-0").click();
        cy.get("#save-and-continue").click();
        cy.get("#radio-option-1").click();
        cy.get("#reason-employed-input").type(data.Referred_Person_Job_Desc);
        cy.get("#save-and-continue").click();
        // cy.get("#employment-from-input-DD").type(data.Emp_Start_Date_DD);
        // cy.get("#employment-from-input-MM").type(data.Emp_Start_Date_MM);
        // cy.get("#employment-from-input-YYYY").type(data.Emp_Start_Date_YYYY);
        // cy.get("#save-and-continue").click();

    }
}
export default ReferredPersonEmpDetails_PO;