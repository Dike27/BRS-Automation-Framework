
class ReviewAndSubmit_PO{
    getReviewAndSubmit(){
      cy.get(':nth-child(8) > .app-task-list__task-name > a').click();


    }
}
export default ReviewAndSubmit_PO;