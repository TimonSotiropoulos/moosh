// *******************************************************
// Interface
// -------------------------------------------------------
// This is the interface elements for each screen
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component, Fragment } from 'react';
// --------------------------------

// *******************************************
// Component Imports
// -------------------------------------------
import Counter from './Counter';
// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Animation, Fill } from '../../styles';
// --------------------------------

class Interface extends Component {

    render() {
        return (
            <Fragment>
                <Counter value={this.props.counter} />
            </Fragment>
        );
    }
}

Interface.defaultProps = {
    counter: 10
    // xPos: 0,
    // yPos: 0,
    // width: 1314.33,
    // height: 468
}

export default Interface;
