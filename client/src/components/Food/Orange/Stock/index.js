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

        const orangeGreenA = (this.props.active) ? Fill.orangeGreenA : Fill.itemGreyB;
        const orangeGreenB = (this.props.active) ? Fill.orangeGreenB : Fill.itemGreyC;
        const orangeA = (this.props.active) ? Fill.orangeA : Fill.itemGreyC;
        const orangeGreenC = (this.props.active) ? Fill.orangeGreenC : Fill.itemGreyA;
        const orangeB = (this.props.active) ? Fill.orangeB : Fill.itemGreyB;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={75} y={220} width={494} height={492} viewBox="0 0 494.4 492.7" onClick={this.onClick}>
            <title>
                Oranges
            </title>
            <g class="cls-1">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <rect x={0} y={80} width={120} height={140} className={[Fill.transparent]} />
                        <rect x={215} y={0} width={140} height={140} className={[Fill.transparent]} />
                        <rect x={374} y={140} width={140} height={140} className={[Fill.transparent]} />
                        <rect x={145} y={352} width={140} height={140} className={[Fill.transparent]} />
                        <path class={[orangeGreenA].join(" ")} d="M215,425.88a28,28,0,0,0,23.15-8.79,26.64,26.64,0,0,0,6.3-23.52,27.94,27.94,0,0,0-23.12,8.8A26.69,26.69,0,0,0,215,425.88Z"/>
                        <path class={[orangeGreenB, MixBlend.multiply].join(" ")} d="M215,425.87a27.94,27.94,0,0,0,23.15-8.78,26.67,26.67,0,0,0,6.3-23.52l-10.13,11.31,6.33.86L232.24,407Z"/>
                        <path class={[orangeA].join(" ")} d="M255.65,451.2a41.48,41.48,0,1,1-41.48-41.48A41.28,41.28,0,0,1,255.65,451.2Z"/>
                        <path class={[orangeGreenC, MixBlend.multiply].join(" ")} d="M249.27,473.31a41.41,41.41,0,0,1-27,18.56c-7.21-10.67-8.09-26.23-8.09-33.33Z"/>
                        <path class={[orangeB].join(" ")} d="M192.8,434a3.1,3.1,0,1,1-3.1-3.1A3.1,3.1,0,0,1,192.8,434Z"/>
                        <circle class={[orangeB].join(" ")} cx="195.4" cy="440.9" r="1.4"/>
                        <circle class={[orangeB].join(" ")} cx="201.4" cy="421" r="2.1"/>
                        <path class={[orangeGreenA].join(" ")} d="M453.78,195.69a28,28,0,0,0,23.15-8.79,26.64,26.64,0,0,0,6.3-23.52,27.94,27.94,0,0,0-23.12,8.8A26.69,26.69,0,0,0,453.78,195.69Z"/>
                        <path class={[orangeGreenB, MixBlend.multiply].join(" ")} d="M453.79,195.69a27.94,27.94,0,0,0,23.15-8.78,26.67,26.67,0,0,0,6.3-23.52L473.11,174.7l6.33.86L471,176.83Z"/>
                        <path class={[orangeA].join(" ")} d="M494.4,221a41.48,41.48,0,1,1-41.48-41.48A41.28,41.28,0,0,1,494.4,221Z"/>
                        <path class={[orangeGreenC, MixBlend.multiply].join(" ")} d="M488,243.13a41.41,41.41,0,0,1-27,18.56c-7.21-10.67-8.09-26.23-8.09-33.33Z"/>
                        <path class={[orangeB].join(" ")} d="M431.56,203.77a3.1,3.1,0,1,1-3.1-3.1A3.1,3.1,0,0,1,431.56,203.77Z"/>
                        <circle class={[orangeB].join(" ")} cx="434.2" cy="210.8" r="1.4"/>
                        <circle class={[orangeB].join(" ")} cx="440.2" cy="190.8" r="2.1"/>
                        <path class={[orangeGreenA].join(" ")} d="M42.34,124.15a28,28,0,0,0,23.15-8.79,26.64,26.64,0,0,0,6.3-23.52,27.94,27.94,0,0,0-23.12,8.8A26.69,26.69,0,0,0,42.34,124.15Z"/>
                        <path class={[orangeGreenB, MixBlend.multiply].join(" ")} d="M42.34,124.14a27.94,27.94,0,0,0,23.15-8.78,26.67,26.67,0,0,0,6.3-23.52L61.66,103.16,68,104l-8.44,1.26Z"/>
                        <path class={[orangeA].join(" ")} d="M83,149.47A41.48,41.48,0,1,1,41.47,108,41.28,41.28,0,0,1,83,149.47Z"/>
                        <path class={[orangeGreenC, MixBlend.multiply].join(" ")} d="M76.57,171.58a41.41,41.41,0,0,1-27,18.56c-7.21-10.67-8.09-26.23-8.09-33.33Z"/>
                        <path class={[orangeB].join(" ")} d="M20.11,132.22a3.1,3.1,0,1,1-3.1-3.1A3.1,3.1,0,0,1,20.11,132.22Z"/>
                        <circle class={[orangeB].join(" ")} cx="22.8" cy="139.2" r="1.4"/>
                        <circle class={[orangeB].join(" ")} cx="28.8" cy="119.2" r="2.1"/>
                        <path class={[orangeGreenA].join(" ")} d="M285,32.42a28,28,0,0,0,23.15-8.79A26.64,26.64,0,0,0,314.44.1a27.94,27.94,0,0,0-23.12,8.8A26.69,26.69,0,0,0,285,32.42Z"/>
                        <path class={[orangeGreenB, MixBlend.multiply].join(" ")} d="M285,32.41a27.94,27.94,0,0,0,23.15-8.78A26.67,26.67,0,0,0,314.45.11L304.32,11.43l6.33.86-8.44,1.26Z"/>
                        <path class={[orangeA].join(" ")} d="M325.61,57.74a41.48,41.48,0,1,1-41.48-41.48A41.28,41.28,0,0,1,325.61,57.74Z"/>
                        <path class={[orangeGreenC, MixBlend.multiply].join(" ")} d="M319.23,79.85a41.41,41.41,0,0,1-27,18.56c-7.21-10.67-8.09-26.23-8.09-33.33Z"/>
                        <path class={[orangeB].join(" ")} d="M262.77,40.49a3.1,3.1,0,1,1-3.1-3.1A3.1,3.1,0,0,1,262.77,40.49Z"/>
                        <circle class={[orangeB].join(" ")} cx="265.4" cy="47.5" r="1.4"/>
                        <circle class={[orangeB].join(" ")} cx="271.4" cy="27.5" r="2.1"/>
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

export default asFoodItem(Stock);
