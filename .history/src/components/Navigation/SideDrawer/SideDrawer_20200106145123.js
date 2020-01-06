import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
    //... 
    return (
        <div className={classes}>
            <Logo />
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    );
}

export default sideDrawer; 