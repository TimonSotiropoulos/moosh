// *******************************************************
// Button - Get Started
// -------------------------------------------------------
// Get Stared Button on the home page
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component, Fragment } from 'react';
// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Fill, Text } from '../../../../styles';
// --------------------------------

class Single extends Component {

    render() {

        const { width, height, xPos, yPos, active } = this.props;

        const eggColorMain = (this.props.active) ? Fill.eggBrown : Fill.itemGreyA;
        const eggColorAlt = (this.props.active) ? Fill.eggBrownShade : Fill.itemGreyB;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={0} y={0} width={50} height={50} viewBox="0 0 50 50" style={{backgroundColor: 'red'}}>
            </svg>
    )
}
}

Single.defaultProps = {
    active: true,
    width: 238,
    height: 67,
    xPos: 0,
    yPos: 0
}

export default Single;
