// cypress/integration/navbar.spec.js
import React from 'react';
import Navbar from './Navbar';
 // Make sure to import your custom Cypress mount command
import {mount} from '../../cypress/support/commands'
// Import the component you want to test


// Define sample pageProps for testing
const samplePageProps = {
  // Define any necessary pageProps here
};

describe('Navbar Component', () => {
  it('should render with the correct theme toggle button', () => {
    // Mount the Navbar component with pageProps
    mount(<Navbar />, samplePageProps);

    // Check if the theme toggle button is rendered
    cy.get('button').should('be.visible');

    // Check if the button text matches the expected theme
    cy.get('button').should('have.text', 'Light'); 
  });

  // Add more test cases as needed
});