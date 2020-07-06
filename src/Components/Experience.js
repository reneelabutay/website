import React, {Component} from 'react';
import Fade from 'react-reveal/Fade'; 

export class Experience extends Component {

    render () {
      return (
        <div className="resume-page">
            <div className="section-spacer" id="experience-section-spacer">
            </div>
            <div className="section-header" id="resume-section-header">
                <p>Experience</p>
            </div>
           <div className='section-content'>
               <Fade top cascade>
                   <ul className='experience-list'>
                       <li>Experience 1</li>
                       <li>Experience 2</li>
                       <li>Experience 3</li>
                       <li>Experience 4</li>
                   </ul>
               </Fade>
           </div>
                
        </div>
      );
    }
  }
  export default Experience;