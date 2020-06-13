import { drinks } from '../allDrinks';

// search reducer sets the search criteria and 
//then drinks reducer does the search

const FIND_BY_NAME ="FIND_BY_NAME";
const FIND_BY_METHOD= "FIND_BY_METHOD";
const FIND_BY_INGREDIENT= "FIND_BY_INGREDIENT";

const drinksReducer = (state=drinks, action) => {
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

export default drinksReducer;
