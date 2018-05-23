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

        const tomatoRedA = (this.props.active) ? Fill.tomatoRedA : Fill.itemGreyB;
        const tomatoRedB = (this.props.active) ? Fill.tomatoRedB : Fill.itemGreyC;
        const tomatoGreen = (this.props.active) ? Fill.tomatoGreen : Fill.itemGreyA;
        const tomatoBrownA = (this.props.active) ? Fill.tomatoBrownA : Fill.itemGreyC;
        
        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={75} y={890} width={433} height={525} viewBox="0 0 433.3 525.7" onClick={this.onClick}>
            <title>
                Tomatoes
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[tomatoRedA].join(" ")} d="M273.17,4.11a19,19,0,0,0-7.08,3.18H266s0,0-.05,0a18.85,18.85,0,0,0-7.76,0C246,9.93,238.67,24.15,241.87,39.08S257,61.13,269.8,61.38a31.6,31.6,0,0,0,7.64-.81,31.21,31.21,0,0,0,7.3-2.4c11.57-5.46,19.55-16.84,16.35-31.77S285.4,1.48,273.17,4.11Z"/>
                    <path class={[tomatoRedB].join(" ")} d="M273.17,4.11a19,19,0,0,0-7.08,3.18H266s0,0-.05,0h-.05L277.34,60.6l.11,0a31.21,31.21,0,0,0,7.3-2.4c11.57-5.46,19.55-16.84,16.35-31.77S285.4,1.48,273.17,4.11Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M266.09,8.86C264.2,5,271.38,5.71,272.75,0,272.2,6.56,270.7,5.14,266.09,8.86Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M265.4,6.84a6.16,6.16,0,0,0,1.52,0c1.8,0,3,2.26,6.65,2.12C270.38,10.28,265.52,10.15,265.4,6.84Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M267,6.83c-.64.3-.75,0-1.47.37-2.57,1.47-2.78,3.81-6.32,4.58C262.6,12.29,266.94,9.69,267,6.83Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M266.72,8.73c-.67-3.68-5.37-1.3-10.1-5.27C259.15,7.44,261.83,8.59,266.72,8.73Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M266.63,9c1.79-2.51-.86-4.44-2.07-8.15C264.6,4.5,263.76,7.67,266.63,9Z"/>
                    <path class={[tomatoBrownA].join(" ")} d="M246.16,20.07c-1.14,2.14-1.91,4.64-1.25,6.41,1,2.74,3.94,3.73,6.17,1.08.52-.62,3.09-9.52,2.52-11.2-.86-2.47-3.7-1-5,.25A15.34,15.34,0,0,0,246.16,20.07Z"/>
                    <path class={[tomatoRedA].join(" ")} d="M202.62,64.34a19,19,0,0,0-2.82,7.24l0,0v0a18.89,18.89,0,0,0-5.53,5.44c-6.87,10.45-2.11,25.71,10.64,34.12s26.25,5.08,35.54-3.73a31.27,31.27,0,0,0,4.89-5.93,31.79,31.79,0,0,0,3.52-6.83c4.4-12,2.1-25.73-10.64-34.11S209.49,53.9,202.62,64.34Z"/>
                    <path class={[tomatoRedB].join(" ")} d="M202.62,64.34a19,19,0,0,0-2.82,7.24l0,0v0l0,0,45.53,30,.06-.09a31.79,31.79,0,0,0,3.52-6.83c4.4-12,2.1-25.73-10.64-34.11S209.49,53.9,202.62,64.34Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M200.89,72.69c-4-1.38,1.57-5.95-1.46-11C203.64,66.78,201.58,66.81,200.89,72.69Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M199,71.74c.59-.39.5-.49,1.08-1.06,1.25-1.29,3.73-.51,6.23-3.17C205,70.7,201.39,74,199,71.74Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M200.1,70.62c-.24.66-.56.51-.78,1.3-.8,2.85.7,4.67-1.28,7.7C200.82,77.58,202.1,72.69,200.1,70.62Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M201.25,72.15C198.19,70,196.51,75,190.36,75.5,195,76.55,197.68,75.48,201.25,72.15Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M201.38,72.41c-.49-3.05-3.74-2.56-7.2-4.36C196.78,70.63,198.39,73.48,201.38,72.41Z"/>
                    <path class={[tomatoBrownA].join(" ")} d="M194.56,94.67c.69,2.34,1.9,4.64,3.61,5.44,2.65,1.24,5.41-.11,5.15-3.57-.07-.79-4.48-8.95-6.06-9.73-2.34-1.16-3.37,1.85-3.38,3.68A15.74,15.74,0,0,0,194.56,94.67Z"/>
                    <path class={[tomatoRedA].join(" ")} d="M303.37,88a19.07,19.07,0,0,0,.89-7.72l0,0a.22.22,0,0,1,0-.06,18.82,18.82,0,0,0,4-6.67c4-11.85-4.48-25.41-18.95-30.29s-26.69,1.75-33.43,12.63a30.73,30.73,0,0,0-3.22,7A31.43,31.43,0,0,0,251,70.28c-1.21,12.75,4.5,25.42,19,30.29S299.37,99.82,303.37,88Z"/>
                    <path class={[tomatoRedB].join(" ")} d="M303.37,88a19.07,19.07,0,0,0,.89-7.72l0,0a.22.22,0,0,1,0-.06l0,0L252.69,62.68a.46.46,0,0,0,0,.11A31.43,31.43,0,0,0,251,70.28c-1.21,12.75,4.5,25.42,19,30.29S299.37,99.82,303.37,88Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M302.91,79.46c4.24.31,0,6.15,4.19,10.25C301.76,85.86,303.75,85.31,302.91,79.46Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M305,79.9a5.46,5.46,0,0,0-.77,1.3c-.9,1.56-3.49,1.44-5.23,4.64C299.49,82.4,302.1,78.3,305,79.9Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M304.21,81.25c.06-.7.41-.63.43-1.46.05-3-1.86-4.32-.72-7.77C301.74,74.7,301.75,79.76,304.21,81.25Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M302.71,80.06c3.51,1.31,3.86-4,9.68-6C307.67,74.22,305.32,75.93,302.71,80.06Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M302.52,79.85c1.25,2.83,4.27,1.54,8.08,2.39C307.42,80.4,305.13,78.06,302.52,79.85Z"/>
                    <path class={[tomatoBrownA].join(" ")} d="M303.46,56.59c-1.26-2.08-3-4-4.87-4.35-2.88-.52-5.21,1.48-4.07,4.75.27.77,6.6,7.53,8.33,7.89,2.56.53,2.79-2.64,2.33-4.42A15.57,15.57,0,0,0,303.46,56.59Z"/>
                    <path class={[tomatoRedA].join(" ")} d="M240.1,18.18a19.1,19.1,0,0,0-6.81-3.73l0,0s0,0-.05,0a18.85,18.85,0,0,0-4.7-6.19C219,0,203.3,2.79,193.32,14.34s-8.44,25.38-.9,35.73a30.86,30.86,0,0,0,5.25,5.61A31.69,31.69,0,0,0,204,60.06c11.34,5.92,25.23,5.4,35.2-6.14S249.58,26.36,240.1,18.18Z"/>
                    <path class={[tomatoRedB].join(" ")} d="M240.1,18.18a19.1,19.1,0,0,0-6.81-3.73l0,0s0,0-.05,0l0-.06-35.6,41.28.08.06A31.69,31.69,0,0,0,204,60.06c11.34,5.92,25.23,5.4,35.2-6.14S249.58,26.36,240.1,18.18Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M232.05,15.41c1.89-3.81,5.7,2.32,11.07,0C237.56,18.89,237.79,16.83,232.05,15.41Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M233.25,13.63c.31.62.42.56.92,1.21,1.11,1.41,0,3.77,2.32,6.58C233.49,19.69,230.68,15.71,233.25,13.63Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M234.2,14.88c-.64-.32-.43-.62-1.19-.94-2.73-1.14-4.71.09-7.48-2.27C227.2,14.71,231.9,16.6,234.2,14.88Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M232.53,15.83c2.53-2.76-2.21-5.07-1.91-11.24C229,9,229.7,11.85,232.53,15.83Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M232.26,15.92c3.09-.09,3-3.37,5.26-6.58C234.63,11.6,231.59,12.83,232.26,15.92Z"/>
                    <path class={[tomatoBrownA].join(" ")} d="M211.08,6.28c-2.4.38-4.85,1.29-5.87,2.89-1.58,2.46-.59,5.37,2.86,5.56.8,0,9.46-3.28,10.45-4.75,1.46-2.18-1.4-3.59-3.22-3.82A15.56,15.56,0,0,0,211.08,6.28Z"/>
                    <path class={[tomatoRedA].join(" ")} d="M191.57,47.23a18.9,18.9,0,0,0-6.8-3.74l0,0a.1.1,0,0,1-.06,0,18.71,18.71,0,0,0-4.7-6.16c-9.46-8.19-25.22-5.43-35.19,6.13s-8.44,25.37-.9,35.72a30.63,30.63,0,0,0,5.25,5.62,31.83,31.83,0,0,0,6.32,4.37c11.34,5.92,25.24,5.41,35.2-6.14S201.05,55.41,191.57,47.23Z"/>
                    <path class={[tomatoRedB].join(" ")} d="M191.57,47.23a18.9,18.9,0,0,0-6.8-3.74l0,0a.1.1,0,0,1-.06,0s0,0,0,0l-35.6,41.28.09.07a31.83,31.83,0,0,0,6.32,4.37c11.34,5.92,25.24,5.41,35.2-6.14S201.05,55.41,191.57,47.23Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M183.53,44.44c1.89-3.8,5.7,2.32,11.07,0C189,47.93,189.27,45.88,183.53,44.44Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M184.72,42.68c.31.62.42.56.93,1.2,1.11,1.41,0,3.77,2.32,6.59C185,48.73,182.16,44.76,184.72,42.68Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M185.68,43.93c-.63-.33-.43-.62-1.19-.94-2.73-1.17-4.72.09-7.48-2.27C178.68,43.74,183.37,45.63,185.68,43.93Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M184,44.86c2.53-2.75-2.2-5.05-1.91-11.22C180.47,38.06,181.18,40.9,184,44.86Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M183.74,45c3.09-.09,3-3.37,5.26-6.58C186.11,40.64,183.07,41.87,183.74,45Z"/>
                    <path class={[tomatoBrownA].join(" ")} d="M162.55,35.33c-2.39.38-4.84,1.28-5.86,2.88-1.57,2.46-.59,5.38,2.87,5.55.8.05,9.46-3.26,10.45-4.74,1.45-2.16-1.4-3.58-3.22-3.82A15.21,15.21,0,0,0,162.55,35.33Z"/>
                    <path class={[tomatoRedA].join(" ")} d="M340.89,43.81A19,19,0,0,0,333.81,47h-.06s0,0-.05,0a18.85,18.85,0,0,0-7.76,0c-12.22,2.61-19.54,16.83-16.35,31.76s15.13,22.05,27.94,22.3a31.6,31.6,0,0,0,7.64-.81,31.21,31.21,0,0,0,7.3-2.4C364,92.41,372,81,368.82,66.1S353.12,41.18,340.89,43.81Z"/>
                    <path class={[tomatoRedB].join(" ")} d="M340.89,43.81A19,19,0,0,0,333.81,47h-.06s0,0-.05,0h-.05l11.42,53.29.11,0a31.21,31.21,0,0,0,7.3-2.4C364,92.41,372,81,368.82,66.1S353.12,41.18,340.89,43.81Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M333.81,48.56c-1.9-3.81,5.28-3.15,6.66-8.86C339.92,46.27,338.42,44.84,333.81,48.56Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M333.12,46.54a6.16,6.16,0,0,0,1.52,0c1.8,0,3,2.26,6.65,2.12C338.09,50,333.24,49.85,333.12,46.54Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M334.7,46.53c-.64.3-.75,0-1.47.37-2.57,1.47-2.78,3.81-6.32,4.58C330.32,52,334.66,49.39,334.7,46.53Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M334.43,48.43c-.67-3.68-5.37-1.3-10.1-5.27C326.87,47.14,329.55,48.29,334.43,48.43Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M334.35,48.68c1.79-2.51-.86-4.44-2.07-8.15C332.32,44.2,331.48,47.37,334.35,48.68Z"/>
                    <path class={[tomatoBrownA].join(" ")} d="M313.88,59.77c-1.14,2.14-1.91,4.64-1.25,6.41,1,2.74,3.94,3.73,6.17,1.08.52-.62,3.09-9.52,2.52-11.2-.86-2.47-3.7-1-5,.25A15.34,15.34,0,0,0,313.88,59.77Z"/>
                    <path class={[tomatoRedA].join(" ")} d="M132.2,60.19A19.12,19.12,0,0,0,125,57.38a.14.14,0,0,1,0,0h-.05a18.82,18.82,0,0,0-5.46-5.52C109,44.94,93.7,49.73,85.32,62.48S80.26,88.75,89.09,98A31.18,31.18,0,0,0,95,102.9a31.86,31.86,0,0,0,6.84,3.51c12,4.41,25.73,2.07,34.09-10.67S142.66,67.05,132.2,60.19Z"/>
                    <path class={[tomatoRedB].join(" ")} d="M132.2,60.19A19.12,19.12,0,0,0,125,57.38a.14.14,0,0,1,0,0h-.05s0,0,0,0L94.93,102.83a.42.42,0,0,0,.09.07,31.86,31.86,0,0,0,6.84,3.51c12,4.41,25.73,2.07,34.09-10.67S142.66,67.05,132.2,60.19Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M123.85,58.49c1.37-4,5.95,1.56,11-1.47C129.77,61.23,129.73,59.16,123.85,58.49Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M124.81,56.57c.39.58.49.49,1.06,1.06,1.29,1.25.51,3.74,3.17,6.23C125.84,62.54,122.53,59,124.81,56.57Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M125.92,57.69c-.66-.24-.5-.57-1.3-.8-2.85-.78-4.66.71-7.7-1.26C119,58.42,123.85,59.68,125.92,57.69Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M124.38,58.83c2.15-3.06-2.85-4.72-3.35-10.86C120,52.56,121.05,55.27,124.38,58.83Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M124.13,59c3-.49,2.57-3.74,4.35-7.21C125.91,54.36,123.06,56,124.13,59Z"/>
                    <path class={[tomatoBrownA].join(" ")} d="M101.86,52.18c-2.32.69-4.64,1.9-5.43,3.62-1.24,2.64.12,5.41,3.56,5.15.8-.07,9-4.49,9.74-6.07,1.15-2.34-1.85-3.37-3.69-3.38A16,16,0,0,0,101.86,52.18Z"/>
                    <path class={[tomatoRedA].join(" ")} d="M396.14,103.92a19.1,19.1,0,0,0-6.81-3.73l0,0s0,0-.05,0a18.85,18.85,0,0,0-4.7-6.19c-9.46-8.17-25.21-5.41-35.19,6.14s-8.44,25.38-.9,35.73a30.86,30.86,0,0,0,5.25,5.61,31.69,31.69,0,0,0,6.32,4.38c11.34,5.92,25.23,5.4,35.2-6.14S405.62,112.09,396.14,103.92Z"/>
                    <path class={[tomatoRedB].join(" ")} d="M396.14,103.92a19.1,19.1,0,0,0-6.81-3.73l0,0s0,0-.05,0l0-.06-35.6,41.28.08.06a31.69,31.69,0,0,0,6.32,4.38c11.34,5.92,25.23,5.4,35.2-6.14S405.62,112.09,396.14,103.92Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M388.09,101.14c1.89-3.81,5.7,2.32,11.07,0C393.6,104.62,393.83,102.57,388.09,101.14Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M389.29,99.37c.31.62.42.56.92,1.21,1.11,1.41,0,3.77,2.32,6.58C389.53,105.42,386.72,101.44,389.29,99.37Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M390.24,100.62c-.64-.32-.43-.62-1.19-.94-2.73-1.14-4.71.09-7.48-2.27C383.24,100.44,387.94,102.33,390.24,100.62Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M388.57,101.57c2.53-2.76-2.21-5.07-1.91-11.24C385,94.76,385.74,97.58,388.57,101.57Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M388.31,101.66c3.09-.09,3-3.37,5.26-6.58C390.67,97.33,387.63,98.56,388.31,101.66Z"/>
                    <path class={[tomatoBrownA].join(" ")} d="M367.12,92c-2.4.38-4.85,1.29-5.87,2.89-1.58,2.46-.59,5.37,2.86,5.56.8,0,9.46-3.28,10.45-4.75,1.46-2.18-1.4-3.59-3.22-3.82A15.56,15.56,0,0,0,367.12,92Z"/>
                    <path class={[tomatoRedA].join(" ")} d="M168.82,94.85a18.9,18.9,0,0,0-6.8-3.74l0,0a.1.1,0,0,1-.06,0,18.71,18.71,0,0,0-4.7-6.16C147.78,76.68,132,79.44,122.05,91s-8.44,25.37-.9,35.72a30.63,30.63,0,0,0,5.25,5.62,31.83,31.83,0,0,0,6.32,4.37c11.34,5.92,25.24,5.41,35.2-6.14S178.3,103,168.82,94.85Z"/>
                    <path class={[tomatoRedB].join(" ")} d="M168.82,94.85a18.9,18.9,0,0,0-6.8-3.74l0,0a.1.1,0,0,1-.06,0s0,0,0,0l-35.6,41.28.09.07a31.83,31.83,0,0,0,6.32,4.37c11.34,5.92,25.24,5.41,35.2-6.14S178.3,103,168.82,94.85Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M160.78,92.06c1.89-3.8,5.7,2.32,11.07,0C166.28,95.55,166.52,93.5,160.78,92.06Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M162,90.29c.31.62.42.56.93,1.2,1.11,1.41,0,3.77,2.32,6.59C162.22,96.34,159.4,92.38,162,90.29Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M162.93,91.55c-.63-.33-.43-.62-1.19-.94-2.73-1.17-4.72.09-7.48-2.27C155.93,91.36,160.62,93.25,162.93,91.55Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M161.26,92.48c2.53-2.75-2.2-5.05-1.91-11.22C157.72,85.68,158.42,88.51,161.26,92.48Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M161,92.58c3.09-.09,3-3.37,5.26-6.58C163.35,88.26,160.31,89.49,161,92.58Z"/>
                    <path class={[tomatoBrownA].join(" ")} d="M139.8,82.95c-2.39.38-4.84,1.28-5.86,2.88-1.57,2.46-.59,5.38,2.87,5.55.8.05,9.46-3.26,10.45-4.74,1.45-2.16-1.4-3.58-3.22-3.82A15.21,15.21,0,0,0,139.8,82.95Z"/>
                    <path class={[tomatoRedA].join(" ")} d="M318.13,91.43a19,19,0,0,0-7.08,3.18H311s0,0-.05,0a18.85,18.85,0,0,0-7.76,0c-12.22,2.61-19.54,16.83-16.35,31.76s15.13,22.05,27.94,22.3a31.6,31.6,0,0,0,7.64-.81,31.21,31.21,0,0,0,7.3-2.4c11.57-5.46,19.55-16.84,16.35-31.77S330.37,88.8,318.13,91.43Z"/>
                    <path class={[tomatoRedB].join(" ")} d="M318.13,91.43a19,19,0,0,0-7.08,3.18H311s0,0-.05,0h-.05l11.42,53.29.11,0a31.21,31.21,0,0,0,7.3-2.4c11.57-5.46,19.55-16.84,16.35-31.77S330.37,88.8,318.13,91.43Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M311.06,96.18c-1.9-3.81,5.28-3.15,6.66-8.86C317.16,93.88,315.66,92.46,311.06,96.18Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M310.36,94.16a6.16,6.16,0,0,0,1.52,0c1.8,0,3,2.26,6.65,2.12C315.34,97.6,310.48,97.47,310.36,94.16Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M311.94,94.15c-.64.3-.75,0-1.47.37-2.57,1.47-2.78,3.81-6.32,4.58C307.57,99.61,311.91,97,311.94,94.15Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M311.68,96c-.67-3.68-5.37-1.3-10.1-5.27C304.12,94.76,306.8,95.9,311.68,96Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M311.59,96.3c1.79-2.51-.86-4.44-2.07-8.15C309.57,91.82,308.72,95,311.59,96.3Z"/>
                    <path class={[tomatoBrownA].join(" ")} d="M291.12,107.39c-1.14,2.14-1.91,4.64-1.25,6.41,1,2.74,3.94,3.73,6.17,1.08.52-.62,3.09-9.52,2.52-11.2-.86-2.47-3.7-1-5,.25A15.34,15.34,0,0,0,291.12,107.39Z"/>
                    <path class={[tomatoRedA].join(" ")} d="M179.86,112A19,19,0,0,0,177,119.2l0,0v0a18.89,18.89,0,0,0-5.53,5.44c-6.87,10.45-2.11,25.71,10.64,34.12s26.25,5.08,35.54-3.73a31.27,31.27,0,0,0,4.89-5.93,31.79,31.79,0,0,0,3.52-6.83c4.4-12,2.1-25.73-10.64-34.11S186.74,101.51,179.86,112Z"/>
                    <path class={[tomatoRedB].join(" ")} d="M179.86,112A19,19,0,0,0,177,119.2l0,0v0l0,0,45.53,30,.06-.09a31.79,31.79,0,0,0,3.52-6.83c4.4-12,2.1-25.73-10.64-34.11S186.74,101.51,179.86,112Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M178.14,120.3c-4-1.38,1.57-5.95-1.46-11C180.89,114.4,178.82,114.43,178.14,120.3Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M176.22,119.35c.59-.39.5-.49,1.08-1.06,1.25-1.29,3.73-.51,6.23-3.17C182.2,118.32,178.63,121.63,176.22,119.35Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M177.35,118.24c-.24.66-.56.51-.78,1.3-.8,2.85.7,4.67-1.28,7.7C178.07,125.2,179.34,120.3,177.35,118.24Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M178.5,119.77c-3.07-2.15-4.74,2.84-10.89,3.34C172.21,124.17,174.92,123.1,178.5,119.77Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M178.62,120c-.49-3.05-3.74-2.56-7.2-4.36C174,118.24,175.64,121.1,178.62,120Z"/>
                    <path class={[tomatoBrownA].join(" ")} d="M171.81,142.29c.69,2.34,1.9,4.64,3.61,5.44,2.65,1.24,5.41-.11,5.15-3.57-.07-.79-4.48-8.95-6.06-9.73-2.34-1.16-3.37,1.85-3.38,3.68A15.74,15.74,0,0,0,171.81,142.29Z"/>
                    <path class={[tomatoRedA].join(" ")} d="M280.62,135.58a19.07,19.07,0,0,0,.89-7.72l0,0a.22.22,0,0,1,0-.06,18.82,18.82,0,0,0,4-6.67c4-11.85-4.48-25.41-18.95-30.29s-26.69,1.75-33.43,12.63a30.73,30.73,0,0,0-3.22,7,31.43,31.43,0,0,0-1.67,7.49c-1.21,12.75,4.5,25.42,19,30.29S276.62,147.44,280.62,135.58Z"/>
                    <path class={[tomatoRedB].join(" ")} d="M280.62,135.58a19.07,19.07,0,0,0,.89-7.72l0,0a.22.22,0,0,1,0-.06l0,0L229.94,110.3a.46.46,0,0,0,0,.11,31.43,31.43,0,0,0-1.67,7.49c-1.21,12.75,4.5,25.42,19,30.29S276.62,147.44,280.62,135.58Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M280.16,127.08c4.24.31,0,6.15,4.19,10.25C279,133.48,281,132.92,280.16,127.08Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M282.26,127.52a5.46,5.46,0,0,0-.77,1.3c-.9,1.56-3.49,1.44-5.23,4.64C276.73,130,279.35,125.91,282.26,127.52Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M281.45,128.87c.06-.7.41-.63.43-1.46.05-3-1.86-4.32-.72-7.77C279,122.31,279,127.37,281.45,128.87Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M280,127.68c3.51,1.31,3.86-4,9.68-6C284.92,121.83,282.56,123.55,280,127.68Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M279.77,127.46c1.25,2.83,4.27,1.54,8.08,2.39C284.67,128,282.38,125.68,279.77,127.46Z"/>
                    <path class={[tomatoBrownA].join(" ")} d="M280.7,104.2c-1.26-2.08-3-4-4.87-4.35-2.88-.52-5.21,1.48-4.07,4.75.27.77,6.6,7.53,8.33,7.89,2.56.53,2.79-2.64,2.33-4.42A15.57,15.57,0,0,0,280.7,104.2Z"/>
                    <path class={[tomatoRedA].join(" ")} d="M109.44,107.81a19.12,19.12,0,0,0-7.23-2.81.14.14,0,0,1,0,0h-.05a18.82,18.82,0,0,0-5.46-5.52C86.21,92.56,71,97.35,62.57,110.1s-5.06,26.27,3.77,35.54a31.18,31.18,0,0,0,5.94,4.88A31.86,31.86,0,0,0,79.11,154c12,4.41,25.73,2.07,34.09-10.67S119.9,114.67,109.44,107.81Z"/>
                    <path class={[tomatoRedB].join(" ")} d="M109.44,107.81a19.12,19.12,0,0,0-7.23-2.81.14.14,0,0,1,0,0h-.05s0,0,0,0L72.18,150.45a.42.42,0,0,0,.09.07A31.86,31.86,0,0,0,79.11,154c12,4.41,25.73,2.07,34.09-10.67S119.9,114.67,109.44,107.81Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M101.1,106.1c1.37-4,5.95,1.56,11-1.47C107,108.85,107,106.77,101.1,106.1Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M102.05,104.19c.39.58.49.49,1.06,1.06,1.29,1.25.51,3.74,3.17,6.23C103.08,110.16,99.77,106.6,102.05,104.19Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M103.16,105.31c-.66-.24-.5-.57-1.3-.8-2.85-.78-4.66.71-7.7-1.26C96.2,106,101.1,107.3,103.16,105.31Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M101.63,106.45c2.15-3.06-2.85-4.72-3.35-10.86C97.24,100.17,98.3,102.89,101.63,106.45Z"/>
                    <path class={[tomatoGreen].join(" ")} d="M101.38,106.58c3-.49,2.57-3.74,4.35-7.21C103.16,102,100.31,103.61,101.38,106.58Z"/>
                    <path class={[tomatoBrownA].join(" ")} d="M79.11,99.8c-2.32.69-4.64,1.9-5.43,3.62-1.24,2.64.12,5.41,3.56,5.15.8-.07,9-4.49,9.74-6.07,1.15-2.34-1.85-3.37-3.69-3.38A16,16,0,0,0,79.11,99.8Z"/>
                    <path class={[Fill.tomatoBrownB].join(" ")} d="M0 127.2H433.3V355.8H0z"/>
                    <path class={[Fill.tomatoBrownC].join(" ")} d="M0 127.2H433.3V157.8H0zM0 297.5H433.3V328.1H0zM0 241.6H433.3V272.2H0zM0 185.7H433.3V216.29999999999998H0z"/>
                    <path class={[Fill.tomatoBrownD].join(" ")} d="M53.42 199.34A6.38 6.38 0 1 1 47 193 6.38 6.38 0 0 1 53.42 199.34zM53.42 142.43A6.38 6.38 0 1 1 47 136 6.39 6.39 0 0 1 53.42 142.43zM53.42 228.13A6.38 6.38 0 1 1 47 221.75 6.39 6.39 0 0 1 53.42 228.13z"/>
                    <circle class={[Fill.tomatoBrownD].join(" ")} cx="47" cy="255.5" r="6.4"/>
                    <path class={[Fill.tomatoBrownD].join(" ")} d="M53.42 283.24A6.38 6.38 0 1 1 47 276.85 6.39 6.39 0 0 1 53.42 283.24zM53.42 310.78A6.38 6.38 0 1 1 47 304.4 6.4 6.4 0 0 1 53.42 310.78zM53.42 342.58A6.38 6.38 0 1 1 47 336.19 6.38 6.38 0 0 1 53.42 342.58zM389.7 199.34a6.38 6.38 0 1 1-6.38-6.38A6.38 6.38 0 0 1 389.7 199.34zM389.7 142.43a6.38 6.38 0 1 1-6.38-6.38A6.39 6.39 0 0 1 389.7 142.43z"/>
                    <circle class={[Fill.tomatoBrownD].join(" ")} cx="47" cy="172.2" r="6.4"/>
                    <circle class={[Fill.tomatoBrownD].join(" ")} cx="383.3" cy="172.2" r="6.4"/>
                    <path class={[Fill.tomatoBrownD].join(" ")} d="M389.7,228.13a6.38,6.38,0,1,1-6.38-6.38A6.39,6.39,0,0,1,389.7,228.13Z"/>
                    <circle class={[Fill.tomatoBrownD].join(" ")} cx="383.3" cy="255.5" r="6.4"/>
                    <path class={[Fill.tomatoBrownD].join(" ")} d="M389.7 283.24a6.38 6.38 0 1 1-6.38-6.39A6.39 6.39 0 0 1 389.7 283.24zM389.7 310.78a6.38 6.38 0 1 1-6.38-6.38A6.39 6.39 0 0 1 389.7 310.78zM389.7 342.58a6.38 6.38 0 1 1-6.38-6.39A6.38 6.38 0 0 1 389.7 342.58z"/>
                    <path class={[Fill.tomatoBrownB].join(" ")} d="M0 355.7H433.3V525.7H0z"/>
                    <path class={[Fill.tomatoBrownC].join(" ")} d="M0 467.5H433.3V498.1H0zM0 411.6H433.3V442.20000000000005H0zM0 355.7H433.3V386.3H0z"/>
                    <path class={[Fill.tomatoBrownD].join(" ")} d="M53.42 369.38A6.38 6.38 0 1 1 47 363 6.38 6.38 0 0 1 53.42 369.38zM53.42 398.17A6.38 6.38 0 1 1 47 391.79 6.39 6.39 0 0 1 53.42 398.17z"/>
                    <circle class={[Fill.tomatoBrownD].join(" ")} cx="47" cy="425.5" r="6.4"/>
                    <path class={[Fill.tomatoBrownD].join(" ")} d="M53.42 453.28A6.38 6.38 0 1 1 47 446.89 6.39 6.39 0 0 1 53.42 453.28zM53.42 480.81A6.38 6.38 0 1 1 47 474.44 6.4 6.4 0 0 1 53.42 480.81zM53.42 512.62A6.38 6.38 0 1 1 47 506.23 6.38 6.38 0 0 1 53.42 512.62zM389.7 369.38a6.38 6.38 0 1 1-6.38-6.38A6.38 6.38 0 0 1 389.7 369.38zM389.7 398.17a6.38 6.38 0 1 1-6.38-6.38A6.39 6.39 0 0 1 389.7 398.17z"/>
                    <circle class={[Fill.tomatoBrownD].join(" ")} cx="383.3" cy="425.5" r="6.4"/>
                    <path class={[Fill.tomatoBrownD].join(" ")} d="M389.7 453.28a6.38 6.38 0 1 1-6.38-6.39A6.39 6.39 0 0 1 389.7 453.28zM389.7 480.81a6.38 6.38 0 1 1-6.38-6.38A6.39 6.39 0 0 1 389.7 480.81zM389.7 512.62a6.38 6.38 0 1 1-6.38-6.39A6.38 6.38 0 0 1 389.7 512.62z"/>
                    <path class={[Fill.tomatoBrownE].join(" ")} d="M150.2 155.8H283V191.4H150.2z"/>
                    <path class={[Fill.tomatoBrownC].join(" ")} d="M221.81,165.84a5.19,5.19,0,1,1-5.19-5.19A5.18,5.18,0,0,1,221.81,165.84Z"/>
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
