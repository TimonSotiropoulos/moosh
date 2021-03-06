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

        const eggColorMain = (this.props.active) ? Fill.eggBrown : Fill.itemGreyA;
        const eggColorAlt = (this.props.active) ? Fill.eggBrownShade : Fill.itemGreyB;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={xPos} y={yPos} width={125} height={125} viewBox="0 0 50 50" onClick={onClick}>
            <polygon className={[Fill.transparent].join(" ")} points="0,0 0,50, 50,50, 50,0" />
            <svg xmlns="http://www.w3.org/2000/svg" width={30} x={10} y={10} viewBox="0 0 60.6 61.1">
            <title>
                Single_Tomato
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.tomatoRedA].join(" ")} d="M37.73,5a19,19,0,0,0-7.58,1.68H30.1s0,0-.06,0a18.85,18.85,0,0,0-7.6-1.56C9.94,5.16-.1,17.6,0,32.87S10.36,57.53,22.85,60.36a31.6,31.6,0,0,0,7.65.76,31.21,31.21,0,0,0,7.64-.88c12.44-3,22.55-12.53,22.44-27.8S50.25,4.86,37.73,5Z"/>
                    <path class={[Fill.tomatoRedB].join(" ")} d="M37.73,5a19,19,0,0,0-7.58,1.68H30.1s0,0-.06,0l-.05,0,.4,54.5h.11a31.21,31.21,0,0,0,7.64-.88c12.44-3,22.55-12.53,22.44-27.8S50.25,4.86,37.73,5Z"/>
                    <path class={[Fill.tomatoGreen].join(" ")} d="M29.84,8.18c-1.09-4.12,5.81-2,8.32-7.33C36.29,7.16,35.1,5.46,29.84,8.18Z"/>
                    <path class={[Fill.tomatoGreen].join(" ")} d="M29.57,6.06a6.16,6.16,0,0,0,1.49.3c1.77.33,2.5,2.82,6.09,3.42C33.75,10.43,29,9.32,29.57,6.06Z"/>
                    <path class={[Fill.tomatoGreen].join(" ")} d="M31.12,6.36c-.68.16-.73-.19-1.52.07-2.82.91-3.49,3.17-7.12,3.21C25.73,10.83,30.51,9.16,31.12,6.36Z"/>
                    <path class={[Fill.tomatoGreen].join(" ")} d="M30.48,8.17c.09-3.74-5-2.36-8.82-7.2C23.33,5.38,25.73,7,30.48,8.17Z"/>
                    <path class={[Fill.tomatoGreen].join(" ")} d="M30.34,8.4C32.6,6.31,30.4,3.88,30,0,29.27,3.6,27.79,6.54,30.34,8.4Z"/>
                    <path class={[Fill.tomatoBrownA].join(" ")} d="M8.05,15.12c-1.55,1.86-2.81,4.15-2.52,6,.44,2.89,3.1,4.45,5.82,2.3.63-.51,5-8.7,4.73-10.45-.34-2.59-3.41-1.76-4.94-.76A15.34,15.34,0,0,0,8.05,15.12Z"/>
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
