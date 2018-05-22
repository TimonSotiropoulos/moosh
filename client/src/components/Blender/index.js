// *******************************************************
// Window
// -------------------------------------------------------
// This is a root SVG Container for the each page of the
// game to sit within
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component, Fragment } from 'react';
// --------------------------------

// *******************************************
// Component Imports
// -------------------------------------------

// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Dimensions } from '../../constants';
// --------------------------------

// *******************************************
// Utility Imports
// -------------------------------------------

// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Fill, MixBlend, Opacity } from '../../styles';
// --------------------------------

class Blender extends Component {

    _renderBlenderOffButton = () => {
        return { colorA: Fill.blenderBlueD, colorB: Fill.blenderBlueC, colorC: Fill.blenderBlackB };
    }

    _renderBlenderActiveButton = () => {
        return { colorA: Fill.blenderRedA, colorB: Fill.blenderRedB, colorC: Fill.blenderRedC };
    }

    _renderBlenderComplete = () => {
        return { colorA: Fill.blenderGreenA, colorB: Fill.blenderGreenB, colorC: Fill.blenderGreenC };
    }

    _renderBlenderButton = () => {
        const blenderColorFunc = this._renderBlenderOffButton;
        // const blenderColorFunc = this._renderBlenderActiveButton;
        // const blenderColorFunc = this._renderBlenderComplete;

        const { colorA, colorB, colorC } = blenderColorFunc();
        return (
            <Fragment>
                <circle class={[colorA].join(" ")} cx="162" cy="389.4" r="33.6"/>
                <circle class={[colorB].join(" ")} cx="162" cy="389.4" r="23.4"/>
                <circle class={[colorC].join(" ")} cx="162" cy="389.4" r="15.3"/>
                <rect class={[Opacity._04, MixBlend.multiply].join(" ")} x="159.9" y="374" width="4" height="30.7" rx="1.1" ry="1.1"/>
            </Fragment>
        );
    }

    _renderBlenderContents = () => {

        const blenderPoints = [
            {xPos: 78, yPos: 225, width: 165},
            {xPos: 78, yPos: 200, width: 165},
            {xPos: 78, yPos: 175, width: 165},
            {xPos: 78, yPos: 150, width: 165},
            {xPos: 78, yPos: 125, width: 165},
            {xPos: 77, yPos: 100, width: 175},
            {xPos: 72, yPos: 75, width: 175},
            {xPos: 68, yPos: 50, width: 185},
            {xPos: 68, yPos: 25, width: 185},
            {xPos: 68, yPos: 5, width: 195},
        ];

        const blenderElements = blenderPoints.map((data, index) => {
            let color;
            if (index % 2 === 0) {
                color = Fill.green;
            } else {
                color = Fill.greenThree;
            }
            return <rect class={[color].join(" ")} x={data.xPos} y={data.yPos} width={data.width} height="25" rx="20" ry="0"/>;
        });

        return (
            <Fragment>
                {blenderElements}
            </Fragment>
        );
    }

    render() {
        const { width, height, xPos, yPos } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} x={1150} y={497} viewBox="0 0 306.4 467.4" style={{pointerEvents: "none"}}>
            <title>
                Blender
            </title>
            <g>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        {this._renderBlenderContents()}
                        <path class={[Fill.blenderBlueA, Opacity._02].join(" ")} d="M94.94 237.75L67.37 0 256.56 0 228.98 237.75 94.94 237.75z"/>
                        <path class={[Fill.blenderBlueB].join(" ")} d="M89.84,193.78c-4.88-1.58-10.08-3.38-15.29-5.37-37.08-14.18-38.74-24.05-38.8-24.47L22.86,62.89a4.65,4.65,0,0,1,1.3-3.49,9,9,0,0,1,5.58-2.8L73.29,51,70.66,28.35,26.85,33.94A31.65,31.65,0,0,0,7,44.32,27.37,27.37,0,0,0,.21,65.78L13.1,166.83c2.06,16.16,19,29.8,53.3,42.91,9.41,3.6,18.67,6.58,26.32,8.84Z"/>
                        <path class={[Fill.blenderBlueC].join(" ")} d="M256.56 0L228.98 237.75 94.94 237.75 67.37 0 48.4 0 77.59 252.99 246.34 252.99 275.52 0 256.56 0z"/>
                        <path class={[Fill.blenderGreyA].join(" ")} d="M77.7 253H246.3V294.9H77.7z"/>
                        <path class={[Fill.blenderBlueC].join(" ")} d="M263.47 63.21L306.07 0 268.15 0 263.47 63.21z"/>
                        <path class={[Opacity._02, MixBlend.multiply].join(" ")} d="M77.7 273.9H246.3V294.79999999999995H77.7z"/>
                        <path class={[Fill.blenderBlueC].join(" ")} d="M130.59 249.37a2.86 2.86 0 0 1-2.83-2.54L114.36 125a2.86 2.86 0 1 1 5.68-.62l13.4 121.79a2.86 2.86 0 0 1-2.53 3.15zM193.33 249.37l-.32 0a2.86 2.86 0 0 1-2.53-3.15l13.4-121.79a2.86 2.86 0 1 1 5.68.62l-13.4 121.79A2.86 2.86 0 0 1 193.33 249.37z"/>
                        <rect class={[Fill.blenderBlackA].join(" ")} x="56.2" y="438.6" width="28.6" height="28.6" rx="2" ry="2"/>
                        <rect class={[Fill.blenderBlackA].join(" ")} x="245.9" y="438.6" width="28.6" height="28.6" rx="2" ry="2"/>
                        <path class={[Opacity._02, MixBlend.multiply].join(" ")} d="M56.2 455.4H84.80000000000001V461.09999999999997H56.2zM245.9 455.4H274.5V461.09999999999997H245.9z"/>
                        <path class={[Fill.blenderBlueB].join(" ")} d="M284.88,431.26H39L55,316A26.74,26.74,0,0,1,81.52,293H242.4A26.74,26.74,0,0,1,268.89,316Z"/>
                        <path class={[Fill.blenderBlackB].join(" ")} d="M39 431.3H284.8V455.40000000000003H39z"/>
                        <rect class={[Fill.blenderBlueC].join(" ")} x="77" y="314.5" width="170" height="29.2" rx="4" ry="4"/>
                        {this._renderBlenderButton()}
                        <rect class={[Fill.blenderBlueD].join(" ")} x="90.4" y="323.4" width="24.8" height="11.7" rx="2" ry="2"/>
                        <rect class={[Fill.blenderBlueD].join(" ")} x="129.8" y="323.3" width="24.8" height="11.7" rx="2" ry="2"/>
                        <rect class={[Fill.blenderBlueD].join(" ")} x="169.2" y="323.2" width="24.8" height="11.7" rx="2" ry="2"/>
                        <rect class={[Fill.blenderBlueD].join(" ")} x="208.5" y="323.1" width="24.8" height="11.7" rx="2" ry="2"/>

                    </g>
                </g>
            </g>
        </svg>
    );
}
}

Blender.defaultProps = {
    xPos: 0,
    yPos: 0,
    width: 306,
    height: 467
}

export default Blender;
