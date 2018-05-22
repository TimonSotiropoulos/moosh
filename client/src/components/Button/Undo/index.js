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

class Undo extends Component {

    _renderArrow = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={40} y={5} width={100} height={100} viewBox="0 0 69.6 54.5">
            <g id="Layer_2" data-name="Layer 2">
                <g id="text">
                    <path className={Components.buttonArrow} d="M65.61,52.55a2,2,0,0,1-1.74-1C56.11,37.81,45.19,36.2,30.73,36.09V49a2,2,0,0,1-3.36,1.47L2.64,27.56a2,2,0,0,1,0-3L27.4,2.51A2,2,0,0,1,30.73,4V15.28C60.35,16.71,67.5,49.81,67.57,50.15a2,2,0,0,1-2,2.4Z"/>
                    <path className={Components.buttonArrowOutline} d="M28.73,4V17.23c30,0,36.88,33.32,36.88,33.32-8.5-15-20.58-16.47-36.88-16.47V49L4,26.09,28.73,4m0-4a4,4,0,0,0-2.67,1L1.34,23.11A4,4,0,0,0,1.28,29L26,51.93A4,4,0,0,0,32.73,49V38.12c14.86.35,23,3,29.4,14.4a4,4,0,0,0,7.4-2.77,57.44,57.44,0,0,0-7.75-18c-7.14-10.88-17.12-17.14-29-18.28V4a4,4,0,0,0-4-4Z"/>
                </g>
            </g>
        </svg>
    );

    return (
        <svg x={200} y={5} width={110} height={110} viewBox="0 0 80.84 97.35" style={{transform: ''}}>
            <g id="Layer_2" data-name="Layer 2" x={100} transform='translate(20 20)' className={[Components.arrowRotate].join(" ")}>
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

    return (
        <svg x={10} y={45} width={300} height={85} viewBox='0 0 350 120'>
            <g className={Components.button} onClick={onClick}>
                <rect  rx="60" x="20" y="0" width="300" height="120" />
                {this._renderArrow()}
                <text className={[Text.button].join(" ")} x={145} y={78} style={{fontSize: 50}}>Undo</text>

            </g>
        </svg>
    )
}
}

export default Undo;
