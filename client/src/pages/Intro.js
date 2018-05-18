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
import { Window, Background, Dropdown, Button, Title, Moosh, SpeechBubble } from '../components';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Routes } from '../constants';
// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Text } from '../styles';
// --------------------------------


// *******************************************
// Implementation
// -------------------------------------------
class Intro extends Component {

    constructor(props) {
        super(props);

        this.state = {
            scene: 0,
            validated: true
        }
    }

    updateValue = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    _goToNextScene = () => {
        this.setState({
            scene: this.state.scene + 1
        });
    }

    _validateAgeQuestion = (age) => {
        if (this.state.age) {
            this._goToNextScene();
        } else {
            this.setState({
                validated: false
            });
        }
    }

    _renderAgeQuestion = () => {
        return (
            <Fragment>
                <Moosh.Intro />
                {(this.state.validated) ? <SpeechBubble.Age /> : <SpeechBubble.AgeError />}
                <foreignObject x={150} y={1250} width={400} height={50}>
                    <p class={[Text.footerText]}>Hi Moosh, I'm</p>
                </foreignObject>
                <foreignObject x={800} y={1250} width={300} height={50}>
                    <p class={[Text.footerText]}>years old.</p>
                </foreignObject>
                <Dropdown.Age updateValue={this.updateValue} error={!this.state.validated} inputKey={"age"} value={this.state.age} />
                <Button.Next onClick={this._goToNextScene}/>
            </Fragment>
        );
    }

    _renderPostcodeQuestion = () => {
        return (
            <Fragment>
                <Moosh.Stare />
                <SpeechBubble.Postcode />
                <foreignObject x={150} y={1180} width={600} height={50}>
                    <p class={[Text.footerText]}>My postcode is:</p>
                </foreignObject>

                <foreignObject x={150} y={1320} width={600} height={50} style={{cursor: 'pointer'}} onClick={this._goToNextScene}>
                    <p class={[Text.footerTextRed].join(" ")}>Oops, I'm not sure.</p>
                </foreignObject>
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
