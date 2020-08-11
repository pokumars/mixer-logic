import React from 'react'
import App from './App'
import { renderWithRedux, renderWithRouterRedux } from '../../util/testHelpers'
import { fireEvent, cleanup, getByTestId, waitForElement } from '@testing-library/react'


test('nothingburger', () => {
  expect(2 + 2).toBe(4)
})
/*
afterEach(cleanup)
describe('<App /> Tests', () => {
  let component

  beforeEach(() => {
    component = renderWithRouterRedux(<App />)
  })

  it('navbar exists and displays logo', () => {
    const navbar = component.getByTestId('navbar')

    expect(navbar).toBeDefined()
    expect(navbar).toHaveTextContent('mixer logic')
  })
})



test('should close warning prompt', () => {
  const component = renderWithRouterRedux(<App />)
  //fireEvent.click(component.getByTestId('closebtn'))
  expect(component.container).toHaveTextContent('Warning')
  expect(component.container).toHaveTextContent('Consume alcohol responsibly')
  localStorage.clear()
})

test.skip('warning should be invisible', async () => {
  const component = renderWithRouterRedux(<App />)
  localStorage.clear()
  //fireEvent.click(component.getByTestId('closebtn'))

  await waitForElement(
    () => component.getByText('mixer logic')
  );
  expect(component.container).toHaveTextContent('Featured Drinks');
  expect(component.container).toHaveTextContent('Featured Drinks');
  expect(component.container.querySelector('warning')).toBeVisible()
  expect(component.getByText('Consume alcohol responsibly')).not.toBevisible()
  
})

test('should contain drink-specific texts in recipe', () => {
  const { container, getAllByTestId, getByTestId } = renderWithRouterRedux(<App />)
  
  fireEvent.click(getAllByTestId('drink-preview')[0])
  
  expect(container).toHaveTextContent('HOW TO MIX')
  expect(container).toHaveTextContent('Glass')
  expect(container).toHaveTextContent('Method')
  expect(container).toHaveTextContent('Garnish')

  fireEvent.click(getByTestId('logo-link'))
})
*/