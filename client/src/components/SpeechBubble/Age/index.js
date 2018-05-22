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

class Age extends Component {

    render() {
        const { width, height, xPos, yPos } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} x={Dimensions.SVG_VIEW_WIDTH / 2 - 130} y={(Dimensions.SVG_VIEW_HEIGHT/3 + 100) - height} viewBox="0 0 528.25 553.97">
            <title>speechBubble1</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="text">
                    <path class={[Fill.white].join(" ")} d="M71.94,0A71.94,71.94,0,0,0,0,71.94V358.17A71.94,71.94,0,0,0,71.94,430.1h72.88V554L288.69,430.1H456.31a71.94,71.94,0,0,0,71.94-71.93V71.94A71.94,71.94,0,0,0,456.31,0Z"/>
                    <text x={50} y={110} className={Text.speechBubble}>
                        Hi! I’m Moosh!
                    </text>
                    <text x={50} y={190} className={Text.speechBubble}>
                        Can you tell me
                    </text>
                    <text x={50} y={270} className={Text.speechBubble}>
                        how old you
                    </text>
                    <text x={50} y={350} className={Text.speechBubble}>
                        are?
                    </text>
                    {/* <foreignObject x={60} y={-20} width={width - 100} height={height - 50}>
                        <p class={[Text.speechBubble]}>Hi! I’m Moosh! Can you tell me how old you are?</p>
                    </foreignObject> */}
                </g>
            </g>
            </svg>
        );
    }
}

Age.defaultProps = {
    xPos: 0,
    yPos: 0,
    width: 528,
    height: 553
}

export default Age;
