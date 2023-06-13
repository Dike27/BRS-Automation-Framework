class WhatSectorDoYouWorkInPage {

    get sectorDropdown() {
        return cy.get('#work-sector-input');
    };

    get subSectorDropdown() {
        return cy.get('#work-sub-sector-input');
    };

    selectSectorDropdownOption(option) {
        this.sectorDropdown.select(option);
    };

    selectSubSectorDropdownOption(option) {
        this.subSectorDropdown.select(option);
    };

}

export default WhatSectorDoYouWorkInPage
