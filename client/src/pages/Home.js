// *******************************************************
// Main Application Container
// -------------------------------------------------------
// The is the mia entry point of the application. Here is where
// all the base files are introduced and the router is held
// within this file as well.
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
// --------------------------------

// *******************************************
// Component Imports
// -------------------------------------------
import { Window, Background, Title, Moosh } from '../components';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Routes } from '../constants';
// --------------------------------


// *******************************************
// Implementation
// -------------------------------------------
class Home extends Component {
    render() {
        return (
            <Window>
                <Background screen={Routes.Home} />
                <Title yPos={180} />
                <Moosh.Home />
            </Window>
        );
    }
}

export default Home;
// --------------------------------
