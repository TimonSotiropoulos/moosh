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
import { Window, Background, Button, Title, Food, Moosh, Trolley } from '../components';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Routes } from '../constants';
// --------------------------------


// *******************************************
// Implementation
// -------------------------------------------
class Market extends Component {

    constructor(props) {
        super(props);

        this.trolleyItems = [
            {xPos: 1050, yPos: 1160},
            {xPos: 1175, yPos: 1160},
            {xPos: 1300, yPos: 1160},
            {xPos: 1050, yPos: 1040},
            {xPos: 1175, yPos: 1040},
            {xPos: 1300, yPos: 1040},
            {xPos: 1050, yPos: 920},
            {xPos: 1175, yPos: 920},
            {xPos: 1300, yPos: 920},
            {xPos: 1175, yPos: 800}
        ];

        // {xPos: 1050, yPos: 1160},
        // {xPos: 1175, yPos: 1160},
        // {xPos: 1300, yPos: 1160},
        // {xPos: 1050, yPos: 1035},
        // {xPos: 1175, yPos: 1035},
        // {xPos: 1300, yPos: 1035},
        // {xPos: 1050, yPos: 910},
        // {xPos: 1175, yPos: 910},
        // {xPos: 1300, yPos: 910},
        // {xPos: 1175, yPos: 785}

    }

    navigateToIntro = () => {
        const { history } = this.props;
        history.push(Routes.Intro);
    }

    _renderTrolleyItems = () => {

        const onClick = () => {
            console.log("We are clickling that item fewl!");
        }

        const trolleyItems = this.trolleyItems.map((coords) => {
            const index = Math.round(Math.random());
            if (index === 0) {
                return <Food.Eggs.Single xPos={coords.xPos} yPos={coords.yPos} onClick={onClick} />
            } else {
                return <Food.Cereal.Single xPos={coords.xPos} yPos={coords.yPos} onClick={onClick} />
            }

        })

        return (
            <Fragment>
                {trolleyItems}
            </Fragment>
        );

    }

    render() {
        return (
            <Window>
                <Background.Market />
                <Food.Eggs.Stock />
                <Food.Cereal.Stock />
                <Food.Juice.Stock />
                <Food.Soda.Stock />
                <Food.Tuna.Stock />
                <Food.Rice.Stock />
                <Food.ChocoBar.Stock />
                <Moosh.Market />
                {this._renderTrolleyItems()}
                <Trolley />
            </Window>
        );
    }
}

export default withRouter(Market);
// --------------------------------
