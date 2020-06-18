import React, {Component} from 'react';
var ReactRotatingText = require('react-rotating-text');


export class Home2 extends Component {

    render () {
      return (
        <div className="home-body">

            <div className="left-side">
                <img src={require("../Images/self.png")} alt="self"></img>
                <div className='resume-section-spacer'></div>
            </div>
            <div className="right-side">
                <div className="welcome-text">
                    <p id="hello">Hello.</p>
                    <div className="intro-container">
                        <p id="intro"> 
                            I'm
                        </p>
                        <ReactRotatingText id="rotating-text" items={['Renee.', 'a CS and Technology Management student.', 'a software developer.', 'an entrepreneur.', 'a foodie.']} />
                    </div>
                    
                </div>
                <div className="external-links">
                    <a href="https://www.linkedin.com/in/reneelabutay">
                        <img src={require("../Images/icons/linkedin.png")} alt="linkedin"></img>
                    </a>
                    <a href="https://github.com/reneelabutay">
                        <img src={require("../Images/icons/github.png")} alt="github"></img>
                    </a>
                    <a href='mailto: reneelabutay@ucsb.edu'>
                        <img src={require("../Images/icons/email.png")} alt="email"></img>
                    </a>
                </div>
            </div>
            
        </div>
        
      );
    }
  }
  export default Home2;