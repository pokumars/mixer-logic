/* eslint-disable react/prop-types */
import React from 'react'
import DrinkList from '../DrinkList/DrinkList'
import './FeaturedDrinks.css'
import { gen3UniqueRandomNums } from '../../util/helperFunctions'

const FeaturedDrinks = ({ allDrinks }) => {
  
  const listOfFeaturedDrinks = () => gen3UniqueRandomNums(allDrinks).map(num => allDrinks[num])

  return (
    <div className="featured-drinks" data-testid="featured-drinks">
      <h3>Featured Drinks</h3>
      <DrinkList listOfDrinks={listOfFeaturedDrinks()} showNumber={false}/>
    </div>
  )
}
export default FeaturedDrinks
