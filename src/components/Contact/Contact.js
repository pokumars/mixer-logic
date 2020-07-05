import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="my-name">Oheneba Poku-Marboah</h2>
      <div className="socials">
        <a href="https://www.linkedin.com/in/oheneba-poku-marboah-483783173/" className="contact-element">
          <img alt="linkedin" src={require('../../graphics/icons/linkedin-icon.svg')}/>
          <strong>LinkedIn</strong>
        </a>
        <a href="https://github.com/pokumars" className="contact-element">
          <img alt="github" src={require('../../graphics/icons/github-icon.svg')}/>
          <strong>GitHub</strong>
        </a>
      </div>
      <div className="my-email contact-element">
        <img alt="cv" src={require('../../graphics/icons/email-icon.svg')}/>
        <p>Shoot me some feedback @ <br/> ohenebakob@yahoo.com</p>
      </div>
      <div className="my-cv contact-element">
        <img alt="cv" src={require('../../graphics/icons/cv-icon.svg')}/>
        <p><a href={require('../../graphics/cv_oheneba_pokumarboah.pdf')} target="_blank" rel="noopener nonreferrer">
          my curriculum vitae
        </a></p>
      </div>
      
    </div>
  )
}

export default Contact
