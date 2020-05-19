import React, {Component} from 'react';
import './App.css';
import './Styling/NavBar.css';
import './Styling/Projects.css';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';

export class App extends Component {
  
  render () {
    return (
      <div className="app">
        <div className="navigation-bar">
          <NavBar/>
        </div>
        <div className="about-me"></div>
        <div className="resume"></div>
        <div className="projects">
          <Projects/>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
