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
            <svg xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 91.8 116">
            <title>
                Single_Chips
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.chipsGreenA].join(" ")} d="M91.76,5.73V0H0V5.73S6.69,9.24,6.69,58,0,110.24,0,110.24V116H91.76v-5.73s-6.69-3.5-6.69-52.25S91.76,5.73,91.76,5.73Z"/>
                    <path class={[Fill.chipsGreenB].join(" ")} d="M0 0H91.8V5.7H0z"/>
                    <path class={[Fill.chipsGreenA].join(" ")} d="M1.3 1.4H90.3V2.5999999999999996H1.3zM1.3 3H90.3V4.2H1.3z"/>
                    <path class={[Fill.chipsGreenB].join(" ")} d="M0 110.3H91.8V116H0z"/>
                    <path class={[Fill.chipsGreenA].join(" ")} d="M1.3 111.6H90.3V112.8H1.3zM1.3 113.3H90.3V114.5H1.3z"/>
                    <circle class={[Fill.chipsGreenC].join(" ")} cx="46" cy="58" r="32.4"/>
                    <path class={[Fill.chipsLightBrown].join(" ")} d="M37.5,51.54s-1.75-4.48.61-7.68S44,38.49,48.36,40.28,59,49.16,64,52.22s6.38,6.12,1.75,10.59-9,5.74-16.86,4.25S37.5,51.54,37.5,51.54Z"/>
                    <path class={[Fill.chipsLightBrown].join(" ")} d="M31,52.76s5.32-1.67,9.27,1.22,4.63,3.8,9.72,4.41,9,2.43,5.16,9.19S42.89,76.3,36.66,73.72,26,65.75,25.73,61.19A8.26,8.26,0,0,1,31,52.76Z"/>
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
