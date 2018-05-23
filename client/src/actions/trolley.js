// *******************************************************
// Trolley Actions
// -------------------------------------------------------
// Contains all Profile related Actions
// -------------------------------------------

// *******************************************
// Action Type Imports
// -------------------------------------------
import ACTIONS from './index';
// --------------------------------

// *******************************************
// Action Definitions
// -------------------------------------------
const addItemToTrolley = (itemKey) => {
    return {
        type: ACTIONS.TYPES.ADD_ITEM_TO_TROLLEY,
        itemKey
    };
}

const removeItemFromTrolley = (itemKey) => {
    return {
        type: ACTIONS.TYPES.REMOVE_ITEM_FROM_TROLLEY,
        itemKey
    };
}
// --------------------------------
