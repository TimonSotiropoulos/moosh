// *******************************************************
// Button - Get Started
// -------------------------------------------------------
// Get Stared Button on the home page
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component, Fragment } from 'react';
// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Text } from '../../../styles';
// --------------------------------

const css = `
    .cls-1{fill:#fff;}

    .cls-2{fill:#f15f64;}

    .dropdown {
        border: 6px;
        fill: #FFF;
        stroke-width: 6px;
        stroke: #FFF;
        cursor: pointer;
    }

    .dropdown:hover {
        fill: #cdc5d5;
        stroke: #cdc5d5;
    }

    .dropdown-option {
        border: 6px;
        fill: #FFF;
        stroke-width: 0px;
        stroke: #FFF;
        cursor: pointer;
    }

    .dropdown-option:hover {
        fill: #cdc5d5;
        color: #fff;
    }

    .button:hover {
        fill: #F15F64;
    }

    .text {
        font-family: Poppins;
        font-size: 56px;
        color: #fff;
        fill: #fff;
        stroke-width: 0px;
    }

    .arrow {
        fill: #fff;
        stroke-width: 0px;
    }
    .arrow-outline {
        stroke: #F15F64;
        fill: #F15F64;
        stroke-width: 2px;
    }
`;

class Age extends Component {


    constructor(props) {
        super(props);
        this.state = {
            value: props.value || null,
            open: false,
        }
    }

    _toggleOptions = () => {
        this.setState({
            open: !this.state.open
        });
    }

    _selectOption = (value) => {
        const { inputKey, updateValue } = this.props;
        this.setState({
            value,
            open: false
        }, () => {
            if (updateValue) {
                updateValue(inputKey, value);
            }
        });
    }

    _renderOptions = () => {
        if (this.state.open) {
            return (
                <Fragment>
                    <svg x={20} y={0} viewbox='0 0 120 120'>
                        <defs>
                            <style>
                                {css}
                            </style>
                        </defs>
                      <g class={"dropdown-option"} onClick={this._selectOption.bind(null, 8)}>
                        <rect  rx="60" ry="60" x="0" y="0" width={this.props.width} height="120">
                        </rect>
                        <text class={Text.dropdownSelection} x={this.props.width/2 - 20} y={78}>8</text>
                      </g>
                    </svg>
                    <svg x={20} y={125} viewbox='0 0 120 120'>
                        <defs>
                            <style>
                                {css}
                            </style>
                        </defs>
                      <g class={"dropdown-option"} onClick={this._selectOption.bind(null, 9)}>
                        <rect  rx="60" ry="60" x="0" y="0" width={this.props.width} height="120">
                        </rect>
                        <text class={Text.dropdownSelection} x={this.props.width/2 - 20} y={78}>9</text>
                      </g>
                    </svg>
                </Fragment>
            );
        }
        return null;
    }

    _renderText = () => {

        if (this.props.value) {
            return (
                <text class={Text.dropdownSelection} x={100} y={328}>{this.props.value}</text>
            );
        }
        // No Selection State
        return (
            <text class={Text.dropdownPlaceholder} x={50} y={328}>Age</text>
        );
    }

    _renderArrow = () => {
        if (this.state.open) {
            return (
                <svg x={180} y={295} width={100} height={100}>
                    <polygon points="0,0 30,0 15,25"/>
                </svg>
            );
        }
        return (
            <svg x={180} y={290} width={100} height={100}>
                <polygon points="15,5 30,30 0,30"/>
            </svg>
        );
    }

    render() {

        const { onClick } = this.props;

        const rectBorderStyle = (this.props.error) ? {strokeWidth: "6px", stroke: '#f15f64'} : {};

        return (
            <svg x={520} y={1040} viewbox='0 0 800 120'>
                <defs>
                    <style>
                        {css}
                    </style>
                </defs>
                {this._renderOptions()}
              <g class={"dropdown"} onClick={this._toggleOptions}>
                <rect  rx="60" ry="60" x="20" y="250" width={this.props.width} height="120" style={rectBorderStyle}>
                </rect>
                {this._renderText()}
              </g>
              {this._renderArrow()}
            </svg>
        )
    }
}

Age.defaultProps = {
    width: 220
}

export default Age;
