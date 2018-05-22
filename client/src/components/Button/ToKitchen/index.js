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
import { Text, Components } from '../../../styles';
// --------------------------------

class ToKitchen extends Component {

    _renderArrow = () => {
        return (
            <svg x={620} y={5} width={110} height={110} viewBox="0 0 80.84 97.35" style={{transform: ''}}>
                <g id="Layer_2" data-name="Layer 2" x={100}>
                    <g id="text">
                        <polygon className={Components.buttonArrow} points="37.95 31.32 5.67 31.31 5.67 66.07 37.95 66.07 37.95 83.64 72.84 48.67 37.95 13.71 37.95 31.32"/>
                        <path className={Components.buttonArrowOutline} d="M37.95,13.71l34.89,35-34.89,35V66.07H5.67V31.31H37.95V13.71M32.28,0V25.65H0V71.74H32.28V97.35L42,87.65l34.89-35,4-4-4-4L42,9.7,32.28,0Z"/>
                    </g>
                </g>
            </svg>
        );

    }

    render() {

        const { onClick } = this.props;
        const x = (2048/2 - 250);
        return (
            <svg x={1210} y={1380} width={840} height={80} viewBox='0 0 350 120'>
              <g className={Components.button} onClick={onClick}>
                <rect  rx="60" x="20" y="0" width="720" height="120" />
                <text className={[Text.buttonToKitchen].join(" ")} x={75} y={78}>Send Items to Kitchen</text>
                {this._renderArrow()}
              </g>
            </svg>
        )
    }
}

export default ToKitchen;
