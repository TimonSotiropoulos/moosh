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
    .dropdown-option {
        border: 6px;
        fill: #FFF;
        stroke-width: 0px;
        stroke: #FFF;
        cursor: pointer;
    }

    .dropdown-option:hover {
        fill: black;
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
            selection: null,
            open: false,
        }
    }

    _showOptions = () => {
        this.setState({
            open: true
        });
    }

    _selectOptions = (selection) => {
        this.setState({
            selection,
            open: false
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
                      <g class={"dropdown-option"} onClick={this._selectOptions.bind(null, 8)}>
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
                      <g class={"dropdown-option"} onClick={this._selectOptions.bind(null, 9)}>
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

        if (this.state.selection) {
            return (
                <text class={Text.dropdownSelection} x={70} y={328}>{this.state.selection}</text>
            );
        }
        // No Selection State
        return (
            <text class={Text.dropdownPlaceholder} x={60} y={328}>Age</text>
        );
    }

    render() {

        const { onClick } = this.props;
        return (
            <svg x={900} y={1000} viewbox='0 0 800 120'>
                <defs>
                    <style>
                        {css}
                    </style>
                </defs>
                {this._renderOptions()}
              <g class={"dropdown"} onClick={this._showOptions}>
                <rect  rx="60" ry="60" x="20" y="250" width={this.props.width} height="120">
                </rect>
                {this._renderText()}
              </g>
            </svg>
        )
    }
}

Age.defaultProps = {
    width: 220
}

export default Age;
