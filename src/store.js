import { createStore, combineReducers, applyMiddleware } from 'redux'
import searchReducer from './reducers/searchReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const reducer = combineReducers({
  searchResults: searchReducer
})
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
