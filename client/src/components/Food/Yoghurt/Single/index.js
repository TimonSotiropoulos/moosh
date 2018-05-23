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
            <svg xmlns="http://www.w3.org/2000/svg" x={8} y={6} width={34} viewBox="0 0 82.9 92.3">
            <title>
                Single_Yoghurt
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.white].join(" ")} d="M4.43 6.46L4.43 13.93 11.57 92.35 41.43 92.35 41.43 6.46 4.43 6.46zM78.42 6.46L78.42 13.93 71.29 92.35 41.43 92.35 41.43 6.46 78.42 6.46z"/>
                    <rect class={[Fill.white].join(" ")} x={20} y={0} width={40} height={92} />
                    <path class={[Fill.yoghurtBlueA].join(" ")} d="M67.51,37.17H58.15a18.45,18.45,0,0,0-33.45,0H15.34V52.84H24.7a18.45,18.45,0,0,0,33.45,0h9.36Z"/>
                    <path class={[Fill.yoghurtGreyA].join(" ")} d="M4.4 6.5H78.4V14H4.4z"/>
                    <path class={[Fill.yoghurtGreyB].join(" ")} d="M41.43,0H3.27L0,2.12H41.43Z"/>
                    <path class={[Fill.yoghurtBlueB].join(" ")} d="M0 2.1H41.4V9.9H0z"/>
                    <path class={[Fill.yoghurtGreyB].join(" ")} d="M82.86,2.12,79.59,0H41.43V2.12Z"/>
                    <path class={[Fill.yoghurtBlueB].join(" ")} d="M82.86,2.12H41.43V9.94L82.66,10l.2-.13Z"/>
                    <path class={[Fill.yoghurtBlueA].join(" ")} d="M41.43 12H79.59l3.07-2L41.43 9.94zM0 9.94c1.28.83 2 1.23 3.27 2.05H41.43V9.94z"/>
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
