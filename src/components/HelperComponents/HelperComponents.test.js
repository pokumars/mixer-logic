import React from 'react'
import { WarningPrompt } from './HelperComponents'
import { render, cleanup, fireEvent } from "@testing-library/react";

//TODO TEST: warning prompt should disappear when x is clicked
afterEach(cleanup)
describe('HelperComponets Tests', () => {
  test('should render a warning prompt', () => {
    const component = render(<WarningPrompt />)

    expect(component.getByTestId("warning-prompt")).toHaveTextContent('Do not send this content')
    expect(component.getByTestId("warning-prompt")).toBeVisible()
  })

  test('the prompt disappears after clicking', () => {
    const component = render(<WarningPrompt />)
    fireEvent.click(component.getByTestId("closebtn"))
    expect(component.getByTestId("warning-prompt")).not.toBeVisible()
  })
})
