import { Provider } from 'react-redux';
import { createStore } from 'redux';
import searchReducer from './reducers/searchReducer';
import drinksReducer from './reducers/drinksReducer';
import { render } from '@testing-library/react';
import React from 'react'



// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

export const renderWithWrapper = children => {
  const store = createStore(searchReducer)
  return render(
    <Provider store={store}>
      {children}
    </Provider>);
}