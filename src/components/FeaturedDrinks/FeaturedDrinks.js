import React from 'react'
import DrinkList from '../DrinkList/DrinkList'
import './FeaturedDrinks.css'

const FeaturedDrinks = ({allDrinks}) => {
  const randomNum = (maxNum) => Math.floor(Math.random() * Math.floor(maxNum))

  const genUniqueRandomNums = () => {//generate 3 unique numbers
    const arr =[]
    while (arr.length< 3) {//generate random numbers and if they dont already exist in arr, add them else skip.
      const r = randomNum(allDrinks.length)
      if(arr.indexOf(r) === -1) arr.push(r)
    }
    return arr
  }

  const listOfFeaturedDrinks = () => genUniqueRandomNums().map( num => allDrinks[num])
  

  return (
    <div className="featured-drinks">
      <h3>Featured Drinks</h3>
      <DrinkList listOfDrinks={listOfFeaturedDrinks()} showNumber={false}/> 
    </div>
  )
}

export default FeaturedDrinks
