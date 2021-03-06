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

        const mainColor = (this.props.active) ? Fill.chocoBarBrownA : Fill.itemGreyC;
        const altColor = (this.props.active) ? Fill.chocoBarBrownB : Fill.itemGreyA;
        const primeColor = (this.props.active) ? Fill.chocoBarBrownC : Fill.itemGreyB;
        const subColor = (this.props.active) ? Fill.chocoBarLightBrownB : Fill.itemGreyC;
        const subAltColor = (this.props.active) ? Fill.chocoBarLightBrownC : Fill.itemGreyB;

        return (
            <svg x={xPos} y={yPos} width={width} height={height}  viewBox="0 0 249 126" onClick={this.onClick}>
                <rect x="0" y="0" width="300" height="200" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" y={80} viewBox="0 0 194.7 57.2">
                <title>
                    ChocBar
                </title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[Fill.chocoBarBlue].join(" ")} d="M58.67,37.06V52.83a4.38,4.38,0,0,1-4.38,4.38H36.14a4.38,4.38,0,0,1-4.38-4.38V37.06a4.39,4.39,0,0,1,4.38-4.38H54.28A4.39,4.39,0,0,1,58.67,37.06Z"/>
                        <path class={[mainColor].join(" ")} d="M58.67,37.06V52.83a4.38,4.38,0,0,1-4.38,4.38H40.56A4.19,4.19,0,0,1,36.85,53V36.86A4.19,4.19,0,0,1,39.53,33a3.77,3.77,0,0,1,1.12-.27H54.28A4.39,4.39,0,0,1,58.67,37.06Z"/>
                        <path class={[mainColor].join(" ")} d="M16.8 32.7H54.599999999999994V57.300000000000004H16.8z"/>
                        <rect class={[altColor].join(" ")} y="32.7" width="31.8" height="24.6" rx="4.2" ry="4.2"/>
                        <path class={[primeColor].join(" ")} d="M58.67,37.06V39.3l0,0a3.4,3.4,0,0,0-2.32-.91,3.34,3.34,0,0,0-1.8.52,3.1,3.1,0,0,0-1.46,2.61v3a3.21,3.21,0,0,1-3.27,3.13,3.35,3.35,0,0,1-2.32-.91,3,3,0,0,1-1-2.22v-3a3,3,0,0,0-1-2.22,3.41,3.41,0,0,0-2.32-.91A3.21,3.21,0,0,0,40,41.5v3a3.2,3.2,0,0,1-3.11,3.13h-.16a3.35,3.35,0,0,1-2.32-.91,3.09,3.09,0,0,1-1-2.22v-3a3.08,3.08,0,0,0-1-2.22,3.47,3.47,0,0,0-.68-.5V36.86a4.22,4.22,0,0,0-4.2-4.2H41l-.4,0H54.28A4.39,4.39,0,0,1,58.67,37.06Z"/>
                        <path class={[Fill.chocoBarLightBrownA].join(" ")} d="M30,36.86V53a2.45,2.45,0,0,1-2.44,2.44H4.2A2.44,2.44,0,0,1,1.76,53V36.86A2.44,2.44,0,0,1,4.2,34.42H27.57A2.45,2.45,0,0,1,30,36.86Z"/>
                        <path class={[subColor].join(" ")} d="M27.57,34.42H4.2a2.44,2.44,0,0,0-2.44,2.44v4.29H4.13a3.22,3.22,0,0,0,6.27,1,1.69,1.69,0,0,0,3-1h9a2.57,2.57,0,1,0,5.15,0H30V36.86A2.45,2.45,0,0,0,27.57,34.42Z"/>
                        <circle class={[subAltColor].join(" ")} cx="6.3" cy="49.8" r="3.2"/>
                        <circle class={[subAltColor].join(" ")} cx="11.7" cy="52.5" r="2.1"/>
                        <circle class={[subAltColor].join(" ")} cx="16.9" cy="48.5" r="3.3"/>
                        <circle class={[subAltColor].join(" ")} cx="20.8" cy="49.8" r="2.5"/>
                        <path class={[subAltColor].join(" ")} d="M30,49.95V53a2.45,2.45,0,0,1-2.44,2.44h-1A3.24,3.24,0,0,1,25.41,53a3.28,3.28,0,0,1,3.06-3.28h.24A3.33,3.33,0,0,1,30,49.95Z"/>
                        <path class={[subAltColor].join(" ")} d="M30 46.36v4.25a2.18 2.18 0 0 1-1.54-.92A2.14 2.14 0 0 1 30 46.36zM19.76 55.48H15a2.41 2.41 0 0 1 4.78 0z"/>
                        <circle class={[subAltColor].join(" ")} cx="25" cy="46.9" r="1.6"/>
                        <path class={[subAltColor].join(" ")} d="M4.72,50.08a2.15,2.15,0,0,1-2.14,2.14A2.08,2.08,0,0,1,1.76,52V48.11a2.23,2.23,0,0,1,.83-.17,2.26,2.26,0,0,1,.88.18A2.15,2.15,0,0,1,4.72,50.08Z"/>
                        <path class={[Fill.chocoBarBlue].join(" ")} d="M126.68,37.06V52.83a4.38,4.38,0,0,1-4.38,4.38H104.15a4.38,4.38,0,0,1-4.38-4.38V37.06a4.39,4.39,0,0,1,4.38-4.38H122.3A4.39,4.39,0,0,1,126.68,37.06Z"/>
                        <path class={[mainColor].join(" ")} d="M126.68,37.06V52.83a4.38,4.38,0,0,1-4.38,4.38H108.58A4.19,4.19,0,0,1,104.86,53V36.86A4.19,4.19,0,0,1,107.54,33a3.77,3.77,0,0,1,1.12-.27H122.3A4.39,4.39,0,0,1,126.68,37.06Z"/>
                        <path class={[mainColor].join(" ")} d="M84.8 32.7H122.6V57.300000000000004H84.8z"/>
                        <path class={[altColor].join(" ")} d="M99.77,53a4.19,4.19,0,0,1-4.2,4.19H72.21A4.19,4.19,0,0,1,68,53V36.87a4.2,4.2,0,0,1,4.2-4.2H95.58a4.2,4.2,0,0,1,4.2,4.2Z"/>
                        <path class={[primeColor].join(" ")} d="M126.68,37.06V39.3l0,0a3.4,3.4,0,0,0-2.32-.91,3.34,3.34,0,0,0-1.8.52,3.1,3.1,0,0,0-1.46,2.61v3a3.21,3.21,0,0,1-3.27,3.13,3.35,3.35,0,0,1-2.32-.91,3,3,0,0,1-1-2.22v-3a3,3,0,0,0-1-2.22,3.41,3.41,0,0,0-2.32-.91A3.21,3.21,0,0,0,108,41.5v3a3.2,3.2,0,0,1-3.11,3.13h-.16a3.35,3.35,0,0,1-2.32-.91,3.09,3.09,0,0,1-1-2.22v-3a3.08,3.08,0,0,0-1-2.22,3.47,3.47,0,0,0-.68-.5V36.86a4.22,4.22,0,0,0-4.2-4.2h13.48l-.4,0H122.3A4.39,4.39,0,0,1,126.68,37.06Z"/>
                        <path class={[Fill.chocoBarLightBrownA].join(" ")} d="M98,36.86V53a2.45,2.45,0,0,1-2.44,2.44H72.21A2.44,2.44,0,0,1,69.77,53V36.86a2.44,2.44,0,0,1,2.44-2.44H95.58A2.45,2.45,0,0,1,98,36.86Z"/>
                        <path class={[subColor].join(" ")} d="M95.58,34.42H72.21a2.44,2.44,0,0,0-2.44,2.44v4.29h2.37a3.22,3.22,0,0,0,6.27,1,1.69,1.69,0,0,0,3-1h9a2.57,2.57,0,1,0,5.15,0H98V36.86A2.45,2.45,0,0,0,95.58,34.42Z"/>
                        <circle class={[subAltColor].join(" ")} cx="74.3" cy="49.8" r="3.2"/>
                        <circle class={[subAltColor].join(" ")} cx="79.8" cy="52.5" r="2.1"/>
                        <circle class={[subAltColor].join(" ")} cx="85" cy="48.5" r="3.3"/>
                        <circle class={[subAltColor].join(" ")} cx="88.8" cy="49.8" r="2.5"/>
                        <path class={[subAltColor].join(" ")} d="M98,49.95V53a2.45,2.45,0,0,1-2.44,2.44h-1A3.24,3.24,0,0,1,93.42,53a3.28,3.28,0,0,1,3.06-3.28h.24A3.33,3.33,0,0,1,98,49.95Z"/>
                        <path class={[subAltColor].join(" ")} d="M98 46.36v4.25a2.18 2.18 0 0 1-1.54-.92A2.14 2.14 0 0 1 98 46.36zM87.77 55.48H83a2.41 2.41 0 0 1 4.78 0z"/>
                        <circle class={[subAltColor].join(" ")} cx="93" cy="46.9" r="1.6"/>
                        <path class={[subAltColor].join(" ")} d="M72.74,50.08a2.15,2.15,0,0,1-2.14,2.14,2.08,2.08,0,0,1-.83-.17V48.11a2.23,2.23,0,0,1,.83-.17,2.26,2.26,0,0,1,.88.18A2.15,2.15,0,0,1,72.74,50.08Z"/>
                        <path class={[Fill.chocoBarBlue].join(" ")} d="M194.69,37.06V52.83a4.38,4.38,0,0,1-4.38,4.38H172.17a4.38,4.38,0,0,1-4.38-4.38V37.06a4.39,4.39,0,0,1,4.38-4.38h18.15A4.39,4.39,0,0,1,194.69,37.06Z"/>
                        <path class={[mainColor].join(" ")} d="M194.69,37.06V52.83a4.38,4.38,0,0,1-4.38,4.38H176.59A4.19,4.19,0,0,1,172.88,53V36.86A4.19,4.19,0,0,1,175.56,33a3.77,3.77,0,0,1,1.12-.27h13.64A4.39,4.39,0,0,1,194.69,37.06Z"/>
                        <path class={[mainColor].join(" ")} d="M152.8 32.7H190.60000000000002V57.300000000000004H152.8z"/>
                        <rect class={[altColor].join(" ")} x="136" y="32.7" width="31.8" height="24.6" rx="4.2" ry="4.2"/>
                        <path class={[primeColor].join(" ")} d="M194.69,37.06V39.3l0,0a3.4,3.4,0,0,0-2.32-.91,3.34,3.34,0,0,0-1.8.52,3.1,3.1,0,0,0-1.46,2.61v3a3.21,3.21,0,0,1-3.27,3.13,3.35,3.35,0,0,1-2.32-.91,3,3,0,0,1-1-2.22v-3a3,3,0,0,0-1-2.22,3.41,3.41,0,0,0-2.32-.91A3.21,3.21,0,0,0,176,41.5v3a3.2,3.2,0,0,1-3.11,3.13h-.16a3.35,3.35,0,0,1-2.32-.91,3.09,3.09,0,0,1-1-2.22v-3a3.08,3.08,0,0,0-1-2.22,3.47,3.47,0,0,0-.68-.5V36.86a4.22,4.22,0,0,0-4.2-4.2h13.48l-.4,0h13.64A4.39,4.39,0,0,1,194.69,37.06Z"/>
                        <path class={[Fill.chocoBarLightBrownA].join(" ")} d="M166,36.86V53a2.45,2.45,0,0,1-2.44,2.44H140.23A2.44,2.44,0,0,1,137.78,53V36.86a2.44,2.44,0,0,1,2.44-2.44h23.37A2.45,2.45,0,0,1,166,36.86Z"/>
                        <path class={[subColor].join(" ")} d="M163.59,34.42H140.23a2.44,2.44,0,0,0-2.44,2.44v4.29h2.37a3.22,3.22,0,0,0,6.27,1,1.69,1.69,0,0,0,3-1h9a2.57,2.57,0,1,0,5.15,0H166V36.86A2.45,2.45,0,0,0,163.59,34.42Z"/>
                        <circle class={[subAltColor].join(" ")} cx="142.3" cy="49.8" r="3.2"/>
                        <circle class={[subAltColor].join(" ")} cx="147.8" cy="52.5" r="2.1"/>
                        <circle class={[subAltColor].join(" ")} cx="153" cy="48.5" r="3.3"/>
                        <circle class={[subAltColor].join(" ")} cx="156.8" cy="49.8" r="2.5"/>
                        <path class={[subAltColor].join(" ")} d="M166,49.95V53a2.45,2.45,0,0,1-2.44,2.44h-1A3.24,3.24,0,0,1,161.44,53a3.28,3.28,0,0,1,3.06-3.28h.24A3.33,3.33,0,0,1,166,49.95Z"/>
                        <path class={[subAltColor].join(" ")} d="M166 46.36v4.25a2.18 2.18 0 0 1-1.54-.92A2.14 2.14 0 0 1 166 46.36zM155.79 55.48H151a2.41 2.41 0 0 1 4.78 0z"/>
                        <circle class={[subAltColor].join(" ")} cx="161.1" cy="46.9" r="1.6"/>
                        <path class={[subAltColor].join(" ")} d="M140.75,50.08a2.15,2.15,0,0,1-2.14,2.14,2.08,2.08,0,0,1-.83-.17V48.11a2.23,2.23,0,0,1,.83-.17,2.26,2.26,0,0,1,.88.18A2.15,2.15,0,0,1,140.75,50.08Z"/>
                        <path class={[Fill.chocoBarBlue].join(" ")} d="M95.07,4.4V20.16a4.38,4.38,0,0,1-4.38,4.38H72.54a4.38,4.38,0,0,1-4.38-4.38V4.4A4.39,4.39,0,0,1,72.54,0H90.69A4.39,4.39,0,0,1,95.07,4.4Z"/>
                        <path class={[mainColor].join(" ")} d="M95.07,4.4V20.16a4.38,4.38,0,0,1-4.38,4.38H77a4.19,4.19,0,0,1-3.71-4.17V4.2A4.19,4.19,0,0,1,75.93.29,3.77,3.77,0,0,1,77.05,0H90.69A4.39,4.39,0,0,1,95.07,4.4Z"/>
                        <path class={[mainColor].join(" ")} d="M53.2 0H91V24.6H53.2z"/>
                        <path class={[altColor].join(" ")} d="M68.16,20.38A4.19,4.19,0,0,1,64,24.57H40.6a4.19,4.19,0,0,1-4.2-4.19V4.2A4.2,4.2,0,0,1,40.6,0H64a4.2,4.2,0,0,1,4.2,4.2Z"/>
                        <path class={[primeColor].join(" ")} d="M95.07,4.4V6.63l0,0a3.4,3.4,0,0,0-2.32-.91,3.34,3.34,0,0,0-1.8.52,3.1,3.1,0,0,0-1.46,2.61v3a3.21,3.21,0,0,1-3.27,3.13A3.35,3.35,0,0,1,83.87,14a3,3,0,0,1-1-2.22v-3a3,3,0,0,0-1-2.22,3.41,3.41,0,0,0-2.32-.91,3.21,3.21,0,0,0-3.27,3.13v3a3.2,3.2,0,0,1-3.11,3.13h-.16A3.35,3.35,0,0,1,70.77,14a3.09,3.09,0,0,1-1-2.22v-3a3.08,3.08,0,0,0-1-2.22,3.47,3.47,0,0,0-.68-.5V4.2A4.22,4.22,0,0,0,64,0H77.45l-.4,0H90.69A4.39,4.39,0,0,1,95.07,4.4Z"/>
                        <path class={[Fill.chocoBarLightBrownA].join(" ")} d="M66.41,4.2V20.37A2.45,2.45,0,0,1,64,22.82H40.6a2.44,2.44,0,0,1-2.44-2.44V4.2A2.44,2.44,0,0,1,40.6,1.75H64A2.45,2.45,0,0,1,66.41,4.2Z"/>
                        <path class={[subColor].join(" ")} d="M64,1.75H40.6A2.44,2.44,0,0,0,38.16,4.2V8.49h2.37a3.22,3.22,0,0,0,6.27,1,1.69,1.69,0,0,0,3-1h9a2.57,2.57,0,1,0,5.15,0h2.4V4.2A2.45,2.45,0,0,0,64,1.75Z"/>
                        <circle class={[subAltColor].join(" ")} cx="42.7" cy="17.1" r="3.2"/>
                        <circle class={[subAltColor].join(" ")} cx="48.1" cy="19.8" r="2.1"/>
                        <circle class={[subAltColor].join(" ")} cx="53.3" cy="15.8" r="3.3"/>
                        <circle class={[subAltColor].join(" ")} cx="57.2" cy="17.1" r="2.5"/>
                        <path class={[subAltColor].join(" ")} d="M66.41,17.28v3.09A2.45,2.45,0,0,1,64,22.82H63a3.24,3.24,0,0,1-1.16-2.51A3.28,3.28,0,0,1,64.87,17h.24A3.33,3.33,0,0,1,66.41,17.28Z"/>
                        <path class={[subAltColor].join(" ")} d="M66.41 13.7v4.25A2.18 2.18 0 0 1 64.87 17a2.14 2.14 0 0 1 1.54-3.33zM56.16 22.82H51.38a2.41 2.41 0 0 1 4.78 0z"/>
                        <circle class={[subAltColor].join(" ")} cx="61.4" cy="14.2" r="1.6"/>
                        <path class={[subAltColor].join(" ")} d="M41.13,17.41A2.15,2.15,0,0,1,39,19.55a2.08,2.08,0,0,1-.83-.17V15.44a2.23,2.23,0,0,1,.83-.17,2.26,2.26,0,0,1,.88.18A2.15,2.15,0,0,1,41.13,17.41Z"/>
                        <path class={[Fill.chocoBarBlue].join(" ")} d="M163.08,4.4V20.16a4.38,4.38,0,0,1-4.38,4.38H140.56a4.38,4.38,0,0,1-4.38-4.38V4.4A4.39,4.39,0,0,1,140.56,0H158.7A4.39,4.39,0,0,1,163.08,4.4Z"/>
                        <path class={[mainColor].join(" ")} d="M163.08,4.4V20.16a4.38,4.38,0,0,1-4.38,4.38H145a4.19,4.19,0,0,1-3.71-4.17V4.2A4.19,4.19,0,0,1,143.95.29,3.77,3.77,0,0,1,145.06,0H158.7A4.39,4.39,0,0,1,163.08,4.4Z"/>
                        <path class={[mainColor].join(" ")} d="M121.2 0H159V24.6H121.2z"/>
                        <path class={[altColor].join(" ")} d="M136.17,20.38a4.19,4.19,0,0,1-4.2,4.19H108.61a4.19,4.19,0,0,1-4.2-4.19V4.2a4.2,4.2,0,0,1,4.2-4.2H132a4.2,4.2,0,0,1,4.2,4.2Z"/>
                        <path class={[primeColor].join(" ")} d="M163.08,4.4V6.63l0,0a3.4,3.4,0,0,0-2.32-.91,3.34,3.34,0,0,0-1.8.52,3.1,3.1,0,0,0-1.46,2.61v3a3.21,3.21,0,0,1-3.27,3.13,3.35,3.35,0,0,1-2.32-.91,3,3,0,0,1-1-2.22v-3a3,3,0,0,0-1-2.22,3.41,3.41,0,0,0-2.32-.91,3.21,3.21,0,0,0-3.27,3.13v3a3.2,3.2,0,0,1-3.11,3.13h-.16a3.35,3.35,0,0,1-2.32-.91,3.09,3.09,0,0,1-1-2.22v-3a3.08,3.08,0,0,0-1-2.22,3.47,3.47,0,0,0-.68-.5V4.2A4.22,4.22,0,0,0,132,0h13.48l-.4,0H158.7A4.39,4.39,0,0,1,163.08,4.4Z"/>
                        <path class={[Fill.chocoBarLightBrownA].join(" ")} d="M134.42,4.2V20.37A2.45,2.45,0,0,1,132,22.82H108.62a2.44,2.44,0,0,1-2.44-2.44V4.2a2.44,2.44,0,0,1,2.44-2.44H132A2.45,2.45,0,0,1,134.42,4.2Z"/>
                        <path class={[subColor].join(" ")} d="M132,1.75H108.62a2.44,2.44,0,0,0-2.44,2.44V8.49h2.37a3.22,3.22,0,0,0,6.27,1,1.69,1.69,0,0,0,3-1h9a2.57,2.57,0,1,0,5.15,0h2.4V4.2A2.45,2.45,0,0,0,132,1.75Z"/>
                        <circle class={[subAltColor].join(" ")} cx="110.7" cy="17.1" r="3.2"/>
                        <circle class={[subAltColor].join(" ")} cx="116.2" cy="19.8" r="2.1"/>
                        <circle class={[subAltColor].join(" ")} cx="121.3" cy="15.8" r="3.3"/>
                        <circle class={[subAltColor].join(" ")} cx="125.2" cy="17.1" r="2.5"/>
                        <path class={[subAltColor].join(" ")} d="M134.42,17.28v3.09A2.45,2.45,0,0,1,132,22.82h-1a3.24,3.24,0,0,1-1.16-2.51A3.28,3.28,0,0,1,132.88,17h.24A3.33,3.33,0,0,1,134.42,17.28Z"/>
                        <path class={[subAltColor].join(" ")} d="M134.42 13.7v4.25a2.18 2.18 0 0 1-1.54-.92 2.14 2.14 0 0 1 1.54-3.33zM124.18 22.82h-4.78a2.41 2.41 0 0 1 4.78 0z"/>
                        <circle class={[subAltColor].join(" ")} cx="129.4" cy="14.2" r="1.6"/>
                        <path class={[subAltColor].join(" ")} d="M109.14,17.41A2.15,2.15,0,0,1,107,19.55a2.08,2.08,0,0,1-.83-.17V15.44a2.23,2.23,0,0,1,.83-.17,2.26,2.26,0,0,1,.88.18A2.15,2.15,0,0,1,109.14,17.41Z"/>
                    </g>
                </g>
            </svg>
        </svg>

    );
}
}

Stock.defaultProps = {
    active: true,
    width: 200,
    height: 190,
    xPos: 716,
    yPos: 417,
    onClick: null
}

export default asFoodItem(Stock);
