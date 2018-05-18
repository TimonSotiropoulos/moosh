// *******************************************************
// Button - Get Started
// -------------------------------------------------------
// Get Stared Button on the home page
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Components, Text } from '../../../styles';
// --------------------------------

class Button extends Component {

    _renderArrow = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={400} y={10} width={100} height={100} viewBox="0 0 80.84 97.35">
            <g id="Layer_2" data-name="Layer 2">
                <g id="text">
                    <polygon class={Components.buttonArrow} points="37.95 31.32 5.67 31.31 5.67 66.07 37.95 66.07 37.95 83.64 72.84 48.67 37.95 13.71 37.95 31.32"/>
                    <path class={Components.buttonArrowOutline} d="M37.95,13.71l34.89,35-34.89,35V66.07H5.67V31.31H37.95V13.71M32.28,0V25.65H0V71.74H32.28V97.35L42,87.65l34.89-35,4-4-4-4L42,9.7,32.28,0Z"/>
                </g>
            </g>
        </svg>
        );

    }

    render() {

        const { onClick } = this.props;
        const x = (2048/2 - 270);
        return (
            <svg x={x} y={950} viewbox='0 0 350 120'>
              <g class={Components.button} onClick={onClick}>
                <rect  rx="60" ry="60" x="20" y="0" width="500" height="120" />
                <text class={Text.button} x={60} y={78}>Let's Moosh</text>
                {this._renderArrow()}
              </g>
            </svg>
        )
    }
}

export default Button;
