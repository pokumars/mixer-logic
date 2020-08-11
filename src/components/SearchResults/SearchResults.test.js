
import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { testMultipleDrinks, testSingleDrink } from "../../allDrinks";
import { screen } from '@testing-library/dom'
import SearchResults from './SearchResults';


afterEach(cleanup)
describe('<FeaturedDrinks /> tests', () => {

  test('renders only 2 drink preview', () => {
    const component = render(<SearchResults results={testMultipleDrinks} /> )
    
    expect(component.getAllByTestId('search-results')).toHaveLength(1)
    expect(component.getAllByTestId('drink-preview')).toHaveLength(2)
    expect(component.getAllByText('Ingredients')).toHaveLength(2)
  })

  test('renders only 1 drink', () => {
    const component = render(<SearchResults results={testSingleDrink} /> )
    
    //screen.debug()
    expect(component.getAllByTestId('search-results')).toHaveLength(1)
    expect(component.getAllByTestId('drink-preview')).toHaveLength(1)
    expect(component.getAllByText('Ingredients')).toHaveLength(1)
  })
})
