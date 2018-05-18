// *******************************************************
// Background - Market
// -------------------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
// --------------------------------

const css = `
.result-bg-cls-1{fill:#52416b}
.result-bg-cls-2{fill:#695585}
`;

class Result extends Component {

    render () {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 1536">
                <defs>
                    <style>
                        {css}
                    </style>
                </defs>
                <title>
                    outcomeBackground
                </title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="background">
                        <path class="result-bg-cls-1" d="M0 0H2048V1129.2H0z"/>
                        <path class="result-bg-cls-2" d="M0 1129.2H2048V1536H0z"/>
                    </g>
                </g>
            </svg>
        );
    }
}

export default Result;
