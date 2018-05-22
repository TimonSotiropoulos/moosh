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
import { Window, Background, Button, Title, Interface, Food, Basket, Moosh } from '../components';
// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Routes } from '../constants';
// --------------------------------


// *******************************************
// Implementation
// -------------------------------------------
class Garden extends Component {

    constructor(props) {
        super(props);

        this.basketItemsBack = [
            {xPos: 935, yPos: 1085},
            {xPos: 1040, yPos: 1085},
            {xPos: 1145, yPos: 1085},
            {xPos: 1260, yPos: 1085},
            {xPos: 990, yPos: 975},
            {xPos: 1095, yPos: 975},
            {xPos: 1200, yPos: 975}
        ];

        this.basketItemsFront = [
            {xPos: 990, yPos: 1298},
            {xPos: 1095, yPos: 1298},
            {xPos: 1200, yPos: 1298},
        ];
    }

    navigateToLink = (route) => {
        const { history } = this.props;
        history.push(route);
    }

    _renderBackBasketItems = () => {

        const onClick = () => {
            console.log("We are clickling that item fewl!");
        }

        const basketItems = this.basketItemsBack.map((coords) => {
            const index = Math.round(Math.random());
            if (index === 0) {
                return <Food.Apple.Single xPos={coords.xPos} yPos={coords.yPos} onClick={onClick} />
            } else {
                return <Food.Apple.Single xPos={coords.xPos} yPos={coords.yPos} onClick={onClick} />
            }

        })

        return (
            <Fragment>
                {basketItems}
            </Fragment>
        );

    }

    _renderFrontBasketItems = () => {

        const onClick = () => {
            console.log("We are clickling that item fewl!");
        }

        const basketItems = this.basketItemsFront.map((coords) => {
            const index = Math.round(Math.random());
            if (index === 0) {
                return <Food.Apple.Single xPos={coords.xPos} yPos={coords.yPos} onClick={onClick} />
            } else {
                return <Food.Apple.Single xPos={coords.xPos} yPos={coords.yPos} onClick={onClick} />
            }

        })

        return (
            <Fragment>
                {basketItems}
            </Fragment>
        );
    }

    render() {
        return (
            <Window>
                <Background.Garden.Background />
                <Food.Grape.Stock />
                <Food.Tomato.Stock />
                <Food.Broccoli.Stock />
                <Food.Carrot.Stock />
                <Food.Lettuce.Stock />
                <Background.Garden.Foreground />
                <Food.Apple.Stock />
                <Food.Orange.Stock />
                <Food.Potato.Stock />
                <Food.Banana.Stock />
                <Food.Cherry.Stock />
                <Food.Avocado.Stock />
                <Food.Pineapple.Stock />
                <Basket.Handle />
                {this._renderBackBasketItems()}
                <Basket.Main />
                {this._renderFrontBasketItems()}
                <Moosh.Market />
                <Interface currentRoute={Routes.Garden} navigateToLink={this.navigateToLink} />
            </Window>
        );
    }
}

export default withRouter(Garden);
// --------------------------------
