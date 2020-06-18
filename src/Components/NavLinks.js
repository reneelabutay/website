import React, { Component } from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll'

class NavLinks extends Component {

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
      }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollToExperience() {
        scroller.scrollTo('experience-section-spacer', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
    }
    scrollToProjects() {
        scroller.scrollTo('project-section-spacer', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
    }

    render() {
        return (
            <div>
                <nav>
                    <ul className="nav-links">
                        <li><a onClick={this.scrollToTop}>Home</a></li>
                        <li><a href="https://docs.google.com/document/d/1oVQIX9M9sUgiY9tINFhgZ-vgE2iDG0FAiQSON26Zxuo//export?format=pdf&attachment=false" target="_blank">Resume</a></li>
                        <li><a className="experience-link" to="experience-section-header" onClick={this.scrollToExperience}>Experience</a></li>
                        <li><a className="project-link" to="project-section-header" onClick={this.scrollToProjects}>Projects</a></li>
                    </ul>
                </nav>
                
            </div>
        );

    }
    
}
export default NavLinks;