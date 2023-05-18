
class ReviewAndSubmit_PO{
    getReviewAndSubmit(){
      cy.get(':nth-child(9) > .app-task-list__task-name > a').click();


    }
}
export default ReviewAndSubmit_PO;