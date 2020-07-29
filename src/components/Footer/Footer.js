import React from 'react'
import './Footer.css'
// import { InternalLink } from '../HelperComponents/HelperComponents'

export const Footer = () => {
  return (
    <div className="footer">
      <p>By <a href ="https://github.com/pokumars" target="_blank" rel="noopener noreferrer"><b>Oheneba</b></a></p>
      {// TODO: use InternalLink /> instead of <a><a/> when you figure out what bug is causing issues
        /** <InternalLink destination="/about" text="ABOUT" color="#f09b9b" bold={true}/> |
         *  <InternalLink destination="/contact" text="CONTACT" color="#f09b9b" bold={true}/> */
      }
      <p><a href="/about"><b>ABOUT</b></a> | <a href="/contact"><b>CONTACT</b></a></p>

      <p>- Source of images and recipes are mentioned below them respectively</p>
      <p>- Do not send content from this site to anyone under the age of 18</p>
    </div>
  )
}
