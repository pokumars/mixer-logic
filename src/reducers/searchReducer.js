import { drinks } from '../allDrinks'

// search reducer sets the search criteria and
// then drinks reducer does the search

export const FIND_BY_NAME = 'FIND_BY_NAME'
export const FIND_BY_METHOD = 'FIND_BY_METHOD'
// const FIND_BY_INGREDIENT= "FIND_BY_INGREDIENT";
export const FIND_BY_ALCOHOL = 'FIND_BY_ALCOHOL'
export const initialState ={ res: [], empty: '' }

// ---------------------REDUCER-----------------
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_BY_NAME:
      const drinksFoundByName = drinks.filter(currDrink => currDrink.name.toLowerCase().indexOf(action.query.toLowerCase()) !== -1)
      return { res: drinksFoundByName, empty: emptyResultsText(drinksFoundByName) }

    case FIND_BY_METHOD:
      // searches for full text && also search for partial text match
      const drinksFoundByMethod = deepSearch(drinks, FIND_BY_METHOD, action.query)
      return { res: drinksFoundByMethod, empty: emptyResultsText(drinksFoundByMethod) }

    case FIND_BY_ALCOHOL:
      // searches for full text && also search for partial text match
      const drinksFoundByAlcohol = deepSearch(drinks, FIND_BY_ALCOHOL, action.query)
      //console.log(action.query)
      return { res: drinksFoundByAlcohol, empty: emptyResultsText(drinksFoundByAlcohol) }
  
    default:
      return state
  }
}


// ---------------------ACTION CREATORS-----------------
export const findDrinksByName = (searchText) => {
  return {
    type: FIND_BY_NAME,
    query: searchText
  }
}

export const findDrinksByMethod = (searchText) => {
  //console.log('finding by method')
  return {
    type: FIND_BY_METHOD,
    query: searchText
  }
}

export const findDrinksByAlcohol = (searchText) => {
  //console.log('finding by alcohol')
  return {
    type: FIND_BY_ALCOHOL,
    query: searchText
  }
}

// ---------------------HELPER FUNCTIONS-----------------
export const noResults = 'There were no results. Try something different'
// if results are found do nothing else show results not found
export const emptyResultsText = (arr) => arr.length < 1 ? noResults : ''

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
      //console.log('searching by alcohol')

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

  //console.log(results.length)
  return results
}

export default searchReducer
