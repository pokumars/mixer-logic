import drinkService from '../services/drinkService'

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
      console.log(action)
      return { res: action.drinksFoundByName, empty: emptyResultsText(action.drinksFoundByName) }

    case FIND_BY_METHOD:
      console.log(action)
      return { res: action.drinksFoundByMethod, empty: emptyResultsText(action.drinksFoundByMethod) }

    case FIND_BY_ALCOHOL:
      console.log(action)
      return { res: action.drinksFoundByAlcohol, empty: emptyResultsText(action.drinksFoundByAlcohol) }
  
    default:
      return state
  }
}


// ---------------------ACTION CREATORS-----------------
export const findDrinksByName = (searchText) => {
  return async dispatch =>{
    const drinks = await drinkService.getAllDrinks()
    console.log(drinks.length, 'drinks found in thunk')

    const drinksFoundByName = drinks.filter(currDrink => currDrink.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
    console.log(drinksFoundByName.length, 'drinksFoundByName in thunk')

    dispatch({
      type: FIND_BY_NAME,
      drinksFoundByName: drinksFoundByName
    })
  }
}


export const findDrinksByMethod = (searchText) => {
  //returns a function to the reducer
  return async (dispatch) => {
    const drinks = await drinkService.getAllDrinks()
    console.log(drinks.length, 'drinks found in thunk')

    // searches for full text match && also search for partial text match
    const drinksFoundByMethod = deepSearch(drinks, FIND_BY_METHOD, searchText)
    console.log(drinksFoundByMethod.length, 'drinksFoundByMethod in thunk')

    dispatch({
      type: FIND_BY_METHOD,
      drinksFoundByMethod: drinksFoundByMethod
    })
  }
}

export const findDrinksByAlcohol = (searchText) => {
  //console.log('finding by alcohol')
  return async (dispatch) => {
    const drinks = await drinkService.getAllDrinks()
    console.log(drinks.length, 'drinks found in thunk')

    // searches for full text match && also search for partial text match
    const drinksFoundByAlcohol = deepSearch(drinks, FIND_BY_ALCOHOL, searchText)
    console.log(drinksFoundByAlcohol.length, 'drinksFoundByAlcohol in thunk')

    dispatch({
      type: FIND_BY_ALCOHOL,
      drinksFoundByAlcohol: drinksFoundByAlcohol
    })
  }
}

// ---------------------HELPER FUNCTIONS-----------------
/*The only scenario where the no results text will fail to give the message of no results is
when the only results are the 2 with no dummyId property i.e the test drink objects.
If it doesnt show no results message, this should be the only reason why*/
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
