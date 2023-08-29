import React from 'react'
import { ThemeModeProvider } from './ThemeModeContext'

describe('<ThemeModeProvider />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ThemeModeProvider />)
  })
})