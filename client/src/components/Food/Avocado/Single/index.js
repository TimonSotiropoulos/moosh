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
            <svg xmlns="http://www.w3.org/2000/svg" x={10} y={5} width={25} viewBox="0 0 56.6 80.8">
            <title>
                Single_Avocado
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.avocadoGreenA].join(" ")} d="M26.2 0H30.799999999999997V8.4H26.2z"/>
                    <path class={[Fill.avocadoGreenB].join(" ")} d="M55,43.37h0l-.18-.52h0L45.39,15.93h0a17.9,17.9,0,0,0-34.2,0h0L1.72,42.84h0l-.18.52h0a28.28,28.28,0,1,0,53.49,0Z"/>
                    <circle class={[Fill.avocadoGreenC].join(" ")} cx="21.6" cy="17" r="4.3"/>
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
