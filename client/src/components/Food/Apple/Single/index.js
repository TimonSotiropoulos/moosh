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
            <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} x={5} y={10} viewBox="0 0 77.4 78">
                <title>
                Single_Apple
                </title>
                <g class="cls-1">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path class={[Fill.appleBrown].join(" ")} transform="translate(23.42 44.94) rotate(-89.92)" d="M28.6 8.5H39.900000000000006V12.9H28.6z"/>
                            <path class={[Fill.appleRed].join(" ")} d="M68.27,43.91A34.14,34.14,0,1,1,21.17,12.25a24,24,0,0,1,2.35-.85,9.74,9.74,0,0,1,2.38-.28,10.29,10.29,0,0,1,8.3,4.22,10.33,10.33,0,0,1,8.33-4.18,10.14,10.14,0,0,1,2.38.29,24.3,24.3,0,0,1,2.34.86,34.08,34.08,0,0,1,21,31.59Z"/>
                            <path class={[Fill.appleGreenA].join(" ")} d="M33.94,11.07a27.82,27.82,0,0,0,22,11.17,26.5,26.5,0,0,0,21.54-11.1A27.82,27.82,0,0,0,55.49,0,26.56,26.56,0,0,0,33.94,11.07Z"/>
                            <path class={[Fill.appleGreenB, MixBlend.multiply].join(" ")} d="M33.95,11.07a27.81,27.81,0,0,0,22,11.17A26.52,26.52,0,0,0,77.44,11.15l-15.11.11,3.61,5.24-6.58-5.37Z"/>
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

export default Single;
