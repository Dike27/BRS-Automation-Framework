///<reference types = "cypress"/>
import employment_personnel_supplier_PO from "../../../support/pageObjects/BRS/StartPages/3. employment_personnel_supplier_PO";
import YourDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/1_YourDetails_PO";
import ReferredPersonDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/2_ReferredPersonDetails_PO";
import ReferredPersonEmpDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/3_ReferredPersonEmpDetails_PO";
import ReferredPersonEmpDate_PO from "../../../support/pageObjects/BRS/CommonReferralSections/9_ReferredPersonEmpDate_PO";
import SupplyAgencyDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/10. SupplyAgencyDetails_PO";
import ReasonForReferral_PO from "../../../support/pageObjects/BRS/CommonReferralSections/4b_ReasonForReferral_PO";
import HarmedPersonDetails_PO from "../../../support/pageObjects/BRS/CommonReferralSections/5b_HarmedPersonDetails_PO";
import AdditionalInformation_PO from "../../../support/pageObjects/BRS/CommonReferralSections/6b_AdditionalInformation_PO";
import OtherAgencies_PO from "../../../support/pageObjects/BRS/CommonReferralSections/7b_OtherAgencies_PO";


describe("Employment personnel supplier referral", () => {
  const startPage = new employment_personnel_supplier_PO();
  const yourDetails = new YourDetails_PO();
  const supplyAgencyDetails = new SupplyAgencyDetails_PO();
  const referredPersonDetails = new ReferredPersonDetails_PO();
  const referredPersonEmpDetails = new ReferredPersonEmpDetails_PO();
  const referredPersonEmpDate = new ReferredPersonEmpDate_PO();
  const reasonForReferral = new ReasonForReferral_PO();
  const harmedPersonDetails = new HarmedPersonDetails_PO();
  const additionalInformation = new AdditionalInformation_PO();
  const otherAgencies = new OtherAgencies_PO();

  before(() => {
    cy.fixture("yourDetails.json").then((data) => {
      global.data = data;
    });
  });

  beforeEach(() => {
    cy.visit("https://www.submit-a-barring-referral.service.gov.uk/start");
  });

  it("Complete a employment personnel supplier referral", () => {
    startPage.getOtherStartPageDetails();
    yourDetails.getReferrerDetails();
    referredPersonDetails.getReferredPersonDetails();
    referredPersonEmpDetails.getReferredPersonEmpDetails();
    referredPersonEmpDate.getReferredPersonEmpDate();
    supplyAgencyDetails.getSupplyAgencyDetails();
    reasonForReferral.getReasonForReferral();
    harmedPersonDetails.getHarmedPersonDetails();
    additionalInformation.getAdditionalInformation();
    otherAgencies.getOtherAgencies();
  });
});
