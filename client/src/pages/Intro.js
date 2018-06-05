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
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// --------------------------------

// *******************************************
// Component Imports
// -------------------------------------------
import { Window, Background, Dropdown, Button, Title, Moosh, SpeechBubble } from '../components';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import ACTIONS from '../actions';
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
            validated: true,
            postcode: "",
            age: ""
        }
        // this.LAST_KEY_VALID = false;
    }

    updateValue = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    _goToNextScene = () => {
        if (this.state.scene === 0) {
            this.props.setAge(this.state.age);
        }
        if (this.state.scene === 1 && this.state.postcode !== "") {
            this.props.setPostcode(this.state.postcode);
        }
        this.setState({
            scene: this.state.scene + 1
        });
    }

    _goToMarket = () => {
        // Create action to add data about user to the redux store
        const { history } = this.props;
        history.push(Routes.Market);
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

    _handleChange = (event) => {
        if (!isNaN(event.target.value) && event.target.value.length <= 4) {
            this.setState({
                postcode: event.target.value
            });
        }
    }

    _handleChangeAge = (event) => {
        if (!isNaN(event.target.value) && event.target.value.length <= 3) {
            this.setState({
                age: event.target.value
            });
        }
    }

    // _isKeyNumber = (event) => {
    //     var charCode = (event.which) ? event.which : event.keyCode
    //     if (charCode > 31 && (charCode < 48 || charCode > 57)) {;
    //         this.LAST_KEY_VALID = false;
    //         return false;
    //     }
    //     this.LAST_KEY_VALID = true;
    //     return true;
    // }

    _renderAgeQuestion = () => {
        return (
            <Fragment>
                <Moosh.Intro />
                {(this.state.validated) ? <SpeechBubble.Age /> : <SpeechBubble.AgeError />}
                <text x={150} y={1370} className={[Text.footerText].join(" ")}>
                    Hi Moosh, I'm
                </text>
                <foreignObject x={540} y={1300} width={600} height={100}>
                    <input
                        inputMode={"numeric"}
                        value={this.state.age}
                        className={[Text.formInput].join(" ")}
                        style={{width: 225, height: 100, paddingLeft: 40, borderRadius: 50, backgroundColor: 'white'}}
                        placeholder={"Age"}

                        onChange={this._handleChangeAge}
                        type={"text"} />
                </foreignObject>
                <text x={800} y={1370} className={[Text.footerText].join(" ")}>
                    years old.
                </text>

                {/* <Dropdown.Age updateValue={this.updateValue} error={!this.state.validated} inputKey={"age"} value={this.state.age} /> */}
                <Button.Next onClick={this._validateAgeQuestion}/>
            </Fragment>
        );
    }

    _renderPostcodeQuestion = () => {
        return (
            <Fragment>
                <Moosh.Stare />
                <SpeechBubble.Postcode />
                <text x={150} y={1295} className={[Text.footerText].join(" ")}>
                    My postcode is:
                </text>
                <foreignObject x={600} y={1230} width={600} height={100}>
                    <input
                        inputMode={"numeric"}
                        maxLength={4}
                        value={this.state.postcode}
                        className={[Text.formInput].join(" ")}
                        style={{width: 225, height: 100, paddingLeft: 40, borderRadius: 50, backgroundColor: 'white'}}
                        placeholder={""}
                        onChange={this._handleChange}
                        type={"text"} />
                </foreignObject>
                <text x={150} y={1450} className={[Text.footerTextRed].join(" ")} style={{cursor: 'pointer'}} onClick={this._goToNextScene}>
                    Oops, I'm not sure.
                </text>
                <Button.Next onClick={this._goToNextScene}/>
            </Fragment>
        );
    }

    _renderInfoScreen = () => {
        return (
            <Fragment>
                <Moosh.Hungry />
                <SpeechBubble.Hungry />
                <Button.FeedMoosh onClick={this._goToMarket}/>
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



export default withRouter(connect(null, {
    setAge: ACTIONS.APP.setAge,
    setPostcode: ACTIONS.APP.setPostcode,
})(Intro));
// --------------------------------
