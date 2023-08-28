import { mount } from 'cypress/react';
import React, { ReactNode } from 'react';
import { ThemeModeProvider } from "../../context/ThemeModeContext"
import ReactDOM from 'react-dom';

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <ThemeModeProvider>{children}</ThemeModeProvider>
);

Cypress.Commands.add('mount', (component) => {
  cy.window().then((win) => {
    const { document } = win;
    const el = document.createElement('div');
    document.body.appendChild(el);

    ReactDOM.render(<Providers>{component}</Providers>, el);
  });
});


declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      dataCy(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add('mount', mount);

Cypress.Commands.add('dataCy', (value) => {
  return cy.get(`[data-cy=${value}]`);
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })