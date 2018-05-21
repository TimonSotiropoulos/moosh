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
import { Window, Background, Button, Title, Moosh, Food } from '../components';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Routes } from '../constants';
// --------------------------------


// *******************************************
// Implementation
// -------------------------------------------
class Kitchen extends Component {

    navigateToIntro = () => {
        const { history } = this.props;
        history.push(Routes.Intro);
    }

    render() {
        console.log(Food);
        return (
            <Window>
                <Background.Kitchen />
            </Window>
        );
    }
}

export default withRouter(Kitchen);
// --------------------------------