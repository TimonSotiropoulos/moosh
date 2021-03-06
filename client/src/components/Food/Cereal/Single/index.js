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
            <svg xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 115.3 126.7">
            <title>
                Single_Cereal
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.cerealBrown].join(" ")} d="M0 0H28.2V126.7H0z"/>
                    <path class={[Fill.cerealBrownShade].join(" ")} d="M28.2 0H115.3V126.7H28.2z"/>
                    <path class={[Fill.cerealBrownLight].join(" ")} d="M5.8 28.7H22.5V98.10000000000001H5.8z"/>
                    <path class={[Fill.cerealBrownLighter].join(" ")} d="M57.83 61.59c1.17.21 3.09 3 2.58 5.91s-2.53 5-4.47 4.65-3.1-3-2.58-5.92S56.66 61.38 57.83 61.59zM65.45 54c1.17.21 3.1 3 2.57 5.91s-2.52 5-4.47 4.65-3.12-3-2.59-5.91S64.27 53.79 65.45 54zM71.15 57c-1.94-.35-3.09-3-2.57-5.92A6.44 6.44 0 0 1 71 47.21L76.18 42a.6.6 0 0 1 .85.84l-3.67 3.67a5 5 0 0 1 2 2.83l6.81-6.81a.59.59 0 0 1 .84 0 .58.58 0 0 1 0 .84l-7.36 7.36a5.78 5.78 0 0 1-.06 1.58C75.1 55.23 73.09 57.31 71.15 57zM71.56 75.29c.21 1.17-1.73 4-4.65 4.48S61.33 79.15 61 77.2s1.75-3.95 4.67-4.47S71.35 74.13 71.56 75.29zM79.15 67.71c.21 1.17-1.73 3.95-4.65 4.47s-5.57-.63-5.91-2.58 1.73-3.95 4.65-4.47S78.94 66.54 79.15 67.71zM82.42 57.48l7.36-7.36a.6.6 0 1 1 .84.84l-6.81 6.81a5 5 0 0 1 2.83 2l3.66-3.66a.6.6 0 0 1 .84.84l-5.21 5.2a6.38 6.38 0 0 1-3.84 2.4c-2.92.52-5.57-.62-5.92-2.57s1.73-3.95 4.65-4.47A5.8 5.8 0 0 1 82.42 57.48z"/>
                    <path class={[Fill.cerealBrownLighter].join(" ")} d="M85.46 46.85L89.36 43a.6.6 0 0 1 .84.84l-3.91 3.91a6.17 6.17 0 0 1-1.55 5.77c-2.08 2.11-4.91 2.7-6.32 1.31s-.86-4.22 1.22-6.33A6.12 6.12 0 0 1 85.46 46.85zM77.55 55.6a1.19 1.19 0 0 1 0 1.68l-27 27a1.18 1.18 0 0 1-1.67 0 1.2 1.2 0 0 1 0-1.69l27-27A1.19 1.19 0 0 1 77.55 55.6z"/>
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
