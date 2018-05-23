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
import { Fill, MixBlend } from '../../../../styles';
// --------------------------------

class Single extends Component {

    render() {

        const { width, height, xPos, yPos, active, onClick } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={xPos} y={yPos} width={125} height={125} viewBox="0 0 50 50" onClick={onClick}>
            <polygon className={[Fill.transparent].join(" ")} points="0,0 0,50, 50,50, 50,0" />
            <svg xmlns="http://www.w3.org/2000/svg" x={5} y={5} width={40} viewBox="0 0 64.9 63.2">
            <title>
                Single_Cherry
            </title>
            <g class="cls-1">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <circle class={[Fill.cherryRedA].join(" ")} cx="13.1" cy="43.1" r="13.1" transform="translate(-9.28 4.01) rotate(-12.89)"/>
                        <path class={[Fill.cherryRedB].join(" ")} d="M17.53,52A14.42,14.42,0,1,0,28.38,34.68,14.41,14.41,0,0,0,17.53,52Z"/>
                        <path class={[Fill.cherryBrownA, MixBlend.multiply].join(" ")} d="M10.1,55.73a12.64,12.64,0,0,0,5.93,0,11.87,11.87,0,0,0,2.55-.85,15,15,0,0,1-1.06-3.06,14.18,14.18,0,0,1,1.73-10.7Z"/>
                        <path class={[Fill.cherryBrownB].join(" ")} d="M37.74.83A3.09,3.09,0,0,0,33.36,1L30,4.64a3,3,0,0,0-.76,2.5A54,54,0,0,0,14.09,32.56a1.67,1.67,0,0,0,1.21,2,1.58,1.58,0,0,0,.41.06,1.67,1.67,0,0,0,1.62-1.26A51.53,51.53,0,0,1,28.6,12.48a46.17,46.17,0,0,0,.66,26.27,1.67,1.67,0,0,0,1.58,1.12,1.5,1.5,0,0,0,.55-.1,1.66,1.66,0,0,0,1-2.12A42.47,42.47,0,0,1,33,9.7a3.05,3.05,0,0,0,1.58-.87l3.35-3.63A3.11,3.11,0,0,0,37.74.83Z"/>
                        <path class={[Fill.cherryGreenA].join(" ")} d="M33.76,4.1a26.89,26.89,0,0,0,8.45,22.26,25.62,25.62,0,0,0,22.61,6.05,26.87,26.87,0,0,0-8.47-22.23A25.64,25.64,0,0,0,33.76,4.1Z"/>
                        <path class={[Fill.cherryGreenB, MixBlend.multiply].join(" ")} d="M33.76,4.1a26.87,26.87,0,0,0,8.45,22.25,25.64,25.64,0,0,0,22.6,6.06L53.93,22.67l-.82,6.09-1.22-8.12Z"/>
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
