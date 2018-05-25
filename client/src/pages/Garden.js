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
import { Window, Background, Button, Title, Interface, Food, Basket, Moosh } from '../components';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import ACTIONS from '../actions';
import { Routes, FOOD } from '../constants';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
class Garden extends Component {

    constructor(props) {
        super(props);

        this.basketItemsBack = [
            {xPos: 935, yPos: 1085},
            {xPos: 1040, yPos: 1085},
            {xPos: 1145, yPos: 1085},
            {xPos: 1260, yPos: 1085},
            {xPos: 990, yPos: 975},
            {xPos: 1095, yPos: 975},
            {xPos: 1200, yPos: 975}
        ];

        this.basketItemsFront = [
            {xPos: 990, yPos: 1298},
            {xPos: 1095, yPos: 1298},
            {xPos: 1200, yPos: 1298},
        ];
    }

    navigateToLink = (route) => {
        const { history } = this.props;
        history.push(route);
    }

    navToKitchen = () => {
        const { basket, sendItemsToKitchen } = this.props;
        sendItemsToKitchen("BASKET", basket.items);
        this.navigateToLink(Routes.Kitchen);
    }

    _renderBackBasketItems = () => {

        const { basket } = this.props;

        const basketItems = basket.items.map((itemKey, index) => {
            if (index > 6) {
                return null;
            }
            const coords = this.basketItemsBack[index];
            const props = {
                xPos: coords.xPos,
                yPos: coords.yPos,
                actionType: FOOD.REMOVE_ITEM,
                target: FOOD.TARGETS.BASKET,
            }
            return Food.GET_ELEMENT(itemKey, props);
        });

        return (
            <Fragment>
                {basketItems}
            </Fragment>
        );

    }

    _renderFrontBasketItems = () => {

        const { basket } = this.props;
        const basketItems = basket.items.map((itemKey, index) => {
            if (index < 7) {
                return null;
            }
            const coords = this.basketItemsFront[index - 7];
            const props = {
                xPos: coords.xPos,
                yPos: coords.yPos,
                actionType: FOOD.REMOVE_ITEM,
                target: FOOD.TARGETS.BASKET,
            }
            return Food.GET_ELEMENT(itemKey, props);
        });

        return (
            <Fragment>
                {basketItems}
            </Fragment>
        );
    }

    render() {
        const { basket, gardenItems, removeLastItemFromBasket } = this.props;
        return (
            <Window>
                <Background.Garden.Background />
                <Food.Grape.Stock itemKey={FOOD.KEYS.GRAPE} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.BASKET} />
                <Food.Tomato.Stock itemKey={FOOD.KEYS.TOMATO} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.BASKET} />
                <Food.Broccoli.Stock itemKey={FOOD.KEYS.BROCCOLI} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.BASKET} />
                <Food.Carrot.Stock itemKey={FOOD.KEYS.CARROT} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.BASKET} />
                <Food.Lettuce.Stock itemKey={FOOD.KEYS.LETTUCE} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.BASKET} />
                <Background.Garden.Foreground />
                <Food.Apple.Stock itemKey={FOOD.KEYS.APPLE} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.BASKET} />
                <Food.Orange.Stock itemKey={FOOD.KEYS.ORANGE} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.BASKET} />
                <Food.Potato.Stock itemKey={FOOD.KEYS.POTATO} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.BASKET} />
                <Food.Banana.Stock itemKey={FOOD.KEYS.BANANA} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.BASKET} />
                <Food.Cherry.Stock itemKey={FOOD.KEYS.CHERRY} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.BASKET} />
                <Food.Avocado.Stock itemKey={FOOD.KEYS.AVOCADO} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.BASKET} />
                <Food.Pineapple.Stock itemKey={FOOD.KEYS.PINEAPPLE} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.BASKET} />
                <Basket.Handle />
                {this._renderBackBasketItems()}
                <Basket.Main />
                {this._renderFrontBasketItems()}
                <Moosh.Market />
                <Interface
                    disableLinks={(basket.items.length > 0)}
                    currentRoute={Routes.Garden}
                    undoClick={removeLastItemFromBasket}
                    counter={basket.items.length + gardenItems.length}
                    navigateToLink={this.navigateToLink}
                    nextButtonClick={this.navToKitchen}  />
            </Window>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        gardenItems: state.kitchen.gardenItems,
        basket: state.basket
    };
}

export default withRouter(connect(mapStateToProps, {
    removeLastItemFromBasket: ACTIONS.BASKET.removeLastItemFromBasket,
    sendItemsToKitchen: ACTIONS.KITCHEN.sendItemsToKitchen
})(Garden));
// --------------------------------
