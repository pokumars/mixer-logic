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
      <DrinkPreview drink ={drinks[2]} />
      <DrinkPreview drink ={drinks[29]} />
      <DrinkPreview drink ={drinks[25]} />
      <DrinkPreview drink ={drinks[23]} />
      <DrinkPreview drink ={drinks[22]} />
    </div>
  );
}
// <DrinkPreview drink ={drinks[5]} />
export default App;
