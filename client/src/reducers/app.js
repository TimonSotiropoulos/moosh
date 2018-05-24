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
    sessionID: UTILS.GENERAL.generateRandomString(),
    age: undefined,
    postcode: undefined
}
// --------------------------------

// *******************************************
// Reducer Implementation
// -------------------------------------------
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.TYPES.SET_AGE:
            return {
                ...state,
                age: action.age
            }
        case ACTIONS.TYPES.SET_POSTCODE:
            return {
                ...state,
                postcode: action.postcode
            }
        default:
            return state
    }
}
// --------------------------------
