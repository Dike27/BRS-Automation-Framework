/// <reference types = "cypress"/>
import Common from "../../../../page-objects/Common";
import StartPage from "../../../../page-objects/StartPage";
import WhatTypeOfReferrerPage from "../../../../page-objects/your-details/WhatTypeOfReferrerPage";
import WhatSectorDoYouWorkInPage from "../../../../page-objects/your-details/WhatSectorDoYouWorkInPage";
import WhatIsYourNamePage from "../../../../page-objects/your-details/WhatIsYourNamePage";
import WhatIsRoleOrJobTitle from "../../../../page-objects/your-details/WhatIsRoleOrJobTitlePage";
import WhatIsNameOfYourOrganisationPage from "../../../../page-objects/your-details/WhatIsNameOfYourOrganisationPage";
import YourDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/1_YourDetails_PO";
import FindYourOrganisationAddressPage from "../../../../page-objects/your-details/FindYourOrganisationAddressPage";

const common = new Common();
const startPage = new StartPage();

const whatTypeOfReferrerPage = new WhatTypeOfReferrerPage();
const whatSectorDoYouWorkInPage = new WhatSectorDoYouWorkInPage();
const whatIsYourNamePage = new WhatIsYourNamePage();
const whatIsRoleOrJobTitle = new WhatIsRoleOrJobTitle();
const whatIsNameOfYourOrganisationPage = new WhatIsNameOfYourOrganisationPage();
const yourDetails = new YourDetails_PO();
const findYourOrganisationAddressPage = new FindYourOrganisationAddressPage();

describe("Local Authority or Government Referral", () => {
  let commonTestData;
  let referrerType;

  beforeEach(() => {
    cy.fixture("commonTestData.json").then((commonTestData) => {
      global.data = commonTestData;
    });

    cy.fixture("referrerTypes.json").then((referraldata) => {
      global.data = referraldata;
    });

    startPage.navigateToPage();
    common.acceptCookies();
  });

  it("Complete a Referrer's Detail Questionnaire", () => {
    common.clickButton("start");
    common.pageHeader.should("contain", "What type of referrer are you?");
    whatTypeOfReferrerPage.radioOption(data.localAuthority).click();
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
  });
});
