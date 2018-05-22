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

        const pineappleGreenA = (this.state.active) ? Fill.pineappleGreenA : Fill.itemGreyC;
        const pineappleGreenB = (this.state.active) ? Fill.pineappleGreenB : Fill.itemGreyB;
        const pineappleYellowA = (this.state.active) ? Fill.pineappleYellowA : Fill.itemGreyB;
        const pineappleBrownA = (this.state.active) ? Fill.pineappleBrownA : Fill.itemGreyB;
        const pineappleBrownB = (this.state.active) ? Fill.pineappleBrownB : Fill.itemGreyB;

        const broccoliGreenA = (this.state.active) ? Fill.broccoliGreenA : Fill.itemGreyA;
        const broccoliGreenB = (this.state.active) ? Fill.broccoliGreenB : Fill.itemGreyB;
        const broccoliGreenC = (this.state.active) ? Fill.broccoliGreenC : Fill.itemGreyC;

        return (
            <svg x={1787} y={1257} width={250} height={120}  viewBox="0 0 250 120" onClick={this.onClick}>
                <rect x="0" y="0" width="250" height="120" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" width={220} height={98} x={20} y={20} viewBox="0 0 220.1 98.1">
                <defs>
                    <style>
                        {`.cls-1{isolation:isolate}.cls-2{fill:#aacb64}.cls-3{mix-blend-mode:multiply}.cls-4{fill:#e3e6d9}.cls-5{fill:#4d935c}.cls-6{opacity:.34}`}
                    </style>
                </defs>
                <title>
                    Broccoli
                </title>
                <g class="cls-1">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path class={[broccoliGreenA].join(" ")} d="M53.09,26.49l-38.75,19c12.08,5.19,27,14.43,27,27.17v25.5H64.82V72.63c0-12.74,14.94-22,27-27.17ZM41.35,49.64,35.63,45l5.72-3.86Zm23.47,0V41.17L70.53,45Z"/>
                            <g class={[MixBlend.multiply].join(" ")}>
                                <path class={[broccoliGreenB].join(" ")} d="M53.09,26.49l-38.75,19c6.52,2.82,13.89,6.8,19.28,11.9A45.4,45.4,0,0,1,73,57c5.35-4.89,12.5-8.76,18.86-11.49ZM41.35,49.64,35.63,45l5.72-3.86Zm23.47,0V41.17L70.53,45Z"/>
                            </g>
                            <circle class={[broccoliGreenC].join(" ")} cx="53.1" cy="23.5" r="23.5"/>
                            <circle class={[broccoliGreenC].join(" ")} cx="77.5" cy="27.8" r="19.2"/>
                            <circle class={[broccoliGreenC].join(" ")} cx="91.8" cy="35.8" r="14.3"/>
                            <circle class={[broccoliGreenC].join(" ")} cx="14.3" cy="35.8" r="14.3"/>
                            <path class={[broccoliGreenC].join(" ")} d="M47.89,27.76a19.21,19.21,0,1,1-19.2-19.2A19.21,19.21,0,0,1,47.89,27.76Z"/>
                            <g class={[Opacity._03].join(" ")}>
                                <circle class={[broccoliGreenA].join(" ")} cx="51.7" cy="10.2" r="2"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="60.3" cy="16.1" r="1.5"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="44.1" cy="28.5" r="1.6"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="21.6" cy="19.7" r="1.8"/>
                                <path class={[broccoliGreenA].join(" ")} d="M34.59,33A1.64,1.64,0,1,1,33,31.36,1.63,1.63,0,0,1,34.59,33Z"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="7" cy="36.8" r="2"/>
                                <path class={[broccoliGreenA].join(" ")} d="M15.73 36.77a1.38 1.38 0 1 1-1.39-1.38A1.39 1.39 0 0 1 15.73 36.77zM75.23 17.28a1.51 1.51 0 1 1-1.51-1.52A1.51 1.51 0 0 1 75.23 17.28z"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="62.8" cy="26.8" r="1.3"/>
                                <path class={[broccoliGreenA].join(" ")} d="M28.68,20.8a1.26,1.26,0,1,1-1.26-1.26A1.26,1.26,0,0,1,28.68,20.8Z"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="73.7" cy="34.3" r="1.3"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="79.1" cy="14.6" r="1.3"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="80.8" cy="31.4" r="1.6"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="95.8" cy="26.8" r="1.6"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="95.1" cy="40.9" r="1.6"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="100.6" cy="33" r="1.3"/>
                            </g>
                            <path class={[broccoliGreenA].join(" ")} d="M167,26.49l-38.75,19c12.08,5.19,27,14.43,27,27.17v25.5h23.47V72.63c0-12.74,14.94-22,27-27.17ZM155.25,49.64,149.53,45l5.72-3.86Zm23.47,0V41.17L184.43,45Z"/>
                            <g class={[MixBlend.multiply].join(" ")}>
                                <path class={[broccoliGreenB].join(" ")} d="M167,26.49l-38.75,19c6.52,2.82,13.89,6.8,19.28,11.9a45.4,45.4,0,0,1,39.35-.4c5.35-4.89,12.5-8.76,18.86-11.49ZM155.25,49.64,149.53,45l5.72-3.86Zm23.47,0V41.17L184.43,45Z"/>
                            </g>
                            <circle class={[broccoliGreenC].join(" ")} cx="167" cy="23.5" r="23.5"/>
                            <circle class={[broccoliGreenC].join(" ")} cx="191.4" cy="27.8" r="19.2"/>
                            <circle class={[broccoliGreenC].join(" ")} cx="205.7" cy="35.8" r="14.3"/>
                            <circle class={[broccoliGreenC].join(" ")} cx="128.2" cy="35.8" r="14.3"/>
                            <path class={[broccoliGreenC].join(" ")} d="M161.78,27.76a19.21,19.21,0,1,1-19.2-19.2A19.21,19.21,0,0,1,161.78,27.76Z"/>
                            <g class={[Opacity._03].join(" ")}>
                                <circle class={[broccoliGreenA].join(" ")} cx="165.6" cy="10.2" r="2"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="174.2" cy="16.1" r="1.5"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="158.1" cy="28.5" r="1.6"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="135.5" cy="19.7" r="1.8"/>
                                <path class={[broccoliGreenA].join(" ")} d="M148.49,33a1.64,1.64,0,1,1-1.64-1.63A1.63,1.63,0,0,1,148.49,33Z"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="120.9" cy="36.8" r="2"/>
                                <path class={[broccoliGreenA].join(" ")} d="M129.62 36.77a1.38 1.38 0 1 1-1.39-1.38A1.39 1.39 0 0 1 129.62 36.77zM189.12 17.28a1.51 1.51 0 1 1-1.51-1.52A1.51 1.51 0 0 1 189.12 17.28z"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="176.7" cy="26.8" r="1.3"/>
                                <path class={[broccoliGreenA].join(" ")} d="M142.58,20.8a1.26,1.26,0,1,1-1.26-1.26A1.26,1.26,0,0,1,142.58,20.8Z"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="187.6" cy="34.3" r="1.3"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="193" cy="14.6" r="1.3"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="194.7" cy="31.4" r="1.6"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="209.8" cy="26.8" r="1.6"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="209" cy="40.9" r="1.6"/>
                                <circle class={[broccoliGreenA].join(" ")} cx="214.5" cy="33" r="1.3"/>
                            </g>
                        </g>
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

export default Stock;
