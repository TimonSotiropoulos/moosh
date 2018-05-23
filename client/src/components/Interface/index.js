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
import * as Button from '../Button';
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

    _renderNextButton = () => {
        const { currentRoute, nextButtonClick } = this.props;
        switch (currentRoute) {
            case Routes.Kitchen:
                return (<Button.KitchenFeedMoosh onClick={nextButtonClick} />)
            default:
                return (<Button.ToKitchen onClick={nextButtonClick} />)
        }
    }

    render() {
        const { currentRoute, undoClick } = this.props;
        return (
            <Fragment>
                <Button.Undo onClick={undoClick} />
                <Counter value={this.props.counter} />
                <Link link={Routes.Garden} active={currentRoute === Routes.Garden} onClick={this.navigateToLink} />
                <Link link={Routes.Kitchen} active={currentRoute === Routes.Kitchen} onClick={this.navigateToLink} />
                <Link link={Routes.Market} active={currentRoute === Routes.Market} onClick={this.navigateToLink} />
                {this._renderNextButton()}
            </Fragment>
        );
    }
}

Interface.defaultProps = {
    curretnRoute: Routes.Garden,
    counter: 10,
    navigateToLink: (route) => { console.log("Calling Default Interface Navigate To Link: " + route); },
    undoClick: () => {console.log("Default Undo Click");},
    nextButtonClick: () => {console.log("Default Next Button Click");}
}

export default Interface;
