import React from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import { SearchBar } from '../SearchBar/SearchBar';
import DrinkList from '../DrinkList/DrinkList';
import { useSelector } from 'react-redux';

function App() {
  const drinks = useSelector(state=> state.drinks)
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <DrinkList listOfDrinks={drinks} />
    </div>
  );
}
// <DrinkPreview drink ={drinks[5]} />
export default App;
