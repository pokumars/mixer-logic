/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { capitalise, joinWithAnd } from '../../util/helperFunctions'
import { useHistory, useParams } from 'react-router-dom'
import './Recipe.css'
import drinkService from '../../services/drinkService'

const Recipe = () => {
  const [drink, setDrink] = useState(null)
  // TODO: fix the condition to render the recipe/image credits
  //console.log(useParams().id)
  //const drinkId = Number(useParams().id)
  
  const drinkId = useParams().id
  console.log(typeof drinkId, drinkId);

  const history = useHistory()

  const to404 = () => { // i used this instead of <a> tag because I realised too late to refactor
    history.push(`/404`)
  }

  const fetchSingleDrink = () => {
    console.log('effect in recipe'); console.log('drinkid of', drinkId)
    drinkService.getSingleDrink(drinkId)
    .catch(error => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.trace();
        to404();
        console.log('error status of drink fetch',error.response.status);
        //console.log(error.response.data);
        console.log(error.response.status);
        //console.log(error.response.headers);
      }
    }).then(theDrink =>{
      console.log(theDrink)
     setDrink(theDrink)
    })
  }

  useEffect(fetchSingleDrink, []) 

  const renderRecipe = () => {
    return(<>
      <div className="recipe-top">
      <div className="top-right">
        <img alt={drink.name}
          src={drink.imageUrl} />
        <span className="credits">{drink.credits[0].length > 0 ? `${drink.credits[0][1]} from ${drink.credits[0][0]}` : ''}</span> <br />

      </div>
      <div className="top-left">

        <h2 data-testid="drink-name-header">{drink.name}</h2>
        <h4>Ingredients</h4>
        <table>
          {drink.ingredients.map(i => { // i is ingredient 0=name 1=amount 2=unit
          // if amount exists put it else "", if unit exists put it else "", lastly put the name
            return <tbody key={i[0]}>
              <tr>
                <td>{(i[1] ? i[1] : '') + ' ' + (i[2] ? i[2] : '')}</td><td>{i[0]}</td>
              </tr>
            </tbody>
          })}
        </table>
      </div>
    </div>
    <div className="recipe-bottom">
      <div className="bottom-left">
        <h4>HOW TO MIX</h4>
        <ol>
          {drink.steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
        <span className="credits">{drink.credits[1].length > 0 ? `${drink.credits[1][1]} from ${drink.credits[1][0]}` : ''}</span>

      </div>
      <div className="bottom-right">
        <div className="extra-details">
          <span><b>Glass</b>: {capitalise(drink.glass)}</span><br />
          <span><b>Method</b>: {joinWithAnd(drink.method.map(m => capitalise(m)))}</span><br />
          <span><b>Garnish</b>: {joinWithAnd(drink.garnish.map(g => capitalise(g)))}</span><br />
        </div>
      </div>
    </div>

      </>)
  }

  return (
    <div className="recipe" data-testid="recipe">
      {// TODO: this will be possible when i have the user sign in capability
      // <a ><b>+ Add to Favorites</b></a>
      }
      {
        //TODO: P2 a loading thing
        drink !== null ? renderRecipe() : <h1>Loading recipe</h1>
      }
      
    </div>
  )
}


export default Recipe
