const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`)
  if(!fs.existsSync(pathToConfigFile)){
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: "h9kcoc",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,features}",
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    retries: {
      runMode: 0,
      openMode: 1

    },
  },
});
