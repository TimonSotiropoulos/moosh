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
import { Fill, Opacity } from '../../../../styles';
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

        const mainColor = (this.props.active) ? Fill.cupcakePinkA : Fill.itemGreyC;
        const altColor = (this.props.active) ? Fill.cupcakePinkB : Fill.itemGreyA;
        const primeColor = (this.props.active) ? Fill.cupcakePinkC : Fill.itemGreyB;
        const subColor = (this.props.active) ? Fill.cupcakePinkD : Fill.itemGreyC;
        const subAltColor = (this.props.active) ? Fill.cupcakeGreen : Fill.itemGreyB;
        const primeAltColor = (this.props.active) ? Fill.cupcakeOrange : Fill.itemGreyB;

        return (
            <svg x={xPos} y={yPos} width={width} height={height}  viewBox="0 0 249 126" onClick={this.onClick}>
                <rect x="0" y="0" width="300" height="200" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" width={170} x={40} y={75} viewBox="0 0 127.5 69.6">
                <title>
                    Cupcake
                </title>
                <g>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path class={[subAltColor].join(" ")} d="M110.45,11.28a11.5,11.5,0,0,1-8.92,4.34,11.44,11.44,0,0,1,2.16-9.68,11.3,11.3,0,0,1,8.92-4.32A11.34,11.34,0,0,1,110.45,11.28Z"/>
                            <path class={[mainColor].join(" ")} d="M105.53,9.74a13.93,13.93,0,0,1-.11,1.77.48.48,0,0,1,0,.19c0,.13,0,.27-.07.4a2,2,0,0,1-2,1.47h-10a2,2,0,0,1-2-1.55.87.87,0,0,1,0-.22,13.08,13.08,0,0,1-.17-2.06c0-5.38,3.23-9.74,7.2-9.74S105.53,4.36,105.53,9.74Z"/>
                            <circle class={[altColor].join(" ")} cx="96" cy="4.6" r="1.8"/>
                            <circle class={[altColor].join(" ")} cx="102" cy="7.8" r="1.7"/>
                            <circle class={[altColor].join(" ")} cx="96.8" cy="10.5" r="1.3"/>
                            <path class={[primeAltColor].join(" ")} d="M125.75,34.54A5.78,5.78,0,0,0,120,28.75H76.68a5.78,5.78,0,0,0-5.78,5.78h0a5.78,5.78,0,0,0,5.78,5.78H120a5.78,5.78,0,0,0,5.78-5.78Z"/>
                            <path class={[Fill.white].join(" ")} d="M122.89,24.67a5.18,5.18,0,0,0-5.18-5.17H78.95a5.17,5.17,0,0,0-5.17,5.17h0a5.17,5.17,0,0,0,5.17,5.18h38.76a5.18,5.18,0,0,0,5.18-5.18Z"/>
                            <path class={[Fill.white].join(" ")} d="M117.47,16.4a4,4,0,0,0-4-4H83.22a4,4,0,0,0-4,4h0a4,4,0,0,0,4,4h30.22a4,4,0,0,0,4-4Z"/>
                            <path class={[primeColor].join(" ")} d="M127.55 33.09L123.54 69.6 73.11 69.6 69.1 33.09 127.55 33.09z"/>
                            <path class={[subColor, Opacity._08].join(" ")} d="M79.33 67.19L77.19 35.74 74.81 35.74 77.22 67.19 79.33 67.19zM84.54 67.19L82.89 35.74 80.49 35.74 82.43 67.19 84.54 67.19z"/>
                            <path class={[subAltColor].join(" ")} d="M41.35,11.28a11.5,11.5,0,0,1-8.92,4.34,11.44,11.44,0,0,1,2.16-9.68,11.3,11.3,0,0,1,8.92-4.32A11.34,11.34,0,0,1,41.35,11.28Z"/>
                            <path class={[mainColor].join(" ")} d="M36.43,9.74a13.93,13.93,0,0,1-.11,1.77.48.48,0,0,1,0,.19c0,.13,0,.27-.07.4a2,2,0,0,1-2,1.47h-10a2,2,0,0,1-2-1.55.87.87,0,0,1,0-.22A13.08,13.08,0,0,1,22,9.74C22,4.36,25.25,0,29.22,0S36.43,4.36,36.43,9.74Z"/>
                            <circle class={[altColor].join(" ")} cx="26.9" cy="4.6" r="1.8"/>
                            <circle class={[altColor].join(" ")} cx="32.9" cy="7.8" r="1.7"/>
                            <circle class={[altColor].join(" ")} cx="27.7" cy="10.5" r="1.3"/>
                            <path class={[primeAltColor].join(" ")} d="M56.65,34.54a5.78,5.78,0,0,0-5.78-5.78H7.57A5.78,5.78,0,0,0,1.8,34.54h0a5.78,5.78,0,0,0,5.78,5.78h43.3a5.78,5.78,0,0,0,5.78-5.78Z"/>
                            <path class={[Fill.white].join(" ")} d="M53.78,24.67A5.18,5.18,0,0,0,48.6,19.5H9.84a5.17,5.17,0,0,0-5.17,5.17h0a5.17,5.17,0,0,0,5.17,5.18H48.6a5.18,5.18,0,0,0,5.18-5.18Z"/>
                            <path class={[Fill.white].join(" ")} d="M48.36,16.4a4,4,0,0,0-4-4H14.11a4,4,0,0,0-4,4h0a4,4,0,0,0,4,4H44.33a4,4,0,0,0,4-4Z"/>
                            <path class={[primeColor].join(" ")} d="M58.45 33.09L54.44 69.6 4.01 69.6 0 33.09 58.45 33.09z"/>
                            <path class={[subColor, Opacity._08].join(" ")} d="M10.23 67.19L8.09 35.74 5.7 35.74 8.12 67.19 10.23 67.19zM15.43 67.19L13.78 35.74 11.39 35.74 13.33 67.19 15.43 67.19z"/>
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
    width: 190,
    height: 190,
    xPos: 920,
    yPos: 417,
    onClick: null
}

export default asFoodItem(Stock);
