// *******************************************************
// Blender Actions
// -------------------------------------------------------

// *******************************************
// Action Type Imports
// -------------------------------------------
import ACTIONS from './index';
// --------------------------------

// *******************************************
// Action Definitions
// -------------------------------------------
export const addItemToBlender = (itemKey) => {
    return {
        type: ACTIONS.TYPES.ADD_ITEM_TO_BLENDER,
        itemKey
    };
}

export const removeItemFromBlender = (itemKey) => {
    return {
        type: ACTIONS.TYPES.REMOVE_ITEM_FROM_BLENDER,
        itemKey
    };
}
// --------------------------------
