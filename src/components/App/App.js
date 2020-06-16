import React from 'react';
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import { SearchBar } from '../SearchBar/SearchBar';
import DrinkPreview from '../DrinkPreview/DrinkPreview';
import { drinks } from "../../allDrinks";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      {drinks.map(d => <DrinkPreview drink={d} key={d.name}/>)}
    </div>
  );
}
// <DrinkPreview drink ={drinks[5]} />
export default App;
