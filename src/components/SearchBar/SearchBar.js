import React, { useState } from 'react';
import Button from '../Button/Button';
import './SearchBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeCriteria, changeQuery } from '../../reducers/searchReducer';
import { findDrinksByName, findDrinksByMethod } from '../../reducers/drinksReducer';



export const SearchBar = () => {

  //TODO: If i need to use this component in the user's page, I can pass in the necessary functions as 
  //props so I can re-use it on homepage and in user page.
  const [query, setQuery] = useState('')
  const [criteria, setCriteria] = useState('')
  const dispatch = useDispatch()
  
  const performSearchByCriteria = () => {
    switch (criteria) {
      case "name":
        dispatch(findDrinksByName(query))
        break;
      case "method":
        dispatch(findDrinksByMethod(query))
        break;
    
      default:
        dispatch(findDrinksByName(query));
    }
  }

  const handleCriterionChange = () => {
    const value = document.getElementById("searchCriteria").value;
    setCriteria(value)
    console.log(value)
  }
  
  
  const handleQueryChange = (event)=> {
    setQuery(event.target.value)
    console.log(event.target.value)
  }
  
  const handleSearchSubmit= (event)=> {
    event.preventDefault()
    //change the query object then perform the search

    //search is done based on what the criteria is  atm
    performSearchByCriteria()
    console.log('query and criteria atm ----->',{query, criteria})
  }




  return (
    <div className="search-bar">
      <div className="criteria" >
        <label htmlFor="searchCriteria">Search by </label>
        <select name="searchCriteria" 
        id="searchCriteria" onChange={handleCriterionChange}>
          <option value="name">Name</option>
          <option value="method">Method</option>
        </select>
      </div>

      <form className="search" onSubmit={handleSearchSubmit}>
        <input value={query} id="searchInput" onChange={handleQueryChange} 
        placeholder="Search..."/>
        <Button btnText="Search" btnColor="#05386B"
         btnType="submit"
         />
      </form>
    </div>
  )
}

/**      <form className="search" onSubmit={handleSearchSubmit}>
        <input value={query} id="searchInput" onChange={handleQueryChange}
        placeholder="Search..."/>
        <Button btnText="Search" btnColor="#05386B"
          handleClick={() => console.log(query)}
          btnType="submit" />
      </form> */
