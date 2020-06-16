import React from 'react'
import './DrinkList.css'
import DrinkPreview from '../DrinkPreview/DrinkPreview'

const DrinkList = ({ listOfDrinks }) => {
  return (
    <div className="drink-list">
      <div className="result-info"><span>{listOfDrinks.length} results found</span></div>
      <div className="list">
        {listOfDrinks.map(d => <DrinkPreview drink={d} key={d.name} />)}
      </div>
    </div>
  )
}
//Featured Drinks will be a different version of this minus the number of found results
export default DrinkList
