import React, { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from '../Navbar/Navbar'
import { SearchBar } from '../SearchBar/SearchBar'
import { useSelector } from 'react-redux'
import SearchResults from '../SearchResults/SearchResults'
import FeaturedDrinks from '../FeaturedDrinks/FeaturedDrinks'
import { Footer } from '../Footer/Footer'
import { Switch, Route } from 'react-router-dom'
import Recipe from '../Recipe/Recipe'
import About from '../About/About'
import Contact from '../Contact/Contact'
import { WarningPrompt, NotFound } from '../HelperComponents/HelperComponents'
import drinkService from '../../services/drinkService'

function App () {
 //const [drinks, setDrinks] = useState([])
const [drinks1, setDrinks1] = useState([1])

const fetchDrinksHook = () => {
  console.log('effect, fetchDrinksHook')
  drinkService.getAllDrinks().then(allDrinks => setDrinks1(allDrinks))
  
}
useEffect(fetchDrinksHook, [])

  // <Recipe drink={featured[22]} />
  /* all drinks should be separate from searchResults because featured takes from all drinks and search results are search results. */
  /*What is happening here: test drinks dont have dummyId so we do the filter to eliminate them from the search results */
  const searchRes = useSelector(state => state.searchResults.res)
  const noResultsString = useSelector(state => state.searchResults.empty)
  

  // const findDrinkById = (id) =>drinks.find(d => d.dummyId === id)
  

  //console.log('render', drinks.length, 'drinks')

  console.log('render', drinks1.length, 'drinks')
  console.log(drinks1.length)

  //TODO: P2 redirect to a  404 page when drinkid is undefined or NaN

  return (
    <div className="App" data-testid="app">
      <div className="app-container">
        <Navbar />
        
        
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/drink/:id" >
              <Recipe drinks = {drinks1.length >1 && drinks1}/>              
            </Route>

            <Route path="/about">
              <WarningPrompt />
              <About/>
            </Route>
            
            <Route exact path="/">
              <WarningPrompt />
              <SearchBar />
              {/* when search results return empty and the noResultsString is no longer an empty string then give a no results message the "noResultsString.length > 1" is important because on start, search results
  are also empty but no search has been done yet. The noResultsString only gets filled when in the searchReducer if it returns an empty array. that is our indicator for when 0 results is due to a search. */
                (searchRes.length < 1 && noResultsString.length > 1) && <h3 className="no-results">{noResultsString}</h3>
              }

              {/* FeaturedDrinks should disapear when there are search results available
i.e only show featured when search results are empty */
                searchRes.length < 1 ? (drinks1.length > 1 && <FeaturedDrinks allDrinks={drinks1} />): <SearchResults results={searchRes} />
              }
            </Route>
            
            <Route><NotFound /></Route>

          </Switch>
        
      </div>
      <Footer />
    </div>
  )

  // EXTRA TODO
  /* const resultAndFeatured = () =>{
    //not searched yet- show only featured
    //zero res- there were no results for your search
    //under 3 res- show results and also featured
    //over 3 res- show only reults

    //-----try using refs to on searchBar to get acces to query and use that to know if its 0 res or just hasnt searched at all yet
  } */
}

//<FeaturedDrinks allDrinks={featured} />    {console.log(drinks1)}
/* {
  //alternatively we could display featured anyways under
  // searchResults when searchResults are less than a certain amount
  searchRes.length < 3 && <FeaturedDrinks allDrinks={drinks}/>
} */

// <Recipe drink={featured[randomNum(30)]} />
export default App
