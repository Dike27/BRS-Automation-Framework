
class ReferredPersonEmpDate_PO{
    getReferredPersonEmpDate(){        
        cy.get("#employment-from-input-DD").type(data.Emp_Start_Date_DD);
        cy.get("#employment-from-input-MM").type(data.Emp_Start_Date_MM);
        cy.get("#employment-from-input-YYYY").type(data.Emp_Start_Date_YYYY);
        cy.get("#save-and-continue").click();

    }
}
export default ReferredPersonEmpDate_PO;