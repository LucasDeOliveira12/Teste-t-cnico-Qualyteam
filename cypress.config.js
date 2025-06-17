const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // 
      return config;
    },
    baseUrl: 'https://the-internet.herokuapp.com/'
  },
  reporter: "cypress-mochawesome-reporter", 
  reporterOptions: {
    charts: true, 
    reportPageTitle: "Relatório de Testes", 
    embeddedScreenshots: true, 
    inlineAssets: true, 
    saveAllAttempts: false, 
  },
});
