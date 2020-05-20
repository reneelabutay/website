import React, {Component} from 'react';
import './App.css';
import './Styling/NavBar.css';
import './Styling/Home.css';
import './Styling/Projects.css';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Home from './Components/Home';
import Resume from './Components/Resume';

export class App extends Component {
  
  render () {
    
    return (
      <div className="app">
        <div className="navigation-bar">
          <NavBar/>
        </div>
        <div className="home-page">
            <Home/>
        </div>
        <div className="body">
          
          <div className="about-me"></div>
          <div className="resume">
            <Resume/>
          </div>
          <div className="projects">
            <Projects/>
          </div>
          <div className="footer"></div>
        </div>
        
      </div>
    );
  }
}

export default App;
