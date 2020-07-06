import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
var ReactRotatingText = require('react-rotating-text');

/*
<div className="left-side">
                <img src={require("../Images/self.png")} alt="self"></img>
                <div className='resume-section-spacer'></div>
            </div>
*/
export class Home extends Component {

    render () {
      return (
        <div>
        <div className="home-spacer"></div>
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
                        <FontAwesomeIcon icon={['fab', 'linkedin']} size='3x'/>
                    </a>
                    <a href="https://github.com/reneelabutay">
                        <FontAwesomeIcon icon={['fab', 'github-square']} size='3x'/>
                    </a>
                    <a href='mailto: reneelabutay@ucsb.edu'>
                        <FontAwesomeIcon icon="envelope-square" size='3x'/>
                    </a>
                </div>
            </div>
            
        </div>
        </div>
        
      );
    }
  }
  export default Home;