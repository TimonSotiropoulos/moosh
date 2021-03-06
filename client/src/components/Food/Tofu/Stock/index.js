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

        const tofuYellowA = (this.props.active) ? Fill.tofuYellowA : Fill.itemGreyA;
        const tofuGreenA = (this.props.active) ? Fill.tofuGreenA : Fill.itemGreyB;
        const tofuGreenB = (this.props.active) ? Fill.tofuGreenB : Fill.itemGreyC;
        const tofuGreenC = (this.props.active) ? Fill.tofuGreenC : Fill.itemGreyB;
        const tofuGreenD = (this.props.active) ? Fill.tofuGreenD : Fill.itemGreyA;

        return (
            <svg x={xPos} y={yPos} width={width} height={height}  viewBox="0 0 249 126" onClick={this.onClick}>
                <rect x="0" y="0" width="300" height="80" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" width={280} x={10} y={-5} viewBox="0 0 436.9 63.5">
                <title>
                    Tofu
                </title>
                <g class="cls-1">
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <path class={[Fill.tofuGreyA].join(" ")} d="M77.87 39.4L76.45 22.57 76.45 18.07 74.42 8.21 72.39 7.04 53.13 7.04 27.17 4.94 9.99 7.04 4.06 7.04 1.91 8.21 2.3 19.47 0.81 31.02 0 38.19 42.39 49.75 77.87 39.4z"/>
                            <path class={[Fill.tofuGreyB].join(" ")} d="M76.65,46.7l1.22,7.92v8.92H1l-1-1H0l.16-3.2.25-4.89v0l.09-1.79,0-.54L.91,45.1,1,43.05l-.14-.71L0,38.19H24.74l2.66.1h0l25.52.91,13.55-.59h0l5-.22,4.56-.2,1.83,1.21Z"/>
                            <g class="cls-4">
                                <path class={[Fill.tofuGreyC].join(" ")} d="M72.83 51.1a4.55 4.55 0 0 0-1.78.61c-.3.19-.86.6-.88 1a2.35 2.35 0 0 1-.13.65l-.13.24a4.28 4.28 0 0 1-.26.38c-.67.92.57 1.43 1.3 1.45a3.67 3.67 0 0 0 3.93-3.28C74.92 51.11 73.64 51 72.83 51.1zM66.17 56.72A2.45 2.45 0 0 0 64.11 56a3.79 3.79 0 0 0-2.32 1.09 1.21 1.21 0 0 0 .57 2.09 2.6 2.6 0 0 0 1 .12A3.64 3.64 0 0 0 65 59a2.63 2.63 0 0 0 1.22-1.06A1.07 1.07 0 0 0 66.17 56.72zM62 58.92l-.19-.19a2.23 2.23 0 0 0 .24.19zM41.85 50.84a4.8 4.8 0 0 0-1.73.18 4.27 4.27 0 0 0-1.6.71 3.59 3.59 0 0 0-.9 1c-.19.3.19.55.41.62a3.39 3.39 0 0 0 1.52 0 4.15 4.15 0 0 0 2.59-1.22l0 0c.21-.18.62-.45.52-.81S42.12 50.87 41.85 50.84zM26 57.16c-1.8 0-5 2.75-1.8 2.75C26 59.91 29.16 57.16 26 57.16zM25.18 46.4c-1.74 0-5 2.64-1.84 2.64C25.09 49 28.36 46.4 25.18 46.4zM27.4 38.29a3.26 3.26 0 0 1-.61.41 39 39 0 0 0-3.54 1.85 3.2 3.2 0 0 1-3.22.36 2.17 2.17 0 0 1-1.84-.68 2 2 0 0 1-.47-.94 1.54 1.54 0 0 1 .25-1.1h6.77zM17 42c-1 0-5.38 2-3 2C15 44 19.34 42 17 42zM5.55 53.46h0l.09 0-.09.06a.61.61 0 0 1 0 .25A3.52 3.52 0 0 1 4.66 55a3.84 3.84 0 0 1-1 .7.48.48 0 0 1 0 .12c-.05 1.91-1.81 2.93-3.41 3.48l-.09 0 .25-4.89a.52.52 0 0 1 .16-.06l-.15 0 .09-1.79 0-.54A5.94 5.94 0 0 1 2 51.81l.21 0a3.69 3.69 0 0 1 .38-.26l-.13.06.2-.12a8.2 8.2 0 0 1 .76-.43c.85-.47 2.47-.61 3.16.24S6.27 53 5.55 53.46zM46.55 45.64c.26-.25.59-.57.48-1s-.56-.55-.91-.62a4.1 4.1 0 0 0-3.32.89l-.14.14c-.25.25-.58.57-.47 1s.56.55.91.62a4.12 4.12 0 0 0 3.32-.89zM70.74 39.1a2.65 2.65 0 0 0-.39.23.7.7 0 0 1 .31 1.14 3.81 3.81 0 0 1-3.1 1.29 4 4 0 0 1-1.64-.33.78.78 0 0 1-.48-.85 2.87 2.87 0 0 1 1-2h0l5-.22A2 2 0 0 1 70.74 39.1zM54.31 53c1.74 0 5-2.64 1.83-2.64C54.39 50.32 51.13 53 54.31 53zM57.13 63.54H45.86a4.58 4.58 0 0 1 3-1.1c1.28 0 2.63-.57 3.93-.68a2.44 2.44 0 0 1 1 .15 9.74 9.74 0 0 1 1.85-.51c1-.18 2.31-.32 3.05.48C59.27 62.41 58.3 63.12 57.13 63.54zM52.5 59.83c1.52 0 5.08-2.32 1.92-2.32C52.9 57.51 49.34 59.83 52.5 59.83zM37 62.68a4.61 4.61 0 0 1-.43.86h-9.4a5.89 5.89 0 0 1 4.3-1.43c.36 0 .72.06 1.07.1C33.3 60.37 38 60.21 37 62.68zM16.1 63.54h-7c.25-1.11 1.56-1.59 2.55-1.74l.54-.08.31-.07.38-.1.23-.09c.94-.45 2.48-.59 3.19.36A1.33 1.33 0 0 1 16.1 63.54zM3.62 42.93a1.67 1.67 0 0 1-.16.12s0 0 0 0a4.27 4.27 0 0 0-.38.36c-.12.14-.24.27-.34.4a.22.22 0 0 1-.07.07.91.91 0 0 0-.11.16 3.28 3.28 0 0 1-1.61 1L1 43.05l-.14-.71a6.12 6.12 0 0 1 2.47-.46c.23 0 .75 0 .83.34S3.82 42.82 3.62 42.93zM3.05 62.55a2.09 2.09 0 0 1-1 .65 7.65 7.65 0 0 1-.95.34H1l-1-1H0a9.27 9.27 0 0 1 1.21-.27C1.34 62.21 3.45 61.9 3.05 62.55zM77.87 61.85v1.69H74.48a.71.71 0 0 1 0-.29c.12-.34.66-.61 1-.76a6.56 6.56 0 0 1 1.79-.57C77.37 61.91 77.6 61.87 77.87 61.85z"/>
                            </g>
                            <path class={[Fill.tofuGreyD].join(" ")} d="M72.48,19.1A59.81,59.81,0,0,1,70.87,10c-11.58.27-23.1-1.12-34.66-1.45-5.31,1.49-9,3.19-9,4.95,0,4.6,29.08,3.65,29.08,9.74s-18.4,3.81-18.4,8.19c0,2.94,21.82,3.24,36.16,4.29A73.81,73.81,0,0,0,72.48,19.1Z"/>
                            <path class={[tofuYellowA].join(" ")} d="M28.3,23.14H38.79A17.52,17.52,0,0,0,20.48,7.62h0A17.62,17.62,0,0,0,25.6,20.94,17.45,17.45,0,0,0,28.3,23.14Z"/>
                            <path class={[tofuGreenA].join(" ")} d="M28.3,23.14H38.79A17.52,17.52,0,0,0,20.48,7.62h0A17.62,17.62,0,0,0,25.6,20.94,17.45,17.45,0,0,0,28.3,23.14Z"/>
                            <path class={[tofuGreenB, Opacity._03].join(" ")} d="M28.3,23.14H36L20.48,7.62h0A17.62,17.62,0,0,0,25.6,20.94,17.45,17.45,0,0,0,28.3,23.14Z"/>
                            <path class={[tofuYellowA].join(" ")} d="M41.56,23.14A17.61,17.61,0,0,0,39,0l0,0a17.55,17.55,0,0,0-2.58,23.12Z"/>
                            <path class={[tofuGreenC].join(" ")} d="M41.56,23.14A17.61,17.61,0,0,0,39,0l0,0a17.55,17.55,0,0,0-2.58,23.12Z"/>
                            <path class={[tofuGreenB, Opacity._03].join(" ")} d="M41.56,23.14A17.61,17.61,0,0,0,39,0l0,0V23.14Z"/>
                            <path class={[tofuYellowA].join(" ")} d="M49.57,23.14a17.45,17.45,0,0,0,2.7-2.2A17.62,17.62,0,0,0,57.41,7.62h0a17.6,17.6,0,0,0-13.3,5.13,17.42,17.42,0,0,0-5,10.39Z"/>
                            <path class={[tofuGreenD].join(" ")} d="M49.57,23.14a17.45,17.45,0,0,0,2.7-2.2A17.62,17.62,0,0,0,57.41,7.62h0a17.6,17.6,0,0,0-13.3,5.13,17.42,17.42,0,0,0-5,10.39Z"/>
                            <path class={[tofuGreenB, Opacity._03].join(" ")} d="M49.57,23.14a17.45,17.45,0,0,0,2.7-2.2A17.62,17.62,0,0,0,57.41,7.62h0L41.87,23.14Z"/>
                            <path class={[Fill.tofuGreyA].join(" ")} d="M197.54 39.4L196.12 22.57 196.12 18.07 194.09 8.21 192.06 7.04 172.8 7.04 146.84 4.94 129.65 7.04 123.72 7.04 121.57 8.21 121.97 19.47 120.48 31.02 119.67 38.19 162.05 49.75 197.54 39.4z"/>
                            <path class={[Fill.tofuGreyB].join(" ")} d="M196.32,46.7l1.21,7.92v8.92H120.68l-1-1h0l.16-3.2.25-4.89v0l.08-1.79,0-.54.37-6.95.11-2.05-.15-.71-.86-4.15h24.74l2.66.1h0l25.52.91,13.55-.59h0l5-.22,4.57-.2,1.82,1.21Z"/>
                            <g class="cls-4">
                                <path class={[Fill.tofuGreyC].join(" ")} d="M192.5 51.1a4.55 4.55 0 0 0-1.78.61c-.3.19-.87.6-.88 1a2.35 2.35 0 0 1-.13.65 1.83 1.83 0 0 0-.13.24c-.08.13-.17.25-.26.38-.68.92.57 1.43 1.29 1.45a3.77 3.77 0 0 0 3.1-1.3 3.68 3.68 0 0 0 .83-2C194.59 51.11 193.31 51 192.5 51.1zM185.84 56.72a2.47 2.47 0 0 0-2.06-.69 3.79 3.79 0 0 0-2.32 1.09 1.2 1.2 0 0 0 .56 2.09 2.67 2.67 0 0 0 1 .12 3.6 3.6 0 0 0 1.65-.34 2.58 2.58 0 0 0 1.22-1.06A1.07 1.07 0 0 0 185.84 56.72zm-4.13 2.2l-.19-.19a2.23 2.23 0 0 0 .24.19zM161.51 50.84a4.8 4.8 0 0 0-1.73.18 4.16 4.16 0 0 0-1.59.71 3.62 3.62 0 0 0-.91 1c-.18.3.2.55.42.62a3.35 3.35 0 0 0 1.51 0 4.15 4.15 0 0 0 2.6-1.22l0 0c.21-.18.61-.45.52-.81S161.78 50.87 161.51 50.84zM145.64 57.16c-1.81 0-5 2.75-1.8 2.75C145.65 59.91 148.82 57.16 145.64 57.16zM144.84 46.4c-1.74 0-5 2.64-1.83 2.64C144.75 49 148 46.4 144.84 46.4zM147.07 38.29a3.62 3.62 0 0 1-.61.41 36.47 36.47 0 0 0-3.54 1.85 3.2 3.2 0 0 1-3.22.36 2.17 2.17 0 0 1-1.84-.68 1.87 1.87 0 0 1-.47-.94 1.59 1.59 0 0 1 .24-1.1h6.78zM136.65 42c-1 0-5.38 2-3 2C134.68 44 139 42 136.65 42zM125.21 53.46h0l.09 0-.09.06a.59.59 0 0 1 0 .25 3.8 3.8 0 0 1-.85 1.25 3.73 3.73 0 0 1-1 .7c0 .05 0 .08 0 .12-.06 1.91-1.82 2.93-3.42 3.48l-.08 0 .25-4.89a.47.47 0 0 1 .15-.06l-.14 0 .08-1.79 0-.54a5.86 5.86 0 0 1 1.43-.24l.21 0a2.94 2.94 0 0 1 .39-.26l-.13.06.19-.12a8.2 8.2 0 0 1 .76-.43c.86-.47 2.48-.61 3.17.24S125.93 53 125.21 53.46zM166.22 45.64c.25-.25.58-.57.47-1s-.55-.55-.9-.62a4.13 4.13 0 0 0-3.33.89l-.13.14c-.26.25-.59.57-.47 1s.55.55.9.62a4.1 4.1 0 0 0 3.32-.89zM190.4 39.1a3.29 3.29 0 0 0-.39.23.7.7 0 0 1 .32 1.14 3.81 3.81 0 0 1-3.1 1.29 4 4 0 0 1-1.64-.33.78.78 0 0 1-.48-.85 2.82 2.82 0 0 1 1-2h0l5-.22A1.87 1.87 0 0 1 190.4 39.1zM174 53c1.74 0 5-2.64 1.83-2.64C174.06 50.32 170.79 53 174 53zM176.79 63.54H165.52a4.63 4.63 0 0 1 3-1.1c1.28 0 2.62-.57 3.92-.68a2.49 2.49 0 0 1 1.06.15 9.85 9.85 0 0 1 1.84-.51c1-.18 2.31-.32 3.06.48C178.94 62.41 178 63.12 176.79 63.54zM172.17 59.83c1.52 0 5.08-2.32 1.92-2.32C172.57 57.51 169 59.83 172.17 59.83zM156.71 62.68a4.11 4.11 0 0 1-.44.86h-9.39a5.89 5.89 0 0 1 4.3-1.43c.35 0 .71.06 1.06.1C153 60.37 157.66 60.21 156.71 62.68zM135.76 63.54h-7c.25-1.11 1.57-1.59 2.56-1.74l.53-.08.32-.07.38-.1.23-.09c.94-.45 2.48-.59 3.19.36A1.33 1.33 0 0 1 135.76 63.54zM123.29 42.93l-.16.12s0 0 0 0-.26.23-.39.36l-.34.4s0 .06-.06.07a.91.91 0 0 0-.11.16 3.36 3.36 0 0 1-1.62 1l.11-2.05-.15-.71a6.16 6.16 0 0 1 2.48-.46c.22 0 .74 0 .82.34S123.48 42.82 123.29 42.93zM122.71 62.55a2 2 0 0 1-1 .65 7.11 7.11 0 0 1-1 .34h-.1l-1-1h0a9.12 9.12 0 0 1 1.2-.27C121 62.21 123.12 61.9 122.71 62.55zM197.53 61.85v1.69h-3.39a1.35 1.35 0 0 1 .05-.29c.12-.34.67-.61 1-.76a6.61 6.61 0 0 1 1.78-.57C197 61.91 197.26 61.87 197.53 61.85z"/>
                            </g>
                            <path class={[Fill.tofuGreyD].join(" ")} d="M192.15,19.1A58.6,58.6,0,0,1,190.54,10c-11.58.27-23.1-1.12-34.67-1.45-5.3,1.49-9,3.19-9,4.95,0,4.6,29.07,3.65,29.07,9.74s-18.39,3.81-18.39,8.19c0,2.94,21.82,3.24,36.16,4.29A73.81,73.81,0,0,0,192.15,19.1Z"/>
                            <path class={[tofuYellowA].join(" ")} d="M148,23.14h10.49A17.54,17.54,0,0,0,140.15,7.62h0a17.62,17.62,0,0,0,5.14,13.32A17.06,17.06,0,0,0,148,23.14Z"/>
                            <path class={[tofuGreenA].join(" ")} d="M148,23.14h10.49A17.54,17.54,0,0,0,140.15,7.62h0a17.62,17.62,0,0,0,5.14,13.32A17.06,17.06,0,0,0,148,23.14Z"/>
                            <path class={[tofuGreenB, Opacity._03].join(" ")} d="M148,23.14h7.69L140.15,7.62h0a17.62,17.62,0,0,0,5.14,13.32A17.06,17.06,0,0,0,148,23.14Z"/>
                            <path class={[tofuYellowA].join(" ")} d="M161.23,23.14A17.61,17.61,0,0,0,158.63,0l0,0A17.57,17.57,0,0,0,156,23.14Z"/>
                            <path class={[tofuGreenC].join(" ")} d="M161.23,23.14A17.61,17.61,0,0,0,158.63,0l0,0A17.57,17.57,0,0,0,156,23.14Z"/>
                            <path class={[tofuGreenB, Opacity._03].join(" ")} d="M161.23,23.14A17.61,17.61,0,0,0,158.63,0l0,0V23.14Z"/>
                            <path class={[tofuYellowA].join(" ")} d="M169.23,23.14a17.52,17.52,0,0,0,2.71-2.2,17.7,17.7,0,0,0,5.14-13.32h0a17.54,17.54,0,0,0-18.31,15.52Z"/>
                            <path class={[tofuGreenD].join(" ")} d="M169.23,23.14a17.52,17.52,0,0,0,2.71-2.2,17.7,17.7,0,0,0,5.14-13.32h0a17.54,17.54,0,0,0-18.31,15.52Z"/>
                            <path class={[tofuGreenB, Opacity._03].join(" ")} d="M169.23,23.14a17.52,17.52,0,0,0,2.71-2.2,17.7,17.7,0,0,0,5.14-13.32h0L161.53,23.14Z"/>
                            <path class={[Fill.tofuGreyA].join(" ")} d="M317.2 39.4L315.78 22.57 315.78 18.07 313.75 8.21 311.73 7.04 292.46 7.04 266.51 4.94 249.32 7.04 243.39 7.04 241.24 8.21 241.63 19.47 240.15 31.02 239.33 38.19 281.72 49.75 317.2 39.4z"/>
                            <path class={[Fill.tofuGreyB].join(" ")} d="M316,46.7l1.22,7.92v8.92H240.34l-1-1h0l.16-3.2.25-4.89v0l.09-1.79,0-.54.38-6.95.1-2.05-.14-.71-.87-4.15h24.74l2.66.1h0l25.52.91,13.55-.59h0l5-.22,4.56-.2,1.83,1.21Z"/>
                            <g class="cls-4">
                                <path class={[Fill.tofuGreyC].join(" ")} d="M312.16 51.1a4.45 4.45 0 0 0-1.77.61c-.31.19-.87.6-.89 1a2.35 2.35 0 0 1-.13.65s-.11.22-.13.24A4.28 4.28 0 0 1 309 54c-.67.92.57 1.43 1.3 1.45a3.78 3.78 0 0 0 3.1-1.3 3.84 3.84 0 0 0 .83-2C314.25 51.11 313 51 312.16 51.1zM305.5 56.72a2.45 2.45 0 0 0-2.06-.69 3.79 3.79 0 0 0-2.32 1.09 1.21 1.21 0 0 0 .57 2.09 2.62 2.62 0 0 0 1 .12 3.62 3.62 0 0 0 1.65-.34 2.63 2.63 0 0 0 1.22-1.06A1.05 1.05 0 0 0 305.5 56.72zm-4.12 2.2l-.2-.19a2.23 2.23 0 0 0 .24.19zM281.18 50.84a4.8 4.8 0 0 0-1.73.18 4.27 4.27 0 0 0-1.6.71 3.59 3.59 0 0 0-.9 1c-.19.3.19.55.41.62a3.4 3.4 0 0 0 1.52 0 4.12 4.12 0 0 0 2.59-1.22l0 0c.21-.18.62-.45.52-.81S281.45 50.87 281.18 50.84zM265.31 57.16c-1.81 0-5 2.75-1.81 2.75C265.32 59.91 268.49 57.16 265.31 57.16zM264.51 46.4c-1.74 0-5 2.64-1.84 2.64C264.42 49 267.69 46.4 264.51 46.4zM266.73 38.29a3.26 3.26 0 0 1-.61.41 37.46 37.46 0 0 0-3.53 1.85 3.22 3.22 0 0 1-3.23.36 2.2 2.2 0 0 1-1.84-.68 2 2 0 0 1-.47-.94 1.59 1.59 0 0 1 .25-1.1h6.77zM256.32 42c-1 0-5.38 2-3 2C254.34 44 258.67 42 256.32 42zM244.88 53.46h0l.09 0-.09.06a.48.48 0 0 1 0 .25A3.52 3.52 0 0 1 244 55a3.84 3.84 0 0 1-1 .7c0 .05 0 .08 0 .12-.05 1.91-1.81 2.93-3.41 3.48l-.09 0 .25-4.89a.52.52 0 0 1 .16-.06l-.15 0 .09-1.79 0-.54a5.94 5.94 0 0 1 1.44-.24l.21 0a3.69 3.69 0 0 1 .38-.26l-.13.06.2-.12a8.2 8.2 0 0 1 .76-.43c.85-.47 2.47-.61 3.16.24S245.6 53 244.88 53.46zM285.88 45.64c.26-.25.59-.57.48-1s-.56-.55-.9-.62a4.11 4.11 0 0 0-3.33.89l-.14.14c-.25.25-.58.57-.47 1s.56.55.91.62a4.12 4.12 0 0 0 3.32-.89zM310.07 39.1a2.65 2.65 0 0 0-.39.23.7.7 0 0 1 .31 1.14 3.81 3.81 0 0 1-3.1 1.29 4 4 0 0 1-1.64-.33.78.78 0 0 1-.48-.85 2.87 2.87 0 0 1 1-2h0l5-.22A1.94 1.94 0 0 1 310.07 39.1zM293.64 53c1.74 0 5-2.64 1.83-2.64C293.72 50.32 290.46 53 293.64 53zM296.46 63.54H285.19a4.58 4.58 0 0 1 3-1.1c1.29 0 2.63-.57 3.93-.68a2.44 2.44 0 0 1 1.05.15 10 10 0 0 1 1.85-.51c1-.18 2.31-.32 3.05.48C298.6 62.41 297.63 63.12 296.46 63.54zM291.83 59.83c1.53 0 5.08-2.32 1.93-2.32C292.23 57.51 288.67 59.83 291.83 59.83zM276.38 62.68a4.65 4.65 0 0 1-.44.86h-9.4a5.91 5.91 0 0 1 4.3-1.43c.36 0 .72.06 1.07.1C272.63 60.37 277.33 60.21 276.38 62.68zM255.43 63.54h-7C248.65 62.43 250 62 251 61.8l.54-.08.31-.07.39-.1.22-.09c.94-.45 2.49-.59 3.19.36A1.33 1.33 0 0 1 255.43 63.54zM243 42.93a1.67 1.67 0 0 1-.16.12l0 0a4.27 4.27 0 0 0-.38.36l-.34.4-.07.07a.91.91 0 0 0-.11.16 3.28 3.28 0 0 1-1.61 1l.1-2.05-.14-.71a6.12 6.12 0 0 1 2.47-.46c.23 0 .75 0 .83.34S243.15 42.82 243 42.93zM242.38 62.55a2 2 0 0 1-1 .65 7.65 7.65 0 0 1-1 .34h-.11l-1-1h0a9.27 9.27 0 0 1 1.21-.27C240.67 62.21 242.78 61.9 242.38 62.55zM317.2 61.85v1.69h-3.39a.71.71 0 0 1 .05-.29c.12-.34.66-.61.95-.76a6.56 6.56 0 0 1 1.79-.57C316.7 61.91 316.93 61.87 317.2 61.85z"/>
                            </g>
                            <path class={[Fill.tofuGreyD].join(" ")} d="M311.81,19.1A59.81,59.81,0,0,1,310.2,10c-11.58.27-23.1-1.12-34.66-1.45-5.31,1.49-9,3.19-9,4.95,0,4.6,29.08,3.65,29.08,9.74s-18.4,3.81-18.4,8.19c0,2.94,21.83,3.24,36.16,4.29A73.81,73.81,0,0,0,311.81,19.1Z"/>
                            <path class={[tofuYellowA].join(" ")} d="M267.63,23.14h10.49A17.52,17.52,0,0,0,259.81,7.62h0a17.62,17.62,0,0,0,5.14,13.32A17.45,17.45,0,0,0,267.63,23.14Z"/>
                            <path class={[tofuGreenA].join(" ")} d="M267.63,23.14h10.49A17.52,17.52,0,0,0,259.81,7.62h0a17.62,17.62,0,0,0,5.14,13.32A17.45,17.45,0,0,0,267.63,23.14Z"/>
                            <path class={[tofuGreenB, Opacity._03].join(" ")} d="M267.63,23.14h7.7L259.81,7.62h0a17.62,17.62,0,0,0,5.14,13.32A17.45,17.45,0,0,0,267.63,23.14Z"/>
                            <path class={[tofuYellowA].join(" ")} d="M280.89,23.14A17.59,17.59,0,0,0,278.3,0l0,0a17.55,17.55,0,0,0-2.58,23.12Z"/>
                            <path class={[tofuGreenC].join(" ")} d="M280.89,23.14A17.59,17.59,0,0,0,278.3,0l0,0a17.55,17.55,0,0,0-2.58,23.12Z"/>
                            <path class={[tofuGreenB, Opacity._03].join(" ")} d="M280.89,23.14A17.59,17.59,0,0,0,278.3,0l0,0V23.14Z"/>
                            <path class={[tofuYellowA].join(" ")} d="M288.9,23.14a17.45,17.45,0,0,0,2.7-2.2,17.62,17.62,0,0,0,5.14-13.32h0a17.52,17.52,0,0,0-18.3,15.52Z"/>
                            <path class={[tofuGreenD].join(" ")} d="M288.9,23.14a17.45,17.45,0,0,0,2.7-2.2,17.62,17.62,0,0,0,5.14-13.32h0a17.52,17.52,0,0,0-18.3,15.52Z"/>
                            <path class={[tofuGreenB, Opacity._03].join(" ")} d="M288.9,23.14a17.45,17.45,0,0,0,2.7-2.2,17.62,17.62,0,0,0,5.14-13.32h0L281.2,23.14Z"/>
                            <path class={[Fill.tofuGreyA].join(" ")} d="M436.87 39.4L435.45 22.57 435.45 18.07 433.42 8.21 431.39 7.04 412.13 7.04 386.17 4.94 368.98 7.04 363.06 7.04 360.91 8.21 361.3 19.47 359.81 31.02 359 38.19 401.38 49.75 436.87 39.4z"/>
                            <path class={[Fill.tofuGreyB].join(" ")} d="M435.65,46.7l1.22,7.92v8.92H360l-1-1h0l.16-3.2.25-4.89v0l.09-1.79,0-.54.38-6.95.1-2.05-.15-.71L359,38.19h24.74l2.66.1h0l25.52.91,13.56-.59h0l5-.22,4.57-.2,1.83,1.21Z"/>
                            <g class="cls-4">
                                <path class={[Fill.tofuGreyC].join(" ")} d="M431.83 51.1a4.55 4.55 0 0 0-1.78.61c-.3.19-.86.6-.88 1a2.35 2.35 0 0 1-.13.65 1.83 1.83 0 0 0-.13.24c-.08.13-.17.25-.26.38-.68.92.57 1.43 1.29 1.45a3.77 3.77 0 0 0 3.1-1.3 3.68 3.68 0 0 0 .83-2C433.92 51.11 432.64 51 431.83 51.1zM425.17 56.72a2.47 2.47 0 0 0-2.06-.69 3.79 3.79 0 0 0-2.32 1.09 1.2 1.2 0 0 0 .57 2.09 2.6 2.6 0 0 0 1 .12A3.66 3.66 0 0 0 424 59a2.6 2.6 0 0 0 1.21-1.06A1.07 1.07 0 0 0 425.17 56.72zM421 58.92l-.19-.19a2.23 2.23 0 0 0 .24.19zM400.84 50.84a4.8 4.8 0 0 0-1.73.18 4.16 4.16 0 0 0-1.59.71 3.79 3.79 0 0 0-.91 1c-.18.3.2.55.42.62a3.35 3.35 0 0 0 1.51 0 4.15 4.15 0 0 0 2.6-1.22l0 0c.21-.18.61-.45.52-.81S401.11 50.87 400.84 50.84zM385 57.16c-1.81 0-5 2.75-1.8 2.75C385 59.91 388.16 57.16 385 57.16zM384.18 46.4c-1.75 0-5 2.64-1.84 2.64C384.08 49 387.36 46.4 384.18 46.4zM386.4 38.29a3.62 3.62 0 0 1-.61.41 36.47 36.47 0 0 0-3.54 1.85 3.2 3.2 0 0 1-3.22.36 2.17 2.17 0 0 1-1.84-.68 1.87 1.87 0 0 1-.47-.94 1.59 1.59 0 0 1 .24-1.1h6.78zM376 42c-1 0-5.38 2-3 2C374 44 378.34 42 376 42zM364.54 53.46h0l.09 0s-.06 0-.09.06a.59.59 0 0 1 0 .25 3.8 3.8 0 0 1-.85 1.25 3.73 3.73 0 0 1-1 .7c0 .05 0 .08 0 .12-.06 1.91-1.82 2.93-3.41 3.48l-.09 0 .25-4.89a.47.47 0 0 1 .15-.06l-.14 0 .09-1.79 0-.54a5.86 5.86 0 0 1 1.44-.24l.21 0a3.69 3.69 0 0 1 .38-.26l-.13.06.2-.12a8 8 0 0 1 .75-.43c.86-.47 2.48-.61 3.17.24S365.26 53 364.54 53.46zM405.55 45.64c.25-.25.58-.57.47-1s-.55-.55-.9-.62a4.13 4.13 0 0 0-3.33.89l-.13.14c-.25.25-.58.57-.47 1s.56.55.9.62a4.1 4.1 0 0 0 3.32-.89zM429.73 39.1a3.29 3.29 0 0 0-.39.23.7.7 0 0 1 .32 1.14 3.81 3.81 0 0 1-3.1 1.29 4 4 0 0 1-1.64-.33.78.78 0 0 1-.48-.85 2.8 2.8 0 0 1 1-2h0l5-.22A1.87 1.87 0 0 1 429.73 39.1zM413.3 53c1.74 0 5-2.64 1.84-2.64C413.39 50.32 410.12 53 413.3 53zM416.13 63.54H404.86a4.58 4.58 0 0 1 3-1.1c1.28 0 2.62-.57 3.93-.68a2.46 2.46 0 0 1 1.05.15 9.85 9.85 0 0 1 1.84-.51c1-.18 2.31-.32 3.06.48C418.27 62.41 417.29 63.12 416.13 63.54zM411.5 59.83c1.52 0 5.08-2.32 1.92-2.32C411.9 57.51 408.34 59.83 411.5 59.83zM396 62.68a4.11 4.11 0 0 1-.44.86h-9.39a5.89 5.89 0 0 1 4.3-1.43c.36 0 .71.06 1.06.1C392.29 60.37 397 60.21 396 62.68zM375.1 63.54h-7c.25-1.11 1.57-1.59 2.56-1.74l.53-.08.32-.07.38-.1.23-.09c.94-.45 2.48-.59 3.19.36A1.34 1.34 0 0 1 375.1 63.54zM362.62 42.93l-.16.12s0 0 0 0a4.27 4.27 0 0 0-.38.36c-.13.14-.24.27-.34.4l-.07.07a.91.91 0 0 0-.11.16 3.28 3.28 0 0 1-1.61 1l.1-2.05-.15-.71a6.16 6.16 0 0 1 2.48-.46c.22 0 .74 0 .82.34S362.81 42.82 362.62 42.93zM362 62.55a2 2 0 0 1-1 .65 7.11 7.11 0 0 1-.95.34H360l-1-1h0a9.12 9.12 0 0 1 1.2-.27C360.34 62.21 362.45 61.9 362 62.55zM436.87 61.85v1.69h-3.4a1.35 1.35 0 0 1 0-.29c.12-.34.67-.61 1-.76a6.61 6.61 0 0 1 1.78-.57C436.37 61.91 436.59 61.87 436.87 61.85z"/>
                            </g>
                            <path class={[Fill.tofuGreyD].join(" ")} d="M431.48,19.1A58.6,58.6,0,0,1,429.87,10c-11.58.27-23.1-1.12-34.67-1.45-5.3,1.49-9,3.19-9,4.95,0,4.6,29.07,3.65,29.07,9.74s-18.39,3.81-18.39,8.19c0,2.94,21.82,3.24,36.16,4.29A73.81,73.81,0,0,0,431.48,19.1Z"/>
                            <path class={[tofuYellowA].join(" ")} d="M387.3,23.14h10.49A17.52,17.52,0,0,0,379.48,7.62h0a17.48,17.48,0,0,0,7.85,15.52Z"/>
                            <path class={[tofuGreenA].join(" ")} d="M387.3,23.14h10.49A17.52,17.52,0,0,0,379.48,7.62h0a17.48,17.48,0,0,0,7.85,15.52Z"/>
                            <path class={[tofuGreenB, Opacity._03].join(" ")} d="M387.3,23.14H395L379.48,7.62h0a17.48,17.48,0,0,0,7.85,15.52Z"/>
                            <path class={[tofuYellowA].join(" ")} d="M400.56,23.14A17.61,17.61,0,0,0,398,0l0,0a17.57,17.57,0,0,0-2.59,23.12Z"/>
                            <path class={[tofuGreenC].join(" ")} d="M400.56,23.14A17.61,17.61,0,0,0,398,0l0,0a17.57,17.57,0,0,0-2.59,23.12Z"/>
                            <path class={[tofuGreenB, Opacity._03].join(" ")} d="M400.56,23.14A17.61,17.61,0,0,0,398,0l0,0V23.14Z"/>
                            <path class={[tofuYellowA].join(" ")} d="M408.57,23.14a17.45,17.45,0,0,0,2.7-2.2,17.66,17.66,0,0,0,5.14-13.32h0a17.54,17.54,0,0,0-18.31,15.52Z"/>
                            <path class={[tofuGreenD].join(" ")} d="M408.57,23.14a17.45,17.45,0,0,0,2.7-2.2,17.66,17.66,0,0,0,5.14-13.32h0a17.54,17.54,0,0,0-18.31,15.52Z"/>
                            <path class={[tofuGreenB, Opacity._03].join(" ")} d="M408.57,23.14a17.45,17.45,0,0,0,2.7-2.2,17.66,17.66,0,0,0,5.14-13.32h0L400.86,23.14Z"/>
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
    height: 190,
    xPos: 1375,
    yPos: 268,
    onClick: null
}

export default asFoodItem(Stock);
