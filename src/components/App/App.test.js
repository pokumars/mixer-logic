import React from 'react'
import App from './App'
import { renderWithRedux, renderWithRouterRedux, renderWithMemoryRouterRedux } from '../../util/testHelpers'
import { fireEvent, cleanup, getByTestId, waitForElement } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

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



/* test('should close warning prompt', () => {
  const component = renderWithMemoryRouterRedux(<App />)
  //fireEvent.click(component.getByTestId('closebtn'))
  expect(component.container).toHaveTextContent('Warning')
  expect(component.container).toHaveTextContent('Consume alcohol responsibly')
  localStorage.clear()
})
 */


test('warning should be invisible', () => {
  const component = renderWithRouterRedux(<App />)
  
  fireEvent.click(component.getByTestId('closebtn'))
  expect(component.container).toHaveTextContent('Featured Drinks');
  expect(component.getByTestId('warning-prompt')).not.toBeVisible()  
})

test('should contain drink-specific texts in recipe', () => {

  const { container, getAllByTestId, getByTestId } = renderWithMemoryRouterRedux(<App />)
 
  fireEvent.click(getAllByTestId('drink-preview')[0])
  
  expect(container).toHaveTextContent('HOW TO MIX')
  expect(container).toHaveTextContent('Glass')
  expect(container).toHaveTextContent('Method')
  expect(container).toHaveTextContent('Garnish')
})

test('should contain drink-specific texts in recipe2', () => {
  const { container, getAllByTestId, getByTestId } =renderWithMemoryRouterRedux(<App />)
  fireEvent.click(getAllByTestId('drink-preview')[0])
  
  expect(container).toHaveTextContent('HOW TO MIX')
  expect(container).toHaveTextContent('Glass')
  expect(container).toHaveTextContent('Method')
  expect(container).toHaveTextContent('Garnish')

  fireEvent.click(getByTestId('logo-link'))
})

//TODO TEST: says no results when search results are empty
//TODO TEST: shows featured drinks when search results are empty
//TODO TEST: clicking logo reloads homepage i.e calls function at least once
//TODO TEST: clicking logo goes to homepage from non homepage
//TODO TEST: search brings some results
//TODO TEST: search -> click on results -> recipe
