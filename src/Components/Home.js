import React, {Component} from 'react';

export class Home extends Component {

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
                    <p id="intro">I'm a developer who's passionate about design, food, and social good.</p>
                </div>
                <div className="external-links">
                    <a href="https://www.linkedin.com/in/reneelabutay">
                        <img src={require("../Images/icons/linkedin.png")} alt="linkedin"></img>
                    </a>
                    <a href="https://github.com/reneelabutay">
                        <img src={require("../Images/icons/github.png")} alt="github"></img>
                    </a>
                </div>
            </div>
            
        </div>
        
      );
    }
  }
  export default Home;