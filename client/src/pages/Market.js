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
// --------------------------------


// *******************************************
// Implementation
// -------------------------------------------
class Market extends Component {

    constructor(props) {
        super(props);

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

    render() {
        const { trolley, marketItems, removeLastItemFromTrolley } = this.props;

        return (
            <Window>
                <Background.Market />
                <Food.Eggs.Stock itemKey={FOOD.KEYS.EGGS} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Cereal.Stock itemKey={FOOD.KEYS.CEREAL} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Juice.Stock itemKey={FOOD.KEYS.JUICE} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Soda.Stock itemKey={FOOD.KEYS.SODA} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Tuna.Stock itemKey={FOOD.KEYS.TUNA} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Rice.Stock itemKey={FOOD.KEYS.RICE} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.ChocoBar.Stock itemKey={FOOD.KEYS.CHOCOBAR} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Cupcake.Stock itemKey={FOOD.KEYS.CUPCAKE} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Chips.Stock itemKey={FOOD.KEYS.CHIPS} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Roll.Stock itemKey={FOOD.KEYS.ROLL} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Pasta.Stock itemKey={FOOD.KEYS.PASTA} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Bread.Stock itemKey={FOOD.KEYS.BREAD} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Tofu.Stock itemKey={FOOD.KEYS.TOFU} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Steak.Stock itemKey={FOOD.KEYS.STEAK} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Bacon.Stock itemKey={FOOD.KEYS.BACON} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Milk.Stock itemKey={FOOD.KEYS.MILK} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Yoghurt.Stock itemKey={FOOD.KEYS.YOGHURT} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.Cheese.Stock itemKey={FOOD.KEYS.CHEESE} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
                <Food.IceCream.Stock itemKey={FOOD.KEYS.ICECREAM} actionType={FOOD.ADD_ITEM} target={FOOD.TARGETS.TROLLEY} />
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
