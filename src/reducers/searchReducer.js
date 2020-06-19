import { drinks } from '../allDrinks';

// search reducer sets the search criteria and 
//then drinks reducer does the search

const FIND_BY_NAME ="FIND_BY_NAME";
const FIND_BY_METHOD= "FIND_BY_METHOD";
const FIND_BY_INGREDIENT= "FIND_BY_INGREDIENT";
const FIND_BY_ALCOHOL= "FIND_BY_ALCOHOL";

const searchReducer = (state=[], action) => {
  switch (action.type) {
    case FIND_BY_NAME:
      
      return action.data;
    case FIND_BY_METHOD:
      return action.data;

    case FIND_BY_INGREDIENT:
      return action.data;
    default:
      return state;
  }
}

//---------------------ACTION CREATORS-----------------
export const findDrinksByName = (searchText) => {
  const foundDrinks = drinks.filter(currDrink => currDrink.name.toLowerCase().indexOf(searchText.toLowerCase())!== -1)

  console.log(foundDrinks)
  return {
    type:FIND_BY_NAME,
    data: foundDrinks
  }
}


const deepSearch= (arr, criteria,query) =>{
  //Search array of arrays containing text for partial or full match of the text
  //For example searching by method - parent is the drink object. meth is the drink-making method
  //traverse method array if the query appears in any of the  texts in the array
  //add it to the search results
  //@param criteria is the array in which to find the match

  const results= []

  switch (criteria) {
    case FIND_BY_METHOD:
      
      arr.forEach(parent => {
        if (parent.method.filter(meth => meth.toLowerCase().indexOf(query.toLowerCase())!== -1).length >0) {
          results.push(parent)
        }
      });
      break;
    case FIND_BY_ALCOHOL://TODO: add this method
      console.log('searching by alcohol')
    break;
  //TODO: add find by ingredient
    default:
      return results;
  }
 
  
  console.log(results.length)
  return results
}
export const findDrinksByMethod = (searchText) => {
  //searches for full text && also search for partial text match
  const foundDrinks= deepSearch(drinks, FIND_BY_METHOD, searchText)

  console.log("finding by method")
  return {
    type:FIND_BY_METHOD,
    data: foundDrinks
  }
}


export default searchReducer;