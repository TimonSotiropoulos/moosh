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
import { Fill, Stroke } from '../../../../styles';
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

        const mainColor = (this.state.active) ? Fill.chipsGreenA : Fill.itemGreyC;
        const altColor = (this.state.active) ? Fill.chipsGreenB : Fill.itemGreyA;
        const primeColor = (this.state.active) ? Fill.chipsGreenC : Fill.itemGreyB;
        const subColor = (this.state.active) ? Fill.chipsLightBrown : Fill.itemGreyC;
        // const subAltColor = (this.state.active) ? Fill.chocoBarLightBrownC : Fill.itemGreyB;

        return (
            <svg x={xPos} y={yPos} width={width} height={height}  viewBox="0 0 249 126" onClick={this.onClick}>
                <rect x="0" y="0" width="300" height="200" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" y={54} viewBox="0 0 198 116">
                <title>
                    Chips
                </title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[mainColor].join(" ")} d="M91.76,5.73V0H0V5.73S6.69,9.24,6.69,58,0,110.24,0,110.24V116H91.76v-5.73s-6.69-3.5-6.69-52.25S91.76,5.73,91.76,5.73Z"/>
                        <path class={[altColor].join(" ")} d="M0 0H91.8V5.7H0z"/>
                        <path class={[mainColor].join(" ")} d="M1.3 1.4H90.3V2.5999999999999996H1.3zM1.3 3H90.3V4.2H1.3z"/>
                        <path class={[altColor].join(" ")} d="M0 110.3H91.8V116H0z"/>
                        <path class={[mainColor].join(" ")} d="M1.3 111.6H90.3V112.8H1.3zM1.3 113.3H90.3V114.5H1.3z"/>
                        <circle class={[primeColor].join(" ")} cx="46" cy="58" r="32.4"/>
                        <path class={[subColor].join(" ")} d="M37.5,51.54s-1.75-4.48.61-7.68S44,38.49,48.36,40.28,59,49.16,64,52.22s6.38,6.12,1.75,10.59-9,5.74-16.86,4.25S37.5,51.54,37.5,51.54Z"/>
                        <path class={[subColor].join(" ")} d="M31,52.76s5.32-1.67,9.27,1.22,4.63,3.8,9.72,4.41,9,2.43,5.16,9.19S42.89,76.3,36.66,73.72,26,65.75,25.73,61.19A8.26,8.26,0,0,1,31,52.76Z"/>
                        <path class={[mainColor].join(" ")} d="M198,5.73V0H106.21V5.73S112.9,9.24,112.9,58s-6.69,52.25-6.69,52.25V116H198v-5.73s-6.69-3.5-6.69-52.25S198,5.73,198,5.73Z"/>
                        <path class={[altColor].join(" ")} d="M106.2 0H198V5.7H106.2z"/>
                        <path class={[mainColor].join(" ")} d="M107.5 1.4H196.5V2.5999999999999996H107.5zM107.5 3H196.5V4.2H107.5z"/>
                        <path class={[altColor].join(" ")} d="M106.2 110.3H198V116H106.2z"/>
                        <path class={[mainColor].join(" ")} d="M107.5 111.6H196.5V112.8H107.5zM107.5 113.3H196.5V114.5H107.5z"/>
                        <circle class={[primeColor].join(" ")} cx="152.2" cy="58" r="32.4"/>
                        <path class={[subColor].join(" ")} d="M143.71,51.54s-1.75-4.48.61-7.68,5.92-5.37,10.25-3.58,10.63,8.88,15.65,11.94,6.38,6.12,1.75,10.59-9,5.74-16.86,4.25S143.71,51.54,143.71,51.54Z"/>
                        <path class={[subColor].join(" ")} d="M137.18,52.76s5.32-1.67,9.27,1.22,4.63,3.8,9.72,4.41,9,2.43,5.16,9.19-12.23,8.73-18.46,6.15-10.71-8-10.94-12.53A8.26,8.26,0,0,1,137.18,52.76Z"/>
                    </g>
                </g>
            </svg>
        </svg>

    );
}
}

Stock.defaultProps = {
    active: true,
    width: 200,
    height: 190,
    xPos: 1108,
    yPos: 417,
    onClick: null
}

export default Stock;
