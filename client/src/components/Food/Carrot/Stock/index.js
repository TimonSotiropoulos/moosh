// *******************************************************
// Button - Get Started
// -------------------------------------------------------
// Get Stared Button on the home page
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
// --------------------------------

// *******************************************
// Interface Imports
// -------------------------------------------
import { asFoodItem } from '../../../../interface';
// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Fill, MixBlend, Opacity } from '../../../../styles';
// --------------------------------

class Stock extends Component {

    defaultOnClick = () => {
        this.setState({
            active: !this.state.active
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
        this.onClick = props.onClick || this.defaultOnClick;
    }

    render() {

        const { width, height, xPos, yPos, active } = this.props;

        const carrotGreenA = (this.props.active) ? Fill.carrotGreenA : Fill.itemGreyB;
        const carrotOrangeA = (this.props.active) ? Fill.carrotOrangeA : Fill.itemGreyC;
        const carrotOrangeB = (this.props.active) ? Fill.carrotOrangeB : Fill.itemGreyB;

        return (
            <svg x={1635} y={1257} width={150} height={158}  viewBox="0 0 150 158" onClick={this.onClick}>
                <rect x="0" y="0" width="150" height="158" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" x={15} y={20} width={120} height={128} viewBox="0 0 120.8 128.6">
                <title>
                    Carrots
                </title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[carrotGreenA].join(" ")} d="M5.51 24.95L3.39 0.9 5.01 0 9.6 15.78 10.49 15.83 10.05 2.24 11.34 1.85 13.24 2.85 15.2 15.72 16.54 6.83 17.6 6.99 18.5 16.05 22.69 0.56 24.76 1.46 24.76 4.76 20.79 25.9 5.51 24.95z"/>
                        <circle class={[carrotOrangeA].join(" ")} cx="13.6" cy="32.8" r="13.6"/>
                        <circle class={[carrotOrangeA].join(" ")} cx="13.6" cy="121.1" r="7.5"/>
                        <path class={[carrotOrangeA].join(" ")} d="M27.12 33.56L27.08 34.18 25.12 62.76 24.81 67.25 24.59 70.48 24.28 74.97 21.13 121.06 6.02 121.06 5.06 107.08 4.74 102.6 0.99 47.78 0.68 43.3 0.02 33.71 27.12 33.56z"/>
                        <path class={[carrotOrangeB].join(" ")} d="M.68 43.3H10a2.25 2.25 0 0 1 2.24 2.24 2 2 0 0 1-.13.74A2.22 2.22 0 0 1 10 47.78H1zM16.31 62.76h8.81l-.31 4.48h-8.5a2.24 2.24 0 1 1 0-4.48zM20 70.49h4.62L24.28 75H20a2.24 2.24 0 0 1 0-4.48zM4.74 102.6H9.46a2.24 2.24 0 1 1 0 4.47H5.06z"/>
                        <path class={[carrotGreenA].join(" ")} d="M52.34 24.95L50.21 0.9 51.84 0 56.42 15.78 57.32 15.83 56.87 2.24 58.16 1.85 60.06 2.85 62.02 15.72 63.36 6.83 64.42 6.99 65.32 16.05 69.51 0.56 71.58 1.46 71.58 4.76 67.61 25.9 52.34 24.95z"/>
                        <circle class={[carrotOrangeA].join(" ")} cx="60.4" cy="32.8" r="13.6"/>
                        <circle class={[carrotOrangeA].join(" ")} cx="60.4" cy="121.1" r="7.5"/>
                        <path class={[carrotOrangeA].join(" ")} d="M73.94 33.56L73.9 34.18 71.94 62.76 71.64 67.25 71.42 70.48 71.11 74.97 67.96 121.06 52.84 121.06 51.88 107.08 51.57 102.6 47.81 47.78 47.5 43.3 46.85 33.71 73.94 33.56z"/>
                        <path class={[carrotOrangeB].join(" ")} d="M47.5 43.3h9.31a2.25 2.25 0 0 1 2.24 2.24 2 2 0 0 1-.13.74 2.22 2.22 0 0 1-2.11 1.5h-9zM63.13 62.76h8.81l-.31 4.48h-8.5a2.24 2.24 0 0 1 0-4.48zM66.8 70.49h4.62L71.11 75H66.8a2.24 2.24 0 0 1 0-4.48zM51.57 102.6h4.71a2.24 2.24 0 1 1 0 4.47h-4.4z"/>
                        <path class={[carrotGreenA].join(" ")} d="M99.16 24.95L97.04 0.9 98.66 0 103.25 15.78 104.14 15.83 103.7 2.24 104.99 1.85 106.89 2.85 108.85 15.72 110.19 6.83 111.25 6.99 112.15 16.05 116.34 0.56 118.41 1.46 118.41 4.76 114.44 25.9 99.16 24.95z"/>
                        <circle class={[carrotOrangeA].join(" ")} cx="107.2" cy="32.8" r="13.6"/>
                        <circle class={[carrotOrangeA].join(" ")} cx="107.2" cy="121.1" r="7.5"/>
                        <path class={[carrotOrangeA].join(" ")} d="M120.77 33.56L120.73 34.18 118.77 62.76 118.46 67.25 118.24 70.48 117.93 74.97 114.78 121.06 99.67 121.06 98.71 107.08 98.39 102.6 94.64 47.78 94.33 43.3 93.67 33.71 120.77 33.56z"/>
                        <path class={[carrotOrangeB].join(" ")} d="M94.33 43.3h9.31a2.25 2.25 0 0 1 2.24 2.24 2 2 0 0 1-.13.74 2.22 2.22 0 0 1-2.11 1.5h-9zM110 62.76h8.81l-.31 4.48H110a2.24 2.24 0 0 1 0-4.48zM113.62 70.49h4.62L117.93 75h-4.31a2.24 2.24 0 0 1 0-4.48zM98.39 102.6h4.71a2.24 2.24 0 1 1 0 4.47h-4.4z"/>
                    </g>
                </g>
            </svg>
        </svg>

    );
}
}

Stock.defaultProps = {
    active: true,
    width: 249,
    height: 190,
    xPos: 50,
    yPos: 396,
    onClick: null
}

export default asFoodItem(Stock);
