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
                              I am building the Cress Brand Representative Web Portal with the Frontend Engineering team 
                              and optimizing the peer support feature on the Cress mobile application.
                            </p>
                          </div>
                        </div>
                       </li>
                       <li id="ets">
                       <div className="experience-container">
                          <div className="experience-image">Image </div>
                          <div className="experience-text">
                            <p className="experience-title">Student Engineer</p>
                            <p className="experience-company">UCSB Enterprise Technology Services</p>
                            <p className="experience-description">
                              I provide IT technical support services and account maintenance tasks for 30,000+ end users.
                              I am responsible for generating scripts to automate processes and conducting data manipulation to identify 
                              key metrics in the Learning Management System, which is then visualized in PowerBI.
                            </p>
                          </div>
                        </div>

                       </li>
                       <li id="akpsi">
                       <div className="experience-container">
                          <div className="experience-image">Image </div>
                          <div className="experience-text">
                            <p className="experience-title">Vice President of Professional Affairs</p>
                            <p className="experience-company">Alpha Kappa Psi</p>
                            <p className="experience-description">
                              I am collaborating with other Executive Board Members to provide the fraternity with career-advancing 
                              opportunities and to implement professional development workshops.
                            </p>
                          </div>
                        </div>
                       </li>
                       <li id="bbvr">
                       <div className="experience-container">
                          <div className="experience-image">Image </div>
                          <div className="experience-text">
                            <p className="experience-title">Undergraduate Research Assistant</p>
                            <p className="experience-company">UCSB Gevirtz School of Education</p>
                            <p className="experience-description">
                              I co-developed BlockBased VR, a virtual reality game that reflects fundamental coding concepts
                              through visual programming. I designed a new game environment in Unity and Blender to enhance the UI, 
                              and colalborated in an agile environment to restructure the code into a MVC framework.
                            </p>
                          </div>
                        </div>
                       </li>
                   </ul>
               </Fade>
           </div>
                
        </div>
      );
    }
  }
  export default Experience;