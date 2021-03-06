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
                <svg xmlns="http://www.w3.org/2000/svg" x={0} y={10} viewBox="0 0 114.3 67.2">
                    <title>
                        Single_Eggs
                    </title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path class={[Fill.eggBrown].join(" ")} d="M52.6,26.89c0,15.39-9.45,27.87-21.12,27.87S10.36,42.28,10.36,26.89,19.82,0,31.48,0,52.6,11.49,52.6,26.89Z"/>
                            <path class={[Fill.eggBrownShade].join(" ")} d="M31.52,0V54.75c11.64,0,21.08-12.49,21.08-27.86S43.17,0,31.52,0Z"/>
                            <path class={[Fill.eggBrown].join(" ")} d="M103.93,26.89c0,15.39-9.47,27.87-21.13,27.87S61.69,42.28,61.69,26.89,71.15,0,82.8,0,103.93,11.49,103.93,26.89Z"/>
                            <path class={[Fill.eggBrownShade].join(" ")} d="M82.83,0V54.75c11.64,0,21.1-12.49,21.1-27.87S94.47,0,82.83,0Z"/>
                            <path class={[Fill.itemGreyA].join(" ")} d="M109.84,24.69H4.63a1.34,1.34,0,0,0-1.33,2L18.77,64.63a3.74,3.74,0,0,0,3,2,115.09,115.09,0,0,0,23.09,0,3.77,3.77,0,0,0,3-2L53,51.93h0a10.47,10.47,0,0,1,4.43-.87c3,0,4.08.85,4.1.86l5.18,12.7a3.69,3.69,0,0,0,3,2,152.54,152.54,0,0,0,23.1,0,3.66,3.66,0,0,0,3-2l15.47-37.94A1.34,1.34,0,0,0,109.84,24.69Z"/>
                            <path class={[Fill.itemGreyB].join(" ")} d="M109.84,24.69H57.9V51.1a7.14,7.14,0,0,1,3.59.83l5.18,12.7a3.69,3.69,0,0,0,3,2,152.54,152.54,0,0,0,23.1,0,3.66,3.66,0,0,0,3-2l15.47-37.94A1.34,1.34,0,0,0,109.84,24.69Z"/>
                            <path class={[Fill.itemGreyC].join(" ")} d="M114.35,27.26a1.5,1.5,0,0,1-1.5,1.5H1.51A1.51,1.51,0,0,1,0,27.26V26.2a1.51,1.51,0,0,1,1.51-1.51H112.86a1.51,1.51,0,0,1,1.5,1.51Z"/>
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
