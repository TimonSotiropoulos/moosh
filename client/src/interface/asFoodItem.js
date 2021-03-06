// *******************************************************
// As Food Item
// -------------------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
// --------------------------------

// *******************************************
// Imports
// -------------------------------------------
import ACTIONS from '../actions';

import { FOOD } from '../constants';
import * as UTILS from '../utilities';
// --------------------------------

const asFoodItem = (WrappedComponent) => {

    class FoodItemManager extends Component {
        constructor(props) {
            super(props);
        }

        onClick = () => {
            const { itemKey, actionType, kitchen, target } = this.props;

            if (!itemKey || !actionType || !target) {
                console.log("Missing required props");
                return null;
            }

            if (actionType === FOOD.ADD_ITEM) {
                switch (target) {
                    case FOOD.TARGETS.BASKET:
                        if (UTILS.GENERAL.itemIsNotInArray(this.props[target].items, itemKey) && (this.props[target].items.length + kitchen.gardenItems.length) < 10) {
                            this.props.addItemToBasket(itemKey);
                        }
                        break;
                    case FOOD.TARGETS.TROLLEY:
                        if (UTILS.GENERAL.itemIsNotInArray(this.props[target].items, itemKey) && (this.props[target].items.length + kitchen.marketItems.length) < 10) {
                            this.props.addItemToTrolley(itemKey);
                        }
                        break;
                    case FOOD.TARGETS.BLENDER:
                        this.props.addItemToBlender(itemKey);
                        break;
                    default:
                        console.log("No action found...");
                        break;
                }
            }

            if (actionType === FOOD.REMOVE_ITEM) {
                switch (target) {
                    case FOOD.TARGETS.BASKET:
                        if (UTILS.GENERAL.itemIsInArray(this.props[target].items, itemKey)) {
                            this.props.removeItemFromBasket(itemKey);
                        }
                        break;
                    case FOOD.TARGETS.TROLLEY:
                        if (UTILS.GENERAL.itemIsInArray(this.props[target].items, itemKey)) {
                            this.props.removeItemFromTrolley(itemKey);
                        }
                        break;
                    default:
                        console.log("No action found...");
                        break;
                }

            }
        }

        render () {

            let kitchenItems = [];
            if (this.props.target === FOOD.TARGETS.TROLLEY) {
                kitchenItems = this.props.kitchen.marketItems;
            }

            if (this.props.target === FOOD.TARGETS.BASKET) {
                kitchenItems = this.props.kitchen.gardenItems;
            }

            let itemIsNotInArray;
            let onClick;

            if (this.props.target === FOOD.TARGETS.BLENDER) {
                itemIsNotInArray = true;
                onClick = this.onClick;
            } else if (UTILS.GENERAL.itemIsNotInArray(this.props[this.props.target].items, this.props.itemKey) &&
                UTILS.GENERAL.itemIsNotInArray(kitchenItems, this.props.itemKey)) {
                itemIsNotInArray = true;
                onClick = this.onClick;
            } else if (UTILS.GENERAL.itemIsInArray(this.props[this.props.target].items, this.props.itemKey)) {
                itemIsNotInArray = false;
                onClick = this.onClick;
            } else {
                itemIsNotInArray = false;
                onClick = undefined;
            }

            return (
                <WrappedComponent active={itemIsNotInArray} onClick={onClick} {...this.props} />
            );
        }
    }

    const mapStateToProps = (state) => {
        return {
            [FOOD.TARGETS.TROLLEY]: state.trolley,
            [FOOD.TARGETS.BASKET]: state.basket,
            kitchen: state.kitchen
        };
    }

    return connect(mapStateToProps, {
        addItemToBasket: ACTIONS.BASKET.addItemToBasket,
        removeItemFromBasket: ACTIONS.BASKET.removeItemFromBasket,
        addItemToTrolley: ACTIONS.TROLLEY.addItemToTrolley,
        removeItemFromTrolley: ACTIONS.TROLLEY.removeItemFromTrolley,
        addItemToBlender: ACTIONS.BLENDER.addItemToBlender
    })(FoodItemManager);
}

export default asFoodItem;
