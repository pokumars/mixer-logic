import React from 'react'
import { useHistory } from "react-router-dom";
import './About.css'

const About = () => {
  const history = useHistory(); 

  //scrolls to the element defined in the href of the caller
  //smoothly in most browsers except IE
  const scrollTo = (event) => {
    event.preventDefault()
    //take the hashtag and remove hashtag from the front
    const elmnt = document.getElementById(event.target.hash.split('#').pop());
    elmnt.scrollIntoView({behavior: "smooth"});
  }

  const toHome = (event) => {
    event.preventDefault()
    history.push(`/`);
  }

  return (
    <div className="about">
      <h1>About mixer-logic</h1>
      <ul className="toc-navigation">
        <li><a href="#introduction" onClick={scrollTo}>Introduction</a></li>
        <li><a href="#how-to-use">How to Use</a></li>
        <li> <a href="#motivation" onClick={scrollTo}>Motivation</a></li>
        <li><a href="#packages-frameworks-used" onClick={scrollTo}>Packages/frameworks used</a></li>
        <li><a href="#features" onClick={scrollTo}>Features</a></li>
      </ul>


      
      <h2 id="introduction">Introduction</h2>
      <p>
        <a href="#" onClick={toHome} >Mixer-logic</a> is a webpage (SPA) that can be used to search
       for different cocktails and their recipes. The search can be done based
       on name, method and in the future what alcohols it contains.
      </p>

      <h2 id="how-to-use">How to use?</h2>
      <p>
        On the page, the user selects what criteria they want to search by,name or method, and they type in their search query into the search bar and voilà, cocktail results.
        There is a randomly generated list of featured drinks whenever there has been no search done or there were no results returned for what the user searched.
      </p>


      <h2 id="motivation"> Motivation</h2>

      <p>
        I decided to make this web application because I
        realised that I had not done many personal projects that looked good. I had not come across many
        things that I was really interested in building until I found one beautifully
        designed magazine/booklet by <a href="https://www.finlandia.com/en/">Finlandia Vodka</a> with cocktail recipes. I decided to turn that into a web page.
      </p>

      <h2 id="packages-frameworks-used">Packages/frameworks used</h2>
      <ul>
        <li><a href="https://reactjs.org/">React</a></li>
        <li><a href="https://reacttraining.com/react-router/">React-Router</a></li>
        <li><a href="https://react-redux.js.org/">Redux</a></li>
        <li><a href="https://jestjs.io/">A bit of Jest</a></li>
      </ul>

      <h2 id="features">Features</h2>
      <ul>
        <li>Search by name</li>
        <li>Search by mixing method</li>
        <li>Randomly generated featured drinks</li>
        <li>To be added: Search by alcohol type</li>
        <li>To be added: Login</li>
        <li>To be added: Save favourite drinks</li>
      </ul>

    </div>
  )
}

export default About
