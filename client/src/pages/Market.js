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
import { withRouter } from 'react-router';
// --------------------------------

// *******************************************
// Component Imports
// -------------------------------------------
import { Window, Background, Button, Title, Food, Moosh } from '../components';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Routes } from '../constants';
// --------------------------------


// *******************************************
// Implementation
// -------------------------------------------
class Market extends Component {

    navigateToIntro = () => {
        const { history } = this.props;
        history.push(Routes.Intro);
    }

    render() {
        return (
            <Window>
                <Background.Market />
                <Food.Eggs.Stock />
            </Window>
        );
    }
}

export default withRouter(Market);
// --------------------------------
