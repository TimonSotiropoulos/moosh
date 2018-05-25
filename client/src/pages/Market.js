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
import { Window, Background, Button, Interface, Title, Food, Moosh, Trolley } from '../components';
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
class Market extends Component {

    constructor(props) {
        super(props);

        this.marketKeys = [
            FOOD.KEYS.EGGS,
            FOOD.KEYS.CEREAL,
            FOOD.KEYS.JUICE,
            FOOD.KEYS.SODA,
            FOOD.KEYS.TUNA,
            FOOD.KEYS.RICE,
            FOOD.KEYS.CHOCOBAR,
            FOOD.KEYS.CUPCAKE,
            FOOD.KEYS.CHIPS,
            FOOD.KEYS.ROLL,
            FOOD.KEYS.PASTA,
            FOOD.KEYS.BREAD,
            FOOD.KEYS.TOFU,
            FOOD.KEYS.STEAK,
            FOOD.KEYS.BACON,
            FOOD.KEYS.MILK,
            FOOD.KEYS.YOGHURT,
            FOOD.KEYS.CHEESE,
            FOOD.KEYS.ICECREAM
        ];

        this.trolleyItems = [
            {xPos: 1050, yPos: 1160},
            {xPos: 1175, yPos: 1160},
            {xPos: 1300, yPos: 1160},
            {xPos: 1050, yPos: 1040},
            {xPos: 1175, yPos: 1040},
            {xPos: 1300, yPos: 1040},
            {xPos: 1050, yPos: 920},
            {xPos: 1175, yPos: 920},
            {xPos: 1300, yPos: 920},
            {xPos: 1175, yPos: 800}
        ];
    }

    navigateToLink = (route) => {
        const { history } = this.props;
        history.push(route);
    }

    navToGarden = () => {
        const { trolley, sendItemsToKitchen } = this.props;
        sendItemsToKitchen("TROLLEY", trolley.items);
        this.navigateToLink(Routes.Garden);
    }

    _renderTrolleyItems = () => {

        const { trolley } = this.props;
        const trolleyItems = trolley.items.map((itemKey, index) => {
            const coords = this.trolleyItems[index];
            const props = {
                xPos: coords.xPos,
                yPos: coords.yPos,
                actionType: FOOD.REMOVE_ITEM,
                target: FOOD.TARGETS.TROLLEY,
            }
            return Food.GET_ELEMENT(itemKey, props);
        });

        return (
            <Fragment>
                {trolleyItems}
            </Fragment>
        );

    }

    _renderMarketStock = () => {
        const { trolley } = this.props;

        const elements = this.marketKeys.map((itemKey) => {
            const actionType = (UTILS.GENERAL.itemIsInArray(trolley.items, itemKey)) ? FOOD.REMOVE_ITEM : FOOD.ADD_ITEM;
            const props = {
                itemKey,
                actionType,
                target: FOOD.TARGETS.TROLLEY
            }
            return Food.GET_STOCK_ELEMENT(itemKey, props);
        })

        return (
            <Fragment>
                {elements}
            </Fragment>
        );
    }

    render() {
        const { trolley, marketItems, removeLastItemFromTrolley } = this.props;

        return (
            <Window>
                <Background.Market />
                {this._renderMarketStock()}
                <Moosh.Market />
                {this._renderTrolleyItems()}
                <Trolley />
                <Interface
                    disableLinks={(trolley.items.length > 0)}
                    currentRoute={Routes.Market}
                    undoClick={removeLastItemFromTrolley}
                    counter={trolley.items.length + marketItems.length}
                    navigateToLink={this.navigateToLink}
                    nextButtonClick={this.navToGarden} />
            </Window>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        marketItems: state.kitchen.marketItems,
        trolley: state.trolley
    };
}

export default withRouter(connect(mapStateToProps, {
    removeLastItemFromTrolley: ACTIONS.TROLLEY.removeLastItemFromTrolley,
    sendItemsToKitchen: ACTIONS.KITCHEN.sendItemsToKitchen
})(Market));
// --------------------------------
