import React from 'react';

import classes from './DrawerToggle.css'; 

const drawerToggle = (props) => (
    <div onClick={props.clicked}>MENU
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle