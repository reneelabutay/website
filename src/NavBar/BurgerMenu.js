import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function BurgerMenu() {
    return (
        <Menu right>
            <a className="home">Home</a>
            <a className="about-me">About</a>
            <a className="resume">Resume</a>
            <a className="projects" href="/Projects">Projects</a>
        </Menu> 
    );
}
export default BurgerMenu;