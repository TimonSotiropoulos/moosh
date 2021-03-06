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
        case ACTIONS.TYPES.ADD_ITEM_TO_BASKET:
            if (UTILS.GENERAL.itemIsNotInArray(state.items, action.itemKey)) {
                return {
                    items: UTILS.GENERAL.addItemToArray(state.items, action.itemKey)
                }
            } else {
                return state;
            }

        case ACTIONS.TYPES.REMOVE_ITEM_FROM_BASKET:
            if (UTILS.GENERAL.itemIsInArray(state.items, action.itemKey)) {
                return {
                    items: UTILS.GENERAL.removeItemFromArray(state.items, action.itemKey)
                }
            } else {
                return state;
            }
        case ACTIONS.TYPES.REMOVE_LAST_ITEM_FROM_BASKET:
            return {
                items: UTILS.GENERAL.removeFinalItemFromArray(state.items)
            }
        case ACTIONS.TYPES.SEND_ITEMS_TO_KITCHEN:
            return initialState;
        case ACTIONS.TYPES.RESET_APP:
            return initialState;
        default:
            return state
    }
}
// --------------------------------
