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
import { Fill, MixBlend, Opacity } from '../../../../styles';
// --------------------------------

class Single extends Component {

    render() {

        const { width, height, xPos, yPos, active, onClick } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={xPos} y={yPos} width={125} height={125} viewBox="0 0 50 50" onClick={onClick}>
            <polygon className={[Fill.transparent].join(" ")} points="0,0 0,50, 50,50, 50,0" />
            <svg xmlns="http://www.w3.org/2000/svg" x={12} y={5} width={26} viewBox="0 0 58.5 69.6">
            <title>
                Single_Cupcake
            </title>
            <g class="cls-1">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[Fill.cupcakeGreen].join(" ")} d="M41.35,11.28a11.5,11.5,0,0,1-8.92,4.34,11.44,11.44,0,0,1,2.16-9.68,11.3,11.3,0,0,1,8.92-4.32A11.34,11.34,0,0,1,41.35,11.28Z"/>
                        <path class={[Fill.cupcakePinkA].join(" ")} d="M36.43,9.74a13.93,13.93,0,0,1-.11,1.77.48.48,0,0,1,0,.19c0,.13,0,.27-.07.4a2,2,0,0,1-2,1.47h-10a2,2,0,0,1-2-1.55.87.87,0,0,1,0-.22A13.08,13.08,0,0,1,22,9.74C22,4.36,25.25,0,29.22,0S36.43,4.36,36.43,9.74Z"/>
                        <circle class={[Fill.cupcakePinkB].join(" ")} cx="26.9" cy="4.6" r="1.8"/>
                        <circle class={[Fill.cupcakePinkB].join(" ")} cx="32.9" cy="7.8" r="1.7"/>
                        <circle class={[Fill.cupcakePinkB].join(" ")} cx="27.7" cy="10.5" r="1.3"/>
                        <path class={[Fill.cupcakeOrange].join(" ")} d="M56.65,34.54a5.78,5.78,0,0,0-5.78-5.78H7.57A5.78,5.78,0,0,0,1.8,34.54h0a5.78,5.78,0,0,0,5.78,5.78h43.3a5.78,5.78,0,0,0,5.78-5.78Z"/>
                        <path class={[Fill.white].join(" ")} d="M53.78,24.67A5.18,5.18,0,0,0,48.6,19.5H9.84a5.17,5.17,0,0,0-5.17,5.17h0a5.17,5.17,0,0,0,5.17,5.18H48.6a5.18,5.18,0,0,0,5.18-5.18Z"/>
                        <path class={[Fill.white].join(" ")} d="M48.36,16.4a4,4,0,0,0-4-4H14.11a4,4,0,0,0-4,4h0a4,4,0,0,0,4,4H44.33a4,4,0,0,0,4-4Z"/>
                        <path class={[Fill.cupcakePinkC].join(" ")} d="M58.45 33.09L54.44 69.6 4.01 69.6 0 33.09 58.45 33.09z"/>
                        <path class={[Fill.cupcakePinkD, Opacity._08, MixBlend.multiply].join(" ")} d="M10.23 67.19L8.09 35.74 5.7 35.74 8.12 67.19 10.23 67.19zM15.43 67.19L13.78 35.74 11.39 35.74 13.33 67.19 15.43 67.19z"/>
                    </g>
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
