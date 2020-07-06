import React, {Component} from 'react';
import Fade from 'react-reveal/Fade'; 

export class Experience extends Component {

    render () {
      return (
        <div className="experience-page">
            <div className="section-spacer" id="experience-section-spacer">
            </div>
            <div className="section-header" id="resume-section-header">
                <p>Experience</p>
            </div>
           <div className='section-content'>
               <Fade top cascade>
                   <ul className='experience-list'>
                       <li id="cress-health">
                        <div className="experience-container">
                          <div className="experience-image">Image </div>
                          <div className="experience-text">
                            <p className="experience-title">Software Engineer Intern</p>
                            <p className="experience-company">Cress Health</p>
                            <p className="experience-description">
                              Building the peer support platform and updating features on the Cress mobile app.
                            </p>
                          </div>
                        </div>
                       </li>
                       <li id="pacman-ai">
                       <div className="experience-container">
                          <div className="experience-image">Image </div>
                          <div className="experience-text">
                            <p className="experience-title">Student Engineer</p>
                            <p className="experience-company">UCSB Enterprise Technology Services</p>
                            <p className="experience-description">
                              Enter Description here
                            </p>
                          </div>
                        </div>

                       </li>
                       <li>
                       <div className="experience-container">
                          <div className="experience-image">Image </div>
                          <div className="experience-text">
                            <p className="experience-title">Student Engineer</p>
                            <p className="experience-company">UCSB Enterprise Technology Services</p>
                            <p className="experience-description">
                              Enter Description here
                            </p>
                          </div>
                        </div>
                       </li>
                       <li>Experience 4</li>
                   </ul>
               </Fade>
           </div>
                
        </div>
      );
    }
  }
  export default Experience;