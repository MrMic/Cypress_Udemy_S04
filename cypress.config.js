import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        seedDatabase(filename) {
          // * INFO: Run your NodeJS Code
          // e.g., edit a file...
          return filename;
        }
      })
    },
  },
});
