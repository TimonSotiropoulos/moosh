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
import { Dimensions } from '../../../constants';
// --------------------------------

// *******************************************
// Utility Imports
// -------------------------------------------

// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Fill, Text, Stroke, Opacity } from '../../../styles';
// --------------------------------

class AgeError extends Component {

    render() {
        const { width, height, xPos, yPos } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} x={Dimensions.SVG_VIEW_WIDTH / 2 - 130} y={(Dimensions.SVG_VIEW_HEIGHT/3 + 100) - height} viewBox="0 0 533.25 451.9">
            <title>speechBubble2</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="text">
                    <path class={[Fill.lightRed].join(" ")} d="M183.24,311.64H71.94A68.62,68.62,0,0,1,3.4,243.1V71.94A68.62,68.62,0,0,1,71.94,3.4H461.32a68.62,68.62,0,0,1,68.54,68.54V243.1a68.62,68.62,0,0,1-68.54,68.54h-139L183.24,444Z"/>
                    <path class={[Fill.lightRedOutline].join(" ")} d="M461.32,6.79a65.22,65.22,0,0,1,65.14,65.15V243.1a65.22,65.22,0,0,1-65.14,65.14H321l-2,1.87-132.4,126V308.24H71.94A65.22,65.22,0,0,1,6.79,243.1V71.94A65.22,65.22,0,0,1,71.94,6.79H461.32m0-6.79H71.94A71.94,71.94,0,0,0,0,71.94V243.1A71.94,71.94,0,0,0,71.94,315H179.84V451.9L323.71,315h137.6a71.94,71.94,0,0,0,71.94-71.93V71.94A71.94,71.94,0,0,0,461.32,0Z"/>
                    <text x={50} y={95} className={Text.speechBubbleError}>
                        Oops! I need to
                    </text>
                    <text x={50} y={175} className={Text.speechBubbleError}>
                        know how old
                    </text>
                    <text x={50} y={255} className={Text.speechBubbleError}>
                        you are.
                    </text>
                </g>
            </g>
        </svg>
        );
    }
}

AgeError.defaultProps = {
    xPos: 0,
    yPos: 0,
    width: 533,
    height: 451
}

export default AgeError;
