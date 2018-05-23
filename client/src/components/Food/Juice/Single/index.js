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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62.4 91.8">
            <title>
                Single_Juice
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.juiceRed].join(" ")} d="M0 21.5H22.5V91.8H0z"/>
                    <path class={[Fill.juiceRed].join(" ")} d="M11.27 3.78L0 21.53 22.53 21.53 11.27 3.78z"/>
                    <path class={[Fill.juiceOrange].join(" ")} d="M51.13 3.78L11.27 3.78 22.48 21.53 62.39 21.53 51.13 3.78z"/>
                    <path class={[Fill.juiceOrangeAlt].join(" ")} d="M22.5 21.5H62.4V91.8H22.5zM11.9 0H51.8V4.6H11.9z"/>
                    <path class={[Fill.juiceRed].join(" ")} d="M10.7 0H11.899999999999999V4.6H10.7z"/>
                    <circle class={[Fill.juiceOffWhite].join(" ")} cx="42.4" cy="56.7" r="7.5"/>
                    <path class={[Fill.juiceOffWhite].join(" ")} d="M36.3 69.6H48.599999999999994V74.19999999999999H36.3zM47 44.26c-3.43-1.68-5.62-1.68-9.05 0l-1.5-3.07C41 39 43.9 39 48.46 41.19z"/>
                    <path class={[Fill.juiceOffWhiteAlt].join(" ")} d="M4.1 39.1H18.4V74.1H4.1z"/>
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
