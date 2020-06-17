import { createStore, combineReducers } from 'redux';
import searchReducer from './reducers/searchReducer';
import uselessReducer from './reducers/uselessReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = combineReducers({
  searchResults: searchReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

export default store;