
import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { drinks } from "../../allDrinks";
import FeaturedDrinks from './FeaturedDrinks';


afterEach(cleanup)
const featured = drinks
describe('<FeaturedDrinks /> tests', () => {
  test('renders Featured Drinks', () => {
    const component = render(<FeaturedDrinks allDrinks={featured} /> )
    
    expect(component.getByTestId('featured-drinks')).toHaveTextContent('Featured Drinks')
  })

  test('renders only 3 drinks', () => {
    const component = render(<FeaturedDrinks allDrinks={featured} /> )
    
    expect(component.getAllByTestId('featured-drinks')).toHaveLength(1)
    expect(component.getAllByTestId('drink-preview')).toHaveLength(3)
    expect(component.getAllByText('Ingredients')).toHaveLength(3)
  })
})
