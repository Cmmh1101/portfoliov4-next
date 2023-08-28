import React from 'react'
import HomeComponent from './HomeComponent'

describe('<HomeComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HomeComponent />)
  })
})