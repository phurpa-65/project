const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f5mqyt",
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    viewportHeight:1080,
    viewportWidth:1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    chromeWebSecurity:false
  },
});
