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
            return {
                items: UTILS.GENERAL.addItemToArray(state.items, action.itemKey)
            }
        case ACTIONS.TYPES.REMOVE_ITEM_FROM_BASKET:
            return {
                items: UTILS.GENERAL.removeItemFromArray(state.items, action.itemKey)
            }
        default:
            return state
    }
}
// --------------------------------
