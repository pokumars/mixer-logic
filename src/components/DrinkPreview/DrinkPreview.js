import React from 'react';
import './DrinkPreview.css';
import { capitalise } from "../../util/helperFunctions";
import { useHistory } from "react-router-dom";

const DrinkPreview = ({drink}) => {
  const history = useHistory();  
  const toDrinkPage = () => {//i used this instead of <a> tag because I realised too late to refactor
    history.push(`/drink/${drink.dummyId}`);
  }
  return (
    <div className="drink-preview" onClick={toDrinkPage}>
      <div className="top-half">
        <div className="headers">
          <h1>{drink.name}</h1> <p>{drink.dummyId}</p>
          <p><b>Ingredients</b></p>
        </div>
        <img alt={drink.name} className="drink-image" 
        src={require(`../../graphics/drinkImages/${drink.imageUrl}`)} />
      </div>
      <div className="bottom-half">
        <p>{drink.ingredients.map(ing => capitalise(ing[0])).join(', ')}</p>
        <a href="#faves"><b>+ Add to Favorites</b></a>
      </div>
    </div>
  )
}

//TODO: the add to favourites will be so when it isnt in favourites,
// if it is then it will say remove from favorites
export default DrinkPreview


/**
 * const DrinkPreview = ({drink}) => {
  //console.log(drink.name)
  const toDrinkPage = () => {//i used this instead of <a> tag because I realised too late to refactor
    window.location=`/drink/${drink.dummyId}`
  }
  return (
    <div className="drink-preview" onClick={toDrinkPage}>
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
        <a href="#faves"><b>+ Add to Favorites</b></a>
      </div>
    </div>
  )
}
 */

 /**
  * 
const DrinkPreview = ({drink}) => {
  //console.log(drink.name)
 
  return (
    <div className="drink-preview" >
      <a href={`/drink/${drink.dummyId}`}>
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
        <a href="#faves"><b>+ Add to Favorites</b></a>
      </div>
      </a>
    </div>
  )
}
  */