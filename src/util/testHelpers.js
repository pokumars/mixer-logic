import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer }  from '../store'
import { initialState } from '../reducers/searchReducer'
import { createMemoryHistory } from 'history'
import { BrowserRouter, Router, Switch, Route, MemoryRouter } from 'react-router-dom'

export const renderWithRedux = (component, { initialState, store = createStore(reducer, initialState) } = {}) => {
  return  {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

export const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return {
    ...render (
      <Router history={history}>
          {component}
      </Router>
    )
  }
}

export const renderWithRouterRedux= (component, { initialState, store = createStore(reducer, initialState) } = {}) => {
  const history = createMemoryHistory()
  return {
    ...render(<Provider store={store}>
      <Router history={history}>
        {component}
      </Router>
    </Provider>),
    store,
  }
}

export const renderWithMemoryRouterRedux= (component, { initialState, store = createStore(reducer, initialState) } = {}) => {

  return {
    ...render(<Provider store={store}>
      <MemoryRouter>
        {component}
      </MemoryRouter>
    </Provider>),
    store,
  }
}