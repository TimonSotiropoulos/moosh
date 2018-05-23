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
            <svg xmlns="http://www.w3.org/2000/svg" x={7} y={10} width={35} viewBox="0 0 83.7 69.2">
            <title>
                Single_BrownRoll
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.rollBrown].join(" ")} d="M83.74,38.08a4.11,4.11,0,0,1,0,.42c0,.34,0,.68,0,1s0,.38,0,.56-.07.63-.1.94,0,.33-.06.51c-.07.35-.12.7-.19,1,0,.12,0,.25-.06.37a22.44,22.44,0,0,1-.81,2.9.55.55,0,0,1,0,.09c-.17.45-.34.9-.53,1.35a.8.8,0,0,1,0,.14C77.8,56.94,67.75,64.51,55,67.63a1,1,0,0,1-.29.08h-.14a55,55,0,0,1-12.67,1.46,55.5,55.5,0,0,1-12.54-1.42h-.07l-.66-.16C13.29,63.79,1.93,53.61.23,41.3c0,0,0-.06,0-.1-.06-.49-.13-1-.15-1.48a.11.11,0,0,1,0-.06c0-.51-.05-1-.05-1.56,0-.14,0-.28,0-.42,0-.34,0-.68,0-1s0-.38.05-.56.06-.62.1-.93,0-.34.06-.51c.06-.35.11-.7.19-1,0-.12,0-.25.07-.37.15-.72.32-1.43.55-2.14.07-.25.16-.51.25-.76a.38.38,0,0,1,0-.07c.16-.46.34-.91.52-1.36,0,0,0-.09.05-.14C5.94,19.23,16,11.67,28.77,8.54a1.17,1.17,0,0,1,.29-.08h.14a55.85,55.85,0,0,1,25.21,0h.09c.21,0,.43.1.66.15C68.86,12,79.41,20.52,82.67,31.11a23.62,23.62,0,0,1,.83,3.76.26.26,0,0,1,0,.1,13.59,13.59,0,0,1,.15,1.48.11.11,0,0,1,0,.06c0,.26,0,.53,0,.78S83.74,37.81,83.74,38.08Z"/>
                    <path class={[Fill.rollBrown].join(" ")} d="M81.88,40.26c.18-.45.36-.89.52-1.35a.37.37,0,0,1,0-.08,23.85,23.85,0,0,0,.8-2.9c0-.12,0-.25.07-.37.07-.35.12-.69.18-1,0-.17,0-.34.07-.51s.07-.62.1-.93,0-.37,0-.56,0-.67,0-1c0-.14,0-.28,0-.43,0-.52,0-1-.05-1.56a.19.19,0,0,0,0-.06c0-.5-.09-1-.15-1.49a.54.54,0,0,1,0-.1C81.81,15.56,70.45,5.38,55.15,1.58l-.66-.16h-.08a56,56,0,0,0-25.21,0h-.14a1.41,1.41,0,0,0-.29.07C16,4.66,5.94,12.23,1.92,21.79l-.05.13c-.19.45-.36.9-.52,1.35l0,.08a24.33,24.33,0,0,0-.8,2.9l-.07.37c-.07.35-.13.69-.18,1,0,.18,0,.35-.07.51s-.07.62-.1.93,0,.37,0,.56,0,.67,0,1c0,.15,0,.28,0,.43,0,.52,0,1,.06,1.56a.36.36,0,0,0,0,.06c0,.5.09,1,.15,1.49a.8.8,0,0,1,0,.09C1.93,46.62,13.29,56.8,28.6,60.6l.66.16h.09a55.3,55.3,0,0,0,12.53,1.42,55.41,55.41,0,0,0,12.67-1.45l.14,0a1.46,1.46,0,0,0,.28-.07C67.75,57.52,77.8,49.94,81.83,40.4Z"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="67.7" cy="28.4" r="1.9"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="39" cy="27.6" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="50.3" cy="14.6" r="2.3"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="31.3" cy="15.9" r="1.8"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="14.9" cy="22.6" r="1.4"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="19.6" cy="27.6" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="8" cy="36.3" r="1.6"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="20.5" cy="40.2" r=".6"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="37" cy="37.9" r="1.8"/>
                    <path class={[Fill.rollOffWhite].join(" ")} d="M54.36,41.84a1.79,1.79,0,1,1-1.79-1.79A1.79,1.79,0,0,1,54.36,41.84Z"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="55.8" cy="31.8" r="1.8"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="65.8" cy="36.2" r="1.4"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="61.2" cy="24" r="1.7"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="67.2" cy="13.2" r="1.7"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="53.9" cy="6.8" r="1.8"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="77.3" cy="26.5" r="1.6"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="74.2" cy="32.4" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="46.9" cy="34.6" r="1.1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="29.4" cy="44.8" r="1.6"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="46.9" cy="45.7" r="1.6"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="39" cy="48.4" r="1.6"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="27" cy="24.8" r="1.6"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="25.4" cy="34.3" r="1.2"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="21.1" cy="13" r="2.1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="34.1" cy="7.8" r="1.9"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="41.9" cy="7.2" r="1.3"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="41.4" cy="15.2" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="45.8" cy="17.8" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="34.1" cy="23.2" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="16.3" cy="33.6" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="22.1" cy="19.3" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="15.9" cy="15.9" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="11" cy="17.8" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="27" cy="6.8" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="60.2" cy="12.3" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="66.2" cy="20.3" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="73.8" cy="39.6" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="64.3" cy="48.4" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="44.8" cy="51.7" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="31" cy="51.7" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="22.1" cy="47.2" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="12" cy="27.1" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="60.2" cy="40" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="75.1" cy="19.7" r="1"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="7.2" cy="25.7" r="1.4"/>
                    <circle class={[Fill.rollOffWhite].join(" ")} cx="48.5" cy="23.2" r="1.7"/>
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
