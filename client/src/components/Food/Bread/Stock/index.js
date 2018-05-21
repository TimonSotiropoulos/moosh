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
import { Fill, Opacity } from '../../../../styles';
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

        const breadYellowA = (this.state.active) ? Fill.breadYellowA : Fill.itemGreyC;
        const breadYellowB = (this.state.active) ? Fill.breadYellowB : Fill.itemGreyA;
        const breadYellowC = (this.state.active) ? Fill.breadYellowC : Fill.itemGreyB;
        const breadBrown = (this.state.active) ? Fill.breadBrown : Fill.itemGreyC;

        return (
            <svg x={xPos} y={yPos} width={width} height={height}  viewBox="0 0 249 116" onClick={this.onClick}>
                <rect x="0" y="0" width="280" height="130" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" x={5} y={13} viewBox="0 0 400.6 156.8">
                <title>
                    BreadStick
                </title>
                <g>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path class={[breadYellowA].join(" ")} d="M92.11,139.08c-5.74.31-12.1-30.56-14.2-69S78.76.32,84.5,0,96.59,30.57,98.69,69,97.85,138.77,92.11,139.08Z"/>
                            <path class={[breadYellowB].join(" ")} d="M95.66,115.76c-2.4.38-7.66-20.63-11.78-46.9S78.4,21,80.8,20.6Z"/>
                            <path class={[breadYellowC].join(" ")} d="M95.66,115.76,80.8,20.6c2.4-.39,7.67,20.61,11.78,46.9S98.06,115.38,95.66,115.76Z"/>
                            <path class={[breadYellowA].join(" ")} d="M303.24,133.07c-5.24,2.35-22.27-24.18-38-59.26S240.93,8.37,246.18,6s22.26,24.18,38,59.26S308.48,130.72,303.24,133.07Z"/>
                            <path class={[breadYellowB].join(" ")} d="M298.17,110c-2.1,1.22-14.56-16.5-27.85-39.54S248,27.77,250.12,26.56Z"/>
                            <path class={[breadYellowC].join(" ")} d="M298.17,110,250.12,26.56C252.22,25.33,264.68,43,278,66.1S300.27,108.82,298.17,110Z"/>
                            <path class={[breadYellowA].join(" ")} d="M329.38,136.94c-5.56,1.45-17.93-27.55-27.61-64.77s-13-68.57-7.46-70,17.92,27.55,27.6,64.77S334.94,135.49,329.38,136.94Z"/>
                            <path class={[breadYellowB].join(" ")} d="M328.23,113.37c-2.27.85-11.61-18.7-20.86-43.63s-14.87-45.84-12.6-46.68Z"/>
                            <path class={[breadYellowC].join(" ")} d="M328.23,113.37,294.77,23.06c2.27-.86,11.61,18.68,20.86,43.63S330.5,112.53,328.23,113.37Z"/>
                            <path class={[breadYellowA].join(" ")} d="M66.6.19c5.72.52,7.53,32,4,70.29s-11,68.93-16.69,68.41-7.53-32-4-70.29S60.87-.33,66.6.19Z"/>
                            <path class={[breadYellowB].join(" ")} d="M59.7,22.75c2.43,0,4.59,21.53,4.85,48.12S63,119,60.58,119.06Z"/>
                            <path class={[breadYellowC].join(" ")} d="M59.7,22.75l.89,96.3c-2.43,0-4.6-21.51-4.85-48.11S57.26,22.77,59.7,22.75Z"/>
                            <path class={[breadYellowA].join(" ")} d="M35.29,139.08c-5.74.31-12.06-30.57-14.12-69S22.09.31,27.82,0,39.88,30.58,41.94,69,41,138.78,35.29,139.08Z"/>
                            <path class={[breadYellowB].join(" ")} d="M38.86,115.76c-2.4.38-7.65-20.64-11.73-46.92S21.7,21,24.1,20.59Z"/>
                            <path class={[breadYellowC].join(" ")} d="M38.86,115.76,24.1,20.59c2.4-.38,7.65,20.62,11.73,46.91S41.27,115.39,38.86,115.76Z"/>
                            <path class={[breadYellowA].join(" ")} d="M250.19,54.57c.41,5.73-30.36,12.61-68.72,15.35s-69.79.33-70.2-5.41S141.63,51.91,180,49.16,249.78,48.84,250.19,54.57Z"/>
                            <path class={[breadYellowB].join(" ")} d="M226.81,51.41c.42,2.39-20.5,8-46.7,12.57s-47.78,6.28-48.2,3.89Z"/>
                            <path class={[breadYellowC].join(" ")} d="M226.81,51.41,131.92,67.87c-.43-2.39,20.48-8,46.7-12.57S226.4,49,226.81,51.41Z"/>
                            <ellipse class={[breadYellowA].join(" ")} cx="375.3" cy="69.5" rx="69.6" ry="10.4" transform="translate(184.02 399.83) rotate(-70.43)"/>
                            <path class={[breadYellowB].join(" ")} d="M386.33,24.08c2.36.57-.89,22-7.23,47.81s-13.43,46.28-15.79,45.7Z"/>
                            <path class={[breadYellowC].join(" ")} d="M386.33,24.08l-23,93.52c-2.36-.57.88-22,7.23-47.81S384,23.5,386.33,24.08Z"/>
                            <path class={[breadYellowA].join(" ")} d="M111.75,82.41c.43-5.73,31.87-8.06,70.22-5.2s69.1,9.81,68.68,15.54S218.78,100.8,180.43,98,111.33,88.14,111.75,82.41Z"/>
                            <path class={[breadYellowB].join(" ")} d="M134.42,88.93c-.08-2.43,21.45-4.95,48-5.66s48.19.73,48.25,3.15Z"/>
                            <path class={[breadYellowC].join(" ")} d="M134.42,88.93l96.28-2.5c.08,2.43-21.43,5-48,5.66S134.48,91.36,134.42,88.93Z"/>
                            <path class={[breadYellowA].join(" ")} d="M251.14,111.38c.41,5.73-30.37,12.57-68.74,15.28s-69.8.25-70.2-5.48,30.37-12.57,68.74-15.28S250.74,105.65,251.14,111.38Z"/>
                            <path class={[breadYellowB].join(" ")} d="M227.77,108.2c.42,2.39-20.51,8-46.71,12.52s-47.79,6.23-48.2,3.83Z"/>
                            <path class={[breadYellowC].join(" ")} d="M227.77,108.2l-94.91,16.35c-.42-2.39,20.49-8,46.71-12.52S227.36,105.8,227.77,108.2Z"/>
                            <path class={[breadBrown].join(" ")} d="M0 86.2H10.6V145.4H0zM35.9 86.2H58.3V145.4H35.9zM85.1 86.2H107.5V145.4H85.1zM134.4 86.2H156.8V145.4H134.4zM183.73 86.18L183.72 145.41 206.09 145.41 206.09 86.18 183.73 86.18zM233 86.2H255.4V145.4H233zM282.31 86.18L282.3 145.41 304.69 145.41 304.69 86.18 282.31 86.18zM331.6 86.2H354V145.4H331.6zM381.7 86.2H393.8V145.4H381.7z"/>
                            <path class={[breadBrown].join(" ")} d="M0 138.9H393.8V156.8H0zM0 108.4H393.8V121.7H0zM0 79.8H393.8V92.6H0z"/>
                        </g>
                    </g>
                </g>
            </svg>
        </svg>

    );
}
}

Stock.defaultProps = {
    active: true,
    width: 400,
    height: 160,
    xPos: 48,
    yPos: 848,
    onClick: null
}

export default Stock;
