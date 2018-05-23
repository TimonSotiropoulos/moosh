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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.1 128.6">
            <title>
                Single_Carrot
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.carrotGreenA].join(" ")} d="M5.51 24.95L3.39 0.9 5.01 0 9.6 15.78 10.49 15.83 10.05 2.24 11.34 1.85 13.24 2.85 15.2 15.72 16.54 6.83 17.6 6.99 18.5 16.05 22.69 0.56 24.76 1.46 24.76 4.76 20.79 25.9 5.51 24.95z"/>
                    <circle class={[Fill.carrotOrangeA].join(" ")} cx="13.6" cy="32.8" r="13.6"/>
                    <circle class={[Fill.carrotOrangeA].join(" ")} cx="13.6" cy="121.1" r="7.5"/>
                    <path class={[Fill.carrotOrangeA].join(" ")} d="M27.12 33.56L27.08 34.18 25.12 62.76 24.81 67.25 24.59 70.48 24.28 74.97 21.13 121.06 6.02 121.06 5.06 107.08 4.74 102.6 0.99 47.78 0.68 43.3 0.02 33.71 27.12 33.56z"/>
                    <path class={[Fill.carrotOrangeB].join(" ")} d="M.68 43.3H10a2.25 2.25 0 0 1 2.24 2.24 2 2 0 0 1-.13.74A2.22 2.22 0 0 1 10 47.78H1zM16.31 62.76h8.81l-.31 4.48h-8.5a2.24 2.24 0 1 1 0-4.48zM20 70.49h4.62L24.28 75H20a2.24 2.24 0 0 1 0-4.48zM4.74 102.6H9.46a2.24 2.24 0 1 1 0 4.47H5.06z"/>
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
