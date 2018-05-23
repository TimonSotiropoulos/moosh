// *******************************************************
// Basket Actions
// -------------------------------------------------------

// *******************************************
// Action Type Imports
// -------------------------------------------
import ACTIONS from './index';
// --------------------------------

// *******************************************
// Action Definitions
// -------------------------------------------
export const addItemToBasket = (itemKey) => {
    return {
        type: ACTIONS.TYPES.ADD_ITEM_TO_BASKET,
        itemKey
    };
}

export const removeItemFromBasket = (itemKey) => {
    return {
        type: ACTIONS.TYPES.REMOVE_ITEM_FROM_BASKET,
        itemKey
    };
}

export const removeLastItemFromBasket = () => {
    return {
        type: ACTIONS.TYPES.REMOVE_LAST_ITEM_FROM_BASKET
    };
}
// --------------------------------
