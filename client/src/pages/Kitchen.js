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
    }

    navigateToLink = (route) => {
        const { history } = this.props;
        history.push(route);
    }

    _renderKitchenItems = () => {

        const { trolley, basket } = this.props;

        const selectedItems = UTILS.GENERAL.combineArrays(trolley.items, basket.items);

        const shelveItems = selectedItems.map((itemKey, index) => {
            const coords = this.shelfSpaces[index];
            const props = {
                xPos: coords.xPos,
                yPos: coords.yPos,
                actionType: FOOD.ADD_ITEM,
                target: FOOD.TARGETS.BLENDER
            }
            return FOOD.GET_ELEMENT(itemKey, props);
        });

        return (
            <Fragment>
                {shelveItems}
            </Fragment>
        );

    }

    render() {
        const { blender } = this.props;
        return (
            <Window>
                <Background.Kitchen />
                {this._renderKitchenItems()}

                <Blender items={blender.items} />
                <Moosh.Market />
                <Food.Water.Single itemKey={FOOD.KEYS.WATER} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.BLENDER} />
                <Interface currentRoute={Routes.Kitchen} counter={blender.items.length} navigateToLink={this.navigateToLink} />
            </Window>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        trolley: state.trolley,
        basket: state.basket,
        blender: state.blender
    };
}

export default withRouter(connect(mapStateToProps, null)(Kitchen));
// --------------------------------
