class WhatIsYourNamePageNew {
  get referrerNamePage() {
    common.pageHeader.should("contain", "What is your name");
    common.inputField("First name", "Alex");
    common.inputField("Last name", "Dunga");
    common.continue();
  }
}

export default WhatIsYourNamePageNew;
