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
// Interface Imports
// -------------------------------------------
import { asFoodItem } from '../../../../interface';
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
            <svg xmlns="http://www.w3.org/2000/svg" x={10} y={14} width={30} viewBox="0 0 63.1 47.3">
            <title>
                Single_Tuna
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.tunaGrey].join(" ")} d="M0 43.2H63.1V47.2H0z"/>
                    <path class={[Fill.tunaBlue].join(" ")} d="M2.4 4H60.8V43.2H2.4z"/>
                    <path class={[Fill.tunaBlue].join(" ")} d="M31.2 4H60.7V43.2H31.2z"/>
                    <path class={[Fill.tunaGrey].join(" ")} d="M0 0H63.1V4H0z"/>
                    <path class={[Fill.tunaGrey].join(" ")} d="M0 0H31.4V4H0zM0 43.2H31.4V47.2H0z"/>
                    <path class={[Fill.tunaOffWhite].join(" ")} d="M50.71 27.86H46A14.56 14.56 0 0 0 31.4 13.3l-.2 0V34.07H50.71zM16.84 27.86H11.68v6.21H31.2V13.32A14.55 14.55 0 0 0 16.84 27.86z"/>
                    <path class={[Fill.tunaBlue].join(" ")} d="M38.93,25.77h0a.3.3,0,0,1,0-.44h0a4.53,4.53,0,0,0,1-2.44l-3.2,1.7a2.57,2.57,0,0,1-.46-.07h0L36,24.19H35.8l-.19-.38h-.15l-.2-.49h-.1l-.23-.44-.12.08-.31-.44-.13.12-.32-.48-.16.11-.28-.42-.14.11-.29-.34-.18.07-.34-.39-.14.11-.34-.36-.18.12-.41-.35-.12.13L31,20.64l-.17.15-.49-.27-.17.18-.48-.28-.16.19-.48-.24-.17.18-.45-.24L27.23,22h0a7.9,7.9,0,0,0-1.55.81,9.3,9.3,0,0,0-2.4,2.33h0l-.05.07a.58.58,0,0,0-.08.18.62.62,0,0,0,0,.13.41.41,0,0,0,0,.16h0a.58.58,0,0,0,.15.25h0l.05.06A10.19,10.19,0,0,0,26,27.93a8.58,8.58,0,0,0,3.83.92,8.26,8.26,0,0,0,3-.57l.55.25a2.43,2.43,0,0,0,1.17-.34c.47-.32.91-1.43,1.29-1.59a2.51,2.51,0,0,1,.9-.14v0L40,28.19A4.53,4.53,0,0,0,38.93,25.77Z"/>
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

export default asFoodItem(Single);
