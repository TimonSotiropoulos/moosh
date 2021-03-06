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
import { Fill, MixBlend, Opacity } from '../../../../styles';
// --------------------------------

class Single extends Component {

    render() {

        const { width, height, xPos, yPos, active, onClick } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={xPos} y={yPos} width={125} height={125} viewBox="0 0 50 50" onClick={onClick}>
            <polygon className={[Fill.transparent].join(" ")} points="0,0 0,50, 50,50, 50,0" />
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} x={10} y={20} viewBox="0 0 77.9 63.5">
            <title>
                Single_Tofu
            </title>
            <g class="cls-1">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[Fill.tofuGreyA].join(" ")} d="M77.87 39.4L76.45 22.57 76.45 18.07 74.42 8.21 72.39 7.04 53.13 7.04 27.17 4.94 9.99 7.04 4.06 7.04 1.91 8.21 2.3 19.47 0.81 31.02 0 38.19 42.39 49.75 77.87 39.4z"/>
                        <path class={[Fill.tofuGreyB].join(" ")} d="M76.65,46.7l1.22,7.91v8.92H1l-1-1H0l.16-3.2.25-4.89v0l.09-1.79,0-.54.38-7,.1-2-.15-.71L0,38.19H24.74l2.66.1h0l25.52.92,13.55-.59h0l5-.22L76,38.19l1.83,1.22Z"/>
                        <g class={[MixBlend.multiply].join(" ")}>
                            <path class={[Fill.tofuGreyC].join(" ")} d="M72.83 51.1a4.4 4.4 0 0 0-1.78.61c-.3.19-.87.6-.88 1a2.37 2.37 0 0 1-.13.65 2.59 2.59 0 0 0-.13.25c-.08.13-.17.25-.26.37-.68.93.57 1.43 1.29 1.45a3.66 3.66 0 0 0 3.93-3.28C74.92 51.11 73.64 51 72.83 51.1zM66.17 56.72A2.47 2.47 0 0 0 64.11 56a3.81 3.81 0 0 0-2.32 1.09 1.21 1.21 0 0 0 .57 2.09 2.75 2.75 0 0 0 1 .12A3.64 3.64 0 0 0 65 59a2.59 2.59 0 0 0 1.22-1.05A1.06 1.06 0 0 0 66.17 56.72zM62 58.92l-.19-.19a1.83 1.83 0 0 0 .24.19zM41.85 50.84a4.86 4.86 0 0 0-1.73.19 4.19 4.19 0 0 0-1.6.7 3.84 3.84 0 0 0-.9 1c-.18.31.19.55.42.62a3.41 3.41 0 0 0 1.51 0 4.15 4.15 0 0 0 2.6-1.22l0 0c.21-.18.62-.46.52-.81S42.12 50.87 41.85 50.84zM26 57.16c-1.81 0-5 2.75-1.8 2.75C26 59.91 29.16 57.16 26 57.16zM25.18 46.4c-1.74 0-5 2.65-1.84 2.65C25.09 49 28.36 46.4 25.18 46.4zM27.4 38.29a3.35 3.35 0 0 1-.61.41 38.11 38.11 0 0 0-3.54 1.85 3.21 3.21 0 0 1-3.22.37 2.22 2.22 0 0 1-1.84-.68 1.87 1.87 0 0 1-.47-.94A1.6 1.6 0 0 1 18 38.19h6.78zM17 42c-1 0-5.38 2-3 2C15 44 19.34 42 17 42zM5.55 53.46h0l.09 0-.09.05a.57.57 0 0 1 0 .25A3.61 3.61 0 0 1 4.66 55a3.94 3.94 0 0 1-1 .7s0 .07 0 .12c-.06 1.91-1.82 2.93-3.42 3.47l-.09 0 .25-4.89.16-.06-.15 0 .09-1.79 0-.54A5.23 5.23 0 0 1 2 51.81h.21a4 4 0 0 1 .38-.26l-.13.06.2-.12c.25-.15.5-.29.76-.43.85-.47 2.47-.61 3.16.24S6.27 53 5.55 53.46zM46.55 45.64c.25-.25.58-.58.48-1s-.56-.55-.9-.62a4.12 4.12 0 0 0-3.33.89l-.14.13c-.25.25-.58.58-.47 1s.56.55.9.62a4.1 4.1 0 0 0 3.32-.89zM70.74 39.1l-.39.23a.71.71 0 0 1 .31 1.15 3.82 3.82 0 0 1-3.1 1.28 3.91 3.91 0 0 1-1.64-.33.78.78 0 0 1-.48-.84 2.85 2.85 0 0 1 1-2h0l5-.22A1.86 1.86 0 0 1 70.74 39.1zM54.31 53c1.74 0 5-2.65 1.83-2.65C54.39 50.32 51.13 53 54.31 53zM57.13 63.54H45.86a4.64 4.64 0 0 1 3-1.1c1.28 0 2.62-.57 3.93-.68a2.47 2.47 0 0 1 1.05.15 10.17 10.17 0 0 1 1.84-.52c1-.17 2.31-.32 3.06.48C59.27 62.41 58.3 63.12 57.13 63.54zM52.5 59.83c1.53 0 5.08-2.31 1.93-2.31C52.9 57.51 49.34 59.83 52.5 59.83zM37 62.68a4.23 4.23 0 0 1-.44.85H27.21a5.88 5.88 0 0 1 4.3-1.43c.36 0 .71.06 1.07.11C33.3 60.37 38 60.21 37 62.68zM16.1 63.54h-7c.25-1.1 1.57-1.59 2.56-1.73l.54-.08.32-.07.38-.11.23-.09c.94-.45 2.48-.6 3.19.36A1.31 1.31 0 0 1 16.1 63.54zM3.62 42.93L3.46 43l0 0c-.13.11-.26.23-.38.36l-.34.39-.06.08a1.1 1.1 0 0 0-.11.16 3.27 3.27 0 0 1-1.61 1l.1-2-.15-.71a6 6 0 0 1 2.48-.46c.22 0 .74 0 .82.34S3.82 42.82 3.62 42.93zM3 62.55a2.15 2.15 0 0 1-1 .65 7.26 7.26 0 0 1-.95.33H1l-1-1H0a8.66 8.66 0 0 1 1.21-.28C1.34 62.21 3.45 61.9 3 62.55zM77.87 61.85v1.69H74.48a1 1 0 0 1 0-.28c.12-.35.67-.62 1-.76a6.52 6.52 0 0 1 1.78-.57z"/>
                        </g>
                        <path class={[Fill.tofuGreyD].join(" ")} d="M72.48,19.1A59.13,59.13,0,0,1,70.87,10c-11.58.28-23.1-1.11-34.66-1.44-5.31,1.48-9,3.19-9,5,0,4.6,29.07,3.65,29.07,9.73s-18.39,3.81-18.39,8.19c0,2.94,21.82,3.24,36.16,4.29A73.87,73.87,0,0,0,72.48,19.1Z"/>
                        <path class={[Fill.tofuYellowA].join(" ")} d="M28.3,23.14H38.79A17.52,17.52,0,0,0,20.48,7.62h0A17.64,17.64,0,0,0,25.6,20.94,17.73,17.73,0,0,0,28.3,23.14Z"/>
                        <path class={[Fill.tofuGreenA].join(" ")} d="M28.3,23.14H38.79A17.52,17.52,0,0,0,20.48,7.62h0A17.64,17.64,0,0,0,25.6,20.94,17.73,17.73,0,0,0,28.3,23.14Z"/>
                        <path class={[Fill.tofuGreenB, MixBlend.multiply, Opacity._4].join(" ")} d="M28.3,23.14H36L20.48,7.62h0A17.64,17.64,0,0,0,25.6,20.94,17.73,17.73,0,0,0,28.3,23.14Z"/>
                        <path class={[Fill.tofuYellowA].join(" ")} d="M41.56,23.14A17.6,17.6,0,0,0,39,0l0,0a17.55,17.55,0,0,0-2.58,23.12Z"/>
                        <path class={[Fill.tofuGreenC].join(" ")} d="M41.56,23.14A17.6,17.6,0,0,0,39,0l0,0a17.55,17.55,0,0,0-2.58,23.12Z"/>
                        <path class={[Fill.tofuGreenB, MixBlend.multiply, Opacity._4].join(" ")} d="M41.56,23.14A17.6,17.6,0,0,0,39,0l0,0V23.14Z"/>
                        <path class={[Fill.tofuYellowA].join(" ")} d="M49.57,23.14a17.73,17.73,0,0,0,2.7-2.2A17.64,17.64,0,0,0,57.41,7.62h0A17.52,17.52,0,0,0,39.08,23.14Z"/>
                        <path class={[Fill.tofuGreenD].join(" ")} d="M49.57,23.14a17.73,17.73,0,0,0,2.7-2.2A17.64,17.64,0,0,0,57.41,7.62h0A17.52,17.52,0,0,0,39.08,23.14Z"/>
                        <path class={[Fill.tofuGreenB, MixBlend.multiply, Opacity._4].join(" ")} d="M49.57,23.14a17.73,17.73,0,0,0,2.7-2.2A17.64,17.64,0,0,0,57.41,7.62h0L41.87,23.14Z"/>
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
