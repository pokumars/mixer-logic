import { Provider } from 'react-redux';
import { createStore } from 'redux';
import uselessReducer from './reducers/uselessReducer';
import searchReducer from './reducers/searchReducer';
import { render } from '@testing-library/react';
import React from 'react'



// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

export const renderWithWrapper = children => {
  const store = createStore(uselessReducer)
  return render(
    <Provider store={store}>
      {children}
    </Provider>);
}