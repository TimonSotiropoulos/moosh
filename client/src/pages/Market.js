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
import { Window, Background, Button, Interface, Title, Food, Moosh, Trolley } from '../components';
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
    }

    navigateToLink = (route) => {
        const { history } = this.props;
        history.push(route);
    }

    _renderTrolleyItems = () => {

        const onClick = () => {
            console.log("We are clickling that item fewl!");
        }

        const trolleyItems = this.trolleyItems.map((coords) => {
            const index = Math.round(Math.random());
            return <Food.IceCream.Single xPos={coords.xPos} yPos={coords.yPos} onClick={onClick} />
            // if (index === 0) {
            //
            // } else {
            //     return <Food.Tuna.Single xPos={coords.xPos} yPos={coords.yPos} onClick={onClick} />
            // }

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
                <Food.Cupcake.Stock />
                <Food.Chips.Stock />
                <Food.Roll.Stock />
                <Food.Pasta.Stock />
                <Food.Bread.Stock />
                <Food.Tofu.Stock />
                <Food.Steak.Stock />
                <Food.Bacon.Stock />
                <Food.Milk.Stock />
                <Food.Yoghurt.Stock />
                <Food.Cheese.Stock />
                <Food.IceCream.Stock />
                <Moosh.Market />
                {this._renderTrolleyItems()}
                <Trolley />
                <Interface currentRoute={Routes.Market} navigateToLink={this.navigateToLink} />
            </Window>
        );
    }
}

export default withRouter(Market);
// --------------------------------
