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
// Style Imports
// -------------------------------------------
import { Fill, Text } from '../../../../styles';
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

        const milkWhite = (this.state.active) ? Fill.milkWhite : Fill.itemGreyA;
        const milkBlueA = (this.state.active) ? Fill.milkBlueA : Fill.itemGreyC;
        const milkBlueB = (this.state.active) ? Fill.milkBlueB : Fill.itemGreyB;

        return (
            <svg x={xPos} y={yPos} width={width} height={height}  viewBox="0 0 249 136" onClick={this.onClick}>
                <rect x="0" y="0" width="320" height="115" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" x={10} y={2} viewBox="0 0 419.9 147.1">
                  <title>
                    Milk
                  </title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path class={[Fill.white].join(" ")} d="M0 36.2H82.8V147H0zM73.06 1.2A1.2 1.2 0 0 0 71.87 0H11.14A1.2 1.2 0 0 0 10 1.2V32.61a1.19 1.19 0 0 0 1.19 1.2H71.87a1.19 1.19 0 0 0 1.19-1.2V1.2z"/>
                      <path class={[milkWhite].join(" ")} d="M82.81 36.22L0 36.22 9.95 9.95 72.87 9.95 82.81 36.22z"/>
                      <path class={[milkBlueA].join(" ")} d="M55.47 23.8L28.84 23.72 28.84 20.01 55.47 20.09 55.47 23.8z"/>
                      <path class={[milkBlueA].join(" ")} d="M55.47,23.47c0,3.06-6,5.57-13.32,5.57s-13.32-2.5-13.32-5.57,6-5.57,13.32-5.57S55.47,20.39,55.47,23.47Z"/>
                      <path class={[milkBlueB].join(" ")} d="M55.47 20.28c0 3.07-6 5.57-13.32 5.57s-13.32-2.5-13.32-5.57 6-5.55 13.32-5.55S55.47 17.21 55.47 20.28zM82.81 55.55V36.22H0V55.55zM0 136.2H82.8V147.1H0zM0 131H82.8V133.6H0z"/>
                      <path class={[Fill.white].join(" ")} d="M112.4 36.2H195.2V147H112.4zM185.42 1.2A1.2 1.2 0 0 0 184.23 0H123.49a1.2 1.2 0 0 0-1.19 1.2V32.61a1.19 1.19 0 0 0 1.19 1.2h60.74a1.19 1.19 0 0 0 1.19-1.2V1.2z"/>
                      <path class={[milkWhite].join(" ")} d="M195.17 36.22L112.36 36.22 122.31 9.95 185.22 9.95 195.17 36.22z"/>
                      <path class={[milkBlueA].join(" ")} d="M167.83 23.8L141.19 23.72 141.19 20.01 167.83 20.09 167.83 23.8z"/>
                      <path class={[milkBlueA].join(" ")} d="M167.83,23.47c0,3.06-6,5.57-13.32,5.57s-13.32-2.5-13.32-5.57,6-5.57,13.32-5.57S167.83,20.39,167.83,23.47Z"/>
                      <path class={[milkBlueB].join(" ")} d="M167.83 20.28c0 3.07-6 5.57-13.32 5.57s-13.32-2.5-13.32-5.57 6-5.55 13.32-5.55S167.83 17.21 167.83 20.28zM195.17 55.55V36.22H112.36V55.55zM112.4 136.2H195.2V147.1H112.4zM112.4 131H195.2V133.6H112.4z"/>
                      <path class={[Fill.white].join(" ")} d="M224.7 36.2H307.5V147H224.7zM297.77 1.2A1.2 1.2 0 0 0 296.59 0H235.85a1.2 1.2 0 0 0-1.19 1.2V32.61a1.19 1.19 0 0 0 1.19 1.2h60.74a1.19 1.19 0 0 0 1.19-1.2V1.2z"/>
                      <path class={[milkWhite].join(" ")} d="M307.52 36.22L224.71 36.22 234.66 9.95 297.58 9.95 307.52 36.22z"/>
                      <path class={[milkBlueA].join(" ")} d="M280.18 23.8L253.55 23.72 253.55 20.01 280.18 20.09 280.18 23.8z"/>
                      <path class={[milkBlueA].join(" ")} d="M280.18,23.47c0,3.06-6,5.57-13.32,5.57s-13.32-2.5-13.32-5.57,6-5.57,13.32-5.57S280.18,20.39,280.18,23.47Z"/>
                      <path class={[milkBlueB].join(" ")} d="M280.18 20.28c0 3.07-6 5.57-13.32 5.57s-13.32-2.5-13.32-5.57 6-5.55 13.32-5.55S280.18 17.21 280.18 20.28zM307.52 55.55V36.22H224.71V55.55zM224.7 136.2H307.5V147.1H224.7zM224.7 131H307.5V133.6H224.7z"/>
                      <path class={[Fill.white].join(" ")} d="M337.1 36.2H419.90000000000003V147H337.1zM410.13 1.2A1.2 1.2 0 0 0 408.94 0H348.21A1.2 1.2 0 0 0 347 1.2V32.61a1.19 1.19 0 0 0 1.19 1.2h60.74a1.19 1.19 0 0 0 1.19-1.2V1.2z"/>
                      <path class={[milkWhite].join(" ")} d="M419.88 36.22L337.07 36.22 347.02 9.95 409.93 9.95 419.88 36.22z"/>
                      <path class={[milkBlueA].join(" ")} d="M392.54 23.8L365.9 23.72 365.9 20.01 392.54 20.09 392.54 23.8z"/>
                      <path class={[milkBlueA].join(" ")} d="M392.54,23.47c0,3.06-6,5.57-13.32,5.57s-13.32-2.5-13.32-5.57,6-5.57,13.32-5.57S392.54,20.39,392.54,23.47Z"/>
                      <path class={[milkBlueB].join(" ")} d="M392.54 20.28c0 3.07-6 5.57-13.32 5.57s-13.32-2.5-13.32-5.57 6-5.55 13.32-5.55S392.54 17.21 392.54 20.28zM419.88 55.55V36.22H337.07V55.55zM337.1 136.2H419.90000000000003V147.1H337.1zM337.1 131H419.90000000000003V133.6H337.1z"/>
                    </g>
                  </g>
                </svg>

        </svg>

    );
}
}

Stock.defaultProps = {
    active: true,
    width: 500,
    height: 240,
    xPos: 1450,
    yPos: 632,
    onClick: null
}

export default Stock;
