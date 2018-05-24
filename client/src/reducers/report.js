// *******************************************************
// Report Reducer
// -------------------------------------------------------

// *******************************************
// Imports
// -------------------------------------------
import ACTIONS from '../actions';
import * as UTILS from '../utilities';
import { Scoring } from '../constants';
// --------------------------------

// *******************************************
// Initial State Definition
// -------------------------------------------
const initialState = {
    balance: Scoring.LOW,
    portions: Scoring.LOW,
    sugar: Scoring.LOW,
    water: Scoring.LOW,
    vegetables: Scoring.LOW,
    fruit: Scoring.LOW,
    grains: Scoring.LOW,
    protein: Scoring.LOW,
    dairy: Scoring.LOW
}
// --------------------------------

// *******************************************
// Reducer Implementation
// -------------------------------------------
export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.TYPES.CREATE_REPORT:
            return {
                ...action.scores
            };
        default:
            return state
    }
}
// --------------------------------