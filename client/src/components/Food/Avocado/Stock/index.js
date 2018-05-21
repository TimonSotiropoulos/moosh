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
import { Fill, MixBlend } from '../../../../styles';
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

        const cherryRedA = (this.state.active) ? Fill.cherryRedA : Fill.itemGreyC;
        const cherryRedB = (this.state.active) ? Fill.cherryRedB : Fill.itemGreyB;
        const cherryBrownA = (this.state.active) ? Fill.cherryBrownA : Fill.itemGreyB;
        const cherryBrownB = (this.state.active) ? Fill.cherryBrownB : Fill.itemGreyC;
        const cherryGreenA = (this.state.active) ? Fill.cherryGreenA : Fill.itemGreyB;
        const cherryGreenB = (this.state.active) ? Fill.cherryGreenB : Fill.itemGreyC;

        const avocadoGreenA = (this.state.active) ? Fill.avocadoGreenA : Fill.itemGreyB;
        const avocadoGreenB = (this.state.active) ? Fill.avocadoGreenB : Fill.itemGreyC;
        const avocadoGreenC = (this.state.active) ? Fill.avocadoGreenC : Fill.itemGreyA;

        return (
            <svg x={1853} y={878} width={188} height={270}  viewBox="0 0 188 270" onClick={this.onClick}>
                <rect x="0" y="0" width="188" height="270" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" x={0} y={15} width={188} height={248} viewBox="0 0 188.9 248.6">
                <title>
                    Avocados
                </title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[avocadoGreenA].join(" ")} d="M33 38.6H37.6V47H33z"/>
                        <path class={[avocadoGreenB].join(" ")} d="M61.76,81.94h0l-.18-.52h0L52.12,54.5h0a17.9,17.9,0,0,0-34.2,0h0L8.45,81.41h0l-.18.52h0a28.28,28.28,0,1,0,53.49,0Z"/>
                        <circle class={[avocadoGreenC].join(" ")} cx="28.3" cy="55.5" r="4.3"/>
                        <path class={[avocadoGreenA].join(" ")} d="M158.5 0H163.1V8.4H158.5z"/>
                        <path class={[avocadoGreenB].join(" ")} d="M187.33,43.37h0l-.18-.52h0l-9.46-26.91h0a17.9,17.9,0,0,0-34.2,0h0L134,42.84h0l-.18.52h0a28.28,28.28,0,1,0,53.49,0Z"/>
                        <circle class={[avocadoGreenC].join(" ")} cx="153.9" cy="17" r="4.3"/>
                        <path class={[avocadoGreenA].join(" ")} d="M26.2 167.8H30.799999999999997V176.20000000000002H26.2z"/>
                        <path class={[avocadoGreenB].join(" ")} d="M55,211.12h0l-.18-.52h0l-9.46-26.91h0a17.9,17.9,0,0,0-34.2,0h0L1.72,210.59h0l-.18.52h0a28.28,28.28,0,1,0,53.49,0Z"/>
                        <circle class={[avocadoGreenC].join(" ")} cx="21.6" cy="184.7" r="4.3"/>
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
