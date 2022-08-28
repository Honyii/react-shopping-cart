import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
		defaultCommandTimeout: 40000,
		viewportHeight: 900,
		viewportWidth: 1400,
		watchForFileChanges: true,
		chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
