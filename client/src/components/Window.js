// *******************************************************
// Window
// -------------------------------------------------------
// This is a root SVG Container for the each page of the
// game to sit within
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
// --------------------------------

// *******************************************
// Component Imports
// -------------------------------------------

// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Dimensions } from '../constants';
// --------------------------------

// *******************************************
// Utility Imports
// -------------------------------------------

// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------

// --------------------------------

class Window extends Component {

    render() {
        return (
            <svg style={{backgroundColor: 'black'}} xmlns="http://www.w3.org/2000/svg" version="1" width={Dimensions.APP_WIDTH} height={Dimensions.APP_HEIGHT} viewBox="0 0 2048 1536">
                {this.props.children}
            </svg>
        );
    }
}

export default Window;
