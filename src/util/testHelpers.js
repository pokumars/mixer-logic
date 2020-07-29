import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer }  from '../store'
import { initialState } from '../reducers/searchReducer'

export const renderWithRedux = (component, { initialState, store = createStore(reducer, initialState) } = {}) => {
  return  {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}
