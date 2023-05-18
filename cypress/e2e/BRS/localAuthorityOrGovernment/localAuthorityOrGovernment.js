/// <reference types = "cypress"/>
import local_authority_or_government_start_page_PO from "../../../support/pageObjects/BRS/StartPages/5. local_authority_or_government_start_page_PO";
import YourDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/1_YourDetails_PO";
import ReferredPersonDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/2_ReferredPersonDetails_PO";
import ReferredPersonEmpDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/3_ReferredPersonEmpDetails_PO";
import ReasonForReferral_PO from "../../../support/pageObjects/BRS/CommonReferralSections/4_ReasonForReferral_PO";
import HarmedPersonDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/5_HarmedPersonDetails_PO";
import AdditionalInformation_PO from "../../../support/pageObjects/BRS/CommonReferralSections/6_AdditionalInformation_PO";
import OtherAgencies_PO from "../../../support/pageObjects/BRS/CommonReferralSections/7_OtherAgencies_PO";
import ReviewAndSubmit_PO from "../../../support/pageObjects/BRS/CommonReferralSections/8_ReviewAndSubmit_PO";

describe("Local Authority or Government Referral", () => {
  const startPage = new local_authority_or_government_start_page_PO();
  const yourDetails = new YourDetails_PO();
  const referredPersonDetails = new ReferredPersonDetails_PO();
  const referredPersonEmpDetails = new ReferredPersonEmpDetails_PO();
  const reasonForReferral = new ReasonForReferral_PO();
  const harmedPersonDetails = new HarmedPersonDetails_PO();
  const additionalInformation = new AdditionalInformation_PO();
  const otherAgencies = new OtherAgencies_PO();
  const reviewAndSubmit = new ReviewAndSubmit_PO();

  before(() => {
    cy.fixture("yourDetails.json").then((data) => {
      global.data = data;
    });
  });

  beforeEach(() => {
    cy.visit("https://www.submit-a-barring-referral.service.gov.uk/start");
  });

  it("Complete and submit a local authority or government referral questionnaire", () => {
    startPage.getOtherStartPageDetails();
    yourDetails.getReferrerDetails();
    referredPersonDetails.getReferredPersonDetails();
    referredPersonEmpDetails.getReferredPersonEmpDetails();
    reasonForReferral.getReasonForReferral();
    harmedPersonDetails.getHarmedPersonDetails();
    additionalInformation.getAdditionalInformation();
    otherAgencies.getOtherAgencies();
  });
});
