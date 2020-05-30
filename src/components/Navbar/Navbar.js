import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={require('../../graphics/cocktail-blue.svg')} alt="cocktail glass"/>
          <span><b>mixer logic</b> </span>
        </a>
      </div>
      <button type="button">Sign In</button>
      
    </div>
  )
  /**
   * If you sign in, the sign in button changes to person icon to access your user account.
   * 
   */
}
