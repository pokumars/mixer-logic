/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import { Navbar } from './Navbar'
import { toHaveStyle, toBeVisible } from '@testing-library/jest-dom'

//TODO: TEST if user is not signed in show sign in button

// TODO: TEST when user is signed in it shows person logo representing account
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
    expect(logo).toBeVisible()
  })
  
  test('sign in should not be displayed (display:none)', () => {

    const signinBtns = component.getByTestId('navbar-buttons')
    // logo.debug()
    expect(signinBtns).toBeDefined()
    expect(signinBtns).toHaveStyle('display: none')
    //I cant test the style or invisibility if the css is not inline
  })
})


