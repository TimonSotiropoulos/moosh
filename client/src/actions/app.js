// *******************************************************
// Report Actions
// -------------------------------------------------------

// *******************************************
// Action Type Imports
// -------------------------------------------
import ACTIONS from './index';
import { push } from 'react-router-redux';
import { Routes } from '../constants';
// --------------------------------

// *******************************************
// Action Definitions
// -------------------------------------------
export const setAge = (age) => {
    return {
        type: ACTIONS.TYPES.SET_AGE,
        age
    }
}

export const setPostcode = (postcode) => {
    return {
        type: ACTIONS.TYPES.SET_POSTCODE,
        postcode
    }
}

export const resetApp = (blenderContent) => {
    return dispatch => {
        dispatch({
            type: ACTIONS.TYPES.RESET_APP
        });
        dispatch(push(Routes.Market));
    }
}
// --------------------------------
