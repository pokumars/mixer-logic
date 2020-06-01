const searchState = {
  query: "an",
  criteria: "name"
}
const CHANGE_QUERY= "CHANGE_QUERY"
const CHANGE_CRITERIA= "CHANGE_CRITERIA"

const filterReducer = (state=searchState, action) => {
  switch (action.type) {
    case CHANGE_QUERY:
      const changedStateQuery = {
        ...state,
        query: action.query
      }      
      return changedStateQuery;
    case CHANGE_CRITERIA:
      const changedStateCriteria = {
        ...state,
        query: action.criteria
      }      
      return changedStateCriteria;
      

    default:
      return state;
  }
}

//Action Creator ->Update earech query in state
export const changeQuery = newQuery => {
  //Action
  return {
    type: CHANGE_QUERY,
    query: newQuery
  }
}

//Action Creator ->Update search criteria in state
export const changeCriteria = newCriteria => {
  //Action
  return {
    type: CHANGE_CRITERIA,
    criteria: newCriteria
  }
}

export default filterReducer;