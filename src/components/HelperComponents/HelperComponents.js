/* eslint-disable react/prop-types */
import React from 'react'
import './HelperComponent.css'
import { useHistory } from 'react-router-dom'

const InternalLink = ({ text, destination, color = '#05386B', bold = 'false' }) => {
  const history = useHistory()

  const toDestination = () => {
    history.push(`${destination}`)
  }

  const myStyle = {
    color,
    fontWeight: (bold === true) ? 'bold' : 'normal'
  }
  return (
    <button onClick={toDestination} className="custom-link" style={myStyle}>
      {text}
    </button>
  )
}

const WarningPrompt = () => {
  const message = `Warning: Do not send this content to underaged individuals.
  Consume alcohol responsibly.`
  const WARNING_STORE = 'warningClosed'
  const closed = localStorage.getItem(WARNING_STORE)

  const closeWarning = (event) => {
    event.target.parentNode.style.display = 'none'
    localStorage.setItem(WARNING_STORE, true)
  }
  //console.log(`warning button closed ------------------${closed}`)

  // If the user closes the warning once, it should not have the warning open next time
  return (
    closed ? <></> : <div className="warning" data-testid="warning-prompt">
      <span className="closebtn" data-testid="closebtn" onClick={closeWarning}>&times;</span>
      {message}
    </div>
  )
}



const NotFound = () => {
  return (
    <div className="not-found">
      <img src={require('../../graphics/gifs/404-gif.gif')} alt="404 gif" ></img>
      <h1>404 not found</h1>
      <p>go back or go to <InternalLink destination="/" text="homepage" /></p>
    </div>
  )
}


export { InternalLink, WarningPrompt, NotFound }
