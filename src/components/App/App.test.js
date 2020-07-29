import React from 'react'
import App from './App'
import { renderWithRedux } from '../../util/testHelpers'

describe('<App /> Tests', () => {
  let component

  beforeEach(() => {
    component = renderWithRedux(<App />)
  })

  it('navbar exists and displays logo', () => {
    const navbar = component.getByTestId('navbar')

    expect(navbar).toBeDefined()
    expect(navbar).toHaveTextContent('mixer logic')
  })
  
})
