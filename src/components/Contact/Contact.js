import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="my-name">Oheneba Poku-Marboah</h2>
      <div className="socials">
        <a href="https://www.linkedin.com/in/oheneba-poku-marboah-483783173/">
          <img alt="linkedin" src={require('../../graphics/linkedin-icon.svg')}/>
          <strong>LinkedIn</strong>
        </a>
        <a href="https://github.com/pokumars">
          <img alt="github" src={require('../../graphics/github-icon.svg')}/>
          <strong>GitHub</strong>
        </a>
      </div>
      <div className="my-email">
        <img alt="cv" src={require('../../graphics/email-icon.svg')}/>
        <p>ohenebakob@yahoo.com</p>
      </div>
      <div className="my-cv">
        <img alt="cv" src={require('../../graphics/cv-icon.svg')}/>
      </div>
      
    </div>
  )
}

export default Contact
