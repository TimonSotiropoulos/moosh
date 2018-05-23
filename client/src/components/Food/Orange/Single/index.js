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

        const eggColorMain = (this.props.active) ? Fill.eggBrown : Fill.itemGreyA;
        const eggColorAlt = (this.props.active) ? Fill.eggBrownShade : Fill.itemGreyB;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={xPos} y={yPos} width={125} height={125} viewBox="0 0 50 50" onClick={onClick}>
            <polygon className={[Fill.transparent].join(" ")} points="0,0 0,50, 50,50, 50,0" />
            <svg xmlns="http://www.w3.org/2000/svg" x={5} y={5} width={34} viewBox="0 0 83 99.2">
            <title>
                Single_Orange
            </title>
            <g>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[Fill.orangeGreenA].join(" ")} d="M42.34,32.42a28,28,0,0,0,23.15-8.79A26.66,26.66,0,0,0,71.78.1,28,28,0,0,0,48.66,8.91,26.66,26.66,0,0,0,42.34,32.42Z"/>
                        <path class={[Fill.orangeGreenB, MixBlend.multiply].join(" ")} d="M42.34,32.41a27.94,27.94,0,0,0,23.15-8.78A26.67,26.67,0,0,0,71.79.11L61.66,11.43l6.33.85-8.44,1.27Z"/>
                        <path class={[Fill.orangeA].join(" ")} d="M83,57.74A41.48,41.48,0,1,1,41.47,16.26,41.28,41.28,0,0,1,83,57.74Z"/>
                        <path class={[Fill.orangeGreenC, MixBlend.multiply].join(" ")} d="M76.57,79.85a41.38,41.38,0,0,1-27,18.57c-7.21-10.67-8.09-26.23-8.09-33.33Z"/>
                        <path class={[Fill.orangeB].join(" ")} d="M20.11 40.49A3.1 3.1 0 1 1 17 37.4 3.1 3.1 0 0 1 20.11 40.49zM24.14 47.48a1.38 1.38 0 1 1-1.38-1.38A1.38 1.38 0 0 1 24.14 47.48zM30.87 27.5a2.12 2.12 0 1 1-2.12-2.12A2.11 2.11 0 0 1 30.87 27.5z"/>
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
