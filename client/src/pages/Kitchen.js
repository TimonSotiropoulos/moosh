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
import { Window, Background, Button, Title, Interface, Blender, Moosh, Food } from '../components';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import ACTIONS from '../actions';
import { Routes, FOOD } from '../constants';
import * as UTILS from '../utilities';
// --------------------------------


// *******************************************
// Implementation
// -------------------------------------------
class Kitchen extends Component {

    constructor(props) {
        super(props);

        this.shelfSpaces = [
            {xPos: 560, yPos: 483},
            {xPos: 440, yPos: 483},
            {xPos: 680, yPos: 483},
            {xPos: 200, yPos: 483},
            {xPos: 80, yPos: 483},
            {xPos: 1280, yPos: 198},
            {xPos: 1160, yPos: 198},
            {xPos: 1400, yPos: 198},
            {xPos: 1520, yPos: 198},
            {xPos: 800, yPos: 483},
            {xPos: 1640, yPos: 198},
            {xPos: 920, yPos: 483},
            {xPos: 320, yPos: 483},
            {xPos: 560, yPos: 198},
            {xPos: 680, yPos: 198},
            {xPos: 1040, yPos: 198},
            {xPos: 920, yPos: 198},
            {xPos: 800, yPos: 198},
            {xPos: 1875, yPos: 198},
            {xPos: 1760, yPos: 198},
        ];

        this.state = {
            hideInterface: false,
            blended: false,
        }
    }

    navigateToLink = (route) => {
        const { history } = this.props;
        history.push(route);
    }

    createReport = () => {
        const { app, blender, createReportFromFood } = this.props;
        createReportFromFood(blender.items, app);
    }

    startBlending = () => {
        this.setState({
            hideInterface: true
        });
    }

    completeBlending = () => {
        console.log("BLENDING STARTED");
        this.setState({
            blended: true
        });
    }

    _renderKitchenItems = () => {

        const { kitchen } = this.props;

        const selectedItems = UTILS.GENERAL.combineArrays(kitchen.marketItems, kitchen.gardenItems);

        const shelveItems = selectedItems.map((itemKey, index) => {
            const coords = this.shelfSpaces[index];
            const props = {
                xPos: coords.xPos,
                yPos: coords.yPos,
                actionType: (this.state.hideInterface) ? undefined : FOOD.ADD_ITEM,
                target: FOOD.TARGETS.BLENDER
            }
            return Food.GET_ELEMENT(itemKey, props);
        });

        return (
            <Fragment>
                {shelveItems}
            </Fragment>
        );

    }

    render() {
        const { blender, removeItemFromBlender } = this.props;
        return (
            <Window>
                <Background.Kitchen />
                {this._renderKitchenItems()}
                <Blender items={blender.items} startBlending={this.startBlending} completeBlending={this.completeBlending} />
                <Moosh.Market />
                <Food.Water.Single itemKey={FOOD.KEYS.WATER} actionType={(this.state.hideInterface) ? undefined : FOOD.ADD_ITEM} target={FOOD.TARGETS.BLENDER} />
                <Interface
                    showFeedButton={this.state.blended}
                    hideInterface={this.state.hideInterface}
                    currentRoute={Routes.Kitchen}
                    undoClick={removeItemFromBlender}
                    counter={blender.items.length}
                    navigateToLink={this.navigateToLink}
                    nextButtonClick={this.createReport} />
            </Window>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
        kitchen: state.kitchen,
        blender: state.blender
    };
}

export default withRouter(connect(mapStateToProps, {
    removeItemFromBlender: ACTIONS.BLENDER.removeItemFromBlender,
    createReportFromFood: ACTIONS.REPORT.createReportFromFood
})(Kitchen));
// --------------------------------
