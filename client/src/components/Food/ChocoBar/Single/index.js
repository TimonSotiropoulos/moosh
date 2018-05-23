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
            <svg xmlns="http://www.w3.org/2000/svg" x={5} y={18} width={40} viewBox="0 0 58.7 24.6">
            <title>
                Single_Choc
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.chocoBarBlue].join(" ")} d="M58.67,4.4V20.16a4.38,4.38,0,0,1-4.38,4.38H36.14a4.38,4.38,0,0,1-4.38-4.38V4.4A4.39,4.39,0,0,1,36.14,0H54.28A4.39,4.39,0,0,1,58.67,4.4Z"/>
                    <path class={[Fill.chocoBarBrownA].join(" ")} d="M58.67,4.4V20.16a4.38,4.38,0,0,1-4.38,4.38H40.56a4.19,4.19,0,0,1-3.71-4.17V4.2A4.19,4.19,0,0,1,39.53.29,3.77,3.77,0,0,1,40.65,0H54.28A4.39,4.39,0,0,1,58.67,4.4Z"/>
                    <path class={[Fill.chocoBarBrownA].join(" ")} d="M16.8 0H54.599999999999994V24.6H16.8z"/>
                    <rect class={[Fill.chocoBarBrownB].join(" ")} width="31.8" height="24.6" rx="4.2" ry="4.2"/>
                    <path class={[Fill.chocoBarBrownC].join(" ")} d="M58.67,4.4V6.63l0,0a3.4,3.4,0,0,0-2.32-.91,3.34,3.34,0,0,0-1.8.52,3.1,3.1,0,0,0-1.46,2.61v3a3.21,3.21,0,0,1-3.27,3.13A3.35,3.35,0,0,1,47.47,14a3,3,0,0,1-1-2.22v-3a3,3,0,0,0-1-2.22,3.41,3.41,0,0,0-2.32-.91A3.21,3.21,0,0,0,40,8.84v3a3.2,3.2,0,0,1-3.11,3.13h-.16A3.35,3.35,0,0,1,34.37,14a3.09,3.09,0,0,1-1-2.22v-3a3.08,3.08,0,0,0-1-2.22,3.47,3.47,0,0,0-.68-.5V4.2A4.22,4.22,0,0,0,27.57,0H41l-.4,0H54.28A4.39,4.39,0,0,1,58.67,4.4Z"/>
                    <path class={[Fill.chocoBarLightBrownA].join(" ")} d="M30,4.2V20.37a2.45,2.45,0,0,1-2.44,2.44H4.2a2.44,2.44,0,0,1-2.44-2.44V4.2A2.44,2.44,0,0,1,4.2,1.75H27.57A2.45,2.45,0,0,1,30,4.2Z"/>
                    <path class={[Fill.chocoBarLightBrownB].join(" ")} d="M27.57,1.75H4.2A2.44,2.44,0,0,0,1.76,4.2V8.49H4.13a3.22,3.22,0,0,0,6.27,1,1.69,1.69,0,0,0,3-1h9a2.57,2.57,0,1,0,5.15,0H30V4.2A2.45,2.45,0,0,0,27.57,1.75Z"/>
                    <circle class={[Fill.chocoBarLightBrownC].join(" ")} cx="6.3" cy="17.1" r="3.2"/>
                    <circle class={[Fill.chocoBarLightBrownC].join(" ")} cx="11.7" cy="19.8" r="2.1"/>
                    <circle class={[Fill.chocoBarLightBrownC].join(" ")} cx="16.9" cy="15.8" r="3.3"/>
                    <circle class={[Fill.chocoBarLightBrownC].join(" ")} cx="20.8" cy="17.1" r="2.5"/>
                    <path class={[Fill.chocoBarLightBrownC].join(" ")} d="M30,17.28v3.09a2.45,2.45,0,0,1-2.44,2.44h-1a3.24,3.24,0,0,1-1.16-2.51A3.28,3.28,0,0,1,28.47,17h.24A3.33,3.33,0,0,1,30,17.28Z"/>
                    <path class={[Fill.chocoBarLightBrownC].join(" ")} d="M30 13.7v4.25A2.18 2.18 0 0 1 28.47 17 2.14 2.14 0 0 1 30 13.7zM19.76 22.82H15a2.41 2.41 0 0 1 4.78 0z"/>
                    <circle class={[Fill.chocoBarLightBrownC].join(" ")} cx="25" cy="14.2" r="1.6"/>
                    <path class={[Fill.chocoBarLightBrownC].join(" ")} d="M4.72,17.41a2.15,2.15,0,0,1-2.14,2.14,2.08,2.08,0,0,1-.83-.17V15.44a2.23,2.23,0,0,1,.83-.17,2.26,2.26,0,0,1,.88.18A2.15,2.15,0,0,1,4.72,17.41Z"/>
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
