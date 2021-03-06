// *******************************************************
// Trolley Reducer
// -------------------------------------------------------

// *******************************************
// Imports
// -------------------------------------------
import ACTIONS from '../actions';
import * as UTILS from '../utilities';
// --------------------------------

// *******************************************
// Initial State Definition
// -------------------------------------------
const initialState = {
    items: []
}
// --------------------------------

// *******************************************
// Reducer Implementation
// -------------------------------------------
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.TYPES.ADD_ITEM_TO_BLENDER:
            return {
                items: UTILS.GENERAL.addItemToArray(state.items, action.itemKey)
            }
        case ACTIONS.TYPES.REMOVE_ITEM_FROM_BLENDER:
            return {
                items: UTILS.GENERAL.removeFinalItemFromArray(state.items)
            }
        case ACTIONS.TYPES.RESET_APP:
            return initialState;
        default:
            return state
    }
}
// --------------------------------
