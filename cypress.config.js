const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight:1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity:false
  },
});
