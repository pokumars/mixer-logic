/* eslint-disable react/prop-types */
import React from 'react'
import DrinkList from '../DrinkList/DrinkList'

const SearchResults = ({ results }) => {
  // console.log(results)
  return (
    <div data-testid="search-results">
      <DrinkList listOfDrinks={results} showNumber={true}/>
    </div>
  )
}

export default SearchResults
