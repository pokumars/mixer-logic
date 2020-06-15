import React from 'react'
import './Navbar.css'
import Button from '../Button/Button'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <a href="/">
          <img className="logo" data-testid="logo" alt="cocktail glass"
           src={require('../../graphics/cocktail-light-green.svg')} />
          <span><b>mixer logic</b> </span>
        </a>
      </div>
      <div className="navbar-buttons">
        <Button btnText="Sign In" btnColor="#05386B"  handleClick={()=> console.log(1)}/>
      </div>
      
    </div>
  )
  /**
   * If you sign in, the sign in button changes to person icon to access your user account.
   * 
   */
}
