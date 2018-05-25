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

    constructor(props) {
        super(props);
        this.state = {
            showButtonOutline: false
        }
    }

    navigateToLink = (route) => {
        const { disableLinks } = this.props;
        if (disableLinks) {
            this.setState({
                showButtonOutline: true
            });
        } else {
            this.props.navigateToLink(route);
        }

    }

    _renderNextButton = () => {
        const { currentRoute, showFeedButton, nextButtonClick } = this.props;
        switch (currentRoute) {
            case Routes.Kitchen:
                if (showFeedButton) {
                    return (<Button.KitchenFeedMoosh onClick={nextButtonClick} />)
                } else {
                    return null;
                }

            default:
                return (<Button.ToKitchen showButtonOutline={this.state.showButtonOutline} onClick={nextButtonClick} />)
        }
    }

    render() {
        const { currentRoute, hideInterface, undoClick } = this.props;
        return (
            <Fragment>
                {(hideInterface) ? null : <Button.Undo onClick={undoClick} />}
                {(hideInterface) ? null : <Counter value={this.props.counter} />}
                {(hideInterface) ? null : <Link link={Routes.Garden} active={currentRoute === Routes.Garden} onClick={this.navigateToLink} />}
                {(hideInterface) ? null : <Link link={Routes.Kitchen} active={currentRoute === Routes.Kitchen} onClick={this.navigateToLink} />}
                {(hideInterface) ? null : <Link link={Routes.Market} active={currentRoute === Routes.Market} onClick={this.navigateToLink} />}
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
