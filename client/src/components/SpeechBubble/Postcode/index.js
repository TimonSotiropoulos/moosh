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

class Postcode extends Component {

    render() {
        const { width, height, xPos, yPos } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} x={Dimensions.SVG_VIEW_WIDTH / 2 - 130} y={(Dimensions.SVG_VIEW_HEIGHT/3 + 100) - height} viewBox="0 0 453.21 490.93">
            <title>speechBubble3</title>
            <g>
                <g id="text">
                    <path class={[Fill.white].join(" ")} d="M71.94,0A71.94,71.94,0,0,0,0,71.94V295.13a71.94,71.94,0,0,0,71.94,71.93h97.9V490.93L303.7,367.07h77.57a71.94,71.94,0,0,0,71.94-71.93V71.94A71.94,71.94,0,0,0,381.27,0Z"/>
                    <text x={50} y={100} className={Text.speechBubble}>
                        Cool! What
                    </text>
                    <text x={50} y={185} className={Text.speechBubble}>
                        is your
                    </text>
                    <text x={50} y={270} className={Text.speechBubble}>
                        postcode?
                    </text>
                </g>
            </g>
        </svg>
        );
    }
}

Postcode.defaultProps = {
    xPos: 0,
    yPos: 0,
    width: 453,
    height: 490
}

export default Postcode;
