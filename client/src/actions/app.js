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

export const resetApp = (blenderContent) => {
    return dispatch => {
        dispatch({
            type: ACTIONS.TYPES.RESET_APP
        });
        dispatch(push(Routes.Market));
    }

}

// --------------------------------
