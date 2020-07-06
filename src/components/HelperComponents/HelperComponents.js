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

export { InternalLink }
