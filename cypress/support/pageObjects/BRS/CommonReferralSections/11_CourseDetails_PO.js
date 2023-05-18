class CourseDetails_PO {
  getReviewAndSubmit() {
    cy.get(":nth-child(4) > .app-task-list__task-name > a").click();
    cy.get(".page-heading").should(
      "include.text",
      "What is the name of the course"
    );
    cy.get("#course-name-input").type(data.course_name);
    cy.get("#save-and-continue").click();
    cy.get("#course-start-input-DD").type(data.course_start_Date_DD);
    cy.get("#course-start-input-MM").type(data.course_start_Date_MM);
    cy.get("#course-start-input-YYYY").type(data.course_start_Date_YYYY);
    cy.get("#radio-option-1").click();
    cy.get("#course-end-input-DD").type(data.course_end_Date_DD);
    cy.get("#course-end-input-MM").type(data.course_end_Date_MM);
    cy.get("#course-end-input-YYYY").type(data.course_end_Date_YYYY);
    cy.get("#save-and-continue").click();
    cy.get("#attendance-start-input-DD").type(data.attendance_start_Date_DD);
    cy.get("#attendance-start-input-MM").type(data.attendance_start_Date_MM);
    cy.get("#attendance-start-input-YYYY").type(
      data.attendance_start_Date_YYYY
    );
    cy.get("#attendance-end-input-DD").type(data.attendance_end_Date_DD);
    cy.get("#attendance-end-input-MM").type(data.attendance_end_Date_MM);
    cy.get("#attendance-end-input-YYYY").type(data.attendance_end_Date_YYYY);
    cy.get("#save-and-continue").click();
    cy.get("#wp-org-name-input").type(data.organisation);
    cy.get("#wp-description-input").type(data.work_placement_desc);
    cy.get("#wp-duration-input").type(data.placement_Duration);
    cy.get("#save-and-continue").click();
    cy.get("#save-and-continue").click();
    cy.get("#radio-option-0").click();
    cy.get("#save-and-continue").click();
    cy.get("#course-progress-input").type(data.progress_assessment);
    cy.get("#save-and-continue").click();
  }
}
export default CourseDetails_PO;
