//TEST: doesnt show number of results when told not to

import React from 'react'
import { render, cleanup } from '@testing-library/react'
import DrinkList from './DrinkList'
import { testMultipleDrinks } from "../../allDrinks";

afterEach(cleanup)
describe('<DrinkList /> tests', () => {
  it('renders some specific expected drinks', () => {
    const { container, getByTestId } = render(<DrinkList listOfDrinks={testMultipleDrinks} />)

    expect(getByTestId('drink-list')).toBeDefined()
    //it contains a specific name that is in the array 'testMultipleDrinks'
    expect(container.innerHTML).toMatch('test DrinkName')
    expect(container.innerHTML).toMatch('drinkName1')
  })

  test('should render only 2 <DrinkPreview />', () => {
    const { getAllByTestId } = render(<DrinkList listOfDrinks={testMultipleDrinks} />)
    expect(getAllByTestId('drink-preview')).toHaveLength(2)
  })
  
  it('shows number of results when told to ', () => {
    const drinkList = render(<DrinkList listOfDrinks={testMultipleDrinks} showNumber={true}/>)

    expect(drinkList.getByTestId('drink-list')).toHaveTextContent('2 results found')
  })
  
  it('doesnt show number of results when told not to ', () => {
    const drinkList = render(<DrinkList listOfDrinks={testMultipleDrinks} showNumber={false}/>)

    expect(drinkList.getByTestId('drink-list')).not.toHaveTextContent('results found')
  })

  it('doesnt show number of results by default', () => {
    //default being when the DrinkList component doesnt have the prop ->showNumber
    const drinkList = render(<DrinkList listOfDrinks={testMultipleDrinks} />)

    expect(drinkList.getByTestId('drink-list')).not.toHaveTextContent('results found')
  })

  
})
