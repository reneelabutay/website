import React, {Component} from 'react';
import './App.css';
import './Styling/NavBar.css';
import NavBar from './Components/NavBar';

export class App extends Component {
  

  
  render () {
    return (
      <div className="app">
        <div className="navigation-bar">
          <NavBar/>
        </div>
        <div className="body"></div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
