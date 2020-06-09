import React, {Component} from 'react';
import BurgerMenu from './BurgerMenu';
import NavLinks from './NavLinks';
import { Link, animateScroll as scroll } from 'react-scroll';

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

  render () {
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
          <p>Renee Labutay</p>
        </div>
        <div className="navigation-menu">
          {navlinks}
        </div>
      </div>
      
    );
  }
}
export default NavBar;