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
import { Text } from '../../../styles';
// --------------------------------

const css = `
    .cls-1{fill:#fff;}

    .cls-2{fill:#f15f64;}

    .button {
        border: 6px;
        fill: #FE6768;
        stroke-width: 6px;
        stroke: #F15F64;
        cursor: pointer;
    }

    .button:hover {
        fill: #F15F64;
    }



    .arrow {
        fill: #fff;
        stroke-width: 0px;
    }
    .arrow-outline {
        stroke: #F15F64;
        fill: #F15F64;
        stroke-width: 2px;
    }
`;

class Next extends Component {

    _renderArrow = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={200} y={5} width={110} height={110} viewBox="0 0 80.84 97.35">
            <defs>
                <style>{css}</style>
            </defs>
            <title>arrow</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="text">
                    <polygon className="arrow" points="37.95 31.32 5.67 31.31 5.67 66.07 37.95 66.07 37.95 83.64 72.84 48.67 37.95 13.71 37.95 31.32"/>
                    <path className="arrow-outline" d="M37.95,13.71l34.89,35-34.89,35V66.07H5.67V31.31H37.95V13.71M32.28,0V25.65H0V71.74H32.28V97.35L42,87.65l34.89-35,4-4-4-4L42,9.7,32.28,0Z"/>
                </g>
            </g>
        </svg>
        );

    }

    render() {

        const { onClick } = this.props;
        const x = (2048/2 - 250);
        return (
            <svg x={1600} y={1270} width={300} height={120} viewBox='0 0 350 120'>
                <defs>
                    <style>
                        {css}
                    </style>
                </defs>
              <g className={"button"} onClick={onClick}>
                <rect  rx="60" x="20" y="0" width="300" height="120">
                </rect>
                <text className={[Text.button].join(" ")} x={60} y={78}>Next</text>
                {this._renderArrow()}
              </g>
            </svg>
        )
    }
}

export default Next;
