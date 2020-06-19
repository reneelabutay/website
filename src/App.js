import React, {Component} from 'react';
import './App.css';
import './Styling/NavBar.css';
import './Styling/Home.css';
import './Styling/Projects.css';
import './Styling/Resume.css';
import './Styling/Footer.css';
import './Styling/AboutMe.css';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'


library.add(faLinkedin, faGithubSquare, faEnvelopeSquare);

export class App extends Component {
  
  render () {
    
    return (
      <div className="app">
        <div className="navigation-bar">
          <NavBar/>
        </div>
        <div className="home-page" id="home">
            <Home/>
        </div>
        <div className="body">
          <div className="about-me">
            <AboutMe/>
          </div>
          <div className="resume" id="resume">
            <Resume/>
          </div>
          <div className="projects" id="projects">
            <Projects/>
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
        
      </div>
    );
  }
}

export default App;
