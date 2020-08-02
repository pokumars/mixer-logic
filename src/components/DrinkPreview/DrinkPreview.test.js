//TEST: that stuff is defined
//TEST: drink name, "Ingredients", img, ingredients is correct
//TEST: that on click, the function is called once

import React from 'react'
import DrinkPreview from './DrinkPreview'
import { cleanup, render, getByTestId, fireEvent, waitForElement, getByText } from '@testing-library/react'
import { capitalise } from '../../util/helperFunctions'
import { testSingleDrink } from "../../allDrinks";
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

//TODO: these tests must be made asynch when I move the drinks to a database
afterEach(cleanup)
const theDrink =testSingleDrink[0]
describe('DrinkPreview Tests', () => {//different way of writing tests
  

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


/*
describe('navigation from <DrinkPreview />', () => {//should be done in app
  //https://testing-library.com/docs/example-react-router
  test('should ', async () => {
    const history = createMemoryHistory()
    const { container, getByTestId } = render(
      <Router history={history}>
        <DrinkPreview drink={theDrink}/>
      </Router>
    )
    // verify page content for expected route
    // often you'd use a data-testid or role query, but this is also possible
    expect(container.innerHTML).toMatch(theDrink.name)
    expect(container.innerHTML).toMatch("TestSalt")

    fireEvent.click(getByTestId('drink-preview'))
  
    // check that the content changed to the new page
    const theTestStep = await waitForElement(
      () => getByText(container, 'testStep4'),
      { container }
    )
    expect(theTestStep).toMatch('testStep4')
  })
  
})*/

