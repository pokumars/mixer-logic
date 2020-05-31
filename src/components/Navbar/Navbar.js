import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <a href="/">
          <img className="logo" data-testid="logo" src={require('../../graphics/cocktail-blue.svg')} alt="cocktail glass"/>
          <span><b>mixer logic</b> </span>
        </a>
      </div>
      <div className="navbar-buttons">
        <button type="button">Sign In</button>
      </div>
      
    </div>
  )
  /**
   * If you sign in, the sign in button changes to person icon to access your user account.
   * 
   */
}
