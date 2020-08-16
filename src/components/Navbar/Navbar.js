import React from 'react'
import './Navbar.css'
import Button from '../Button/Button'

export const Navbar = () => {
  return (
    <div className="navbar" data-testid="navbar">
      <div className="logo-container">
        <a href="/" data-testid="logo-link">
          <img className="logo" data-testid="logo" alt="cocktail glass"
            src={require('../../graphics/icons/cocktail-light-green.svg')} />
          <span><b>mixer logic</b> </span>
        </a>
      </div>
      <div className="navbar-buttons" data-testid="navbar-buttons" style={{display: 'none'}}>
        <Button btnText="Sign In" btnColor="#05386B" handleClick={() => console.log(1)}/>
      </div>

    </div>
  )
  /**
   * If you sign in, the sign in button changes to person icon to access your user account.
   *
   */
}
