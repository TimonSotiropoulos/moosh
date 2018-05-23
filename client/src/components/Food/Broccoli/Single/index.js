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
import { Fill, MixBlend, Opacity } from '../../../../styles';
// --------------------------------

class Single extends Component {

    render() {

        const { width, height, xPos, yPos, active, onClick } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={xPos} y={yPos} width={125} height={125} viewBox="0 0 50 50" onClick={onClick}>
            <polygon className={[Fill.transparent].join(" ")} points="0,0 0,50, 50,50, 50,0" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.2 98.1">
            <title>
                Single_Broccoli
            </title>
            <g class="cls-1">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[Fill.broccoliGreenA].join(" ")} d="M53.09,26.49l-38.75,19c12.08,5.19,27,14.43,27,27.17v25.5H64.82V72.63c0-12.74,14.94-22,27-27.17ZM41.35,49.64,35.63,45l5.72-3.86Zm23.47,0V41.17L70.53,45Z"/>
                        <g class={[MixBlend.multiply].join(" ")}>
                            <path class={[Fill.broccoliGreenB].join(" ")} d="M53.09,26.49l-38.75,19c6.52,2.82,13.89,6.8,19.28,11.9A45.4,45.4,0,0,1,73,57c5.35-4.89,12.5-8.76,18.86-11.49ZM41.35,49.64,35.63,45l5.72-3.86Zm23.47,0V41.17L70.53,45Z"/>
                        </g>
                        <circle class={[Fill.broccoliGreenC].join(" ")} cx="53.1" cy="23.5" r="23.5"/>
                        <circle class={[Fill.broccoliGreenC].join(" ")} cx="77.5" cy="27.8" r="19.2"/>
                        <circle class={[Fill.broccoliGreenC].join(" ")} cx="91.8" cy="35.8" r="14.3"/>
                        <circle class={[Fill.broccoliGreenC].join(" ")} cx="14.3" cy="35.8" r="14.3"/>
                        <path class={[Fill.broccoliGreenC].join(" ")} d="M47.89,27.76a19.21,19.21,0,1,1-19.2-19.2A19.21,19.21,0,0,1,47.89,27.76Z"/>
                        <g class={[Opacity._04].join(" ")}>
                            <circle class={[Fill.broccoliGreenA].join(" ")} cx="51.7" cy="10.2" r="2"/>
                            <circle class={[Fill.broccoliGreenA].join(" ")} cx="60.3" cy="16.1" r="1.5"/>
                            <circle class={[Fill.broccoliGreenA].join(" ")} cx="44.1" cy="28.5" r="1.6"/>
                            <circle class={[Fill.broccoliGreenA].join(" ")} cx="21.6" cy="19.7" r="1.8"/>
                            <path class={[Fill.broccoliGreenA].join(" ")} d="M34.59,33A1.64,1.64,0,1,1,33,31.36,1.63,1.63,0,0,1,34.59,33Z"/>
                            <circle class={[Fill.broccoliGreenA].join(" ")} cx="7" cy="36.8" r="2"/>
                            <path class={[Fill.broccoliGreenA].join(" ")} d="M15.73 36.77a1.38 1.38 0 1 1-1.39-1.38A1.39 1.39 0 0 1 15.73 36.77zM75.23 17.28a1.51 1.51 0 1 1-1.51-1.52A1.51 1.51 0 0 1 75.23 17.28z"/>
                            <circle class={[Fill.broccoliGreenA].join(" ")} cx="62.8" cy="26.8" r="1.3"/>
                            <path class={[Fill.broccoliGreenA].join(" ")} d="M28.68,20.8a1.26,1.26,0,1,1-1.26-1.26A1.26,1.26,0,0,1,28.68,20.8Z"/>
                            <circle class={[Fill.broccoliGreenA].join(" ")} cx="73.7" cy="34.3" r="1.3"/>
                            <circle class={[Fill.broccoliGreenA].join(" ")} cx="79.1" cy="14.6" r="1.3"/>
                            <circle class={[Fill.broccoliGreenA].join(" ")} cx="80.8" cy="31.4" r="1.6"/>
                            <circle class={[Fill.broccoliGreenA].join(" ")} cx="95.8" cy="26.8" r="1.6"/>
                            <circle class={[Fill.broccoliGreenA].join(" ")} cx="95.1" cy="40.9" r="1.6"/>
                            <circle class={[Fill.broccoliGreenA].join(" ")} cx="100.6" cy="33" r="1.3"/>
                        </g>
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
