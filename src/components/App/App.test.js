import React from 'react'
import App from './App'
import { renderWithRedux, renderWithRouterRedux, renderWithMemoryRouterRedux } from '../../util/testHelpers'
import { fireEvent, cleanup, getByTestId, waitForElement } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

//TODO TEST: clicking logo reloads homepage i.e calls function at least once
//TODO TEST: clicking logo goes to homepage from non homepage
//TODO TEST: search -> click on results -> recipe

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

 
test('should not return the test drink objects', () => {
  const component = renderWithMemoryRouterRedux(<App />)

  const input = component.getByTestId('search-input')
  const form = component.getByTestId('search-form')

  fireEvent.change(input, { target: { value: 'drinkn' } })
  fireEvent.submit(form)

  expect(component.container).not.toHaveTextContent('drinkName')
})

test('warning should be invisible', () => {
  const component = renderWithRouterRedux(<App />)
  
  fireEvent.click(component.getByTestId('closebtn'))
  expect(component.container).toHaveTextContent('Featured Drinks');
  expect(component.getByTestId('warning-prompt')).not.toBeVisible()  
})

test('should contain drink-specific texts in recipe', () => {

  const { container, getAllByTestId } = renderWithMemoryRouterRedux(<App />)
 
  fireEvent.click(getAllByTestId('drink-preview')[0])
  
  expect(container).toHaveTextContent('HOW TO MIX')
  expect(container).toHaveTextContent('Glass')
  expect(container).toHaveTextContent('Method')
  expect(container).toHaveTextContent('Garnish')
})

test('should say no results when search results are empty', () => {
  const component = renderWithMemoryRouterRedux(<App />)

  const input = component.getByTestId('search-input')
  const form = component.getByTestId('search-form')

  fireEvent.change(input, { target: { value: 'vx' } })
  fireEvent.submit(form)

  expect(component.container).toHaveTextContent('There were no results. Try something different')
})

test('show featured drinks when search results are empty', () => {
  const component = renderWithMemoryRouterRedux(<App />)

  const input = component.getByTestId('search-input')
  const form = component.getByTestId('search-form')

  fireEvent.change(input, { target: { value: 'vx' } })
  fireEvent.submit(form)

  expect(component.container).toHaveTextContent('Featured Drinks')
  expect(component.getAllByTestId('drink-preview')).toHaveLength(3)
  expect(component.getAllByText('Ingredients')).toHaveLength(3)
})

test('does not show featured drinks when there are results', () => {
  const component = renderWithMemoryRouterRedux(<App />)

  const input = component.getByTestId('search-input')
  const form = component.getByTestId('search-form')

  fireEvent.change(input, { target: { value: 'v' } })
  fireEvent.submit(form)

  expect(component.container).not.toHaveTextContent('Featured Drinks')
  expect(component.getAllByTestId('drink-preview')).toHaveLength(2)
  expect(component.getAllByText('Ingredients')).toHaveLength(2)
})

test('search brings some results; more than 10', () => {
  const component = renderWithMemoryRouterRedux(<App />)

  const input = component.getByTestId('search-input')
  const form = component.getByTestId('search-form')

  fireEvent.change(input, { target: { value: 'a' } })
  fireEvent.submit(form)

  expect(component.getAllByTestId('drink-preview').length).toBeGreaterThan(10)
  expect(component.getAllByText('Ingredients').length).toBeGreaterThan(10)
  expect(component.container).not.toHaveTextContent('Featured Drinks')
})


