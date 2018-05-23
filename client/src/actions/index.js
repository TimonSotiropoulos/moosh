// *******************************************************
// Action Constant Generators
// -------------------------------------------------------
// -------------------------------------------

// *******************************************
// Action Definition Imports
// -------------------------------------------
import * as TROLLEY from './trolley';
import * as BASKET from './basket';
// --------------------------------
const createAsyncAction = (KEY) => {
    return {
        [KEY]: {
            START: `${KEY}_START`,
            SUCCESS: `${KEY}_SUCCESS`,
            ERROR: `${KEY}_ERROR`,
            KEY: KEY
        }
    }
}

const TYPES = {
    ADD_ITEM_TO_TROLLEY: "ADD_ITEM_TO_TROLLEY",
    REMOVE_ITEM_FROM_TROLLEY: "REMOVE_ITEM_FROM_TROLLEY",
    ADD_ITEM_TO_BASKET: "ADD_ITEM_TO_BASKET",
    REMOVE_ITEM_FROM_BASKET: "REMOVE_ITEM_FROM_BASKET"
}

const ACTIONS = {
    TYPES,
    TROLLEY,
    BASKET
}

export default ACTIONS;
