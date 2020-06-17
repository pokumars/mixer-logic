import React from 'react';
import './DrinkPreview.css';
import { capitalise } from "../../util/helperFunctions";


const DrinkPreview = ({drink}) => {
  //console.log(drink.name)
  return (
    <div className="drink-preview">
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
        <a ><b>+ Add to Favorites</b></a>
      </div>
    </div>
  )
}
//TODO: the add to favourites will be so when it isnt in favourites,
// if it is then it will say remove from favorites
export default DrinkPreview
