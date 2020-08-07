import React, {Component} from 'react';
import BurgerMenu from './BurgerMenu';
import NavLinks from './NavLinks';
import { animateScroll as scroll, scroller } from 'react-scroll';

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '', 
      height: '', 
      showBurger: false
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.burgerVisibility = this.burgerVisibility.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  showSettings (event) {
      event.preventDefault();
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
	}
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.burgerVisibility();
  }
  burgerVisibility() {
    if(this.state.width < 650) {
			this.setState({
				showBurger: true
			});
		} else {
			this.setState({
				showBurger: false
			})
		}
  }



  scrollToTop() {
      scroll.scrollToTop();
  }

  render () {
    //not going to implement burger bar yet
    const showBurger = this.state.showBurger;
    let navlinks;
    if (showBurger) {
      console.log("burger is visible")
      // navlinks = <BurgerMenu/>
      navlinks = <NavLinks/>
    } else  {
      console.log("no burger")
      navlinks = <NavLinks/>
    }
    
    return (
      <div className="header-bar">
        <div className="title">
          <a onClick={this.scrollToTop}>
            <img src={require("../Images/logo.png")} id="name-logo"></img>
          </a>
          
        </div>
        <div className="nav-center">
           
        </div>
        <div className="navigation-menu">
          {navlinks}
        </div>
      </div>
      
    );
  }
}
export default NavBar;