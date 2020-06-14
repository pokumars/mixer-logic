import { createStore, combineReducers } from 'redux';
import drinksReducer from './reducers/drinksReducer';
import searchReducer from './reducers/searchReducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const reducer = combineReducers({
  drinks: drinksReducer,
  search: searchReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

export default store;