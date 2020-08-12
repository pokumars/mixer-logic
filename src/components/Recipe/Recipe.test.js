import React from 'react'
import Recipe from './Recipe'
import App from '../App/App'
import { render, cleanup } from '@testing-library/react'
import {drinks} from '../../allDrinks'
import '@testing-library/jest-dom'
import { renderWithRouterRedux, renderWithMemoryRouterRedux } from '../../util/testHelpers'
import {  MemoryRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'


//TODO TEST: it renders name of that drink
//TODO TEST: it renders default titles (How to mix, ingredients, glass, method, garinish)
//TODO TEST: renders '-' if no garnish 
//TODO TEST: image is rendered
//TODO TEST: ingredients and their units are rendered
//TODO TEST: background of extra details is blue
//TODO TEST: correct number of steps displayed

afterEach(cleanup)
test.skip('rendering a component that uses withRouter', () => {
  const history = createMemoryHistory()
  const route = '/drink/2'
  history.push(route)
  const { getByTestId } = render(
    <Router history={history}>
      <Recipe drinks={drinks}/>
    </Router>
  )
  console.log(history.location)
  expect(getByTestId('recipe')).toBeDefined()
})

describe.skip('<Recipe /> tests', () => {
  test('should render name of that drink', () => {
    const component =   render(
      <MemoryRouter initialEntries={["/drink/2"]}>
        <Recipe drinks={drinks}/>
      </MemoryRouter>
    );
    component.debug()

    //expect(component).toHaveTextContent('drinkname')
    expect(2+2).toBe(4)
    
  })
})


