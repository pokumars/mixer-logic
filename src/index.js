import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import searchReducer from './reducers/searchReducer'


const store = createStore(searchReducer)

store.subscribe(() => {
  const storeNow = store.getState()
  console.log(storeNow)
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
