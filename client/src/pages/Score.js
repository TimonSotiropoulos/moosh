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
import { Window, Background, Button, Title, Text, Moosh, Face } from '../components';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Routes } from '../constants';
// --------------------------------


// *******************************************
// Implementation
// -------------------------------------------
class Score extends Component {

    navigateToIntro = () => {
        const { history } = this.props;
        history.push(Routes.Intro);
    }

    render() {
        return (
            <Window>
                <Background.Score />
                <Text />
                <Button.NewDay />
                <Face.Happy.Active xPos={200} yPos={200} active={false} />
                <Face.Happy.Active width={100} height={100} />
                <Face.Happy.Inactive xPos={400} yPos={400} />
            </Window>
        );
    }
}

export default withRouter(Score);
// --------------------------------
