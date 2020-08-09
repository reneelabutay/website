import React, {Component} from 'react';

export class Projects extends Component {

    render () {
      return (
        <div className="projects-page">
            <div className="section-spacer" id="project-section-spacer">
            </div>
            <div className="section-header" id="project-section-header">
                <p className="project-header">Projects</p>
            </div>
            <div className="section-content" id="project-section-content">
            <div className="project-row">
                <div className="project-item">
                    <div className="project-media">
                        <a href="">
                            <img src={require("../Images/PROGRESS.png")} style={{width: '250px'}} alt="in-progress"></img>
                        </a> 
                    </div>
                    <div className="project-text">
                        <h3>LIFT</h3>
                        <p>
                            Designing and developing a workout tracking mobile application and educates
                            users how to maximize strength training results.
                        </p>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-media">
                        <a href="https://reneelabutay.github.io/react_portfolio/" target="_blank" rel="noopener noreferrer">
                           <img src={require("../Images/movie-gallery.png")} style={{width: '400px'}} alt="movie-gallery-display"></img>
                        </a> 
                    </div>
                    <div className="project-text">
                        <h3>Personalized Movie Gallery</h3>
                        <p>
                            Built a website that allows users to create their own movie gallery 
                            and customized movie lists. Includes an integration of the OMDb API 
                            and the D3 library to make an interactive visualization that models
                            movie relations.
                        </p>
                    </div>
                </div>
            </div>
            <div className="project-row">
                <div className="project-item">
                    <div className="project-media">
                        <a href="https://github.com/reneelabutay/cs154_CPU" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/cotton/250/000000/smartphone-cpu.png" alt="cpu-img"/>
                        </a> 
                    </div>
                    <div className="project-text">
                        <h3>Single Cycle CPU</h3>
                        <p>
                            Implemented a 32-bit single cycle MIPS CPU using PyRTL.
                        </p>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-media">
                        <a href="https://github.com/reneelabutay/CS165_AI_Pacman" target="_blank" rel="noopener noreferrer">
                            <img src="https://img.icons8.com/cotton/250/000000/pacman.png" alt="pacman-img"/>
                        </a>
                    </div>
                    <div className="project-text">
                        <h3>Pacman AI</h3>
                        <p>
                            Engineered AI-driven PacMan agents using machine learning, A* search, minimax
                            with alpha-beta pruning, expectimax, and reinforcement learning models that
                            assisted the agent in independently completing the game.
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
        
      );
    }
  }
  export default Projects;