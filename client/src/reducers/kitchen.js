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
    marketItems: [],
    gardenItems: []
}
// --------------------------------

// *******************************************
// Reducer Implementation
// -------------------------------------------
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.TYPES.SEND_ITEMS_TO_KITCHEN:
            if (action.itemType === "TROLLEY") {
                return {
                    ...state,
                    marketItems: UTILS.GENERAL.combineArrays(state.marketItems, action.items)
                };
            }
            if (action.itemType === "BASKET") {
                return {
                    ...state,
                    gardenItems: UTILS.GENERAL.combineArrays(state.gardenItems, action.items)
                };
            }
        case ACTIONS.TYPES.RESET_APP:
            return initialState;
        default:
            return state
    }
}
// --------------------------------
