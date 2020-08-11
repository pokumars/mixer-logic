/* eslint-disable react/prop-types */
import React from 'react'
import { capitalise, joinWithAnd } from '../../util/helperFunctions'
import { useParams } from 'react-router-dom'
// import { drinks }  from '../../allDrinks'
import './Recipe.css'

const Recipe = ({ drinks }) => {
  // TODO: fix the condition to render the recipe/image credits
  //console.log(window.location.href)
  const drinkId = useParams().id
  const drink = drinks.find(d => Number(d.dummyId) === Number(drinkId))
  //console.log(drinks[0])
  //console.log(drink)
  return (
    <div className="recipe" data-testid="recipe">
      {// TODO: this will be possible when i have the user sign in capability
      // <a ><b>+ Add to Favorites</b></a>
      }
      <div className="recipe-top">
        <div className="top-right">
          <img alt={drink.name}
            src={require(`../../graphics/drinkImages/${drink.imageUrl}`)} />
          <span className="credits">{drink.credits.length !== 0 ? `${drink.credits[0][1]} from ${drink.credits[0][0]}` : ''}</span> <br />

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
          <span className="credits">{drink.credits.length !== 0 ? `${drink.credits[1][1]} from ${drink.credits[1][0]}` : ''}</span>

        </div>
        <div className="bottom-right">
          <div className="extra-details">
            <span><b>Glass</b>: {capitalise(drink.glass)}</span><br />
            <span><b>Method</b>: {joinWithAnd(drink.method.map(m => capitalise(m)))}</span><br />
            <span><b>Garnish</b>: {joinWithAnd(drink.garnish.map(g => capitalise(g)))}</span><br />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Recipe
