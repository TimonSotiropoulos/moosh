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
import { Fill, MixBlend } from '../../../../styles';
// --------------------------------

class Single extends Component {

    render() {

        const { width, height, xPos, yPos, active, onClick } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={xPos} y={yPos} width={125} height={125} viewBox="0 0 50 50" onClick={onClick}>
            <polygon className={[Fill.transparent].join(" ")} points="0,0 0,50, 50,50, 50,0" />
            <svg xmlns="http://www.w3.org/2000/svg" x={10} y={5} width={20} height={45} viewBox="0 0 52.3 129.3">
            <title>
                Single_Icecream
            </title>
            <g class="cls-1">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <circle class={[Fill.iceCreamGreenA].join(" ")} cx="26.1" cy="25.8" r="25.8" transform="translate(-0.05 0.05) rotate(-0.12)"/>
                        <path class={[Fill.iceCreamBrownA].join(" ")} d="M52.24,34.19l-1,4L48.17,50.48,46.39,57.6,44.56,65l-.84,3.33v.07l-1.4,5.58-.42,1.69L41.06,79l-1.81,7.25-1.4,5.59L36.56,97l-.84,3.33-.94,3.77L33.06,111l-1.83,7.34-.83,3.35-1.19,4.76v0l-.34,1.36a2.9,2.9,0,0,1-5.12,0l-.33-1.26L22,121.07l-.86-3.34-1.77-7L18,105.17l-1.38-5.43-.85-3.34-.89-3.51-1.82-7.16L11.2,78.41l-.84-3.36h0L8.93,69.46,8.5,67.73l-.86-3.34-1.83-7.2L4.39,51.61,1.28,39.35,0,34.3Z"/>
                        <path class={[Fill.iceCreamBrownB, MixBlend.multiply].join(" ")} d="M52.24,34.19H51.05l-11.94,12-4.6-4.58,7.36-7.39H37.69l-5.28,5.3-4.6-4.58.7-.7H22.93l.7.7-4.58,4.59-5.29-5.27H9.58L17,41.64l-4.57,4.6L.4,34.3H0l1.28,5.05,9,9-4.57,4.6L4.39,51.61l1.42,5.58,4.51,4.51-2.69,2.7.86,3.34,3.93-3.95L17,68.37,12.45,73l-3.51-3.5L10.34,75h0l.84,3.36,1.26-1.26,4.59,4.57-4,4,1.82,7.16,2.2,2.19L15.77,96.4l.85,3.34,2.56-2.57,4.6,4.58-4.58,4.6L18,105.17l1.42,5.58,4.38,4.36-2.62,2.63.86,3.34,3.86-3.87,4.5,4.49.83-3.35L28,115.1l4.58-4.59.49.49,1.73-6.91-2.24,2.24L28,101.75l4.58-4.6,3.19,3.18L36.56,97,34.62,95l3.24-3.25,1.4-5.59-.06.06-4.6-4.58,4.58-4.59L41.06,79l.83-3.34L41.26,75l1.05-1.06,1.4-5.58L39.17,72.9l-4.6-4.57,4.58-4.6,4.57,4.55L44.56,65l-3.33-3.31L45.81,57l.57.57,1.78-7.12-2.36,2.37-4.6-4.58,10-10.07ZM37,48.28l-4.58,4.6-4.6-4.58,4.58-4.59ZM21.2,68.36l4.58-4.6,4.6,4.58L25.8,72.93Zm9.22,13.33-4.58,4.6-4.6-4.58,4.58-4.59ZM21.17,55l4.58-4.6L30.36,55l-4.58,4.6Zm4.55-18,4.6,4.57-4.58,4.6-4.6-4.58Zm-6.67,6.7,4.6,4.57-4.58,4.6-4.59-4.58ZM7.82,55l4.58-4.6L17,55l-4.57,4.6Zm6.7,6.67,4.57-4.6,4.6,4.58-4.58,4.6Zm0,13.35,4.57-4.59L23.72,75l-4.58,4.6Zm0,13.36,4.58-4.6,4.6,4.58L19.16,93Zm15.9,20L25.88,113l-4.6-4.57,4.58-4.6Zm-4.61-8.76-4.6-4.58,4.58-4.6,4.6,4.58Zm11.25-11.3L32.53,93l-4.6-4.58,4.58-4.6Zm0-13.36L32.5,79.6,27.9,75l4.58-4.6Zm-4.61-8.75-4.6-4.58,4.58-4.6,4.6,4.58Zm11.25-11.3-4.58,4.6L34.53,55l4.59-4.6Z"/>
                        <path class={[Fill.iceCreamBrownC].join(" ")} transform="translate(-0.09 0.05) rotate(-0.12)" d="M0 34.3H52.2V50H0z"/>
                        <path class={[Fill.iceCreamGreenA].join(" ")} d="M22.67,34.25a8.22,8.22,0,1,1-8.23-8.2A8.22,8.22,0,0,1,22.67,34.25Z"/>
                        <circle class={[Fill.iceCreamGreenA].join(" ")} cx="23.5" cy="33.7" r="5.6" transform="translate(-0.06 0.05) rotate(-0.11)"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} transform="translate(-2.15 22.6) rotate(-33.96)" d="M34.9 13.5H36.9V16.1H34.9z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} transform="translate(-0.04 0.02) rotate(-0.15)" d="M6.9 14.4H8.9V17.4H6.9z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} d="M35.8 9.59L32.85 8.09 33.74 6.33 36.7 7.83 35.8 9.59z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} transform="translate(-5.66 31.01) rotate(-47.13)" d="M31.7 20.6H33.7V23.3H31.7z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} transform="translate(0 0.05) rotate(-0.09)" d="M30.2 1.8H32.3V3.8H30.2z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} d="M47.67 19.22L45.36 17.04 46.72 15.61 49.02 17.79 47.67 19.22z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} transform="translate(-4.8 12.47) rotate(-14)" d="M47.4 23.4H49.4V28.2H47.4z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} transform="translate(-4.19 8.26) rotate(-10.77)" d="M40.7 24.6H42.7V28.1H40.7z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} d="M23.43 26.07L22.71 24.24 25.31 23.21 26.04 25.04 23.43 26.07z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} transform="translate(-20.19 34.52) rotate(-79.25)" d="M9.4 28.5H12V30.5H9.4z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} d="M18.87 22.94L16.9 22.94 16.89 21.53 18.86 21.53 18.87 22.94z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} transform="translate(-1.86 8.65) rotate(-36.83)" d="M10.4 6.1H13.8V8.1H10.4z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} transform="translate(-22.42 24.54) rotate(-83.2)" d="M1.2 23.9H3.9000000000000004V25.9H1.2z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} transform="translate(2.22 25.7) rotate(-34.5)" d="M41.5 7.8H43.5V10.7H41.5z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} d="M42.84 18.85L40.54 18.86 40.54 16.89 42.84 16.88 42.84 18.85z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} transform="translate(-0.92 8.81) rotate(-18.5)" d="M24.8 6.2H28.400000000000002V8.2H24.8z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} transform="translate(0.04 5.17) rotate(-12.92)" d="M20.9 1.4H24.799999999999997V3.4H20.9z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} d="M18.21 15.29L15.09 13.55 16.04 11.83 19.17 13.56 18.21 15.29z"/>
                        <path class={[Fill.iceCreamBrownD].join(" ")} transform="translate(6.14 37.41) rotate(-76.91)" d="M25.6 12.9H27.6V16.7H25.6z"/>
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

export default asFoodItem(Single);
