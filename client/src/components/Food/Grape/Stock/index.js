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

        const grapePurpleA = (this.props.active) ? Fill.grapePurpleA : Fill.itemGreyC;
        const grapePurpleB = (this.props.active) ? Fill.grapePurpleB : Fill.itemGreyB;
        const grapeGreen = (this.props.active) ? Fill.grapeGreen : Fill.itemGreyC;

        return (
            <svg x={310} y={680} width={320} height={220}  viewBox="0 0 320 220" onClick={this.onClick}>
                <rect x="0" y="0" width="320" height="220" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" x={30} y={20} width={273} height={192} viewBox="0 0 273.5 192.7">
                <title>
                    Berries
                </title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <ellipse class={[grapePurpleA].join(" ")} cx="38.4" cy="155.3" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="31.2" cy="143.9" rx="8.5" ry="9.3"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="46.1" cy="143.9" rx="8.5" ry="9.3"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="23.5" cy="131.3" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="38.4" cy="131.3" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="53.4" cy="131.3" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="16.2" cy="119.8" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="31.2" cy="119.8" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="46.1" cy="119.8" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="61.1" cy="119.8" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="8.5" cy="107.2" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="23.5" cy="107.2" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="38.4" cy="107.2" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="53.4" cy="107.2" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="68.4" cy="107.2" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="16.2" cy="95.8" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="31.2" cy="95.8" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="46.1" cy="95.8" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="61.1" cy="95.8" rx="8.5" ry="9.4"/>
                        <path class={[grapeGreen].join(" ")} d="M50.21,72.58a14.41,14.41,0,0,0-4.24.63,16.87,16.87,0,0,0,.26-3,18.42,18.42,0,0,0-7.72-15,19.36,19.36,0,0,0-7.75,15.28A17.51,17.51,0,0,0,31,73.34a14.36,14.36,0,0,0-16.31,5.29,15.19,15.19,0,0,0,12,6.09h9.12V82.41a2.53,2.53,0,0,1,.28-1.17A2.56,2.56,0,0,1,37.32,80a2.53,2.53,0,0,1,1.1-.25,2.57,2.57,0,0,1,1.32.36,2.75,2.75,0,0,1,.55.43,2,2,0,0,1,.32.39,2.58,2.58,0,0,1,.45,1.48v2.31h9.39A14.48,14.48,0,0,0,62.2,78.66,15.26,15.26,0,0,0,50.21,72.58Z"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="137.9" cy="183.3" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="130.7" cy="171.8" rx="8.5" ry="9.3"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="145.7" cy="171.8" rx="8.5" ry="9.3"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="123" cy="159.2" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="137.9" cy="159.2" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="152.9" cy="159.2" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="115.7" cy="147.7" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="130.7" cy="147.7" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="145.7" cy="147.7" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="160.6" cy="147.7" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="108" cy="135.1" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="123" cy="135.1" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="137.9" cy="135.1" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="152.9" cy="135.1" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="167.9" cy="135.1" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="115.7" cy="123.8" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="130.7" cy="123.8" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="145.7" cy="123.8" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="160.6" cy="123.8" rx="8.5" ry="9.4"/>
                        <path class={[grapeGreen].join(" ")} d="M149.71,100.52a14.41,14.41,0,0,0-4.24.63,16.87,16.87,0,0,0,.26-3,18.42,18.42,0,0,0-7.72-15,19.36,19.36,0,0,0-7.75,15.28,17.51,17.51,0,0,0,.22,2.79,14.36,14.36,0,0,0-16.31,5.29,15.19,15.19,0,0,0,12,6.09h9.12v-2.31a2.53,2.53,0,0,1,.28-1.17,2.56,2.56,0,0,1,1.27-1.23,2.53,2.53,0,0,1,1.1-.25,2.57,2.57,0,0,1,1.32.36,2.75,2.75,0,0,1,.55.43,2,2,0,0,1,.32.39,2.58,2.58,0,0,1,.45,1.48v2.31h9.39a14.48,14.48,0,0,0,11.77-6.06A15.26,15.26,0,0,0,149.71,100.52Z"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="235.1" cy="100.1" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="227.8" cy="88.6" rx="8.5" ry="9.3"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="242.8" cy="88.6" rx="8.5" ry="9.3"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="220.1" cy="76" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="235.1" cy="76" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="250" cy="76" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="212.8" cy="64.5" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="227.8" cy="64.5" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="242.8" cy="64.5" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="257.7" cy="64.5" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="205.1" cy="51.9" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="220.1" cy="51.9" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="235.1" cy="51.9" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="250" cy="51.9" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleA].join(" ")} cx="265" cy="51.9" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="212.8" cy="40.6" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="227.8" cy="40.6" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="242.8" cy="40.6" rx="8.5" ry="9.4"/>
                        <ellipse class={[grapePurpleB].join(" ")} cx="257.7" cy="40.6" rx="8.5" ry="9.4"/>
                        <path class={[grapeGreen].join(" ")} d="M246.82,17.32a14.41,14.41,0,0,0-4.24.63,16.87,16.87,0,0,0,.26-3,18.42,18.42,0,0,0-7.72-15,19.36,19.36,0,0,0-7.75,15.28,17.51,17.51,0,0,0,.22,2.79,14.36,14.36,0,0,0-16.31,5.29,15.19,15.19,0,0,0,12,6.09h9.12V27.15a2.53,2.53,0,0,1,.28-1.17,2.56,2.56,0,0,1,1.27-1.23,2.53,2.53,0,0,1,1.1-.25,2.57,2.57,0,0,1,1.32.36,2.75,2.75,0,0,1,.55.43,2,2,0,0,1,.32.39,2.58,2.58,0,0,1,.45,1.48v2.31h9.39a14.48,14.48,0,0,0,11.77-6.06A15.26,15.26,0,0,0,246.82,17.32Z"/>
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
