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
import { Fill, MixBlend } from '../../../../styles';
// --------------------------------

class Single extends Component {

    render() {

        const { width, height, xPos, yPos, active, onClick } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={xPos} y={yPos} width={125} height={125} viewBox="0 0 50 50" onClick={onClick}>
            <polygon className={[Fill.transparent].join(" ")} points="0,0 0,50, 50,50, 50,0" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 168.9">
            <title>
                Single_Pineapple
            </title>
            <g class="cls-1">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[Fill.pineappleGreenA].join(" ")} d="M45.63,25.56c-.34,1-.66,1.93-1,2.91q.06-1.62.06-3.27A84.85,84.85,0,0,0,41,0a84.85,84.85,0,0,0-3.71,25.2c0,1.1,0,2.19.06,3.27q-.45-1.47-1-2.91A57.39,57.39,0,0,0,25.28,6.2,82.94,82.94,0,0,0,29.9,31,57.15,57.15,0,0,0,41,50.37,57.15,57.15,0,0,0,52.12,31,82.83,82.83,0,0,0,56.75,6.2,57.31,57.31,0,0,0,45.63,25.56Z"/>
                        <path class={[Fill.pineappleGreenB].join(" ")} d="M46.86,39.85c-.43.94-.84,1.88-1.22,2.82,0-1,.07-2.11.07-3.17A65.1,65.1,0,0,0,41,15a64.93,64.93,0,0,0-4.7,24.51c0,1.06,0,2.13.07,3.17-.38-.94-.79-1.89-1.23-2.82A54.58,54.58,0,0,0,21.05,21a64.37,64.37,0,0,0,5.87,24.16A54.56,54.56,0,0,0,41,64a54.61,54.61,0,0,0,14.1-18.79A64.29,64.29,0,0,0,61,21,54.58,54.58,0,0,0,46.86,39.85Z"/>
                        <path class={[Fill.pineappleGreenA].join(" ")} d="M48,54q-.79,1.51-1.47,3c.06-1.13.09-2.26.09-3.41A63.45,63.45,0,0,0,41,27.33a63.38,63.38,0,0,0-5.65,26.32c0,1.15,0,2.28.09,3.41-.46-1-.95-2-1.48-3A59.61,59.61,0,0,0,17,33.81a63.11,63.11,0,0,0,7,25.95A59.58,59.58,0,0,0,41,79.95,59.57,59.57,0,0,0,57.94,59.76a63.11,63.11,0,0,0,7-25.95A59.62,59.62,0,0,0,48,54Z"/>
                        <path class={[Fill.pineappleGreenB].join(" ")} d="M49.69,70.69q-1,1.76-1.82,3.55.11-2,.11-4a70.91,70.91,0,0,0-7-30.77,70.85,70.85,0,0,0-7,30.77q0,2,.11,4C33.59,73,33,71.86,32.34,70.69A70.72,70.72,0,0,0,11.43,47.07,71.32,71.32,0,0,0,41,101,70.72,70.72,0,0,0,61.9,77.39,70.82,70.82,0,0,0,70.6,47.07,70.71,70.71,0,0,0,49.69,70.69Z"/>
                        <path class={[Fill.pineappleYellowA].join(" ")} d="M82,123.95c0,1.34,0,2.67-.14,4-.11,1.74-.31,3.46-.58,5.14-.21,1.27-.47,2.53-.76,3.77s-.61,2.45-1,3.64A50.4,50.4,0,0,1,73.14,154c-.61.91-1.25,1.8-1.91,2.65a41.76,41.76,0,0,1-15.11,12.27H25.91a41.57,41.57,0,0,1-15.1-12.23c-.66-.86-1.31-1.74-1.92-2.65a50.7,50.7,0,0,1-6.43-13.54c-.37-1.16-.69-2.35-1-3.56s-.56-2.54-.77-3.82q-.41-2.54-.58-5.17C0,126.59,0,125.28,0,123.95a56.56,56.56,0,0,1,1.43-12.67,47.31,47.31,0,0,1,1.37-4.9c.24-.77.51-1.55.82-2.31A50.55,50.55,0,0,1,8.14,95l0,0a50.39,50.39,0,0,1,3.93-5.31A42.68,42.68,0,0,1,20,82.41c.68-.48,1.39-.94,2.1-1.35A28.71,28.71,0,0,1,25,79.42a35.47,35.47,0,0,1,32,0,33.11,33.11,0,0,1,2.91,1.65,25.82,25.82,0,0,1,2.18,1.42,42.3,42.3,0,0,1,7.83,7.18h0a48.72,48.72,0,0,1,8.42,14.38,24.78,24.78,0,0,1,.84,2.33,49.23,49.23,0,0,1,1.35,4.84A55.68,55.68,0,0,1,82,123.95Z"/>
                        <path class={[Fill.pineappleBrownA, MixBlend.multiply].join(" ")} d="M73.14,154c-.61.91-1.25,1.8-1.91,2.65L70,155.34l-8.53,8.51a1.55,1.55,0,0,1-.27.19c-.1.05-.16.13-.26.17H60.8a1.35,1.35,0,0,1-.52.1,1.65,1.65,0,0,1-.6-.11l-.09-.07a1.7,1.7,0,0,1-.44-.29l-8.49-8.51-8.51,8.51a1.69,1.69,0,0,1-.29.19c-.08.05-.16.13-.24.17h-.1a1.36,1.36,0,0,1-.52.1,1.69,1.69,0,0,1-.61-.11s0-.05-.09-.07a2,2,0,0,1-.43-.29l-8.48-8.51-8.52,8.51a1.6,1.6,0,0,1-.28.19,2.2,2.2,0,0,1-.26.17h-.08a1.37,1.37,0,0,1-.51.1,1.65,1.65,0,0,1-.61-.11l-.1-.07a1.73,1.73,0,0,1-.43-.29l-8.48-8.51-1.31,1.3c-.66-.86-1.31-1.74-1.92-2.65L11,151.9a1.61,1.61,0,0,1,2.29,0l8.48,8.51,8.51-8.52a1.7,1.7,0,0,1,1.14-.47,1.61,1.61,0,0,1,1.14.48L41,160.43l8.52-8.52a1.67,1.67,0,0,1,1.15-.47,1.58,1.58,0,0,1,1.13.48l8.49,8.51,8.51-8.52a1.66,1.66,0,0,1,1.14-.47,1.63,1.63,0,0,1,1.14.48Zm6.44-17.42a1.62,1.62,0,0,0-1.14.47l-8.51,8.52L61.46,137a1.62,1.62,0,0,0-1.14-.47,1.6,1.6,0,0,0-1.14.47l-8.51,8.52L42.17,137a1.61,1.61,0,0,0-2.27,0l-8.53,8.52L22.9,137a1.63,1.63,0,0,0-2.29,0l-8.51,8.52L3.62,137a1.62,1.62,0,0,0-1.14-.47,1.52,1.52,0,0,0-1,.34c.28,1.21.6,2.4,1,3.56l0,0L11,149s.1,0,.13.09a2,2,0,0,0,.4.26,1.68,1.68,0,0,0,.4.08c.07,0,.13,0,.2,0h0a1.88,1.88,0,0,0,.4-.09l.2,0a1.09,1.09,0,0,0,.23-.16,1,1,0,0,0,.31-.19l8.52-8.53L30.23,149a.49.49,0,0,1,.15.09,1.91,1.91,0,0,0,.39.26,1.69,1.69,0,0,0,.42.08c.06,0,.13,0,.19,0a1.52,1.52,0,0,0,.4-.09l.2,0a1.21,1.21,0,0,0,.24-.16,1.5,1.5,0,0,0,.31-.19L41,140.43,49.51,149h0s.09,0,.13.09a1.91,1.91,0,0,0,.4.26,1.52,1.52,0,0,0,.4.08c.06,0,.12,0,.19,0a1.86,1.86,0,0,0,.42-.09l.19,0a1.86,1.86,0,0,0,.23-.16,1.21,1.21,0,0,0,.31-.19l8.52-8.53L68.8,149a.46.46,0,0,1,.14.09,1.53,1.53,0,0,0,.39.26,1.68,1.68,0,0,0,.4.08c.07,0,.13,0,.21,0a1.68,1.68,0,0,0,.4-.09l.2,0a2,2,0,0,0,.24-.16,1.12,1.12,0,0,0,.29-.19l8.48-8.48c.39-1.19.71-2.4,1-3.64A1.6,1.6,0,0,0,79.59,136.55Zm0-6.32L71.1,121.7a1.61,1.61,0,0,0-1.14-.47,1.58,1.58,0,0,0-1.14.47l-8.51,8.52-8.49-8.52a1.56,1.56,0,0,0-1.13-.47,1.6,1.6,0,0,0-1.15.47L41,130.23l-8.47-8.52a1.6,1.6,0,0,0-1.14-.47,1.62,1.62,0,0,0-1.14.47l-8.51,8.52-8.48-8.52a1.63,1.63,0,0,0-1.14-.47,1.59,1.59,0,0,0-1.14.47l-8.51,8.52L.14,127.9q.17,2.63.58,5.17l.58.58h0l.13.09a1.63,1.63,0,0,0,.4.26,1.52,1.52,0,0,0,.4.08c.06,0,.13,0,.19,0a1.24,1.24,0,0,0,.42-.08.49.49,0,0,0,.19,0,1,1,0,0,0,.23-.14,1.24,1.24,0,0,0,.31-.2l8.52-8.52,8.48,8.52a1.31,1.31,0,0,1,.14.09,1.36,1.36,0,0,0,.39.26,1.68,1.68,0,0,0,.4.08c.06,0,.13,0,.21,0a1.13,1.13,0,0,0,.4-.08.54.54,0,0,0,.2,0,1.21,1.21,0,0,0,.24-.14,1.15,1.15,0,0,0,.29-.2l8.52-8.52,8.48,8.52a1.31,1.31,0,0,1,.14.09,2.18,2.18,0,0,0,.39.26,1.85,1.85,0,0,0,.42.08c.06,0,.13,0,.19,0a1.06,1.06,0,0,0,.4-.08.63.63,0,0,0,.21,0,1.24,1.24,0,0,0,.22-.14,1.49,1.49,0,0,0,.31-.2l8.51-8.52,8.49,8.52s.1.05.13.09a1.68,1.68,0,0,0,.4.26,1.59,1.59,0,0,0,.4.08c.06,0,.13,0,.19,0a1.24,1.24,0,0,0,.42-.08.5.5,0,0,0,.19,0,1,1,0,0,0,.23-.14.92.92,0,0,0,.31-.2L70,125.12l8.47,8.52a1,1,0,0,1,.14.09A1.4,1.4,0,0,0,79,134a1.76,1.76,0,0,0,.4.08c.08,0,.14,0,.21,0A1.15,1.15,0,0,0,80,134a.5.5,0,0,0,.19,0,.82.82,0,0,0,.24-.14,1.05,1.05,0,0,0,.29-.2h0l.58-.58c.27-1.68.47-3.4.58-5.14Zm-.36-23.84a1.62,1.62,0,0,0-.77.43l-8.51,8.51-8.48-8.51a1.62,1.62,0,0,0-1.14-.47,1.6,1.6,0,0,0-1.14.47l-8.51,8.51-8.49-8.51a1.61,1.61,0,0,0-2.27,0l-8.53,8.51-8.47-8.51a1.63,1.63,0,0,0-2.29,0l-8.51,8.51-8.48-8.51a1.63,1.63,0,0,0-.82-.43,47.31,47.31,0,0,0-1.37,4.9l1.05-1L11,118.74v0s.13.08.19.13a2.31,2.31,0,0,0,.34.22,2,2,0,0,0,.45.09l.14,0h0a3.06,3.06,0,0,0,.35-.06c.08,0,.16,0,.24-.05s.13-.09.21-.14a1.3,1.3,0,0,0,.32-.2l8.52-8.52,8.47,8.51v0l.2.13a3.77,3.77,0,0,0,.34.22,2.14,2.14,0,0,0,.45.09c.05,0,.09,0,.16,0a2.66,2.66,0,0,0,.36-.06c.08,0,.17,0,.24-.05a.7.7,0,0,0,.21-.14,1.4,1.4,0,0,0,.34-.2L41,110.23l8.48,8.51,0,0s.13.08.19.13a2.56,2.56,0,0,0,.34.22,1.81,1.81,0,0,0,.43.09l.16,0a2.92,2.92,0,0,0,.37-.06c.08,0,.16,0,.24-.05a.94.94,0,0,0,.19-.14,1.4,1.4,0,0,0,.34-.2l8.52-8.52,8.48,8.51v0l.19.13a2.53,2.53,0,0,0,.34.22,2,2,0,0,0,.45.09l.16,0a2.56,2.56,0,0,0,.35-.06c.08,0,.16,0,.24-.05a.7.7,0,0,0,.21-.14,1.38,1.38,0,0,0,.32-.2l8.52-8.52,1,1A49.23,49.23,0,0,0,79.22,106.39ZM73.81,94.9,71.1,92.18A1.63,1.63,0,0,0,70,91.7a1.66,1.66,0,0,0-1.14.47l-8.51,8.52-8.49-8.51a1.58,1.58,0,0,0-1.13-.48,1.67,1.67,0,0,0-1.15.47L41,100.69l-8.47-8.51a1.61,1.61,0,0,0-1.14-.48,1.7,1.7,0,0,0-1.14.47l-8.51,8.52-8.48-8.51a1.61,1.61,0,0,0-2.29,0L8.15,95l0,0a50.55,50.55,0,0,0-4.51,9.06l8.49-8.47,8.48,8.51c.06.06.13.08.19.13a1.79,1.79,0,0,0,.34.22,1.5,1.5,0,0,0,.61.12,1.44,1.44,0,0,0,.6-.12.34.34,0,0,0,.11-.06,1.7,1.7,0,0,0,.42-.29l8.52-8.51,8.48,8.51a1.81,1.81,0,0,0,.21.13,1.34,1.34,0,0,0,.32.22,1.59,1.59,0,0,0,.61.12,1.54,1.54,0,0,0,.62-.12s.06,0,.09-.06a1.69,1.69,0,0,0,.43-.29l8.51-8.51,8.49,8.51c.05.06.13.08.2.13a1.44,1.44,0,0,0,.34.22,1.59,1.59,0,0,0,1.21,0l.11-.06a1.94,1.94,0,0,0,.42-.29L70,95.6l8.42,8.46A49.46,49.46,0,0,0,73.81,94.9ZM50.67,85.8l-8.49-8.52a1.61,1.61,0,0,0-2.27,0L31.37,85.8,25,79.42a28.71,28.71,0,0,0-2.92,1.64l8.1,8.16.2.12a2,2,0,0,0,.34.23,1.5,1.5,0,0,0,.61.11,1.53,1.53,0,0,0,.62-.11.59.59,0,0,1,.09-.06,2.44,2.44,0,0,0,.44-.29L41,80.69l8.48,8.53h0a1.81,1.81,0,0,0,.19.12,1.59,1.59,0,0,0,.34.23,1.48,1.48,0,0,0,.6.11,1.51,1.51,0,0,0,.61-.11.61.61,0,0,1,.09-.06,1.87,1.87,0,0,0,.44-.29l8.14-8.14A33.11,33.11,0,0,0,57,79.43Z"/>
                    </g>
                </g>
            </g>
        </svg>
    </svg>
)
}
}

Single.defaultProps = {
    active: true,
    width: 238,
    height: 67,
    xPos: 0,
    yPos: 0
}

export default Single;
