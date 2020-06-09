import React, { useState } from 'react'
import Button from '../Button/Button'
import './SearchBar.css'
import { useDispatch } from 'react-redux'
import { changeCriteria, performSearch, changeQuery } from '../../reducers/searchReducer'


export const SearchBar = () => {
  //TODO: If i need to use this component in the user's page, I can pass in the necessary functions as 
  //props so I can re-use it on homepage and in user page.
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()

  const handleCriterionChange = () => {
    const value = document.getElementById("searchCriteria").value;
    //change criteria in store
    dispatch(changeCriteria(value))
  }

  const handleQueryChange = (event)=> {
    event.preventDefault()
    setQuery(event.target.value)
    console.log(query)
  }

  const handleSearchSubmit= (event)=> {
    event.preventDefault()
    //change the query object then perform the search
    dispatch(changeQuery(query))
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
          handleClick={() => console.log(query)}
          btnType="submit" />
      </form>
    </div>
  )
}
