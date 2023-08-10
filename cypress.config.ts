export default {
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4200",
    setupNodeEvents(on, config){
      "reporter"; "mochawesome"
      "reporterOptions"; 
        { 
          "reportDir"; "cypress/report/mochawesome-report"
          "overwrite"; true
          "html"; true
          "json"; false
          "timestamp"; "mmddyyyy_HHMMss"
          "charts"; true
        }
    }
  }
};
