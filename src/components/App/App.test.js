import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import uselessReducer from '../../reducers/uselessReducer'

describe('<App /> Tests', () => {
  let component

  beforeEach(() => {
    const store = createStore(uselessReducer)
    component = render(
      <Provider store={store}>
        <App />
      </Provider>)
  })

  test('renders component', () => {
    const navbar = component.container.querySelector('.navbar')
    expect(navbar).toBeDefined()
    expect(navbar).toHaveTextContent('mixer logic')
  })
})
