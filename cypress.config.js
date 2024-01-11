const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.cypress.io',
    supportFile: false,
    specPattern: 'tests/**/*.spec.{js,ts,jsx,tsx}',
  },
  component: {
    supportFile: false,
  },
})