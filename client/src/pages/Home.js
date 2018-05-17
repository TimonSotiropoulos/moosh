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
import { Window, Background, Button, Title, Moosh } from '../components';
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

    navigateToIntro = () => {
        const { history } = this.props;
        history.push(Routes.Intro);
    }

    render() {
        console.log("RENDERING HOME");
        console.log(Background);
        return (
            <Window>
                <Background.Home />
                <Title yPos={400} />
                <Button.LetsMoosh onClick={this.navigateToIntro} />
                <Moosh.Home />
            </Window>
        );
    }
}

export default withRouter(Home);
// --------------------------------
