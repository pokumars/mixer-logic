/* eslint-disable react/prop-types */
import React from 'react'
import DrinkList from '../DrinkList/DrinkList'

const SearchResults = ({ results }) => {
  // console.log(results)
  return (
    <>
      <DrinkList listOfDrinks={results} showNumber={true}/>
    </>
  )
}

export default SearchResults
