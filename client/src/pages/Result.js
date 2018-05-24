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
import { connect } from 'react-redux';
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
import { Routes, Outcomes } from '../constants';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
class Result extends Component {

    navigateToScore = () => {
        const { history } = this.props;
        history.push(Routes.Score);
    }

    _renderOutcome = () => {
        const { report } = this.props;
        switch (report.outcome) {
            case Outcomes.BROCCOLI:
                return <Moosh.Broccoli />
                break;
            case Outcomes.COW:
                return <Moosh.Cow />
                break;
            case Outcomes.DISCO:
                return <Moosh.Disco />
                break;
            case Outcomes.EGG:
                return <Moosh.Egg />
                break;
            case Outcomes.FART:
                return <Moosh.Fart />
                break;
            case Outcomes.HYPER:
                return <Moosh.Hyper />
                break;
            case Outcomes.PARTY:
                return <Moosh.Party />
                break;
            case Outcomes.POOP:
                return <Moosh.Poop />
                break;
            case Outcomes.SLEEP:
                return <Moosh.Sleep />
                break;
            case Outcomes.VOMIT:
                return <Moosh.Vomit />
                break;
            default:
                return null;
        }
    }

    render() {
        return (
            <Window>
                <Background.Result />
                <Button.WhatTheFood onClick={this.navigateToScore} />
                {this._renderOutcome()}
            </Window>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        report: state.report
    };
}

export default withRouter(connect(mapStateToProps, {

})(Result));
// --------------------------------
