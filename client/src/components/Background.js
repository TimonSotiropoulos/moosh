// *******************************************************
// Window
// -------------------------------------------------------
// This is a root SVG Container for the each page of the
// game to sit within
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
// --------------------------------

// *******************************************
// Component Imports
// -------------------------------------------

// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Dimensions, Routes } from '../constants';
// --------------------------------

// *******************************************
// Utility Imports
// -------------------------------------------

// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Fill } from '../styles';
// --------------------------------

class Background extends Component {

    _renderHomeBackground = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 1536">
                <title>Home Background</title>
                <g>
                    <rect class={[Fill.plum].join(" ")} width="2048" height="1536"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1914.26,980l-102.77,156.59H2017L1914.26,980"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1676.32,979.93l-102.77,156.59h205.54L1676.32,979.93"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1069.44,1149.61,966.68,1306.19,863.9,1149.61Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1307.28,1149.61l-102.77,156.58-102.77-156.58Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1659.83,1319.5l-102.77,156.58L1454.29,1319.5Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1541.33,1149.61l-102.77,156.58L1335.8,1149.61Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1779,1149.61l-102.77,156.58-102.77-156.58Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M2010.91,1149.61l-102.77,156.58-102.77-156.58Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M982.82,1306.19l102.77-156.58,102.77,156.58Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1454.29,1306.19l102.77-156.58,102.77,156.58Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1441.66,979.83l-102.77,156.59h205.54L1441.66,979.83"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1203.62,979.83l-102.77,156.59h205.54L1203.62,979.83"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1322.68,1136.42l102.77-156.59H1219.91l102.77,156.59"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1795.1,1136.24l102.77-156.59H1692.33l102.77,156.59"/>
                    <polygon class={[Fill.lightPlum].join(" ")} points="1921.2 1319.9 2023.97 1476.48 2048 1439.87 2048 1319.9 1921.2 1319.9"/>
                    <polygon class={[Fill.lightPlum].join(" ")} points="2027.16 1150.06 1924.39 1306.64 2048 1306.64 2048 1181.81 2027.16 1150.06"/>
                </g>
            </svg>
        );
    }

    render() {
        const { screen } = this.props;

        switch (screen) {
            case Routes.Home:
                return this._renderHomeBackground();
            default:
                return this._renderHomeBackground();
        }
    }
}

export default Background;
