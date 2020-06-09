import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class NavLinks extends Component {

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
      }

    scrollToTop() {
        scroll.scrollToTop();
    }

    scrollToResume() {
        scroller.scrollTo('resume-section-spacer', {
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
                        <li><a className="resume-link" to="resume-page" onClick={this.scrollToResume}>Resume</a></li>
                        <li><a className="project-link" to="project-section-header" onClick={this.scrollToProjects}>Projects</a></li>
                    </ul>
                </nav>
                
            </div>
        );

    }
    
}
export default NavLinks;