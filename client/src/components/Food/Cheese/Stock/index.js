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

        const cheeseYellowA = (this.props.active) ? Fill.cheeseYellowA : Fill.itemGreyB;
        const cheeseYellowB = (this.props.active) ? Fill.cheeseYellowB : Fill.itemGreyC;

        return (
            <svg x={xPos} y={yPos} width={width} height={height}  viewBox="0 0 249 126" onClick={this.onClick}>
                <rect x="0" y="0" width="200" height="200" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" x={-24} y={54} viewBox="0 0 224.3 141.9">
                <title>
                    Cheese
                </title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[cheeseYellowA].join(" ")} d="M155.6 79.9H224.3V141.8H155.6z"/>
                        <path class={[cheeseYellowB].join(" ")} d="M123.9 79.9H155.6V141.8H123.9z"/>
                        <circle class={[cheeseYellowB].join(" ")} cx="172.8" cy="126" r="7.9"/>
                        <circle class={[cheeseYellowB].join(" ")} cx="176.7" cy="98.7" r="5.3"/>
                        <circle class={[cheeseYellowA].join(" ")} cx="142.9" cy="113.7" r="7.3"/>
                        <circle class={[cheeseYellowA].join(" ")} cx="133.8" cy="93.4" r="3.4"/>
                        <circle class={[cheeseYellowB].join(" ")} cx="202.9" cy="104.5" r="11.1"/>
                        <path class={[cheeseYellowA].join(" ")} d="M31.7 79.9H100.4V141.8H31.7z"/>
                        <path class={[cheeseYellowB].join(" ")} d="M0 79.9H31.7V141.8H0z"/>
                        <circle class={[cheeseYellowB].join(" ")} cx="48.9" cy="126" r="7.9"/>
                        <circle class={[cheeseYellowB].join(" ")} cx="52.8" cy="98.7" r="5.3"/>
                        <circle class={[cheeseYellowA].join(" ")} cx="19" cy="113.7" r="7.3"/>
                        <circle class={[cheeseYellowA].join(" ")} cx="9.9" cy="93.4" r="3.4"/>
                        <circle class={[cheeseYellowB].join(" ")} cx="79" cy="104.5" r="11.1"/>
                        <path class={[cheeseYellowA].join(" ")} d="M93.9 0H162.60000000000002V61.9H93.9z"/>
                        <path class={[cheeseYellowB].join(" ")} d="M62.2 0H93.9V61.9H62.2z"/>
                        <circle class={[cheeseYellowB].join(" ")} cx="111.1" cy="46.1" r="7.9"/>
                        <circle class={[cheeseYellowB].join(" ")} cx="115" cy="18.8" r="5.3"/>
                        <circle class={[cheeseYellowA].join(" ")} cx="81.1" cy="33.8" r="7.3"/>
                        <circle class={[cheeseYellowA].join(" ")} cx="72.1" cy="13.5" r="3.4"/>
                        <circle class={[cheeseYellowB].join(" ")} cx="141.2" cy="24.5" r="11.1"/>
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
    xPos: 1744,
    yPos: 857,
    onClick: null
}

export default asFoodItem(Stock);
