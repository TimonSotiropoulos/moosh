// *******************************************************
// Reducer Index File
// -------------------------------------------------------
// The is the index file to that imports and combines all our
// state reducers into one reducer for use in the Redux Store.
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// --------------------------------

// *******************************************
// Reducer Imports
// -------------------------------------------
import app from './app';
import basket from './basket';
import blender from './blender';
import trolley from './trolley';
import report from './report';
import kitchen from './kitchen';
// --------------------------------

export default combineReducers({
  router: routerReducer,
  app,
  basket,
  blender,
  trolley,
  kitchen,
  report
});
