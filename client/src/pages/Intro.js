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
import React, { Component, Fragment } from 'react';
// --------------------------------

// *******************************************
// Component Imports
// -------------------------------------------
import { Window, Background, Button, Title, Moosh, SpeechBubble } from '../components';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Routes } from '../constants';
// --------------------------------


// *******************************************
// Implementation
// -------------------------------------------
class Intro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scene: 0
        }
    }

    _goToNextScene = () => {
        this.setState({
            scene: this.state.scene + 1
        });
    }

    _renderAgeQuestion = () => {
        return (
            <Fragment>
                <Moosh.Intro />
                <SpeechBubble.Hungry />
                <Button.Next onClick={this._goToNextScene}/>
            </Fragment>
        );
    }

    _renderPostcodeQuestion = () => {
        return (
            <Fragment>
                <Moosh.Home />
                <Button.Next onClick={this._goToNextScene}/>
            </Fragment>
        );
    }

    _renderInfoScreen = () => {
        return (
            <Fragment>
                <Moosh.Home />
                <Button.Next onClick={this._goToNextScene}/>
            </Fragment>
        );
    }

    _renderScene = () => {
        switch (this.state.scene) {
            case 0:
                return this._renderAgeQuestion();
            case 1:
                return this._renderPostcodeQuestion();
            case 2:
                return this._renderInfoScreen();
            default:
                return this._renderAgeQuestion();
        }
    }

    render() {

        return (
            <Window>
                <Background.Intro />
                {this._renderScene()}
            </Window>
        );
    }
}

export default Intro;
// --------------------------------
