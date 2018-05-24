// *******************************************************
// Background - Market
// -------------------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
// --------------------------------

class Score extends Component {

    render () {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 1536">
                <title>
                    outcomeBackground
                </title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="background">
                        <rect style={{fill: "#695585"}} x={0} y={0} width={2048} height={250} />
                        <rect style={{fill: "#52416b"}} x={0} y={250} width={2048} height={1320} />
                        <rect style={{fill: "#ffffff"}} x={0} y={620} width={2048} height={580} />
                    </g>
                </g>
            </svg>
        );
    }
}

export default Score;
