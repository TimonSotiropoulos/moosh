// *******************************************************
// Action Constant Generators
// -------------------------------------------------------
// -------------------------------------------

// *******************************************
// Action Definition Imports
// -------------------------------------------
import * as TROLLEY from './trolley';
import * as BASKET from './basket';
import * as BLENDER from './blender';
import * as REPORT from './report';
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
    REMOVE_LAST_ITEM_FROM_TROLLEY: "REMOVE_LAST_ITEM_FROM_TROLLEY",
    ADD_ITEM_TO_BASKET: "ADD_ITEM_TO_BASKET",
    REMOVE_LAST_ITEM_FROM_BASKET: "REMOVE_LAST_ITEM_FROM_BASKET",
    ADD_ITEM_TO_BLENDER: "ADD_ITEM_TO_BLENDER",
    REMOVE_ITEM_FROM_BLENDER: "REMOVE_ITEM_FROM_BLENDER",
    CREATE_REPORT: "CREATE_REPORT"
}

const ACTIONS = {
    TYPES,
    TROLLEY,
    BASKET,
    BLENDER,
    REPORT
}

export default ACTIONS;
