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
import * as KITCHEN from './kitchen';
import * as APP from './app';
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
    SET_AGE: "SET_AGE",
    SET_POSTCODE: "SET_POSTCODE",

    ADD_ITEM_TO_TROLLEY: "ADD_ITEM_TO_TROLLEY",
    REMOVE_ITEM_FROM_TROLLEY: "REMOVE_ITEM_FROM_TROLLEY",
    REMOVE_LAST_ITEM_FROM_TROLLEY: "REMOVE_LAST_ITEM_FROM_TROLLEY",

    ADD_ITEM_TO_BASKET: "ADD_ITEM_TO_BASKET",
    REMOVE_ITEM_FROM_BASKET: "REMOVE_ITEM_FROM_BASKET",
    REMOVE_LAST_ITEM_FROM_BASKET: "REMOVE_LAST_ITEM_FROM_BASKET",

    SEND_ITEMS_TO_KITCHEN: "SEND_ITEMS_TO_KITCHEN",

    ADD_ITEM_TO_BLENDER: "ADD_ITEM_TO_BLENDER",
    REMOVE_ITEM_FROM_BLENDER: "REMOVE_ITEM_FROM_BLENDER",

    CREATE_REPORT: "CREATE_REPORT",
    RESET_APP: "RESET_APP"
}

const ACTIONS = {
    TYPES,
    APP,
    TROLLEY,
    BASKET,
    BLENDER,
    REPORT,
    KITCHEN
}

export default ACTIONS;
