import React from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import { SearchBar } from '../SearchBar/SearchBar';
import { useSelector } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';
import FeaturedDrinks from '../FeaturedDrinks/FeaturedDrinks';
import { Footer } from '../Footer/Footer';
import { drinks } from "../../allDrinks";

function App() {
  //1. all drinks should be separate from searchResults because 
  //featured takes from all drinks and search results are search results.

  const searchRes = useSelector(state=> state.searchResults)
  
  const resultAndFeatured = () =>{
    //not searched yet
    //zero res- there were no results for your search
    //under 3 res
    //over 3 res
  }

  
  return (
    <div  className="App">
      <div className="app-container">
        <Navbar />
        <SearchBar />
        {
        /*FeaturedDrinks should disapear when there are search results available
        i.e only show featured when search results are empty*/
        searchRes.length < 1 ? <FeaturedDrinks allDrinks={drinks}/>: <SearchResults results={searchRes}/>
        }     
        
      </div>
      <Footer />
    </div>
  );
}
/*{
  //alternatively we could display featured anyways under
  // searchResults when searchResults are less than a certain amount
  searchRes.length < 3 && <FeaturedDrinks allDrinks={drinks}/>
}*/
export default App;
