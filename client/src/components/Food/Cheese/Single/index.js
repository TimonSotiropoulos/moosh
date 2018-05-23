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
// Interface Imports
// -------------------------------------------
import { asFoodItem } from '../../../../interface';
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
            <svg xmlns="http://www.w3.org/2000/svg" x={5} y={11} width={40} viewBox="0 0 100.3 61.9">
            <title>
                Single_Cheese
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.cheeseYellowA].join(" ")} d="M31.7 0H100.4V61.9H31.7z"/>
                    <path class={[Fill.cheeseYellowB].join(" ")} d="M0 0H31.7V61.9H0z"/>
                    <circle class={[Fill.cheeseYellowB].join(" ")} cx="48.9" cy="46.1" r="7.9"/>
                    <circle class={[Fill.cheeseYellowB].join(" ")} cx="52.8" cy="18.8" r="5.3"/>
                    <circle class={[Fill.cheeseYellowA].join(" ")} cx="19" cy="33.8" r="7.3"/>
                    <circle class={[Fill.cheeseYellowA].join(" ")} cx="9.9" cy="13.5" r="3.4"/>
                    <circle class={[Fill.cheeseYellowB].join(" ")} cx="79" cy="24.5" r="11.1"/>
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

export default asFoodItem(Single);
