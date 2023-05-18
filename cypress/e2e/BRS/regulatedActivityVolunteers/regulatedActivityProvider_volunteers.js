///<reference types = "cypress"/>
import regulated_activity_employer_start_page_PO from "../../../support/pageObjects/BRS/StartPages/1. regulated_activity_employer_start_page_PO";
import YourDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/1_YourDetails_PO";
import ReferredPersonDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/2_ReferredPersonDetails_PO";
import ReferredPersonEmpDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/3_ReferredPersonEmpDetails_PO";
import ReferredPersonEmpDate_PO from "../../../support/pageObjects/BRS/CommonReferralSections/9_ReferredPersonEmpDate_PO";
import ReasonForReferral_PO from "../../../support/pageObjects/BRS/CommonReferralSections/4_ReasonForReferral_PO";
import HarmedPersonDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/5_HarmedPersonDetails_PO";
import AdditionalInformation_PO from "../../../support/pageObjects/BRS/CommonReferralSections/6_AdditionalInformation_PO";
import OtherAgencies_PO from "../../../support/pageObjects/BRS/CommonReferralSections/7_OtherAgencies_PO";

describe("Regulated activity provider (employer)", () => {
  const startPage = new regulated_activity_employer_start_page_PO();
  const yourDetails = new YourDetails_PO();
  const referredPersonDetails = new ReferredPersonDetails_PO();
  const referredPersonEmpDetails = new ReferredPersonEmpDetails_PO();
  const referredPersonEmpDate = new ReferredPersonEmpDate_PO();
  const reasonForReferral = new ReasonForReferral_PO();
  const harmedPersonDetails = new HarmedPersonDetails_PO();
  const additionalInformation = new AdditionalInformation_PO();
  const otherAgencies = new OtherAgencies_PO();

  before(() => {
    cy.fixture("yourDetails.json").then((data) => {
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    cy.visit("https://www.submit-a-barring-referral.service.gov.uk/start");
    //cy.get("#cookie-banner-accept-all").click();
  });

  it("Complete a Regulated activity provider (employer) referral", () => {
    startPage.getOtherStartPageDetails();
    yourDetails.getReferrerDetails();
    referredPersonDetails.getReferredPersonDetails();
    referredPersonEmpDetails.getReferredPersonEmpDetails();
    referredPersonEmpDate.getReferredPersonEmpDate();
    reasonForReferral.getReasonForReferral();
    harmedPersonDetails.getHarmedPersonDetails();
    additionalInformation.getAdditionalInformation();
    otherAgencies.getOtherAgencies();
  });
});
