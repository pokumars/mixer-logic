import React from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import { SearchBar } from '../SearchBar/SearchBar';
import { useSelector } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';
import FeaturedDrinks from '../FeaturedDrinks/FeaturedDrinks';
import { Footer } from '../Footer/Footer';
import { drinks } from "../../allDrinks";
import Recipe from '../Recipe/Recipe';

function App() {
  /*all drinks should be separate from searchResults because featured takes from all drinks and search results are search results.*/
  const searchRes = useSelector(state=> state.searchResults.res)
  const noResultsString = useSelector(state=> state.searchResults.empty)
  const featured = drinks
    
  return (
    <div  className="App">
      <div className="app-container">
        <Navbar />
        <Recipe drink={featured[2]} />
        
      </div>
      <Footer />
    </div>
  );

  //EXTRA TODO 
  /*const resultAndFeatured = () =>{
    //not searched yet- show only featured
    //zero res- there were no results for your search
    //under 3 res- show results and also featured
    //over 3 res- show only reults

    //-----try using refs to on searchBar to get acces to query and use that to know if its 0 res or just hasnt searched at all yet
  }*/

}
/*{
  //alternatively we could display featured anyways under
  // searchResults when searchResults are less than a certain amount
  searchRes.length < 3 && <FeaturedDrinks allDrinks={drinks}/>
}*/
export default App;
