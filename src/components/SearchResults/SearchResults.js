import React from 'react'
import DrinkList from '../DrinkList/DrinkList'

const SearchResults = ({results}) => {
  return (
    <>
      <DrinkList listOfDrinks={results} showNumber={true}/> 
    </>
  )
}

export default SearchResults
