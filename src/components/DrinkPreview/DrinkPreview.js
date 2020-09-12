/* eslint-disable react/prop-types */
import React from 'react'
import './DrinkPreview.css'
import { capitalise } from '../../util/helperFunctions'
import { useHistory } from 'react-router-dom'

const DrinkPreview = ({ drink }) => {
  const history = useHistory()

  const toDrinkPage = () => { // i used this instead of <a> tag because I realised too late to refactor
    history.push(`/drink/${drink.id}`)
  }
  console.log(drink.name)

  return (
    <div className="drink-preview" data-testid="drink-preview"  onClick={toDrinkPage}>
      <div className="top-half">
        <div className="headers">
          <h1>{drink.name}</h1>
          <p><b>Ingredients</b></p>
        </div>
        <img alt={drink.name} className="drink-image"
          src={require(`../../graphics/drinkImages/${drink.imageUrl}`)} />
      </div>
      <div className="bottom-half">
        <p>{drink.ingredients.map(ing => capitalise(ing[0])).join(', ')}</p>
      </div>
    </div>
  )
}
// TODO: add when you have user sign-in system created
// <a href="#faves"><b>+ Add to Favorites</b></a>

// TODO: the add to favourites will be so when it isnt in favourites,
// if it is then it will say remove from favorites
export default DrinkPreview
