import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import searchReducer from '../../reducers/searchReducer'


describe('<App /> Tests', () => {
  let component;

  beforeEach(() => {
    const store = createStore(searchReducer)
    component = render(
      <Provider store={store}>
        <App />
      </Provider>);
  })

  
  test('renders component', () => {
    
    const navbar = component.container.querySelector('.navbar')
    expect(navbar).toBeDefined()
    expect(navbar).toHaveTextContent('mixer logic')
  });

})



