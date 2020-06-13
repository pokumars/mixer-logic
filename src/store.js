import { createStore, combineReducers } from 'redux';
import drinksReducer from './reducers/drinksReducer';
import searchReducer from './reducers/searchReducer';


const reducer = combineReducers({
  drinks: drinksReducer,
  search: searchReducer
})

const store = createStore(
  reducer
)

export default store;