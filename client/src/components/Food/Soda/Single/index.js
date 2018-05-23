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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.2 143">
            <title>
                Single_Cola
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.sodaOffWhite].join(" ")} d="M41.62,24.51c-2.91-3.82-5.94-7.41-7.81-10.45V0H15.66V13.68s0,0,0,.06c-1.87,3.11-5,6.84-8,10.77C3.67,29.76,0,35.39,0,40.47V53.7A6.8,6.8,0,0,0,2.56,59a2.14,2.14,0,0,0,.25.19s0,0,0,0a1.56,1.56,0,0,1,.45,1.08,1.58,1.58,0,0,1-.45,1.08s0,0,0,0a1.42,1.42,0,0,0-.25.19A6.79,6.79,0,0,0,0,66.95v67.21a8.77,8.77,0,0,0,16.71,3.76,8.73,8.73,0,0,0,15.82,0,8.77,8.77,0,0,0,16.71-3.76V66.95a6.82,6.82,0,0,0-2.5-5.28h0a1.75,1.75,0,0,0-.36-.26s0,0,0,0a1.47,1.47,0,0,1-.41-1,1.51,1.51,0,0,1,.41-1s0,0,0,0a1.74,1.74,0,0,1,.36-.26l0,0a6.78,6.78,0,0,0,2.5-5.27V40.47C49.24,35.37,45.58,29.75,41.62,24.51Z"/>
                    <path class={[Fill.sodaBrown].join(" ")} d="M45.82,40.47V53.7A3.4,3.4,0,0,1,43.25,57a3,3,0,0,1-.77.11,3.2,3.2,0,0,0,0,6.4,2.26,2.26,0,0,1,.71.1,3.42,3.42,0,0,1,2.64,3.33v64.16c-1.25,1.24-2.48,2.48-3.74,3.72H34.85l-2.31-4.88-2.32,4.88H19l-2.3-4.88-2.33,4.88h-7c-1.49-1.47-2.5-2.52-4-4V66.95A3.4,3.4,0,0,1,6,63.64a3.14,3.14,0,0,1,.87-.12H7a3.2,3.2,0,0,0,0-6.4H6.86a2.51,2.51,0,0,1-.79-.1A3.41,3.41,0,0,1,3.43,53.7V40.47c0-4.13,3.49-9.36,6.92-13.91.8-1,1.63-2.11,2.44-3.13.57-.73,1.12-1.46,1.66-2.16H34.77l1.61,2.07c.84,1.06,1.67,2.14,2.52,3.23C42.11,30.83,45.82,36.28,45.82,40.47Z"/>
                    <path class={[Fill.sodaRed].join(" ")} d="M15 0H34.4V10H15z"/>
                    <path class={[Fill.sodaBrownAlt].join(" ")} d="M38 41.62a2.33 2.33 0 1 1-2.33-2.33A2.33 2.33 0 0 1 38 41.62zM20.11 55.64a1.85 1.85 0 1 1-1.85-1.85A1.85 1.85 0 0 1 20.11 55.64zM31.82 59.64A2.85 2.85 0 1 1 29 56.78 2.86 2.86 0 0 1 31.82 59.64zM38 71.48a1.28 1.28 0 1 1-1.28-1.28A1.28 1.28 0 0 1 38 71.48z"/>
                    <circle class={[Fill.sodaBrownAlt].join(" ")} cx="12.6" cy="68.2" r="1.6"/>
                    <circle class={[Fill.sodaBrownAlt].join(" ")} cx="29" cy="36.5" r="1.6"/>
                    <path class={[Fill.sodaRed].join(" ")} d="M0 77H49.2V112.3H0z"/>
                    <path class={[Fill.sodaOffWhiteAlt].join(" ")} d="M18.27,39.29a4.84,4.84,0,1,1-4.84-4.84A4.84,4.84,0,0,1,18.27,39.29Z"/>
                    <ellipse class={[Fill.sodaOffWhite].join(" ")} cx="24.6" cy="94.7" rx="12.2" ry="12.2"/>
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
