// *******************************************************
// Main Application Container
// -------------------------------------------------------
// The is the mia entry point of the application. Here is where
// all the base files are introduced and the router is held
// within this file as well.
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component, Fragment } from 'react';
// import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'
// import { connect } from 'react-redux'
// --------------------------------

// *******************************************
// Page Imports
// -------------------------------------------
import { Home, Intro, Market, Garden } from '../pages';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Routes } from '../constants';
// --------------------------------

// *******************************************
// Implementation
// -------------------------------------------
class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path={Routes.Home} component={Home} />
                    <Route exact path={Routes.Intro} component={Intro} />
                    <Route exact path={Routes.Market} component={Market} />
                    <Route exact path={Routes.Garden} component={Garden} />
                    <Route exact path={Routes.Kitchen} component={Home} />
                    <Route exact path={Routes.Result} component={Home} />
                    <Route exact path={Routes.Score} component={Home} />
                </Switch>
            </Fragment>
        );
    }
}

export default App;
// --------------------------------
