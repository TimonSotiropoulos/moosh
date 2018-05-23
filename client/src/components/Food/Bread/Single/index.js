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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.9 139.3">
            <title>
                Single_BreadStick
            </title>
            <g>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[Fill.breadYellowA].join(" ")} d="M9.32,0c5.74-.09,10.92,31,11.55,69.46s-3.51,69.71-9.27,69.8S.7,108.25.06,69.8,3.58.09,9.32,0Z"/>
                        <path class={[Fill.breadYellowB].join(" ")} d="M4.88,23.17c2.41-.29,6.87,20.91,10,47.32s3.64,48.06,1.23,48.34Z"/>
                        <path class={[Fill.breadYellowC, MixBlend.multiply].join(" ")} d="M4.88,23.17l11.21,95.66c-2.41.3-6.88-20.89-10-47.32S2.47,23.45,4.88,23.17Z"/>
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
