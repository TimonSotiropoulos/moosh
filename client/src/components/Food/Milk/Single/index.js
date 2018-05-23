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

        const { width, height, xPos, yPos, active, onClick } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={xPos} y={yPos} width={125} height={125} viewBox="0 0 50 50" onClick={onClick}>
            <polygon className={[Fill.transparent].join(" ")} points="0,0 0,50, 50,50, 50,0" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82.8 147.1">
            <title>
                Single_Milk
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.white].join(" ")} d="M0 36.2H82.8V147H0zM73.06 1.2A1.19 1.19 0 0 0 71.87 0H11.14A1.21 1.21 0 0 0 10 1.2V32.61a1.2 1.2 0 0 0 1.19 1.2H71.87a1.19 1.19 0 0 0 1.19-1.2V1.2z"/>
                    <path class={[Fill.milkWhite].join(" ")} d="M82.81 36.22L0 36.22 9.95 9.95 72.87 9.95 82.81 36.22z"/>
                    <path class={[Fill.milkBlueA].join(" ")} d="M55.47 23.8L28.84 23.72 28.84 20.01 55.47 20.09 55.47 23.8z"/>
                    <path class={[Fill.milkBlueA].join(" ")} d="M55.47,23.47c0,3.07-6,5.57-13.32,5.57s-13.31-2.5-13.31-5.57,5.95-5.57,13.31-5.57S55.47,20.39,55.47,23.47Z"/>
                    <path class={[Fill.milkBlueB].join(" ")} d="M55.47 20.28c0 3.07-6 5.57-13.32 5.57s-13.31-2.5-13.31-5.57 5.95-5.55 13.31-5.55S55.47 17.21 55.47 20.28zM82.81 55.55V36.22H0V55.55zM0 136.2H82.8V147.1H0zM0 131H82.8V133.6H0z"/>
                </g>
            </g>
        </svg>
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
