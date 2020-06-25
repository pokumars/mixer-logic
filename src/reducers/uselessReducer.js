//Appears that i dont need this reducer anymore for now










const searchState = {
  query: "",
  criteria: "name"
}
const CHANGE_QUERY= "CHANGE_QUERY"
const CHANGE_CRITERIA= "CHANGE_CRITERIA"
//const PERFOM_SEARCH= "PERFOM_SEARCH"

const uselessReducer = (state=searchState, action) => {
  switch (action.type) {
    case CHANGE_QUERY:
      const changedStateQuery = {
        ...state,
        query: action.query
      }
      console.log(`current state right now ====> `, changedStateQuery)   
      return changedStateQuery;
    case CHANGE_CRITERIA:
      const changedStateCriteria = {
        ...state,
        criteria: action.criteria
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
/* 
//Action Creator ->search for item
export const performSearch = searchObj => {
  return {
    type: PERFOM_SEARCH
  }
} */

export default uselessReducer;

/*

<SearchBar />
{
  /*when search results return empty and the noResultsString is no longer an empty string then give a no results message the "noResultsString.length > 1" is important because on start, search results
  are also empty but no search has been done yet. The noResultsString only gets filled when in the searchReducer if it returns an empty array. that is our indicator for when 0 results is due to a search.
  (searchRes.length < 1 && noResultsString.length > 1) && <h3 className="no-results">{noResultsString}</h3>
}

{
/*FeaturedDrinks should disapear when there are search results available
i.e only show featured when search results are empty

searchRes.length < 1 ? <FeaturedDrinks allDrinks={featured}/>: <SearchResults results={searchRes}/>

}
*/