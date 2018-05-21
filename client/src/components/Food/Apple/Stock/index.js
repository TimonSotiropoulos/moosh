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

        const appleBrown = (this.state.active) ? Fill.appleBrown : Fill.itemGreyA;
        const appleRed = (this.state.active) ? Fill.appleRed : Fill.itemGreyC;
        const appleGreenA = (this.state.active) ? Fill.appleGreenA : Fill.itemGreyC;
        const appleGreenB = (this.state.active) ? Fill.appleGreenB : Fill.itemGreyB;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={180} y={184} width={563} height={470} viewBox="0 0 563.7 470.7" onClick={this.onClick}>
            <title>
                Apples
            </title>
            <g>
                <rect x="0" y="0" width="100" height="100" className={[Fill.transparent].join(" ")}></rect>
                <rect x="463" y="35" width="100" height="120" className={[Fill.transparent].join(" ")}></rect>
                <rect x="371" y="350" width="120" height="120" className={[Fill.transparent].join(" ")}></rect>
                <rect x="115" y="180" width="120" height="120" className={[Fill.transparent].join(" ")}></rect>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[appleBrown].join(" ")} transform="translate(-39.52 384.82) rotate(-89.92)" d="M167.3 210H178.60000000000002V214.4H167.3z"/>
                        <path class={[appleRed].join(" ")} d="M207,245.36a34.14,34.14,0,1,1-47.11-31.65,24,24,0,0,1,2.35-.85,9.74,9.74,0,0,1,2.38-.28,10.29,10.29,0,0,1,8.3,4.22,10.33,10.33,0,0,1,8.33-4.18,10.14,10.14,0,0,1,2.38.29,24.3,24.3,0,0,1,2.34.86,34.08,34.08,0,0,1,21,31.59Z"/>
                        <path class={[appleGreenA].join(" ")} d="M172.65,212.52a27.82,27.82,0,0,0,22,11.17,26.5,26.5,0,0,0,21.54-11.1,27.82,27.82,0,0,0-22-11.14A26.56,26.56,0,0,0,172.65,212.52Z"/>
                        <path class={[appleGreenB].join(" ")} d="M172.65,212.53a27.81,27.81,0,0,0,22,11.17,26.52,26.52,0,0,0,21.53-11.09l-15.11.11,3.61,5.24-6.58-5.37Z"/>
                        <path class={[appleBrown].join(" ")} transform="translate(458.28 581.8) rotate(-89.92)" d="M514.8 59.2H526.0999999999999V63.6H514.8z"/>
                        <path class={[appleRed].join(" ")} d="M554.51,94.61A34.14,34.14,0,1,1,507.41,63a24,24,0,0,1,2.35-.85,9.74,9.74,0,0,1,2.38-.28,10.29,10.29,0,0,1,8.3,4.22,10.33,10.33,0,0,1,8.33-4.18,10.14,10.14,0,0,1,2.38.29,24.3,24.3,0,0,1,2.34.86,34.08,34.08,0,0,1,21,31.59Z"/>
                        <path class={[appleGreenA].join(" ")} d="M520.18,61.76a27.82,27.82,0,0,0,22,11.17,26.5,26.5,0,0,0,21.54-11.1,27.82,27.82,0,0,0-22-11.14A26.56,26.56,0,0,0,520.18,61.76Z"/>
                        <path class={[appleGreenB].join(" ")} d="M520.18,61.77a27.81,27.81,0,0,0,22,11.17,26.52,26.52,0,0,0,21.53-11.09L548.57,62l3.61,5.24-6.58-5.37Z"/>
                        <path class={[appleBrown].join(" ")} transform="translate(45.14 809.08) rotate(-89.92)" d="M422 379.7H433.3V384.09999999999997H422z"/>
                        <path class={[appleRed].join(" ")} d="M461.74,415.11a34.14,34.14,0,1,1-47.11-31.65,24,24,0,0,1,2.35-.85,9.74,9.74,0,0,1,2.38-.28,10.29,10.29,0,0,1,8.3,4.22,10.33,10.33,0,0,1,8.33-4.18,10.14,10.14,0,0,1,2.38.29,24.3,24.3,0,0,1,2.34.86,34.08,34.08,0,0,1,21,31.59Z"/>
                        <path class={[appleGreenA].join(" ")} d="M427.4,382.26a27.82,27.82,0,0,0,22,11.17,26.5,26.5,0,0,0,21.54-11.1,27.82,27.82,0,0,0-22-11.14A26.56,26.56,0,0,0,427.4,382.26Z"/>
                        <path class={[appleGreenB].join(" ")} d="M427.41,382.27a27.81,27.81,0,0,0,22,11.17,26.52,26.52,0,0,0,21.53-11.09l-15.11.11,3.61,5.24-6.58-5.37Z"/>
                        <path class={[appleBrown].join(" ")} transform="translate(23.42 44.94) rotate(-89.92)" d="M28.6 8.5H39.900000000000006V12.9H28.6z"/>
                        <path class={[appleRed].join(" ")} d="M68.28,43.91A34.14,34.14,0,1,1,21.17,12.25a24,24,0,0,1,2.35-.85,9.74,9.74,0,0,1,2.38-.28,10.29,10.29,0,0,1,8.3,4.22,10.33,10.33,0,0,1,8.33-4.18,10.14,10.14,0,0,1,2.38.29,24.3,24.3,0,0,1,2.34.86,34.08,34.08,0,0,1,21,31.59Z"/>
                        <path class={[appleGreenA].join(" ")} d="M33.94,11.07a27.82,27.82,0,0,0,22,11.17,26.5,26.5,0,0,0,21.54-11.1A27.82,27.82,0,0,0,55.49,0,26.56,26.56,0,0,0,33.94,11.07Z"/>
                        <path class={[appleGreenB].join(" ")} d="M33.95,11.07a27.81,27.81,0,0,0,22,11.17A26.52,26.52,0,0,0,77.44,11.15l-15.11.11,3.61,5.24-6.58-5.37Z"/>
                    </g>
                </g>
            </g>
        </svg>
    );
}
}

Stock.defaultProps = {
    active: true,
    width: 238,
    height: 240,
    xPos: 105,
    yPos: 161,
    onClick: null
}

export default Stock;
