import React from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import { SearchBar } from '../SearchBar/SearchBar';
import { useSelector } from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';
import FeaturedDrinks from '../FeaturedDrinks/FeaturedDrinks';
import { Footer } from '../Footer/Footer';

function App() {
  const drinks = useSelector(state=> state.searchResults)
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <FeaturedDrinks allDrinks={drinks}/>
      <Footer />
    </div>
  );
}
// <DrinkPreview drink ={drinks[5]} />
export default App;
