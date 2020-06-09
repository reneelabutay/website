import React, {Component} from 'react';

export class Projects extends Component {

    render () {
      return (
        <div className="projects-page">
            <div className="section-header" id="project-section-header">
                <p className="project-header">Projects</p>
            </div>
            <div className="section-content" id="project-section-content">
            <div className="project-row">
                <div className="project-item">
                    <a href="https://github.com/reneelabutay/CS165_AI_Pacman">
                        <img src="https://img.icons8.com/cotton/200/000000/pacman.png" alt="pacman"/>
                    </a>
                    <h3>Pacman AI</h3>
                    <p>
                        An application AI techniques. Implemented graph search 
                        algorithms, reinforcement learning, and machine learning to 
                        help the Pacman agent collect all the points while avoiding the 
                        ghosts. 
                    </p>
                </div>
                
                <div className="project-item">
                    <a href="https://github.com/reneelabutay/CS130a_prog1">
                        <img src={require("../Images/ds.png")} alt="data structure"></img>
                    </a> 
                    <h3>Quash</h3>
                    <p>
                        Construction of a priority queue and hash table compound 
                        data structure in C++ primarily used to store IP addresses. 
                        Supported insert, delete, and lookup functions.
                    </p>
                </div>
            </div>
            <div className="project-row">
                <div className="project-item">
                    <a href="https://github.com/reneelabutay/CS165_AI_Pacman">
                        <img src="https://img.icons8.com/cotton/200/000000/pacman.png" alt="pacman"/>
                    </a>
                    <h3>Single Cycle CPU</h3>
                    <p>
                        
                    </p>
                </div>
                
                <div className="project-item">
                    <a href="https://github.com/reneelabutay/CS130a_prog1">
                        <img src={require("../Images/ds.png")} alt="data structure"></img>
                    </a> 
                    <h3>Portfolio Website</h3>
                    <p>
                        
                    </p>
                </div>
            </div>
            </div>
        </div>
        
      );
    }
  }
  export default Projects;