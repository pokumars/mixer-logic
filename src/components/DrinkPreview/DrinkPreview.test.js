//TEST: that stuff is defined
//TEST: that it does go to drink page when clicked on
//TEST: drink name, "Ingredients", img, ingredients is correct
//TEST: 

import React from 'react'
import DrinkPreview from './DrinkPreview'
import { cleanup, render } from '@testing-library/react'
import { capitalise } from '../../util/helperFunctions'
import { testSingleDrink } from "../../allDrinks";

//TODO: these tests must be made asynch when I move the drinks to a database
afterEach(cleanup)
describe('DrinkPreview Tests', () => {//different way of writing tests
  const theDrink =testSingleDrink[0]

  it('should be defined', () => {
    const { getByTestId }= render(<DrinkPreview drink={theDrink}/>)
    expect(getByTestId('drink-preview')).toBeDefined()
    expect(getByTestId('drink-preview')).toHaveTextContent('test DrinkName')
  })

  it('should have all the correct texts present', () => {//TEST: drink name, "Ingredients", img, ingredients is correct
    const { getByTestId }= render(<DrinkPreview drink={theDrink}/>)
    const ingredients = theDrink.ingredients.map(ing => capitalise(ing[0])).join(', ')
    
    expect(getByTestId('drink-preview')).toHaveTextContent('test DrinkName')
    expect(getByTestId('drink-preview')).toHaveTextContent('Ingredients')
    expect(getByTestId('drink-preview')).toHaveTextContent(ingredients)
  })

  it('should have the correct image and alt text', () => {//TEST: drink name, "Ingredients", img, ingredients is correct
  const { getByAltText }= render(<DrinkPreview drink={theDrink}/>)
  
  expect(getByAltText(theDrink.name)).toBeDefined()
  expect(getByAltText(theDrink.name).closest('img')).toHaveAttribute('src', `${theDrink.imageUrl}`)
  })
})
