import { createStore, combineReducers } from 'redux'
import searchReducer from './reducers/searchReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const reducer = combineReducers({
  searchResults: searchReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

export default store
