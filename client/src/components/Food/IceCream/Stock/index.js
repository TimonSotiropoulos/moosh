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

        const iceCreamGreenA = (this.state.active) ? Fill.iceCreamGreenA : Fill.itemGreyB;
        const iceCreamBrownA = (this.state.active) ? Fill.iceCreamBrownA : Fill.itemGreyC;
        const iceCreamBrownB = (this.state.active) ? Fill.iceCreamBrownB : Fill.itemGreyB;
        const iceCreamBrownC = (this.state.active) ? Fill.iceCreamBrownC : Fill.itemGreyA;
        const iceCreamBrownD = (this.state.active) ? Fill.iceCreamBrownD : Fill.itemGreyC;

        return (
            <svg x={xPos} y={yPos} width={width} height={height}  viewBox="0 0 249 126" onClick={this.onClick}>
                <rect x="0" y="0" width="280" height="110" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" x={15} viewBox="0 0 462.6 129.3">
                <title>
                    Icecream
                </title>
                <g class="cls-1">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <circle class={[iceCreamGreenA].join(" ")} cx="26.1" cy="25.8" r="25.8" transform="translate(-0.05 0.05) rotate(-0.12)"/>
                            <path class={[iceCreamBrownA].join(" ")} d="M52.24,34.19l-1,4L48.17,50.48,46.39,57.6,44.56,65l-.84,3.33v.07l-1.4,5.58-.42,1.69L41.06,79l-1.81,7.25-1.4,5.59L36.56,97l-.84,3.33-.94,3.77L33.06,111l-1.83,7.34-.83,3.35-1.19,4.76v0l-.34,1.36a2.9,2.9,0,0,1-5.12,0l-.33-1.26L22,121.07l-.86-3.34-1.77-7L18,105.17l-1.38-5.43-.85-3.34-.89-3.51-1.82-7.16L11.2,78.41l-.84-3.36h0L8.93,69.46,8.5,67.73l-.86-3.34-1.83-7.2L4.39,51.61,1.28,39.35,0,34.3Z"/>
                            <path class={[iceCreamBrownB].join(" ")} d="M52.24,34.19H51.05l-11.94,12-4.6-4.58,7.36-7.39H37.69l-5.28,5.3-4.6-4.58.7-.7H22.93l.7.7-4.58,4.59-5.29-5.27H9.58L17,41.64l-4.57,4.6L.4,34.3H0l1.28,5.05,9,9-4.57,4.6L4.39,51.61l1.42,5.58,4.51,4.51-2.69,2.7.86,3.34,3.93-3.95L17,68.37,12.45,73l-3.51-3.5L10.34,75h0l.84,3.36,1.26-1.26,4.59,4.57-4,4,1.82,7.16,2.2,2.19L15.77,96.4l.85,3.34,2.56-2.57,4.6,4.58-4.58,4.6L18,105.17l1.42,5.58,4.38,4.36-2.62,2.63.86,3.34,3.86-3.87,4.5,4.49.83-3.35L28,115.1l4.58-4.59.49.49,1.73-6.91-2.24,2.24L28,101.75l4.58-4.6,3.19,3.18L36.56,97,34.62,95l3.24-3.25,1.4-5.59-.06.06-4.6-4.58,4.58-4.59L41.06,79l.83-3.34L41.26,75l1.05-1.06,1.4-5.58L39.17,72.9l-4.6-4.57,4.58-4.6,4.57,4.55L44.56,65l-3.33-3.31L45.81,57l.57.57,1.78-7.12-2.36,2.37-4.6-4.58,10-10.07ZM37,48.28l-4.58,4.6-4.6-4.58,4.58-4.59ZM21.2,68.36l4.58-4.6,4.6,4.58L25.8,72.93Zm9.22,13.33-4.58,4.6-4.6-4.58,4.58-4.59ZM21.17,55l4.58-4.6L30.36,55l-4.58,4.6Zm4.55-18,4.6,4.57-4.58,4.6-4.6-4.58Zm-6.67,6.7,4.6,4.57-4.58,4.6-4.59-4.58ZM7.82,55l4.58-4.6L17,55l-4.57,4.6Zm6.7,6.67,4.57-4.6,4.6,4.58-4.58,4.6Zm0,13.35,4.57-4.59L23.72,75l-4.58,4.6Zm0,13.36,4.58-4.6,4.6,4.58L19.16,93Zm15.9,20L25.88,113l-4.6-4.57,4.58-4.6Zm-4.61-8.76-4.6-4.58,4.58-4.6,4.6,4.58Zm11.25-11.3L32.53,93l-4.6-4.58,4.58-4.6Zm0-13.36L32.5,79.6,27.9,75l4.58-4.6Zm-4.61-8.75-4.6-4.58,4.58-4.6,4.6,4.58Zm11.25-11.3-4.58,4.6L34.53,55l4.59-4.6Z"/>
                            <path class={[iceCreamBrownC].join(" ")} transform="translate(-0.09 0.05) rotate(-0.12)" d="M0 34.3H52.2V50H0z"/>
                            <path class={[iceCreamGreenA].join(" ")} d="M22.67,34.25a8.22,8.22,0,1,1-8.23-8.2A8.22,8.22,0,0,1,22.67,34.25Z"/>
                            <circle class={[iceCreamGreenA].join(" ")} cx="23.5" cy="33.7" r="5.6" transform="translate(-0.06 0.05) rotate(-0.11)"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(-2.15 22.6) rotate(-33.96)" d="M34.9 13.5H36.9V16.1H34.9z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(-0.04 0.02) rotate(-0.15)" d="M6.9 14.4H8.9V17.4H6.9z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M35.8 9.59L32.85 8.09 33.74 6.33 36.7 7.83 35.8 9.59z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(-5.66 31.01) rotate(-47.13)" d="M31.7 20.6H33.7V23.3H31.7z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="matrix(1, 0, 0, 1, 0, 0.05)" d="M30.2 1.8H32.3V3.8H30.2z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M47.67 19.22L45.36 17.04 46.72 15.61 49.02 17.79 47.67 19.22z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(-4.8 12.47) rotate(-14)" d="M47.4 23.4H49.4V28.2H47.4z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(-4.19 8.26) rotate(-10.77)" d="M40.7 24.6H42.7V28.1H40.7z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M23.43 26.07L22.71 24.24 25.31 23.21 26.04 25.04 23.43 26.07z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(-20.19 34.52) rotate(-79.25)" d="M9.4 28.5H12V30.5H9.4z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M18.87 22.94L16.9 22.94 16.89 21.53 18.86 21.53 18.87 22.94z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="matrix(0.8, -0.6, 0.6, 0.8, -1.86, 8.65)" d="M10.4 6.1H13.8V8.1H10.4z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(-22.42 24.54) rotate(-83.2)" d="M1.2 23.9H3.9000000000000004V25.9H1.2z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(2.22 25.7) rotate(-34.5)" d="M41.5 7.8H43.5V10.7H41.5z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M42.84 18.85L40.54 18.86 40.54 16.89 42.84 16.88 42.84 18.85z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(-0.92 8.81) rotate(-18.5)" d="M24.8 6.2H28.400000000000002V8.2H24.8z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(0.04 5.17) rotate(-12.92)" d="M20.9 1.4H24.799999999999997V3.4H20.9z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M18.21 15.29L15.09 13.55 16.04 11.83 19.17 13.56 18.21 15.29z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(6.14 37.41) rotate(-76.91)" d="M25.6 12.9H27.6V16.7H25.6z"/>
                            <circle class={[iceCreamGreenA].join(" ")} cx="108.2" cy="25.8" r="25.8" transform="translate(-0.05 0.22) rotate(-0.12)"/>
                            <path class={[iceCreamBrownA].join(" ")} d="M134.3,34.19l-1,4-3.07,12.29-1.78,7.12L126.62,65l-.84,3.33v.07l-1.4,5.58L124,75.62,123.13,79l-1.81,7.25-1.4,5.59L118.63,97l-.84,3.33-.94,3.77L115.12,111l-1.83,7.34-.83,3.35-1.19,4.76v0l-.34,1.36a2.9,2.9,0,0,1-5.12,0l-.33-1.26-1.38-5.46-.86-3.34-1.77-7-1.42-5.58-1.38-5.43-.85-3.34-.89-3.51-1.82-7.16-1.86-7.32-.84-3.36h0L91,69.46l-.44-1.73-.86-3.34-1.83-7.2-1.42-5.58L83.35,39.35,82.06,34.3Z"/>
                            <path class={[iceCreamBrownB].join(" ")} d="M134.3,34.19h-1.18l-11.94,12-4.6-4.58,7.36-7.39h-4.18l-5.28,5.3-4.6-4.58.7-.7H105l.7.7-4.58,4.59-5.29-5.27H91.64L99,41.64l-4.57,4.6-12-11.94h-.4l1.28,5.05,9,9-4.57,4.6-1.33-1.33,1.42,5.58,4.51,4.51-2.69,2.7.86,3.34,3.93-3.95,4.59,4.58L94.51,73,91,69.46,92.41,75h0l.84,3.36,1.26-1.26,4.59,4.57-4,4,1.82,7.16,2.2,2.19L97.83,96.4l.85,3.34,2.56-2.57,4.6,4.58-4.58,4.6-1.2-1.19,1.42,5.58,4.38,4.36-2.62,2.63.86,3.34L108,117.2l4.5,4.49.83-3.35L110,115.1l4.58-4.59.49.49,1.73-6.91-2.24,2.24-4.6-4.58,4.58-4.6,3.19,3.18.84-3.33L116.68,95l3.24-3.25,1.4-5.59-.06.06-4.6-4.58,4.58-4.59L123.13,79l.83-3.34-.63-.63,1.05-1.06,1.4-5.58-4.55,4.55-4.6-4.57,4.58-4.6,4.57,4.55.84-3.33-3.33-3.31,4.58-4.6.57.57,1.78-7.12-2.36,2.37-4.6-4.58,10-10.07ZM119.09,48.28l-4.58,4.6-4.6-4.58,4.58-4.59ZM103.26,68.36l4.58-4.6,4.6,4.58-4.58,4.59Zm9.22,13.33-4.58,4.6-4.6-4.58,4.58-4.59ZM103.24,55l4.58-4.6,4.6,4.58-4.58,4.6Zm4.55-18,4.6,4.57-4.58,4.6-4.6-4.58Zm-6.67,6.7,4.6,4.57-4.58,4.6-4.59-4.58ZM89.88,55l4.58-4.6L99.06,55l-4.57,4.6Zm6.7,6.67,4.57-4.6,4.6,4.58-4.58,4.6Zm0,13.35,4.57-4.59,4.6,4.57-4.58,4.6Zm0,13.36,4.58-4.6,4.6,4.58L101.23,93Zm15.9,20L107.95,113l-4.6-4.57,4.58-4.6Zm-4.61-8.76-4.6-4.58,4.58-4.6,4.6,4.58Zm11.25-11.3L114.59,93,110,88.38l4.58-4.6Zm0-13.36-4.59,4.6L110,75l4.58-4.6Zm-4.61-8.75-4.6-4.58,4.58-4.6,4.6,4.58Zm11.25-11.3-4.58,4.6L116.6,55l4.59-4.6Z"/>
                            <path class={[iceCreamBrownC].join(" ")} transform="translate(-0.09 0.22) rotate(-0.12)" d="M82.1 34.3H134.3V50H82.1z"/>
                            <path class={[iceCreamGreenA].join(" ")} d="M104.74,34.25a8.22,8.22,0,1,1-8.23-8.2A8.22,8.22,0,0,1,104.74,34.25Z"/>
                            <circle class={[iceCreamGreenA].join(" ")} cx="105.6" cy="33.7" r="5.6" transform="translate(-0.06 0.2) rotate(-0.11)"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(11.85 68.45) rotate(-33.96)" d="M117 13.5H119V16.1H117z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="matrix(1, 0, 0, 1, -0.04, 0.24)" d="M88.9 14.4H90.9V17.4H88.9z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M117.87 9.59L114.91 8.09 115.8 6.33 118.76 7.83 117.87 9.59z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(20.57 91.15) rotate(-47.13)" d="M113.8 20.6H115.8V23.3H113.8z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="matrix(1, 0, 0, 1, 0, 0.17)" d="M112.2 1.8H114.3V3.8H112.2z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M129.73 19.22L127.43 17.04 128.78 15.61 131.09 17.79 129.73 19.22z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(-2.36 32.32) rotate(-14)" d="M129.4 23.4H131.4V28.2H129.4z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(-2.74 23.6) rotate(-10.77)" d="M122.8 24.6H124.8V28.1H122.8z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M105.5 26.07L104.77 24.24 107.38 23.21 108.11 25.04 105.5 26.07z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(46.57 115.15) rotate(-79.25)" d="M91.5 28.5H94.1V30.5H91.5z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M100.93 22.94L98.96 22.94 98.96 21.53 100.93 21.53 100.93 22.94z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(14.52 57.84) rotate(-36.83)" d="M92.4 6.1H95.80000000000001V8.1H92.4z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(49.93 106.03) rotate(-83.2)" d="M83.3 23.9H86V25.9H83.3z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(16.66 72.18) rotate(-34.5)" d="M123.6 7.8H125.6V10.7H123.6z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M124.91 18.85L122.61 18.86 122.61 16.89 124.91 16.88 124.91 18.85z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="matrix(0.95, -0.32, 0.32, 0.95, 3.32, 34.85)" d="M106.8 6.2H110.39999999999999V8.2H106.8z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(2.12 23.52) rotate(-12.92)" d="M103 1.4H106.9V3.4H103z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M100.27 15.29L97.15 13.55 98.11 11.83 101.23 13.56 100.27 15.29z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(69.61 117.34) rotate(-76.91)" d="M107.7 12.9H109.7V16.7H107.7z"/>
                            <circle class={[iceCreamGreenA].join(" ")} cx="190.2" cy="25.8" r="25.8" transform="translate(-0.05 0.39) rotate(-0.12)"/>
                            <path class={[iceCreamBrownA].join(" ")} d="M216.36,34.19l-1,4-3.07,12.29-1.78,7.12L208.69,65l-.84,3.33v.07l-1.4,5.58L206,75.62,205.19,79l-1.81,7.25L202,91.8,200.69,97l-.84,3.33-.94,3.77L197.18,111l-1.83,7.34-.83,3.35-1.19,4.76v0l-.34,1.36a2.9,2.9,0,0,1-5.12,0l-.33-1.26-1.38-5.46-.86-3.34-1.77-7-1.42-5.58-1.38-5.43-.85-3.34L179,92.89l-1.82-7.16-1.86-7.32-.84-3.36h0l-1.41-5.58-.44-1.73-.86-3.34-1.83-7.2-1.42-5.58-3.11-12.25-1.28-5.05Z"/>
                            <path class={[iceCreamBrownB].join(" ")} d="M216.36,34.19h-1.18l-11.94,12-4.6-4.58L206,34.22h-4.18l-5.28,5.3-4.6-4.58.7-.7h-5.58l.7.7-4.58,4.59-5.29-5.27h-4.18l7.39,7.36-4.57,4.6-12-11.94h-.4l1.28,5.05,9,9-4.57,4.6-1.33-1.33,1.42,5.58,4.51,4.51-2.69,2.7.86,3.34,3.93-3.95,4.59,4.58L176.58,73l-3.51-3.5L174.47,75h0l.84,3.36,1.26-1.26,4.59,4.57-4,4L179,92.89l2.2,2.19L179.9,96.4l.85,3.34,2.56-2.57,4.6,4.58-4.58,4.6-1.2-1.19,1.42,5.58,4.38,4.36-2.62,2.63.86,3.34L190,117.2l4.5,4.49.83-3.35-3.25-3.24,4.58-4.59.49.49,1.73-6.91-2.24,2.24-4.6-4.58,4.58-4.6,3.19,3.18.84-3.33L198.75,95,202,91.8l1.4-5.59-.06.06-4.6-4.58,4.58-4.59L205.19,79l.83-3.34-.63-.63,1.05-1.06,1.4-5.58-4.55,4.55-4.6-4.57,4.58-4.6,4.57,4.55.84-3.33-3.33-3.31,4.58-4.6.57.57,1.78-7.12-2.36,2.37-4.6-4.58,10-10.07ZM201.15,48.28l-4.58,4.6L192,48.3l4.58-4.59ZM185.33,68.36l4.58-4.6,4.6,4.58-4.58,4.59Zm9.22,13.33L190,86.3l-4.6-4.58,4.58-4.59ZM185.3,55l4.58-4.6,4.6,4.58-4.58,4.6Zm4.55-18,4.6,4.57-4.58,4.6-4.6-4.58Zm-6.67,6.7,4.6,4.57-4.58,4.6-4.59-4.58ZM171.94,55l4.58-4.6L181.12,55l-4.57,4.6Zm6.7,6.67,4.57-4.6,4.6,4.58-4.58,4.6Zm0,13.35,4.57-4.59,4.6,4.57-4.58,4.6Zm0,13.36,4.58-4.6,4.6,4.58L183.29,93Zm15.9,20L190,113l-4.6-4.57,4.58-4.6ZM190,99.66l-4.6-4.58,4.58-4.6,4.6,4.58Zm11.25-11.3L196.65,93l-4.6-4.58,4.58-4.6Zm0-13.36-4.59,4.6L192,75l4.58-4.6Zm-4.61-8.75L192,61.66l4.58-4.6,4.6,4.58Zm11.25-11.3-4.58,4.6L198.66,55l4.59-4.6Z"/>
                            <path class={[iceCreamBrownC].join(" ")} transform="translate(-0.09 0.39) rotate(-0.12)" d="M164.1 34.3H216.3V50H164.1z"/>
                            <path class={[iceCreamGreenA].join(" ")} d="M186.8,34.25a8.22,8.22,0,1,1-8.23-8.2A8.22,8.22,0,0,1,186.8,34.25Z"/>
                            <circle class={[iceCreamGreenA].join(" ")} cx="187.6" cy="33.7" r="5.6" transform="translate(-0.06 0.36) rotate(-0.11)"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(25.85 114.29) rotate(-33.96)" d="M199.1 13.5H201.1V16.1H199.1z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="matrix(1, 0, 0, 1, -0.04, 0.45)" d="M171 14.4H173V17.4H171z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M199.93 9.59L196.98 8.09 197.87 6.33 200.83 7.83 199.93 9.59z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(46.81 151.3) rotate(-47.13)" d="M195.9 20.6H197.9V23.3H195.9z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="matrix(1, 0, 0, 1, 0, 0.3)" d="M194.3 1.8H196.4V3.8H194.3z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M211.8 19.22L209.49 17.04 210.85 15.61 213.15 17.79 211.8 19.22z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(0.08 52.17) rotate(-14)" d="M211.5 23.4H213.5V28.2H211.5z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(-1.3 38.93) rotate(-10.77)" d="M204.9 24.6H206.9V28.1H204.9z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M187.56 26.07L186.84 24.24 189.44 23.21 190.17 25.04 187.56 26.07z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(113.33 195.77) rotate(-79.25)" d="M173.6 28.5H176.2V30.5H173.6z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M183 22.94L181.03 22.94 181.02 21.53 182.99 21.53 183 22.94z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(30.89 107.03) rotate(-36.83)" d="M174.5 6.1H177.9V8.1H174.5z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(122.29 187.52) rotate(-83.2)" d="M165.4 23.9H168.1V25.9H165.4z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(31.09 118.67) rotate(-34.5)" d="M205.6 7.8H207.6V10.7H205.6z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M206.97 18.85L204.67 18.86 204.67 16.89 206.97 16.88 206.97 18.85z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(7.56 60.89) rotate(-18.5)" d="M188.9 6.2H192.5V8.2H188.9z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(4.2 41.87) rotate(-12.92)" d="M185 1.4H188.9V3.4H185z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M182.34 15.29L179.22 13.55 180.17 11.83 183.29 13.56 182.34 15.29z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(133.09 197.27) rotate(-76.91)" d="M189.8 12.9H191.8V16.7H189.8z"/>
                            <circle class={[iceCreamGreenA].join(" ")} cx="272.3" cy="25.8" r="25.8" transform="translate(-0.05 0.56) rotate(-0.12)"/>
                            <path class={[iceCreamBrownA].join(" ")} d="M298.43,34.19l-1,4-3.07,12.29-1.78,7.12L290.75,65l-.84,3.33v.07l-1.4,5.58-.42,1.69L287.25,79l-1.81,7.25L284,91.8,282.76,97l-.84,3.33-.94,3.77L279.25,111l-1.83,7.34-.83,3.35-1.19,4.76v0l-.34,1.36a2.9,2.9,0,0,1-5.12,0l-.33-1.26-1.38-5.46-.86-3.34-1.77-7-1.42-5.58-1.38-5.43L262,96.4l-.89-3.51-1.82-7.16-1.86-7.32-.84-3.36h0l-1.41-5.58-.44-1.73-.86-3.34L252,57.19l-1.42-5.58-3.11-12.25-1.28-5.05Z"/>
                            <path class={[iceCreamBrownB].join(" ")} d="M298.43,34.19h-1.18l-11.94,12-4.6-4.58,7.36-7.39h-4.18l-5.28,5.3L274,34.94l.7-.7h-5.58l.7.7-4.58,4.59-5.29-5.27h-4.18l7.39,7.36-4.57,4.6-12-11.94h-.4l1.28,5.05,9,9-4.57,4.6-1.33-1.33L252,57.19l4.51,4.51-2.69,2.7.86,3.34,3.93-3.95,4.59,4.58L258.64,73l-3.51-3.5L256.54,75h0l.84,3.36,1.26-1.26,4.59,4.57-4,4,1.82,7.16,2.2,2.19L262,96.4l.85,3.34,2.56-2.57,4.6,4.58-4.58,4.6-1.2-1.19,1.42,5.58,4.38,4.36-2.62,2.63.86,3.34,3.86-3.87,4.5,4.49.83-3.35-3.25-3.24,4.58-4.59.49.49,1.73-6.91-2.24,2.24-4.6-4.58,4.58-4.6,3.19,3.18.84-3.33L280.81,95,284,91.8l1.4-5.59-.06.06-4.6-4.58,4.58-4.59L287.25,79l.83-3.34-.63-.63,1.05-1.06,1.4-5.58-4.55,4.55-4.6-4.57,4.58-4.6,4.57,4.55.84-3.33-3.33-3.31L292,57l.57.57,1.78-7.12L292,52.86l-4.6-4.58,10-10.07ZM283.22,48.28l-4.58,4.6L274,48.3l4.58-4.59ZM267.39,68.36l4.58-4.6,4.6,4.58L272,72.93Zm9.22,13.33L272,86.3l-4.6-4.58L272,77.12ZM267.36,55l4.58-4.6,4.6,4.58L272,59.58Zm4.55-18,4.6,4.57-4.58,4.6-4.6-4.58Zm-6.67,6.7,4.6,4.57-4.58,4.6-4.59-4.58ZM254,55l4.58-4.6L263.19,55l-4.57,4.6Zm6.7,6.67,4.57-4.6,4.6,4.58-4.58,4.6Zm0,13.35,4.57-4.59,4.6,4.57-4.58,4.6Zm0,13.36,4.58-4.6,4.6,4.58L265.35,93Zm15.9,20L272.08,113l-4.6-4.57,4.58-4.6ZM272,99.66l-4.6-4.58,4.58-4.6,4.6,4.58Zm11.25-11.3L278.72,93l-4.6-4.58,4.58-4.6Zm0-13.36-4.59,4.6L274.09,75l4.58-4.6Zm-4.61-8.75-4.6-4.58,4.58-4.6,4.6,4.58Zm11.25-11.3-4.58,4.6L280.73,55l4.59-4.6Z"/>
                            <path class={[iceCreamBrownC].join(" ")} transform="translate(-0.09 0.55) rotate(-0.12)" d="M246.2 34.3H298.4V50H246.2z"/>
                            <path class={[iceCreamGreenA].join(" ")} d="M268.86,34.25a8.22,8.22,0,1,1-8.23-8.2A8.22,8.22,0,0,1,268.86,34.25Z"/>
                            <circle class={[iceCreamGreenA].join(" ")} cx="269.7" cy="33.7" r="5.6" transform="translate(-0.06 0.52) rotate(-0.11)"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(39.85 160.14) rotate(-33.96)" d="M281.1 13.5H283.1V16.1H281.1z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="matrix(1, 0, 0, 1, -0.04, 0.67)" d="M253.1 14.4H255.1V17.4H253.1z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M282 9.59L279.04 8.09 279.93 6.33 282.89 7.83 282 9.59z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(73.04 211.44) rotate(-47.13)" d="M277.9 20.6H279.9V23.3H277.9z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="matrix(1, 0, 0, 1, 0, 0.42)" d="M276.4 1.8H278.5V3.8H276.4z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M293.86 19.22L291.56 17.04 292.91 15.61 295.21 17.79 293.86 19.22z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(2.52 72.03) rotate(-14)" d="M293.6 23.4H295.6V28.2H293.6z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(0.15 54.27) rotate(-10.77)" d="M286.9 24.6H288.9V28.1H286.9z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M269.63 26.07L268.9 24.24 271.5 23.21 272.23 25.04 269.63 26.07z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(180.1 276.4) rotate(-79.25)" d="M255.6 28.5H258.2V30.5H255.6z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M265.06 22.94L263.09 22.94 263.09 21.53 265.05 21.53 265.06 22.94z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="matrix(0.8, -0.6, 0.6, 0.8, 47.26, 156.21)" d="M256.6 6.1H260V8.1H256.6z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(194.64 269) rotate(-83.2)" d="M247.4 23.9H250.1V25.9H247.4z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(45.52 165.15) rotate(-34.5)" d="M287.7 7.8H289.7V10.7H287.7z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M289.04 18.85L286.74 18.86 286.73 16.89 289.03 16.88 289.04 18.85z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(11.8 86.93) rotate(-18.5)" d="M271 6.2H274.6V8.2H271z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(6.27 60.22) rotate(-12.92)" d="M267.1 1.4H271V3.4H267.1z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M264.4 15.29L261.28 13.55 262.24 11.83 265.36 13.56 264.4 15.29z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(196.57 277.2) rotate(-76.91)" d="M271.8 12.9H273.8V16.7H271.8z"/>
                            <circle class={[iceCreamGreenA].join(" ")} cx="354.4" cy="25.8" r="25.8" transform="translate(-0.05 0.73) rotate(-0.12)"/>
                            <path class={[iceCreamBrownA].join(" ")} d="M380.49,34.19l-1,4-3.07,12.29-1.78,7.12L372.81,65,372,68.28v.07l-1.4,5.58-.42,1.69L369.32,79l-1.81,7.25-1.4,5.59L364.82,97l-.84,3.33-.94,3.77L361.31,111l-1.83,7.34-.83,3.35-1.19,4.76v0l-.34,1.36a2.9,2.9,0,0,1-5.12,0l-.33-1.26-1.38-5.46-.86-3.34-1.77-7-1.42-5.58-1.38-5.43L344,96.4l-.89-3.51-1.82-7.16-1.86-7.32-.84-3.36h0l-1.41-5.58-.44-1.73-.86-3.34-1.83-7.2-1.42-5.58-3.11-12.25-1.28-5.05Z"/>
                            <path class={[iceCreamBrownB].join(" ")} d="M380.49,34.19h-1.18l-11.94,12-4.6-4.58,7.36-7.39h-4.18l-5.28,5.3-4.6-4.58.7-.7h-5.58l.7.7-4.58,4.59L342,34.27h-4.18l7.39,7.36-4.57,4.6-12-11.94h-.4l1.28,5.05,9,9L334,52.94l-1.33-1.33,1.42,5.58,4.51,4.51-2.69,2.7.86,3.34,3.93-3.95,4.59,4.58L340.7,73l-3.51-3.5L338.6,75h0l.84,3.36,1.26-1.26,4.59,4.57-4,4,1.82,7.16,2.2,2.19L344,96.4l.85,3.34,2.56-2.57,4.6,4.58-4.58,4.6-1.2-1.19,1.42,5.58,4.38,4.36-2.62,2.63.86,3.34,3.86-3.87,4.5,4.49.83-3.35-3.25-3.24,4.58-4.59.49.49,1.73-6.91-2.24,2.24-4.6-4.58,4.58-4.6,3.19,3.18.84-3.33L362.87,95l3.24-3.25,1.4-5.59-.06.06-4.6-4.58,4.58-4.59L369.32,79l.83-3.34-.63-.63,1.05-1.06,1.4-5.58-4.55,4.55-4.6-4.57,4.58-4.6L372,68.28l.84-3.33-3.33-3.31,4.58-4.6.57.57,1.78-7.12-2.36,2.37-4.6-4.58,10-10.07ZM365.28,48.28l-4.58,4.6-4.6-4.58,4.58-4.59ZM349.45,68.36l4.58-4.6,4.6,4.58-4.58,4.59Zm9.22,13.33-4.58,4.6-4.6-4.58,4.58-4.59ZM349.43,55l4.58-4.6,4.6,4.58L354,59.58ZM354,37l4.6,4.57L354,46.21l-4.6-4.58Zm-6.67,6.7,4.6,4.57-4.58,4.6-4.59-4.58ZM336.07,55l4.58-4.6L345.25,55l-4.57,4.6Zm6.7,6.67,4.57-4.6,4.6,4.58-4.58,4.6Zm0,13.35,4.57-4.59L352,75l-4.58,4.6Zm0,13.36,4.58-4.6,4.6,4.58L347.42,93Zm15.9,20L354.14,113l-4.6-4.57,4.58-4.6Zm-4.61-8.76-4.6-4.58,4.58-4.6,4.6,4.58Zm11.25-11.3L360.78,93l-4.6-4.58,4.58-4.6Zm0-13.36-4.59,4.6L356.15,75l4.58-4.6Zm-4.61-8.75-4.6-4.58,4.58-4.6,4.6,4.58ZM372,54.95l-4.58,4.6L362.79,55l4.59-4.6Z"/>
                            <path class={[iceCreamBrownC].join(" ")} transform="translate(-0.08 0.72) rotate(-0.12)" d="M328.3 34.3H380.5V50H328.3z"/>
                            <path class={[iceCreamGreenA].join(" ")} d="M350.93,34.25a8.22,8.22,0,1,1-8.23-8.2A8.22,8.22,0,0,1,350.93,34.25Z"/>
                            <circle class={[iceCreamGreenA].join(" ")} cx="351.8" cy="33.7" r="5.6" transform="translate(-0.06 0.67) rotate(-0.11)"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(53.85 205.98) rotate(-33.96)" d="M363.2 13.5H365.2V16.1H363.2z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(-0.04 0.88) rotate(-0.15)" d="M335.1 14.4H337.1V17.4H335.1z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M364.06 9.59L361.1 8.09 361.99 6.33 364.95 7.83 364.06 9.59z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(99.27 271.59) rotate(-47.13)" d="M360 20.6H362V23.3H360z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="matrix(1, 0, 0, 1, 0, 0.54)" d="M358.4 1.8H360.5V3.8H358.4z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M375.93 19.22L373.62 17.04 374.98 15.61 377.28 17.79 375.93 19.22z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(4.96 91.88) rotate(-14)" d="M375.6 23.4H377.6V28.2H375.6z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(1.59 69.6) rotate(-10.77)" d="M369 24.6H371V28.1H369z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M351.69 26.07L350.96 24.24 353.57 23.21 354.3 25.04 351.69 26.07z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(246.86 357.02) rotate(-79.25)" d="M337.7 28.5H340.3V30.5H337.7z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M347.12 22.94L345.15 22.94 345.15 21.53 347.12 21.53 347.12 22.94z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(63.64 205.4) rotate(-36.83)" d="M338.6 6.1H342V8.1H338.6z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(266.99 350.49) rotate(-83.2)" d="M329.5 23.9H332.2V25.9H329.5z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(59.96 211.63) rotate(-34.5)" d="M369.8 7.8H371.8V10.7H369.8z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M371.1 18.85L368.8 18.86 368.8 16.89 371.1 16.88 371.1 18.85z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(16.04 112.97) rotate(-18.5)" d="M353 6.2H356.6V8.2H353z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(8.35 78.56) rotate(-12.92)" d="M349.2 1.4H353.09999999999997V3.4H349.2z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M346.46 15.29L343.34 13.55 344.3 11.83 347.42 13.56 346.46 15.29z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(260.04 357.13) rotate(-76.91)" d="M353.9 12.9H355.9V16.7H353.9z"/>
                            <circle class={[iceCreamGreenA].join(" ")} cx="436.4" cy="25.8" r="25.8" transform="translate(-0.05 0.9) rotate(-0.12)"/>
                            <path class={[iceCreamBrownA].join(" ")} d="M462.56,34.19l-1,4-3.07,12.29-1.78,7.12L454.88,65,454,68.28v.07l-1.4,5.58-.42,1.69L451.38,79l-1.81,7.25-1.4,5.59L446.88,97l-.84,3.33-.94,3.77L443.38,111l-1.83,7.34-.83,3.35-1.19,4.76v0l-.34,1.36a2.9,2.9,0,0,1-5.12,0l-.33-1.26-1.38-5.46-.86-3.34-1.77-7-1.42-5.58-1.38-5.43-.85-3.34-.89-3.51-1.82-7.16-1.86-7.32-.84-3.36h0l-1.41-5.58-.44-1.73L418,64.39l-1.83-7.2-1.42-5.58L411.6,39.35l-1.28-5.05Z"/>
                            <path class={[iceCreamBrownB].join(" ")} d="M462.56,34.19h-1.18l-11.94,12-4.6-4.58,7.36-7.39H448l-5.28,5.3-4.6-4.58.7-.7h-5.58l.7.7-4.58,4.59-5.29-5.27H419.9l7.39,7.36-4.57,4.6-12-11.94h-.4l1.28,5.05,9,9L416,52.94l-1.33-1.33,1.42,5.58,4.51,4.51L418,64.39l.86,3.34,3.93-3.95,4.59,4.58L422.77,73l-3.51-3.5L420.66,75h0l.84,3.36,1.26-1.26,4.59,4.57-4,4,1.82,7.16,2.2,2.19-1.31,1.31.85,3.34,2.56-2.57,4.6,4.58-4.58,4.6-1.2-1.19,1.42,5.58,4.38,4.36-2.62,2.63.86,3.34,3.86-3.87,4.5,4.49.83-3.35-3.25-3.24,4.58-4.59.49.49,1.73-6.91-2.24,2.24-4.6-4.58,4.58-4.6,3.19,3.18.84-3.33L444.94,95l3.24-3.25,1.4-5.59-.06.06-4.6-4.58,4.58-4.59L451.38,79l.83-3.34-.63-.63,1.05-1.06,1.4-5.58-4.55,4.55-4.6-4.57,4.58-4.6L454,68.28l.84-3.33-3.33-3.31,4.58-4.6.57.57,1.78-7.12-2.36,2.37-4.6-4.58,10-10.07ZM447.34,48.28l-4.58,4.6-4.6-4.58,4.58-4.59ZM431.52,68.36l4.58-4.6,4.6,4.58-4.58,4.59Zm9.22,13.33-4.58,4.6-4.6-4.58,4.58-4.59ZM431.49,55l4.58-4.6,4.6,4.58-4.58,4.6ZM436,37l4.6,4.57-4.58,4.6-4.6-4.58Zm-6.67,6.7,4.6,4.57-4.58,4.6-4.59-4.58ZM418.14,55l4.58-4.6L427.31,55l-4.57,4.6Zm6.7,6.67,4.57-4.6,4.6,4.58-4.58,4.6Zm0,13.35,4.57-4.59L434,75l-4.58,4.6Zm0,13.36,4.58-4.6,4.6,4.58L429.48,93Zm15.9,20L436.2,113l-4.6-4.57,4.58-4.6Zm-4.61-8.76-4.6-4.58,4.58-4.6,4.6,4.58Zm11.25-11.3L442.84,93l-4.6-4.58,4.58-4.6Zm0-13.36-4.59,4.6L438.22,75l4.58-4.6Zm-4.61-8.75-4.6-4.58,4.58-4.6,4.6,4.58ZM454,54.95l-4.58,4.6L444.85,55l4.59-4.6Z"/>
                            <path class={[iceCreamBrownC].join(" ")} transform="translate(-0.08 0.89) rotate(-0.12)" d="M410.3 34.3H462.5V50H410.3z"/>
                            <path class={[iceCreamGreenA].join(" ")} d="M433,34.25a8.22,8.22,0,1,1-8.23-8.2A8.22,8.22,0,0,1,433,34.25Z"/>
                            <circle class={[iceCreamGreenA].join(" ")} cx="433.8" cy="33.7" r="5.6" transform="translate(-0.06 0.83) rotate(-0.11)"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(67.85 251.83) rotate(-33.96)" d="M445.3 13.5H447.3V16.1H445.3z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(-0.04 1.09) rotate(-0.15)" d="M417.2 14.4H419.2V17.4H417.2z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M446.12 9.59L443.17 8.09 444.06 6.33 447.02 7.83 446.12 9.59z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(125.51 331.73) rotate(-47.13)" d="M442.1 20.6H444.1V23.3H442.1z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="matrix(1, 0, 0, 1, 0, 0.67)" d="M440.5 1.8H442.6V3.8H440.5z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M457.99 19.22L455.68 17.04 457.04 15.61 459.34 17.79 457.99 19.22z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(7.39 111.73) rotate(-14)" d="M457.7 23.4H459.7V28.2H457.7z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="matrix(0.98, -0.19, 0.19, 0.98, 3.04, 84.94)" d="M451.1 24.6H453.1V28.1H451.1z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M433.75 26.07L433.03 24.24 435.63 23.21 436.36 25.04 433.75 26.07z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(313.62 437.65) rotate(-79.25)" d="M419.8 28.5H422.40000000000003V30.5H419.8z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M429.19 22.94L427.22 22.94 427.21 21.53 429.18 21.53 429.19 22.94z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(80.01 254.59) rotate(-36.83)" d="M420.7 6.1H424.09999999999997V8.1H420.7z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(339.35 431.98) rotate(-83.2)" d="M411.6 23.9H414.3V25.9H411.6z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(74.39 258.11) rotate(-34.5)" d="M451.8 7.8H453.8V10.7H451.8z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M453.16 18.85L450.86 18.86 450.86 16.89 453.16 16.88 453.16 18.85z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(20.28 139.01) rotate(-18.5)" d="M435.1 6.2H438.70000000000005V8.2H435.1z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(10.43 96.91) rotate(-12.92)" d="M431.2 1.4H435.09999999999997V3.4H431.2z"/>
                            <path class={[iceCreamBrownD].join(" ")} d="M428.53 15.29L425.41 13.55 426.36 11.83 429.49 13.56 428.53 15.29z"/>
                            <path class={[iceCreamBrownD].join(" ")} transform="translate(323.52 437.06) rotate(-76.91)" d="M435.9 12.9H437.9V16.7H435.9z"/>
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
    width: 600,
    height: 210,
    xPos: 1395,
    yPos: 1138,
    onClick: null
}

export default Stock;
