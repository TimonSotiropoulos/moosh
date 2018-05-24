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
import { Window, Background, Button, Title, ScoreHeading, Moosh, Face } from '../components';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Routes, Scoring } from '../constants';
// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Text } from '../styles';
// --------------------------------


// *******************************************
// Implementation
// -------------------------------------------
class Score extends Component {

    constructor(props) {
        super(props);

        this.SMALL_FACE_SIZE = 80;
        this.MEDIUM_FACE_SIZE = 135;
        this.LARGE_FACE_SIZE = 250;

    }

    navigateToIntro = () => {
        const { history } = this.props;
        history.push(Routes.Intro);
    }

    _renderHappyFaceType = (xPos, yPos, size, active) => {
        if (active) {
            return <Face.Happy.Active xPos={xPos} yPos={yPos} width={size} height={size} />
        }
        return <Face.Happy.Inactive xPos={xPos} yPos={yPos} width={size} height={size} />
    }

    _renderNeutralFaceType = (xPos, yPos, size, active) => {
        if (active) {
            return <Face.Neutral.Active xPos={xPos} yPos={yPos} width={size} height={size} />
        }
        return <Face.Neutral.Inactive xPos={xPos} yPos={yPos} width={size} height={size} />
    }

    _renderSadFaceType = (xPos, yPos, size, active) => {
        if (active) {
            return <Face.Sad.Active xPos={xPos} yPos={yPos} width={size} height={size} />
        }
        return <Face.Sad.Inactive xPos={xPos} yPos={yPos} width={size} height={size} />
    }

    _renderPortionsScore = () => {
        const { report } = this.props;

        return (
            <Fragment>
                <text x={300} y={370} className={[Text.scoreSubheading].join(" ")}>Portions</text>
                {this._renderSadFaceType(510, 420, this.MEDIUM_FACE_SIZE, (report.portions === Scoring.LOW))}
                {this._renderNeutralFaceType(350, 420, this.MEDIUM_FACE_SIZE, (report.portions === Scoring.MEDIUM))}
                {this._renderHappyFaceType(190, 420, this.MEDIUM_FACE_SIZE, (report.portions === Scoring.HIGH))}
            </Fragment>
        );
    }

    _renderSugarScore = () => {
        const { report } = this.props;

        return (
            <Fragment>
                <text x={915} y={370} className={[Text.scoreSubheading].join(" ")}>Sugar</text>
                {this._renderSadFaceType(1110, 420, this.MEDIUM_FACE_SIZE, (report.sugar === Scoring.LOW))}
                {this._renderNeutralFaceType(950, 420, this.MEDIUM_FACE_SIZE, (report.sugar === Scoring.MEDIUM))}
                {this._renderHappyFaceType(790, 420, this.MEDIUM_FACE_SIZE, (report.sugar === Scoring.HIGH))}
            </Fragment>
        );
    }

    _renderWaterScore = () => {
        const { report } = this.props;
        return (
            <Fragment>
                <text x={1500} y={370} className={[Text.scoreSubheading].join(" ")}>Water</text>
                {this._renderSadFaceType(1710, 420, this.MEDIUM_FACE_SIZE, (report.water === Scoring.LOW))}
                {this._renderNeutralFaceType(1550, 420, this.MEDIUM_FACE_SIZE, (report.water === Scoring.MEDIUM))}
                {this._renderHappyFaceType(1390, 420, this.MEDIUM_FACE_SIZE, (report.water === Scoring.HIGH))}
            </Fragment>
        );
    }

    _renderVegetablesScores = () => {
        const { report } = this.props;
        return (
            <Fragment>
                <text x={515} y={730} className={[Text.vegeScore].join(" ")}>Vegetables</text>
                {this._renderSadFaceType(390, 675, this.SMALL_FACE_SIZE, (report.vegetables === Scoring.LOW))}
                {this._renderNeutralFaceType(295, 675, this.SMALL_FACE_SIZE, (report.vegetables === Scoring.MEDIUM))}
                {this._renderHappyFaceType(200, 675, this.SMALL_FACE_SIZE, (report.vegetables === Scoring.HIGH))}
            </Fragment>
        );
    }

    _renderFruitScores = () => {
        const { report } = this.props;
        return (
            <Fragment>
                <text x={515} y={830} className={[Text.fruitScore].join(" ")}>Fruit</text>
                {this._renderSadFaceType(390, 775, this.SMALL_FACE_SIZE, (report.fruit === Scoring.LOW))}
                {this._renderNeutralFaceType(295, 775, this.SMALL_FACE_SIZE, (report.fruit === Scoring.MEDIUM))}
                {this._renderHappyFaceType(200, 775, this.SMALL_FACE_SIZE, (report.fruit === Scoring.HIGH))}
            </Fragment>
        );
    }

    _renderGrainScores = () => {
        const { report } = this.props;
        return (
            <Fragment>
                <text x={515} y={930} className={[Text.grainScore].join(" ")}>Bread, pasta</text>
                {this._renderSadFaceType(390, 875, this.SMALL_FACE_SIZE, (report.grains === Scoring.LOW))}
                {this._renderNeutralFaceType(295, 875, this.SMALL_FACE_SIZE, (report.grains === Scoring.MEDIUM))}
                {this._renderHappyFaceType(200, 875, this.SMALL_FACE_SIZE, (report.grains === Scoring.HIGH))}
            </Fragment>
        );
    }

    _renderMeatScores = () => {
        const { report } = this.props;
        return (
            <Fragment>
                <text x={515} y={1030} className={[Text.meatScore].join(" ")}>Meat, fish, tofu, eggs</text>
                {this._renderSadFaceType(390, 975, this.SMALL_FACE_SIZE, (report.protein === Scoring.LOW))}
                {this._renderNeutralFaceType(295, 975, this.SMALL_FACE_SIZE, (report.protein === Scoring.MEDIUM))}
                {this._renderHappyFaceType(200, 975, this.SMALL_FACE_SIZE, (report.protein === Scoring.HIGH))}
            </Fragment>
        );
    }

    _renderDairyScores = () => {
        const { report } = this.props;
        return (
            <Fragment>
                <text x={515} y={1130} className={[Text.dairyScore].join(" ")}>Milk, cheese</text>
                {this._renderSadFaceType(390, 1075, this.SMALL_FACE_SIZE, (report.dairy === Scoring.LOW))}
                {this._renderNeutralFaceType(295, 1075, this.SMALL_FACE_SIZE, (report.dairy === Scoring.MEDIUM))}
                {this._renderHappyFaceType(200, 1075, this.SMALL_FACE_SIZE, (report.dairy === Scoring.HIGH))}
            </Fragment>
        );
    }

    _renderOverallBalance = () => {
        const { report } = this.props;

        const xPos = 1350;
        const yPos = 720;

        let face;
        if (report.balance === Scoring.LOW) {
            face = this._renderSadFaceType(1350, 720, this.LARGE_FACE_SIZE, true);
        }
        if (report.balance === Scoring.MEDIUM) {
            face = this._renderNeutralFaceType(1350, 720, this.LARGE_FACE_SIZE, true);
        }
        if (report.balance === Scoring.HIGH) {
            face = this._renderHappyFaceType(1350, 720, this.LARGE_FACE_SIZE, true);
        }

        return (
            <Fragment>
                <text x={1230} y={1075} className={[Text.overallScore].join(" ")}>Overall Balance</text>
                {face}
            </Fragment>
        );
    }

    render() {
        return (
            <Window>
                <Background.Score />
                <ScoreHeading />
                <Button.NewDay />
                {this._renderPortionsScore()}
                {this._renderSugarScore()}
                {this._renderWaterScore()}
                {this._renderVegetablesScores()}
                {this._renderFruitScores()}
                {this._renderGrainScores()}
                {this._renderMeatScores()}
                {this._renderDairyScores()}
                {this._renderOverallBalance()}
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

})(Score));
// --------------------------------
