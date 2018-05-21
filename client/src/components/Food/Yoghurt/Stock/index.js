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

        const yoghurtBlueA = (this.state.active) ? Fill.yoghurtBlueA : Fill.itemGreyB;
        const yoghurtBlueB = (this.state.active) ? Fill.yoghurtBlueB : Fill.itemGreyC;

        return (
            <svg x={xPos} y={yPos} width={width} height={height}  viewBox="0 0 249 126" onClick={this.onClick}>
                <rect x="0" y="0" width="200" height="200" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" height={175} x={-24} y={2} viewBox="0 0 179.3 190.6">
                <title>
                    Yoghurt
                </title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[Fill.white].join(" ")} d="M4.43 104.68L4.43 112.14 11.57 190.57 41.43 190.57 41.43 104.68 4.43 104.68zM78.42 104.68L78.42 112.14 71.29 190.57 41.43 190.57 41.43 104.68 78.42 104.68z"/>
                        <path class={[yoghurtBlueA].join(" ")} d="M67.51,135.4H58.15a18.45,18.45,0,0,0-33.45,0H15.34v15.67H24.7a18.45,18.45,0,0,0,33.45,0h9.36Z"/>
                        <path class={[Fill.yoghurtGreyA].join(" ")} d="M4.4 104.7H78.4V112.2H4.4z"/>
                        <path class={[Fill.yoghurtGreyB].join(" ")} d="M41.43,98.22H3.27L0,100.34H41.43Z"/>
                        <path class={[yoghurtBlueA].join(" ")} d="M0 100.3H41.4V108.1H0z"/>
                        <path class={[Fill.yoghurtGreyB].join(" ")} d="M82.86,100.34l-3.27-2.12H41.43v2.12Z"/>
                        <path class={[yoghurtBlueA].join(" ")} d="M82.86,100.34H41.43v7.82l41.23.06.2-.13Z"/>
                        <path class={[yoghurtBlueA].join(" ")} d="M41.43 110.21H79.59l3.07-2-41.23-.06zM0 108.16c1.28.83 2 1.23 3.27 2.05H41.43v-2.05z"/>
                        <path class={[Fill.white].join(" ")} d="M100.93 104.68L100.93 112.14 108.07 190.57 137.93 190.57 137.93 104.68 100.93 104.68zM174.92 104.68L174.92 112.14 167.78 190.57 137.93 190.57 137.93 104.68 174.92 104.68z"/>
                        <path class={[yoghurtBlueA].join(" ")} d="M164,135.4h-9.36a18.45,18.45,0,0,0-33.45,0h-9.36v15.67h9.36a18.45,18.45,0,0,0,33.45,0H164Z"/>
                        <path class={[Fill.yoghurtGreyA].join(" ")} d="M100.9 104.7H174.9V112.2H100.9z"/>
                        <path class={[Fill.yoghurtGreyB].join(" ")} d="M137.93,98.22H99.77l-3.27,2.12h41.43Z"/>
                        <path class={[yoghurtBlueA].join(" ")} d="M96.5 100.3H137.9V108.1H96.5z"/>
                        <path class={[Fill.yoghurtGreyB].join(" ")} d="M179.35,100.34l-3.27-2.12H137.93v2.12Z"/>
                        <path class={[yoghurtBlueA].join(" ")} d="M179.35,100.34H137.93v7.82l41.23.06.2-.13Z"/>
                        <path class={[yoghurtBlueA].join(" ")} d="M137.93 110.21h38.16l3.07-2-41.23-.06zM96.5 108.16c1.28.83 2 1.23 3.27 2.05h38.16v-2.05z"/>
                        <path class={[Fill.white].join(" ")} d="M52.94 6.46L52.94 13.93 60.07 92.35 89.93 92.35 89.93 6.46 52.94 6.46zM126.92 6.46L126.92 13.93 119.79 92.35 89.93 92.35 89.93 6.46 126.92 6.46z"/>
                        <path class={[yoghurtBlueA].join(" ")} d="M116,37.17h-9.36a18.45,18.45,0,0,0-33.45,0H63.84V52.84h9.36a18.45,18.45,0,0,0,33.45,0H116Z"/>
                        <path class={[Fill.yoghurtGreyA].join(" ")} d="M52.9 6.5H126.9V14H52.9z"/>
                        <path class={[Fill.yoghurtGreyB].join(" ")} d="M89.93,0H51.77L48.5,2.12H89.93Z"/>
                        <path class={[yoghurtBlueA].join(" ")} d="M48.5 2.1H89.9V9.9H48.5z"/>
                        <path class={[Fill.yoghurtGreyB].join(" ")} d="M131.36,2.12,128.09,0H89.93V2.12Z"/>
                        <path class={[yoghurtBlueA].join(" ")} d="M131.36,2.12H89.93V9.94l41.23.06.2-.13Z"/>
                        <path class={[yoghurtBlueA].join(" ")} d="M89.93 12h38.16l3.07-2L89.93 9.94zM48.5 9.94c1.28.83 2 1.23 3.27 2.05H89.93V9.94z"/>
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
    height: 240,
    xPos: 1494,
    yPos: 860,
    onClick: null
}

export default Stock;
