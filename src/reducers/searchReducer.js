import { drinks } from '../allDrinks'

// search reducer sets the search criteria and
// then drinks reducer does the search

export const FIND_BY_NAME = 'FIND_BY_NAME'
export const FIND_BY_METHOD = 'FIND_BY_METHOD'
// const FIND_BY_INGREDIENT= "FIND_BY_INGREDIENT";
export const FIND_BY_ALCOHOL = 'FIND_BY_ALCOHOL'
export const noResults = 'There were no results. Try something different'

// ---------------------REDUCER-----------------
const searchReducer = (state = { res: [], empty: '' }, action) => {
  switch (action.type) {
    case FIND_BY_NAME:

      return action.data
    case FIND_BY_METHOD:
      return action.data

    case FIND_BY_ALCOHOL:

      return action.data
    default:
      return state
  }
}
// if results ar e found do nothing else show results not found
export const emptyResultsText = (arr) => arr.length < 1 ? noResults : ''

// ---------------------ACTION CREATORS-----------------
export const findDrinksByName = (searchText) => {
  const foundDrinks = drinks.filter(currDrink => currDrink.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
  const empty = emptyResultsText(foundDrinks)

  console.log(foundDrinks)
  return {
    type: FIND_BY_NAME,
    data: { res: foundDrinks, empty }
  }
}

const deepSearch = (arr, criteria, query) => {
  // Search array of arrays containing text for partial or full match of the text
  // For example searching by method - parent is the drink object. meth is the drink-making method
  // traverse method array if the query appears in any of the  texts in the array
  // add it to the search results
  // @param criteria is the array in which to find the match

  const results = []

  switch (criteria) {
    case FIND_BY_METHOD:

      arr.forEach(parent => {
        if (parent.method.filter(meth => meth.toLowerCase().indexOf(query.toLowerCase()) !== -1).length > 0) {
          results.push(parent)
        }
      })
      break
    case FIND_BY_ALCOHOL:
      console.log('searching by alcohol')

      arr.forEach(parent => {
        if (parent.alcohols.filter(alc => alc.toLowerCase().indexOf(query.toLowerCase()) !== -1).length > 0) {
          results.push(parent)
        }
      })
      break
      // TODO: add find by ingredient
    default:
      return results
  }

  console.log(results.length)
  return results
}
export const findDrinksByMethod = (searchText) => {
  // searches for full text && also search for partial text match
  const foundDrinks = deepSearch(drinks, FIND_BY_METHOD, searchText)
  const empty = emptyResultsText(foundDrinks)

  console.log('finding by method')
  return {
    type: FIND_BY_METHOD,
    data: { res: foundDrinks, empty }
  }
}

export const findDrinksByAlcohol = (searchText) => {
  // searches for full text && also search for partial text match
  const foundDrinks = deepSearch(drinks, FIND_BY_ALCOHOL, searchText)
  const empty = emptyResultsText(foundDrinks)

  console.log('finding by alcohol')
  return {
    type: FIND_BY_ALCOHOL,
    data: { res: foundDrinks, empty }
  }
}

export default searchReducer
