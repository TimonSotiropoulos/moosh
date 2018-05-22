// *******************************************************
// Interface
// -------------------------------------------------------
// This is the interface elements for each screen
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component, Fragment } from 'react';
// --------------------------------

// *******************************************
// Component Imports
// -------------------------------------------
import Counter from './Counter';
import Link from './Link';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Routes } from '../../constants';
// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Animation, Fill } from '../../styles';
// --------------------------------

class Interface extends Component {

    navigateToLink = (route) => {
        this.props.navigateToLink(route);
    }

    render() {
        const { currentRoute } = this.props;
        return (
            <Fragment>
                <Counter value={this.props.counter} />
                <Link link={Routes.Garden} active={currentRoute === Routes.Garden} onClick={this.navigateToLink} />
                <Link link={Routes.Kitchen} active={currentRoute === Routes.Kitchen} onClick={this.navigateToLink} />
                <Link link={Routes.Market} active={currentRoute === Routes.Market} onClick={this.navigateToLink} />
            </Fragment>
        );
    }
}

Interface.defaultProps = {
    curretnRoute: Routes.Garden,
    counter: 10,
    navigateToLink: (route) => { console.log("Calling Default Interface Navigate To Link: " + route); },
    // xPos: 0,
    // yPos: 0,
    // width: 1314.33,
    // height: 468
}

export default Interface;
