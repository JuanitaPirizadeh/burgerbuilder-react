import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';


const controls = [
    {label: 'Sallad', type: 'sallad'},
    {label: 'Facon', type: 'facon'},
    {label: 'Greenbeef', type: 'greenbeef'},
    {label: 'Cheese', type: 'cheese'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
    </div>
);

export default buildControls; 