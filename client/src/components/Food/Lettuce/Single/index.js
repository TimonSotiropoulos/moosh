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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 119.4 108.2">
            <title>
                Single_Lettuce
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <circle class={[Fill.lettuceGreenA].join(" ")} cx="56.4" cy="54.1" r="54.1" transform="translate(-10.94 93.74) rotate(-74.31)"/>
                    <path class={[Fill.lettuceGreenB].join(" ")} d="M54.8,56.4c-8.21-14.14-36-39.88-34.13-42.88a54.1,54.1,0,1,0,89.55,36.27C84.72,45.81,62,54.46,54.8,56.4Z"/>
                    <path class={[Fill.lettuceGreenC].join(" ")} d="M48.3,54.46c-1.6-6.44-2.77-13.33-.61-19.6s8.72-11.48,15.17-9.94c-.89-5,1.2-12.18,5.88-14.1a11.52,11.52,0,0,1,13.45,4c3.94-8.4,15.07-9.19,18-8.32,10.29,3.09,5.8,15.57.8,17C90.77,19,78.05,20.88,68.24,26.2S50.07,43.43,48.3,54.46Z"/>
                    <path class={[Fill.lettuceGreenD].join(" ")} d="M47 58.42C43.63 44.61 28.11 23.42 10 26.36 1.42 18.9 10.56 9 19.24 10.7c9.48 1.85 17.42 12 16.71 20.11 5-4 10.59-1.66 13.28 2.85S51.26 55.54 47 58.42zM5.3 71.83A7.28 7.28 0 0 1 0 64.35 9 9 0 0 1 6 56.53a10.39 10.39 0 0 1 9.81 1.81c1.75-3.13 5.74-5.39 9.27-4.74a8.89 8.89 0 0 1 7 7.28c3.94-1.37 9 .44 11.54 3.72C30.62 62.84 8.74 61.83 5.3 71.83z"/>
                    <path class={[Fill.lettuceGreenC].join(" ")} d="M35.5,104s-9.62-16.1.56-23.14C36.84,68.94,41.92,57.69,47.18,53c11.52-10.33,21.16-.75,21.16-.75s4.86-13.58,16-13.94,10.35,9.5,10.35,9.5,10.95-12.87,20-9.23,3.68,13.66-4.2,14.94c0,0-32.76-11.94-55,7.29C28,84.47,35.5,104,35.5,104Z"/>
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
