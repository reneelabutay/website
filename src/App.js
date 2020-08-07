import React, {Component} from 'react';
import './App.css';
import './NavBar/NavBar.css';
import './Home/Home.css';
import './Projects/Projects.css';
import './Footer/Footer.css';
import './About/AboutMe.css';
import './Experiences/Experience.css';
import NavBar from './NavBar/NavBar';
import Projects from './Projects/Projects';
import Home from './Home/Home';
import AboutMe from './About/AboutMe';
import Experience from './Experiences/Experience';
import Footer from './Footer/Footer';

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
          <div className="experience" id="experience">
            <Experience/>
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
