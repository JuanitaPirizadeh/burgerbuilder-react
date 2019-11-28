import React, {Component} from 'react';
import propTypes from 'prop-types'; 

import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component {
    render(){

    let ingredient = null;

    switch (this.props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;

            case ('bread-top'):
                ingredient = (
                        <div className={classes.BreadTop}>
                       <div className={classes.Seeds1}></div> 
                       <div className={classes.Seeds2}></div>
                        </div>
                        );
                break; 


                case ('greenbeef'):
                    ingredient = <div className={classes.Greenbeef}></div>;
                    break;
                    
                    case ('cheese'):
                            ingredient = <div className={classes.Notcheese}></div>;
                            break;
                            
                            case ('facon'):
                                    ingredient = <div className={classes.Facon}></div>;
                                    break;
                                    
                                    case ('sallad'):
                                            ingredient = <div className={classes.Sallad}></div>;
                                            break;
                                            
                                            default: 
                                            ingredient = null; 


    }
return ingredient; 
}
}
BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired 
}
export default BurgerIngredient; 
