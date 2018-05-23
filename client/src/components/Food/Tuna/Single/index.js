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
import { Fill, Text } from '../../../../styles';
// --------------------------------

class Single extends Component {

    render() {

        const { width, height, xPos, yPos, active, onClick } = this.props;
        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={xPos} y={yPos} width={125} height={125} viewBox="0 0 50 50" onClick={onClick}>
            <polygon className={[Fill.transparent].join(" ")} points="0,0 0,50, 50,50, 50,0" />
            <svg xmlns="http://www.w3.org/2000/svg" x={10} y={10} viewBox="0 0 115.3 126.7">
            <path class={[Fill.tunaGrey].join(" ")} d="M0 96.9H63.1V100.9H0z"/>
            <path class={[Fill.tunaBlue].join(" ")} d="M2.4 57.7H60.8V96.9H2.4z"/>
            <path class={[Fill.tunaBlue].join(" ")} d="M31.2 57.7H60.7V96.9H31.2z"/>
            <path class={[Fill.tunaGrey].join(" ")} d="M0 53.7H63.1V57.7H0z"/>
            <path class={[Fill.tunaGrey].join(" ")} d="M0 53.7H31.4V57.7H0zM0 96.9H31.4V100.9H0z"/>
            <path class={[Fill.tunaOffWhite].join(" ")} d="M50.71 81.53H46A14.56 14.56 0 0 0 31.4 67l-.2 0V87.74H50.71zM16.84 81.53H11.68v6.21H31.2V67A14.55 14.55 0 0 0 16.84 81.53z"/>
            <path class={[Fill.tunaBlue].join(" ")} d="M38.93,79.43h0a.3.3,0,0,1,0-.44h0a4.6,4.6,0,0,0,1-2.45l-3.2,1.7a2.25,2.25,0,0,1-.46-.07h0l-.35-.32H35.8l-.2-.38h-.15l-.2-.49h-.1l-.23-.44-.12.08-.31-.43-.13.12-.32-.48-.17.11-.28-.41-.14.11-.28-.34-.18.07L32.66,75l-.15.11-.34-.36-.18.12-.41-.35-.12.14L31,74.31l-.17.15-.49-.27-.17.18-.48-.28-.16.19L29.08,74l-.18.18L28.46,74l-1.23,1.71h0a7.88,7.88,0,0,0-1.56.81,9.5,9.5,0,0,0-2.4,2.33h0l0,.06a.53.53,0,0,0-.08.19.56.56,0,0,0,0,.13.5.5,0,0,0,0,.16h0a.58.58,0,0,0,.14.25l0,0,.05.05A10.19,10.19,0,0,0,26,81.6a8.51,8.51,0,0,0,3.83.92,8.42,8.42,0,0,0,3-.57l.55.25a2.47,2.47,0,0,0,1.17-.34c.47-.32.91-1.43,1.29-1.59a2.33,2.33,0,0,1,.91-.14h0L40,81.86A4.56,4.56,0,0,0,38.93,79.43Z"/>
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
