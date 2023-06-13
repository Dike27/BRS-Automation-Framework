class ReferrerDetailsPages{

    getReferrerDetailsPages(){
        common.clickButton("start");
    common.pageHeader.should("contain", "What type of referrer are you?");    
    whatTypeOfReferrerPage.radioOption(data.regulatedEmployer).click();
    common.continue();

    //Name Page
    common.pageHeader.should("contain", "What is your name");
    common.inputField("First name", "Alex");
    common.inputField("Last name", "Dunga");
    common.continue();

    //Role or job title page
    common.pageHeader.should("contain", "What is your role or job title?");
    whatIsRoleOrJobTitle.roleOrJobTitleField.type(data.job_title);
    common.continue();

    // What sector do you work in page
    common.pageHeader
      .should("be.visible")
      .and("contain", "What sector do you work in?");
    whatSectorDoYouWorkInPage.sectorDropdown.should("be.visible");
    whatSectorDoYouWorkInPage.selectSectorDropdownOption("childCare"); //this should be enum really, have provided examples elsewhere
    whatSectorDoYouWorkInPage.subSectorDropdown.should("be.visible");
    whatSectorDoYouWorkInPage.selectSubSectorDropdownOption(
      "Child minder - registered"
    ); //this should be enum really, have provided examples elsewhere
    common.continue();

    //what is the name of your organisation page
    common.pageHeader
      .should("be.visible")
      .and("contain", "What is the name of your organisation?");
    whatIsNameOfYourOrganisationPage.organisationNameField.type("Reply");
    common.continue();

    // Address lookup page
    common.pageHeader.should("contain", "Find your organisation's address");
    findYourOrganisationAddressPage.enterPostCode(); //SW1E 5LBSW1E 5LB.type('SE19 2AS')
    findYourOrganisationAddressPage.lookUpAddress();
    findYourOrganisationAddressPage.selectAddress();
    common.continue();

    // Referrer contact numbers
    common.pageHeader.should(
      "contain",
      "What telephone numbers can you be contacted on?"
    );
    common.primarycontactPhone();
    common.secondarycontactPhone();
    common.continue();

    //Referrer Page
    common.pageHeader.should("contain", "What is your email address?");

    common.referrerEmail();
    common.continue();

    //Relationship page
    common.pageHeader.should(
      "contain",
      "What is your professional or working relationship with the person you are referring?"
    );
    common.referrerRelationship();
    common.continue();

    //More details alternative contact page
    common.pageHeader.should("contain", "Would you like to provide details");
    cy.contains("No").click();
    common.continue();  
    }

}
export default ReferrerDetailsPages
  