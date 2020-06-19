import React, {Component} from 'react';
import Zoom from 'react-reveal/Zoom';

export class AboutMe extends Component {

    render () {
      return (
        <div className="about-me-page">
          <div className="section-spacer" id="about-me-section-spacer"></div>
          <div className="section-header" id="about-me-section-header">
                <p>About Me</p>
          </div>
          <div className="about-container">
            <Zoom>
            <div className="about-description">
              <p>
                Welcome to my website! My name is Renee and I am a senior undergrad studying 
                Computer Science and Technology Management at UC Santa Barbara. 
                I strive to develop and manage products that promote social good. This summer I will be joining the Product 
                Engineering team at Cress Health to create online platforms that help individuals improve their personal mental wellness. 
                <br></br>
                <br></br>
                Outside of academics, I spend my free time at the gym bodybuilding, powerlifting, and enhancing my 
                knowledge about fitness and nutrition. I also enjoy baking, food blogging, and drinking 
                matcha lattes.
                <br></br>
                <br></br>
                I am a dedicated team player, a passionate problem solver, and a lifelong learner.
                As you navigate through my website, I hope that you have a better understanding of 
                who I am and how I've added value to society through my experiences. 
                I will continue to further my knowledge and will be seeking opportunities in software development
                and/or product management. 
              </p>
            </div>
            </Zoom>
          </div>
        </div>
      );
    }
  }
  export default AboutMe;