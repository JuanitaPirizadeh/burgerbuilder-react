import React, {Component} from 'react';
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger'

class BurgerBuilder extends Component {
    render(){
        return(
<Aux>
    <div>Burger</div>
    <div>Build Controls</div>
</Aux>
        );
    }
}

export default BurgerBuilder;