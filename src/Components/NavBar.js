import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu';

export class NavBar extends Component {
    showSettings (event) {
        event.preventDefault();
    }
    render () {
      return (
        <div className="header-bar">
          <div className="title">
            <p>Renee Labutay</p>
          </div>
          <div classNam="navigation-menu">
            <Menu right>
              <a className="home">Home</a>
              <a className="about-me">About</a>
              <a className="resume">Resume</a>
              <a className="projects">Projects</a>
            </Menu>
          </div>
        </div>
        
      );
    }
  }
  
  export default NavBar;