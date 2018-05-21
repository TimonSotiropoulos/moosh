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

        const juiceColorMain = (this.state.active) ? Fill.juiceRed : Fill.itemGreyC;
        const juiceColorAlt = (this.state.active) ? Fill.juiceOrange : Fill.itemGreyA;
        const juiceColorPrime = (this.state.active) ? Fill.juiceOrangeAlt : Fill.itemGreyB;

        return (
            <svg x={xPos} y={yPos} width={width} height={height}  viewBox="0 0 249 126" onClick={this.onClick}>
                <rect x="0" y="0" width="300" height="200" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" y={41} viewBox="0 0 210.9 91.8">
                  <title>
                    Juice
                  </title>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path class={[juiceColorMain].join(" ")} d="M0 21.5H22.5V91.8H0z"/>
                      <path class={[juiceColorMain].join(" ")} d="M11.27 3.78L0 21.53 22.53 21.53 11.27 3.78z"/>
                      <path class={[juiceColorAlt].join(" ")} d="M51.13 3.78L11.27 3.78 22.48 21.53 62.39 21.53 51.13 3.78z"/>
                      <path class={[juiceColorPrime].join(" ")} d="M22.5 21.5H62.4V91.8H22.5zM11.9 0H51.8V4.6H11.9z"/>
                      <path class={[juiceColorMain].join(" ")} d="M10.7 0H11.899999999999999V4.6H10.7z"/>
                      <circle class={[Fill.juiceOffWhite].join(" ")} cx="42.4" cy="56.7" r="7.5"/>
                      <path class={[Fill.juiceOffWhite].join(" ")} d="M36.3 69.6H48.599999999999994V74.19999999999999H36.3zM47 44.26c-3.43-1.68-5.62-1.68-9.05 0l-1.5-3.07C41 39 43.9 39 48.46 41.19z"/>
                      <path class={[Fill.juiceOffWhiteAlt].join(" ")} d="M4.1 39.1H18.4V74.1H4.1z"/>
                      <path class={[juiceColorMain].join(" ")} d="M74.3 21.5H96.8V91.8H74.3z"/>
                      <path class={[juiceColorMain].join(" ")} d="M85.52 3.78L74.25 21.53 96.78 21.53 85.52 3.78z"/>
                      <path class={[juiceColorAlt].join(" ")} d="M125.38 3.78L85.52 3.78 96.73 21.53 136.64 21.53 125.38 3.78z"/>
                      <path class={[juiceColorPrime].join(" ")} d="M96.7 21.5H136.6V91.8H96.7zM86.2 0H126.1V4.6H86.2z"/>
                      <path class={[juiceColorMain].join(" ")} d="M84.9 0H86.10000000000001V4.6H84.9z"/>
                      <circle class={[Fill.juiceOffWhite].join(" ")} cx="116.7" cy="56.7" r="7.5"/>
                      <path class={[Fill.juiceOffWhite].join(" ")} d="M110.6 69.6H122.89999999999999V74.19999999999999H110.6zM121.21 44.26c-3.43-1.68-5.62-1.68-9.05 0l-1.5-3.07c4.57-2.24 7.49-2.24 12.05 0z"/>
                      <path class={[Fill.juiceOffWhiteAlt].join(" ")} d="M78.3 39.1H92.6V74.1H78.3z"/>
                      <path class={[juiceColorMain].join(" ")} d="M148.5 21.5H171V91.8H148.5z"/>
                      <path class={[juiceColorMain].join(" ")} d="M159.77 3.78L148.5 21.53 171.03 21.53 159.77 3.78z"/>
                      <path class={[juiceColorAlt].join(" ")} d="M199.63 3.78L159.77 3.78 170.98 21.53 210.89 21.53 199.63 3.78z"/>
                      <path class={[juiceColorPrime].join(" ")} d="M171 21.5H210.9V91.8H171zM160.4 0H200.3V4.6H160.4z"/>
                      <path class={[juiceColorMain].join(" ")} d="M159.2 0H160.39999999999998V4.6H159.2z"/>
                      <circle class={[Fill.juiceOffWhite].join(" ")} cx="190.9" cy="56.7" r="7.5"/>
                      <path class={[Fill.juiceOffWhite].join(" ")} d="M184.8 69.6H197.10000000000002V74.19999999999999H184.8zM195.46 44.26c-3.43-1.68-5.62-1.68-9.05 0l-1.5-3.07c4.57-2.24 7.49-2.24 12.05 0z"/>
                      <path class={[Fill.juiceOffWhiteAlt].join(" ")} d="M152.6 39.1H166.9V74.1H152.6z"/>
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
    xPos: 755,
    yPos: 212,
    onClick: null
}

export default Stock;
