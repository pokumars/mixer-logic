/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import { Navbar } from './Navbar'
// import { toHaveStyle } from '@testing-library/jest-dom'

describe('<Navbar /> tests', () => {
  let component

  beforeEach(() => {
    component = render(<Navbar />)
  })

  test('should display \'mixer logic\' text and page icon', () => {
    // component.debug();

    const pageName = component.getByText('mixer logic')

    expect(pageName).toBeDefined()
  })

  test('should display page icon', () => {
    const logo = component.container.querySelector('.logo')
    // logo.debug()
    expect(logo).toBeDefined()
  })

  test('sign in should not be displayed (display:none)', () => {
    const signinBtns = component.container.querySelector('.navbar-buttons')
    // logo.debug()
    expect(signinBtns).toBeDefined()
  })
})

// if user is not signed in show sign in button

// renders mixer logic(name of app)

// when user is signed in it shows person logo representing account
