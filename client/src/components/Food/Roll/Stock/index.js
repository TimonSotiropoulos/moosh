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

        const mainColor = (this.props.active) ? Fill.rollBrown : Fill.itemGreyC;

        return (
            <svg x={xPos} y={yPos} width={width} height={height}  viewBox="0 0 249 126" onClick={this.onClick}>
                <rect x="0" y="0" width="300" height="200" className={[Fill.transparent].join(" ")}></rect>
                <svg xmlns="http://www.w3.org/2000/svg" y={30} viewBox="0 0 142 104.3">
                <title>
                    BrownRoll
                </title>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[mainColor].join(" ")} d="M66.63,79.6a3.27,3.27,0,0,1,0,.33c0,.27,0,.54,0,.8s0,.3,0,.45-.05.5-.08.75,0,.26,0,.4-.09.55-.15.82c0,.1,0,.2,0,.3a17.86,17.86,0,0,1-.65,2.31.44.44,0,0,1,0,.07c-.13.36-.27.72-.42,1.07a.64.64,0,0,1,0,.11c-3.2,7.6-11.2,13.62-21.37,16.1a.81.81,0,0,1-.23.06H43.4a44.44,44.44,0,0,1-20.06,0h-.06l-.53-.13C10.58,100.07,1.53,92,.18,82.17c0,0,0,0,0-.08-.05-.39-.1-.79-.12-1.18a.09.09,0,0,1,0,0c0-.41,0-.82,0-1.24,0-.11,0-.23,0-.33,0-.27,0-.54,0-.8s0-.3,0-.45,0-.5.08-.74,0-.27.05-.41.09-.55.15-.82c0-.1,0-.2.06-.3.12-.58.26-1.14.44-1.71.06-.2.13-.4.2-.6a.31.31,0,0,1,0-.06c.13-.37.27-.73.42-1.08l0-.11c3.2-7.6,11.2-13.62,21.37-16.1a.93.93,0,0,1,.23-.06h.11a44.44,44.44,0,0,1,20.06,0h.07c.17,0,.34.08.52.12,10.91,2.71,19.3,9.5,21.9,17.93a18.79,18.79,0,0,1,.66,3,.2.2,0,0,1,0,.08,10.81,10.81,0,0,1,.12,1.18.09.09,0,0,1,0,0c0,.21,0,.42,0,.62S66.63,79.39,66.63,79.6Z"/>
                        <path class={[mainColor].join(" ")} d="M65.15,81.34c.15-.36.29-.71.41-1.08a.3.3,0,0,1,0-.06,19,19,0,0,0,.64-2.3c0-.1,0-.2.06-.3.05-.27.1-.55.14-.83s0-.27.05-.41.06-.49.08-.74,0-.3,0-.45,0-.53,0-.8c0-.11,0-.23,0-.34,0-.41,0-.83,0-1.24a.15.15,0,0,0,0,0c0-.4-.07-.79-.12-1.18a.43.43,0,0,1,0-.08c-1.35-9.79-10.39-17.9-22.57-20.92l-.52-.12h-.06a44.55,44.55,0,0,0-20.06,0h-.11l-.23.06C12.72,53,4.72,59,1.52,66.64l0,.1c-.15.36-.29.72-.41,1.08l0,.06a19.36,19.36,0,0,0-.64,2.31l-.06.3c-.05.27-.1.55-.14.82s0,.27-.05.41-.06.5-.08.74,0,.3,0,.45,0,.53,0,.8,0,.23,0,.34c0,.41,0,.83,0,1.24a.29.29,0,0,0,0,0c0,.4.07.79.12,1.18a.63.63,0,0,1,0,.08c1.35,9.8,10.39,17.9,22.57,20.92l.52.12h.07a44.52,44.52,0,0,0,20.06,0l.11,0,.23-.05C53.91,95.07,61.91,89,65.11,81.45Z"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="53.9" cy="71.9" r="1.5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="31.1" cy="71.2" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="40" cy="60.9" r="1.9"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="24.9" cy="62" r="1.5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="11.8" cy="67.3" r="1.1"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="15.6" cy="71.2" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="6.4" cy="78.2" r="1.3"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="16.3" cy="81.3" r=".5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="29.4" cy="79.5" r="1.4"/>
                        <path class={[Fill.rollOffWhite].join(" ")} d="M43.26,82.59a1.42,1.42,0,1,1-1.43-1.42A1.42,1.42,0,0,1,43.26,82.59Z"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="44.4" cy="74.6" r="1.5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="52.3" cy="78.1" r="1.1"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="48.7" cy="68.4" r="1.4"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="53.5" cy="59.8" r="1.4"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="42.9" cy="54.7" r="1.4"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="61.5" cy="70.4" r="1.3"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="59" cy="75.1" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="37.3" cy="76.8" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="23.4" cy="85" r="1.2"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="37.3" cy="85.6" r="1.2"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="31.1" cy="87.8" r="1.2"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="21.5" cy="69.1" r="1.3"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="20.2" cy="76.6" r=".9"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="16.8" cy="59.7" r="1.7"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="27.1" cy="55.5" r="1.5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="33.3" cy="55" r="1"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="33" cy="61.4" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="36.4" cy="63.4" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="27.1" cy="67.8" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="12.9" cy="76" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="17.6" cy="64.7" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="12.6" cy="62" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="8.8" cy="63.4" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="21.5" cy="54.7" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="47.9" cy="59" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="52.7" cy="65.5" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="58.7" cy="80.9" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="51.2" cy="87.8" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="35.7" cy="90.4" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="24.6" cy="90.4" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="17.6" cy="86.9" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="9.5" cy="70.8" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="47.9" cy="81.2" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="59.8" cy="65" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="5.7" cy="69.8" r="1.1"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="38.6" cy="67.8" r="1.4"/>
                        <path class={[mainColor].join(" ")} d="M142,79.6a3.27,3.27,0,0,1,0,.33c0,.27,0,.54,0,.8s0,.3,0,.45-.05.5-.08.75,0,.26,0,.4-.09.55-.15.82c0,.1,0,.2,0,.3a17.86,17.86,0,0,1-.65,2.31.44.44,0,0,1,0,.07c-.13.36-.27.72-.42,1.07a.64.64,0,0,1,0,.11c-3.2,7.6-11.2,13.62-21.37,16.1a.81.81,0,0,1-.23.06h-.11a44.44,44.44,0,0,1-20.06,0h-.06l-.53-.13c-12.18-3-21.22-11.13-22.57-20.92,0,0,0,0,0-.08-.05-.39-.1-.79-.12-1.18a.09.09,0,0,1,0,0c0-.41,0-.82,0-1.24,0-.11,0-.23,0-.33,0-.27,0-.54,0-.8s0-.3,0-.45,0-.5.08-.74,0-.27.05-.41.09-.55.15-.82c0-.1,0-.2.06-.3.12-.58.26-1.14.44-1.71.06-.2.13-.4.2-.6a.31.31,0,0,1,0-.06c.13-.37.27-.73.42-1.08l0-.11c3.2-7.6,11.2-13.62,21.37-16.1a.93.93,0,0,1,.23-.06h.11a44.44,44.44,0,0,1,20.06,0h.07c.17,0,.34.08.52.12,10.91,2.71,19.3,9.5,21.9,17.93a18.79,18.79,0,0,1,.66,3,.2.2,0,0,1,0,.08,10.81,10.81,0,0,1,.12,1.18.09.09,0,0,1,0,0c0,.21,0,.42,0,.62S142,79.39,142,79.6Z"/>
                        <path class={[mainColor].join(" ")} d="M140.5,81.34c.15-.36.29-.71.41-1.08a.3.3,0,0,1,0-.06,19,19,0,0,0,.64-2.3c0-.1,0-.2.06-.3.05-.27.1-.55.14-.83s0-.27.05-.41.06-.49.08-.74,0-.3,0-.45,0-.53,0-.8c0-.11,0-.23,0-.34,0-.41,0-.83,0-1.24a.15.15,0,0,0,0,0c0-.4-.07-.79-.12-1.18a.43.43,0,0,1,0-.08c-1.35-9.79-10.39-17.9-22.57-20.92l-.52-.12h-.06a44.55,44.55,0,0,0-20.06,0h-.11l-.23.06C88.06,53,80.07,59,76.87,66.64l0,.1c-.15.36-.29.72-.41,1.08l0,.06a19.36,19.36,0,0,0-.64,2.31l-.06.3c-.05.27-.1.55-.14.82s0,.27-.05.41-.06.5-.08.74,0,.3,0,.45,0,.53,0,.8,0,.23,0,.34c0,.41,0,.83,0,1.24a.29.29,0,0,0,0,0c0,.4.07.79.12,1.18a.63.63,0,0,1,0,.08c1.35,9.8,10.39,17.9,22.57,20.92l.52.12h.07a44.52,44.52,0,0,0,20.06,0l.11,0,.23-.05c10.17-2.49,18.17-8.51,21.37-16.11Z"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="129.2" cy="71.9" r="1.5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="106.4" cy="71.2" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="115.3" cy="60.9" r="1.9"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="100.2" cy="62" r="1.5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="87.2" cy="67.3" r="1.1"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="90.9" cy="71.2" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="81.7" cy="78.2" r="1.3"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="91.7" cy="81.3" r=".5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="104.8" cy="79.5" r="1.4"/>
                        <path class={[Fill.rollOffWhite].join(" ")} d="M118.6,82.59a1.42,1.42,0,1,1-1.43-1.42A1.42,1.42,0,0,1,118.6,82.59Z"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="119.7" cy="74.6" r="1.5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="127.7" cy="78.1" r="1.1"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="124" cy="68.4" r="1.4"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="128.8" cy="59.8" r="1.4"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="118.3" cy="54.7" r="1.4"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="136.8" cy="70.4" r="1.3"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="134.4" cy="75.1" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="112.6" cy="76.8" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="98.8" cy="85" r="1.2"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="112.6" cy="85.6" r="1.2"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="106.4" cy="87.8" r="1.2"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="96.8" cy="69.1" r="1.3"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="95.5" cy="76.6" r=".9"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="92.1" cy="59.7" r="1.7"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="102.5" cy="55.5" r="1.5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="108.7" cy="55" r="1"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="108.3" cy="61.4" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="111.8" cy="63.4" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="102.5" cy="67.8" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="88.3" cy="76" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="92.9" cy="64.7" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="88" cy="62" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="84.1" cy="63.4" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="96.8" cy="54.7" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="123.3" cy="59" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="128" cy="65.5" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="134.1" cy="80.9" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="126.5" cy="87.8" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="111" cy="90.4" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="100" cy="90.4" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="92.9" cy="86.9" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="84.9" cy="70.8" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="123.3" cy="81.2" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="135.1" cy="65" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="81" cy="69.8" r="1.1"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="113.9" cy="67.8" r="1.4"/>
                        <path class={[mainColor].join(" ")} d="M105.15,30.3a3.27,3.27,0,0,1,0,.33c0,.27,0,.54,0,.8s0,.3,0,.45-.05.5-.08.75,0,.26,0,.4-.09.55-.15.82c0,.1,0,.2,0,.3a17.86,17.86,0,0,1-.65,2.31.44.44,0,0,1,0,.07c-.13.36-.27.72-.42,1.07a.64.64,0,0,1,0,.11c-3.2,7.6-11.2,13.62-21.37,16.1a.81.81,0,0,1-.23.06h-.11A43.8,43.8,0,0,1,71.84,55a44.16,44.16,0,0,1-10-1.13h-.06l-.53-.13c-12.18-3-21.22-11.13-22.57-20.92,0,0,0,0,0-.08-.05-.39-.1-.79-.12-1.18a.09.09,0,0,1,0,0c0-.41,0-.82,0-1.24,0-.11,0-.23,0-.33,0-.27,0-.54,0-.8s0-.3,0-.45,0-.5.08-.74,0-.27.05-.41.09-.55.15-.82c0-.1,0-.2.06-.3.12-.58.26-1.14.44-1.71.06-.2.13-.4.2-.6a.31.31,0,0,1,0-.06c.13-.37.27-.73.42-1.08l0-.11c3.2-7.6,11.2-13.62,21.37-16.1a.93.93,0,0,1,.23-.06h.11a44.44,44.44,0,0,1,20.06,0h.07c.17,0,.34.08.52.12,10.91,2.71,19.3,9.5,21.9,17.93a18.79,18.79,0,0,1,.66,3,.2.2,0,0,1,0,.08A10.81,10.81,0,0,1,105.1,29a.09.09,0,0,1,0,0c0,.21,0,.42,0,.62S105.15,30.09,105.15,30.3Z"/>
                        <path class={[mainColor].join(" ")} d="M103.68,32c.15-.36.29-.71.41-1.08a.3.3,0,0,1,0-.06,19,19,0,0,0,.64-2.3c0-.1,0-.2.06-.3.05-.27.1-.55.14-.83s0-.27.05-.41.06-.49.08-.74,0-.3,0-.45,0-.53,0-.8c0-.11,0-.23,0-.34,0-.41,0-.83,0-1.24a.15.15,0,0,0,0,0c0-.4-.07-.79-.12-1.18a.43.43,0,0,1,0-.08c-1.35-9.79-10.39-17.9-22.57-20.92l-.52-.12h-.06a44.55,44.55,0,0,0-20.06,0h-.11l-.23.06C51.24,3.71,43.25,9.73,40,17.34l0,.1c-.15.36-.29.72-.41,1.08l0,.06a19.36,19.36,0,0,0-.64,2.31l-.06.3c-.05.27-.1.55-.14.82s0,.27-.05.41-.06.5-.08.74,0,.3,0,.45,0,.53,0,.8,0,.23,0,.34c0,.41,0,.83,0,1.24a.29.29,0,0,0,0,0c0,.4.07.79.12,1.18a.63.63,0,0,1,0,.08c1.35,9.8,10.39,17.9,22.57,20.92l.52.12h.07a44,44,0,0,0,10,1.13,44.09,44.09,0,0,0,10.08-1.16l.11,0,.23-.05c10.17-2.49,18.17-8.51,21.37-16.11Z"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="92.4" cy="22.6" r="1.5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="69.6" cy="21.9" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="78.5" cy="11.6" r="1.9"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="63.4" cy="12.7" r="1.5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="50.4" cy="18" r="1.1"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="54.1" cy="21.9" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="44.9" cy="28.9" r="1.3"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="54.9" cy="32" r=".5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="68" cy="30.2" r="1.4"/>
                        <path class={[Fill.rollOffWhite].join(" ")} d="M81.78,33.29a1.42,1.42,0,1,1-1.43-1.42A1.42,1.42,0,0,1,81.78,33.29Z"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="82.9" cy="25.3" r="1.5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="90.8" cy="28.8" r="1.1"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="87.2" cy="19.1" r="1.4"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="92" cy="10.5" r="1.4"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="81.4" cy="5.4" r="1.4"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="100" cy="21.1" r="1.3"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="97.5" cy="25.8" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="75.8" cy="27.6" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="61.9" cy="35.7" r="1.2"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="75.8" cy="36.3" r="1.2"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="69.6" cy="38.5" r="1.2"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="60" cy="19.8" r="1.3"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="58.7" cy="27.3" r=".9"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="55.3" cy="10.4" r="1.7"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="65.6" cy="6.2" r="1.5"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="71.8" cy="5.7" r="1"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="71.5" cy="12.1" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="75" cy="14.1" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="65.6" cy="18.4" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="51.5" cy="26.8" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="56.1" cy="15.4" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="51.1" cy="12.7" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="47.3" cy="14.1" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="60" cy="5.4" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="86.4" cy="9.8" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="91.2" cy="16.1" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="97.2" cy="31.6" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="89.7" cy="38.5" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="74.2" cy="41.1" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="63.2" cy="41.1" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="56.1" cy="37.6" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="48.1" cy="21.5" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="86.4" cy="31.9" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="98.3" cy="15.7" r=".8"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="44.2" cy="20.5" r="1.1"/>
                        <circle class={[Fill.rollOffWhite].join(" ")} cx="77.1" cy="18.4" r="1.4"/>
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
    xPos: 63,
    yPos: 623,
    onClick: null
}

export default asFoodItem(Stock);
