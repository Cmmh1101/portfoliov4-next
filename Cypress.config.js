module.exports = {
  // ...rest of the Cypress project config
  projectId: "2xxsrh",
  baseUrl: 'http://localhost:3000',
  supportFile: 'cypress/support/commands.tsx',
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
};
