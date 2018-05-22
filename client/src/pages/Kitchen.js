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
import { withRouter } from 'react-router';
// --------------------------------

// *******************************************
// Component Imports
// -------------------------------------------
import { Window, Background, Button, Title, Blender, Moosh, Food } from '../components';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Routes } from '../constants';
// --------------------------------


// *******************************************
// Implementation
// -------------------------------------------
class Kitchen extends Component {

    constructor(props) {
        super(props);

        this.shelfSpaces = [
            // Bottom Shelve
            {xPos: 80, yPos: 483},
            {xPos: 200, yPos: 483},
            {xPos: 320, yPos: 483},
            {xPos: 440, yPos: 483},
            {xPos: 560, yPos: 483},
            {xPos: 680, yPos: 483},
            {xPos: 800, yPos: 483},
            {xPos: 920, yPos: 483},
            // Top Shelve
            {xPos: 560, yPos: 198},
            {xPos: 680, yPos: 198},
            {xPos: 800, yPos: 198},
            {xPos: 920, yPos: 198},
            {xPos: 1040, yPos: 198},
            {xPos: 1160, yPos: 198},
            {xPos: 1280, yPos: 198},
            {xPos: 1400, yPos: 198},
            {xPos: 1520, yPos: 198},
            {xPos: 1640, yPos: 198},
            {xPos: 1760, yPos: 198},
            {xPos: 1875, yPos: 198},
        ];

    }

    navigateToIntro = () => {
        const { history } = this.props;
        history.push(Routes.Intro);
    }

    _renderKitchenItems = () => {

        const onClick = () => {
            console.log("We are clickling that item fewl!");
        }

        const shelveItems = this.shelfSpaces.map((coords) => {
            const index = Math.round(Math.random());
            if (index === 0) {
                return <Food.Apple.Single xPos={coords.xPos} yPos={coords.yPos} onClick={onClick} />
            } else {
                return <Food.Eggs.Single xPos={coords.xPos} yPos={coords.yPos} onClick={onClick} />
            }

        })

        return (
            <Fragment>
                {shelveItems}
            </Fragment>
        );

    }

    render() {
        console.log(Food);
        return (
            <Window>
                <Background.Kitchen />
                {this._renderKitchenItems()}
                <Food.Water.Single />
                <Blender />
                <Moosh.Market />
            </Window>
        );
    }
}

export default withRouter(Kitchen);
// --------------------------------
