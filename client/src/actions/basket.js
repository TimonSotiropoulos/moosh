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
const addItemToBasket = (itemKey) => {
    return {
        type: ACTIONS.TYPES.ADD_ITEM_TO_BASKET,
        itemKey
    };
}

const removeItemFromBasket = (itemKey) => {
    return {
        type: ACTIONS.TYPES.REMOVE_ITEM_FROM_BASKET,
        itemKey
    };
}
// --------------------------------
