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

    _renderIntroBackground = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 1536">
            <title>introBackground</title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="background">
                    <rect class={[Fill.lavendar].join(" ")} width="2048" height="1129.19"/>
                    <rect class={[Fill.plum].join(" ")} y="1129.19" width="2048" height="406.81"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M652.5,147.31,571.16,271.24H733.83L652.5,147.31"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M464.19,147.23,382.86,271.16H545.53L464.19,147.23"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M172.13,281.51,90.8,405.44,9.46,281.51Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M451.14,416,369.81,539.89,288.48,416Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M820.66,416.28,739.33,540.21,658,416.28Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M357.36,281.51,276,405.44,194.7,281.51Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M545.42,281.51,464.09,405.44,382.76,281.51Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M729,281.51,647.67,405.44,566.33,281.51Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M288.48,405.44l81.33-123.92,81.34,123.92Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M660.52,405.79l81.33-123.92,81.34,123.92Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M278.48,147.14,197.15,271.07H359.82L278.48,147.14"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M90.09,147.14,8.76,271.07H171.43L90.09,147.14"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M184.32,271.07l81.34-123.93H103l81.34,123.93"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M558.2,270.93,639.53,147H476.86L558.2,270.93"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M918,281.51,836.64,405.44,755.3,281.51Z"/>
                    <polygon class={[Fill.lightPlum].join(" ")} points="0 286.57 0 405.44 78.01 405.44 0 286.57"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1953.76,669.42l-87,132.6h174.06l-87-132.6"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1752.27,669.33l-87,132.6H1839.3l-87-132.6"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1439.76,813l-87,132.6-87-132.6Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1738.31,956.89l-87,132.6-87-132.6Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1638,813l-87,132.6-87-132.6Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1839.19,813l-87,132.6-87-132.6Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M2035.61,813l-87,132.6-87-132.6Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1165,945.62,1252,813l87,132.6Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1564.26,945.62l87-132.6,87,132.6Z"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1553.56,669.24l-87,132.6h174.06l-87-132.6"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1352,669.24l-87,132.6H1439l-87-132.6"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1452.81,801.85l87-132.6H1365.78l87,132.6"/>
                    <path class={[Fill.lightPlum].join(" ")} d="M1852.86,801.7l87-132.6H1765.83l87,132.6"/>
                    <polygon class={[Fill.lightPlum].join(" ")} points="2048 815.48 1962.35 945.99 2048 945.99 2048 815.48"/>
                    <polygon class={[Fill.lightPlum].join(" ")} points="2048 957.22 1959.64 957.22 2046.67 1089.82 2048 1087.79 2048 957.22"/>
                </g>
            </g>
        </svg>
        );
    }

    render() {
        const { screen } = this.props;

        switch (screen) {
            case Routes.Home:
                return this._renderHomeBackground();
            case Routes.Intro:
                return this._renderIntroBackground();
            default:
                return this._renderHomeBackground();
        }
    }
}

export default Background;
