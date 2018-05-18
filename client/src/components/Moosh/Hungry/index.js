// *******************************************************
// Window
// -------------------------------------------------------
// This is a root SVG Container for the each page of the
// game to sit within
// -------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
// --------------------------------

// *******************************************
// Component Imports
// -------------------------------------------

// --------------------------------

// *******************************************
// Constant Imports
// -------------------------------------------
import { Dimensions } from '../../../constants';
// --------------------------------

// *******************************************
// Utility Imports
// -------------------------------------------

// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Fill, Stroke, Opacity } from '../../../styles';
// --------------------------------


// .cls-1{isolation:isolate}
// .cls-2{fill:#05ab8c} //green
// {[Fill.none].join(" ")}fill:none}
// {[Fill.greenTwo].join(" ")}fill:#008f76} //green two
// {[Fill.greenThree, Opacity._07].join(" ")}fill:#005b49}{opacity:.7} //greenthree

// {[Fill.greenFour, Opacity._03].join(" ")}fill:#55676f}// {[Fill.greenFour, Opacity._03].join(" ")}opacity:.3} greenfour


// {[Fill.purple].join(" ")}fill:#584770} purple
// {[Fill.greenFive].join(" ")}fill:#9cbf6e} greenfive
// {[Fill.greenThree, Opacity._05].join(" ")}opacity:.5}// {[Fill.greenThree, Opacity._05].join(" ")}fill:#005b49} greenthree
// .cls-10{fill:#231f20},// .cls-10{stroke:#231f20;stroke-miterlimit:10;stroke-width:6.45px;mix-blend-mode:multiply}{opacity:.3}



// .cls-11{fill:#241d1f} lightBlack
// .cls-12{fill:#e77c8d} pink
// .cls-13{fill:#fff} white
// .cls-14{fill:#f8f9f4} offWhite
// .cls-15{fill:#944f90} purple
// .cls-16{fill:#231f20} lightblack
// .cls-17{fill:#b6dad0;opacity:.6} greenSix

class Hungry extends Component {


    render() {
        const { width, height, xPos, yPos } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg"  width={width} height={height} x={241} y={365} viewBox="0 0 783.9 840.4">
            <g class="cls-1">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="moosh">
                        <path class={[Fill.green].join(" ")} d="M459.36,7.56C413.74-5.26,363-.87,318.12,13.92c-47.92,15.79-87,45-118.07,82.76a346.92,346.92,0,0,0-34.94,51.67c-38.77,69.54-58.81,155.44-63.74,239.06a74.88,74.88,0,0,0,6.8,3.82l6.64,102.51,1.68.36a11.73,11.73,0,0,0,1.3.58c-.1-.1.15-.17.49-.24q6.91,1.28,13.93,1.89l.32.32q.15,11,1,21.94c-.09.16-.17.33-.26.49-.83,1.41-1.63,2.67-2.23,4a9.09,9.09,0,0,1,3.12,2.67c.89,9,2.15,18,3.87,26.91,4.19,21.65,10.72,43.72,23.48,62l.2.28c.33.91.69,1.82,1,2.73L191.23,656c25.85,24,55.13,42.07,87.59,50.4l-.1.3a54.07,54.07,0,0,1,2.51-5.92c24.55,7.72,53,13.25,86,15.57l96-1.74,10-.18A34,34,0,0,1,482,705a38.46,38.46,0,0,1,21.08-8.17c10-.68,23.63-11.37,29.8-17.16,9.78-9.18,24-20.57,34.92-31.59,1.27-1.27,2.33-2.33,3.28-3.27,1.15-1.54,3-3.85,5.7-7.23,1.92-2.36,4.22-4.33,6-6.8,4.31-6,8.37-14.25,13.15-21q2.55-3.49,0,.47l6-9c1.67-2.29,3.88-4.38,5.76-6.6-1.49,1.18,4.32-10.73,5.81-13,8.66-13.4,21.36-22.24,35-21.34q1.48-5.39,3-11.15c1.34.65,14.64,6.92,16,7.79A453.34,453.34,0,0,0,678.39,488C693.35,308.57,634.82,56.83,459.36,7.56Z"/>
                        <path class={[Fill.none].join(" ")} d="M0 266.32c.11.17.21.35.31.52C.12 266.47 0 266.24 0 266.32zM281.22 700.8a54.07 54.07 0 0 0-2.51 5.92c-.19.54-.38 1.07-.56 1.62s-.4 1.25-.58 1.89l0 .14h0l3.52.8 3.83.83q2.21.46 4.44.89l3.64.7c1.6.29 3.2.57 4.8.84l3.36.57c1.81.29 3.62.55 5.44.82l2.79.41q4.13.57 8.27 1.05l49.6-.9C334.19 714.05 305.76 708.52 281.22 700.8z"/>
                        <path class={[Fill.green].join(" ")} d="M263.26 706.68l1.62.47 1.75.47-1.74-.47zM208.2 684l-1.31-.75 1.31.75q2.58 1.47 5.19 2.87l.66.35-.66-.35Q210.78 685.45 208.2 684zM277.44 710.34l.09 0h0zM194.48 675.44l.2.14c.75.51 1.51 1 2.27 1.5-.76-.5-1.52-1-2.27-1.5zM200.21 679.18l-2.37-1.52 2.37 1.52 1.16.73c1.46.9 2.93 1.78 4.41 2.64-1.48-.87-3-1.74-4.41-2.65zM277.27 710.3l.26.06h0l-.09 0zM249.11 702.28c-1.32-.45-2.63-.94-3.95-1.41 1.31.47 2.62 1 3.95 1.41l0 0 .06 0-.06 0zM227.5 693.77c-1.1-.49-2.19-1-3.28-1.53 1.09.52 2.18 1 3.28 1.53l1.61.7 2 .87-2-.87zM665.11 566.35q.75-2.76 1.46-5.54C665.82 563.36 664.95 566.23 665.11 566.35zM234.79 696.91h0l-1.13-.48zM278.16 708.33q-.31.93-.58 1.89C277.76 709.59 278 709 278.16 708.33zM254 703.88h0c1 .32 2 .65 3 1l2.23.66-2.23-.66C256 704.52 255 704.2 254 703.88zM234.9 697l-.11 0 .11 0c1.36.56 2.74 1.08 4.11 1.61C237.64 698 236.26 697.51 234.9 697z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M220.36 690.42c-1.75-.86-3.48-1.74-5.2-2.64l-1.11-.58 1.1.58c1.72.9 3.45 1.79 5.2 2.64l1.81.87 2 1-2-1zM205.77 682.56l.88.53.24.14-.24-.14zM233.66 696.43l-2.55-1.08zM234.79 696.91L234.79 696.91 234.79 696.91 234.79 696.91zM161.84 647.46h0a190.49 190.49 0 0 0 32.41 27.82l.23.16-.23-.16A190.48 190.48 0 0 1 161.84 647.46zM197.83 677.66l-.89-.58zM278.71 706.72c-.19.54-.38 1.07-.56 1.62C278.33 707.79 278.52 707.25 278.71 706.72zM277.53 710.36l0-.14 0 .14zM254 703.87c-1.58-.51-3.17-1-4.74-1.55C250.79 702.86 252.38 703.36 254 703.87zM272.91 709.26c-1.3-.32-2.6-.66-3.9-1l-2.4-.64 2.4.64c1.3.34 2.59.68 3.9 1s2.65.64 4 1l.39.09-.39-.09Q274.9 709.75 272.91 709.26zM259.2 705.49l2.13.63 1.93.55-1.93-.56zM276.89 710.22l.39.09.17 0z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M253.57,701.59c.21-1.18.48-2.38.67-3.57-22.81-9.72-43.86-24.22-63-42l-28.51-38.37a30,30,0,0,1,1.77,5.93,11.78,11.78,0,0,1-1.27,7.86c2.13,4.64,3.43,9.76.61,13.81a12.34,12.34,0,0,1-2,2.22,190.48,190.48,0,0,0,32.41,27.82l.23.16.2.14c.75.51,1.51,1,2.27,1.5l.89.58,2.37,1.52,1.16.73c1.46.91,2.93,1.78,4.41,2.65l.88.53.24.14,1.31.75q2.58,1.47,5.19,2.87l.66.35,1.11.58c1.72.9,3.45,1.79,5.2,2.64l1.81.87,2,1c1.09.52,2.18,1,3.28,1.53l1.61.7,2,.87,2.55,1.08,1.13.48h0l.11,0c1.36.56,2.74,1.08,4.11,1.61q3.06,1.19,6.16,2.31c1.31.47,2.62,1,3.95,1.41l0,0,.06,0c1.34.46,2.68.88,4,1.32C253.34,703,253.44,702.27,253.57,701.59Z"/>
                        <path class={[Fill.green].join(" ")} d="M463.19 714.63c-35.65 3.38-67.49 3.74-96 1.74l-49.6.9a492.89 492.89 0 0 0 67.61 2.9c27.22-.6 57.17-1.22 87.16-4.53.18-.29.38-.55.56-.83C469.68 714.76 466.39 714.72 463.19 714.63zM234.9 697q3.5 1.43 7.06 2.77c-1-.37-2-.77-2.95-1.16C237.64 698 236.26 697.51 234.9 697zM242 699.72q3.55 1.33 7.16 2.56c-1.32-.45-2.63-.94-3.95-1.41C244.1 700.48 243 700.12 242 699.72z"/>
                        <path class={[Fill.green].join(" ")} d="M239 698.56c1 .38 2 .79 2.95 1.16s2.14.76 3.21 1.15Q242.07 699.75 239 698.56zM367.23 716.37L317.63 717.27 367.23 716.37 367.23 716.37z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M463.19 714.63l-96 1.74C395.71 718.37 427.54 718 463.19 714.63zM463.19 714.63L367.23 716.37 367.23 716.37 463.19 714.63z"/>
                        <path class={[Fill.green].join(" ")} d="M473.19,714.45l-10,.18c3.2.09,6.49.13,9.76.18Z"/>
                        <path class={[Fill.greenThree, Opacity._07].join(" ")} d="M473.19,714.45l-10,.18c3.2.09,6.49.13,9.76.18Z"/>
                        <path class={[Fill.green].join(" ")} d="M472.39,715.64c2.15-.24,4.3-.45,6.44-.72-2,0-3.91-.08-5.88-.11C472.77,715.09,472.56,715.35,472.39,715.64Z"/>
                        <path class={[Fill.greenFour, Opacity._03].join(" ")} d="M472.39,715.64c2.15-.24,4.3-.45,6.44-.72-2,0-3.91-.08-5.88-.11C472.77,715.09,472.56,715.35,472.39,715.64Z"/>
                        <path class={[Fill.green].join(" ")} d="M492.7,702c13.78,1,27.19-6.19,40.33-9.9a138.88,138.88,0,0,0,35.77-15.7c21.17-13.15,37.43-33.51,52.89-54.12,13.61-18.14,20.08-37.25,26.88-62-13.62-.9-26.32,7.94-35,21.34-1.49,2.3-7.29,14.21-5.81,13-1.88,2.22-4.08,4.31-5.76,6.6l-6,9q2.51-4,0-.47c-4.78,6.72-8.85,15-13.15,21-1.79,2.48-4.09,4.44-6,6.8-2.74,3.37-4.55,5.69-5.7,7.23-1,.94-2,2-3.28,3.27-11,11-25.14,22.41-34.92,31.59-6.17,5.79-19.84,16.48-29.8,17.16A38.46,38.46,0,0,0,482,705,16.54,16.54,0,0,1,492.7,702Z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M667.56 556.88h0q-.48 2-1 3.93A19.51 19.51 0 0 0 667.56 556.88zM482 705a34 34 0 0 0-8.8 9.5A40.73 40.73 0 0 1 482 705z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M648.57,560.24a32.56,32.56,0,0,1,15.65,5.45c.31.2.59.45.89.66-.17-.12.71-3,1.46-5.54q.5-2,1-3.93c-1.34-.87-14.65-7.14-16-7.79Q650,554.86,648.57,560.24Z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M648.57,560.24c-6.79,24.76-13.27,43.87-26.88,62-15.46,20.61-31.72,41-52.89,54.12A138.88,138.88,0,0,1,533,692.08c-13.14,3.71-26.55,10.86-40.33,9.9A16.54,16.54,0,0,0,482,705a40.73,40.73,0,0,0-8.8,9.5l10.64-.19c51.41-7,101.9-23,137.85-62.2l.55-.6h-.37l.57-.22c.71-.79,1.45-1.54,2.15-2.35q2.69-3.1,5.22-6.38c16.34-21.2,27.6-48,35.3-76.16-.3-.21-.59-.46-.89-.66A32.56,32.56,0,0,0,648.57,560.24Z"/>
                        <path class={[Fill.green].join(" ")} d="M472.95,714.81c2,0,3.89.09,5.88.11,1.67-.21,3.34-.44,5-.66l-10.64.19Z"/>
                        <path class={[Fill.greenThree, Opacity._07].join(" ")} d="M472.95,714.81c2,0,3.89.09,5.88.11,1.67-.21,3.34-.44,5-.66l-10.64.19Z"/>
                        <path class={[Fill.greenFour, Opacity._03].join(" ")} d="M472.95,714.81c2,0,3.89.09,5.88.11,1.67-.21,3.34-.44,5-.66l-10.64.19Z"/>
                        <path class={[Fill.green].join(" ")} d="M101.94 518.86c-1.21.09-2.42.16-3.62.23q1.8.35 3.6.63c0-.13 0-.26 0-.39S101.94 519 101.94 518.86zM2 268.25l-.37 1.09C1.75 269 1.87 268.62 2 268.25zM1.61 269.34a16.77 16.77 0 0 0-1.3-2.5C.79 267.75 1.63 269.48 1.61 269.34zM101.41 470.72q.62 10.19 1.53 20.35c1.29.31 2.59.58 3.94.8 2.62.7 5.26 1.31 7.91 1.87l-6.64-102.51a74.88 74.88 0 0 1-6.8-3.82A697.36 697.36 0 0 0 101.41 470.72z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M136.81 613.62c.35.6.69 1.21 1 1.8.12.2.25.38.36.57Q137.51 614.82 136.81 613.62zM131.31 603.5l-.22-.44.21.43.28.53zM127.84 596.34l.2.44.21.42zM123.3 586.32a9.46 9.46 0 0 0 .85 1.64h0c.36.87.74 1.72 1.11 2.58l.74 1.72h0c-.62-1.42-1.25-2.84-1.85-4.3A10.26 10.26 0 0 1 123.3 586.32zM127.11 594.79c.3.67.62 1.33.93 2l-.2-.44C127.59 595.82 127.35 595.31 127.11 594.79zM143 623.58l.76 1.12-.77-1.14zM142 622l0 0c-.44-.68-.87-1.37-1.31-2.06C141.1 620.65 141.53 621.33 142 622zM133.37 607.47q.76 1.41 1.53 2.79h0q-.8-1.44-1.59-2.91zM144.42 625.66l1 1.45c-.44-.63-.87-1.27-1.3-1.91z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M136.81 613.61c.35.6.69 1.22 1 1.81-.35-.59-.69-1.2-1-1.8q.7 1.2 1.4 2.38c-.12-.2-.25-.38-.36-.57.16.28.34.54.5.81h0c-.53-.88-1.06-1.78-1.58-2.67zM106.41 520.29c1.38 9.2 3 18.35 5.09 27.41a253 253 0 0 0 9.88 33.14s0 0 0 0a7.16 7.16 0 0 0 .66 1.74c.24.64.48 1.28.73 1.92a11.38 11.38 0 0 0 .54 1.76 19.14 19.14 0 0 0 3.51.87q-.75-1.93-1.48-3.88a2.22 2.22 0 0 1-.67-.36 9.07 9.07 0 0 1-2.79-4.91 14.33 14.33 0 0 1-.87-3.2c-1.41-4.65-3.3-9.1-4.48-13.83A84.8 84.8 0 0 1 114 545.79c-2.22-6.28-6.49-12.18-5.92-19.13a2 2 0 0 1 3.41-1.41c1.68 1.61 2.77 4.05 3.7 6.5a2.29 2.29 0 0 1 1.66-.85c5.38-.24 6.87 14.65 7.64 18.17 1.34 6.17 2.93 12.3 4.65 18.37.23.81.52 1.69.81 2.6q0-7.16 0-14.33c.06-2.57 4-2.58 4 0-.24 10.27 3.16 19.87 3.86 29.94 1.93 2 3.84 4 5.69 6.09l19.24 25.9c-.35-.91-.71-1.82-1-2.73l-.2-.28c-12.77-18.27-19.3-40.34-23.48-62-1.72-8.89-3-17.88-3.87-26.91a9.09 9.09 0 0 0-3.12-2.67c.61-1.32 1.41-2.58 2.23-4 .1-.16.17-.33.26-.49q-.84-11-1-21.94l-.32-.32q-7-.59-13.93-1.89c-.34.07-.59.15-.49.24a11.73 11.73 0 0 1-1.3-.58l-1.68-.36 1.74 26.91A80.24 80.24 0 0 1 106.41 520.29zM128 596.78l.39.83 0 .05-.21-.45zM152.72 636.91c.61.77 1.23 1.54 1.85 2.29l.11.13-.11-.13C153.95 638.45 153.33 637.68 152.72 636.91zM131.3 603.5c.41.8.81 1.61 1.22 2.4-.32-.61-.63-1.25-.95-1.87zM146.49 628.64c1 1.45 2.07 2.88 3.13 4.29l.13.17-.13-.17C148.55 631.52 147.52 630.09 146.49 628.64z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M128.69 580.91q.55 1.51 1.12 3c0-1.27.06-2.55.08-3.82A2.17 2.17 0 0 1 128.69 580.91zM131.31 603.5c-.4-.79-.8-1.56-1.2-2.36h0c.39.79.78 1.56 1.18 2.34l-.21-.43zM143.77 624.7l.35.51 0-.07zM145.41 627.12l1.07 1.53-.77-1.08zM154.79 639.47l-.11-.13.11.13c2.28 2.76 4.65 5.41 7.05 8h0C159.43 644.87 157.07 642.23 154.79 639.47zM149.75 633.1l.06.08c.57.75 1.15 1.49 1.73 2.23-.58-.74-1.16-1.48-1.73-2.23zM143 623.56L142 622z"/>
                        <path class={[Fill.green].join(" ")} d="M152.49,413.86c0,.13,0,.26,0,.39s0,.31,0,.46c-1.21-.09-2.42-.16-3.62-.23-51.15,10-97.42,65.63-118.79,112.78q-1.77,3.91-3.31,7.74-.19.7-.35,1.4L26,537c-4.22,10.85-7,21-8,29.75-2.08,18.44-7.57,35.41-8.09,53.77a154.9,154.9,0,0,0,6.07,47c3.07,10.68,8.8,26.14,23.05,21.95,8.72-2.57,16.19-15.13,13.5-24.19,1.83,5.34,4.23,12.21,4.6,12.92,5.17,9.6,17.86,8.93,25.66,2.87,6.41-5,8.15-14.18,9.49-21.69.73,1.34,1.49,2.67,2.21,4A16.33,16.33,0,0,0,97.58,668a2.32,2.32,0,0,0-.43-.94c4.09,5.32,8.18,10.62,15.53,10.75,15.56.27,25.08-20.58,16.81-33-21.95-32.88-11.13-77.43,22.44-98.64a697.37,697.37,0,0,1,0-83.3q.62-10.19,1.53-20.35c.89-9.78,2-19.53,3.46-29.22C155.48,413.43,154,413.63,152.49,413.86ZM50.88,666.74c-.19.36-.32.6-.31.52s.2-.35.31-.52c.47-.91,1.32-2.64,1.3-2.5A16.79,16.79,0,0,1,50.88,666.74Z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M128.24 597.2h0l-.41-.87h0zM127.83 596.33q-.93-2-1.83-4.07c.37.84.73 1.69 1.11 2.53l-.06-.13C127.3 595.22 127.57 595.78 127.83 596.33zM132.52 605.9c.26.49.53 1 .79 1.47-.25-.46-.5-.91-.74-1.37zM131.6 604.07l-.29-.57.27.52zM138.36 616.24c.76 1.26 1.53 2.49 2.31 3.72l-.21-.33C139.75 618.51 139.05 617.39 138.36 616.24zM136.78 613.57q-.95-1.64-1.88-3.3Q135.83 611.94 136.78 613.57zM123.28 586.3v0zM130.11 601.14c-.57-1.15-1.11-2.32-1.66-3.48C129 598.83 129.55 600 130.11 601.14z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M116.83,530.9a2.29,2.29,0,0,0-1.66.85c-.94-2.45-2-4.9-3.7-6.5a2,2,0,0,0-3.41,1.41c-.57,6.95,3.7,12.85,5.92,19.13A84.8,84.8,0,0,0,116.51,561c1.18,4.73,3.07,9.18,4.48,13.83a14.33,14.33,0,0,0,.87,3.2,9.07,9.07,0,0,0,2.79,4.91,2.22,2.22,0,0,0,.67.36q.72,1.94,1.48,3.88a19.14,19.14,0,0,1-3.51-.87v0a10.26,10.26,0,0,0,.85,1.64c.6,1.45,1.23,2.87,1.85,4.3s1.21,2.73,1.83,4.07l.41.87h0l.21.45c.55,1.17,1.1,2.34,1.66,3.48.39.8.8,1.57,1.2,2.36l.29.57,0,0c.32.62.62,1.25.95,1.87l0,.09c.24.46.5.91.74,1.37q.79,1.47,1.59,2.91.93,1.67,1.88,3.3c.52.9,1,1.79,1.58,2.67.69,1.14,1.39,2.27,2.1,3.39l.21.33c.44.69.87,1.38,1.31,2.06l1,1.54.77,1.14.3.45,0,.07c.43.64.86,1.28,1.3,1.91l.3.44.77,1.08c1,1.45,2.07,2.88,3.13,4.29l.13.17.06.08c1,1.26,1.93,2.51,2.92,3.74.61.77,1.23,1.54,1.85,2.29l.11.13.11.13c2.28,2.76,4.65,5.41,7.05,8a12.34,12.34,0,0,0,2-2.22c2.82-4.05,1.52-9.16-.61-13.81a11.78,11.78,0,0,0,1.27-7.86,30,30,0,0,0-1.77-5.93l-19.24-25.9c-1.85-2.13-3.76-4.12-5.69-6.09-.71-10.08-4.1-19.67-3.86-29.94,0-2.58-3.94-2.57-4,0q0,7.16,0,14.33c-.29-.91-.58-1.79-.81-2.6m.7,16.49q-.57-1.5-1.12-3a2.17,2.17,0,0,0,1.2-.81C129.87,581.38,129.84,582.65,129.82,583.92Z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M127.83 596.33c-.26-.56-.53-1.11-.78-1.68l.06.13c.24.52.49 1 .73 1.56zM151.53 635.41c1 1.28 2 2.55 3 3.8-.62-.76-1.24-1.53-1.85-2.29z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M149.8,633.18c.57.75,1.15,1.49,1.73,2.23l1.19,1.5C151.74,635.68,150.76,634.44,149.8,633.18Z"/>
                        <path class={[Fill.darkPurple].join(" ")} d="M613.94,781.33c0-17.71-63.24-5.1-232.07-5.1S149.8,790.58,149.8,808.29,213,840.36,381.87,840.36,613.94,799,613.94,781.33Z"/>
                        <path class={[Fill.greenFive].join(" ")} d="M437.82,572.37c12.55-2.83,25.1-5.59,37.66-8.2-59.38-20.81-96-34.44-96-34.44S405.87,548.47,437.82,572.37Z"/>
                        <path class={[Fill.green].join(" ")} d="M769.82,658.07c3.67-8.49,5.44-18.49,7.66-25.94,8.72-29.3,8.57-47.11-.64-73-16.47-46.2-36.66-95.31-114.52-134.5L629.68,528.26c38.84,19.2,52.62,67.44,29.25,102.45-2.29,3.43-4.62,6.69-4.82,10.12a16.48,16.48,0,0,0,10,18.44,27.11,27.11,0,0,0,7.63,2.43c4.75.55,9.1-.9,13.07-3.35a20.47,20.47,0,0,0,5.05-4.35c3.07,11.93,7.63,16.39,18.53,17.6,14.39,1.59,19.57-8,24.76-18a27.26,27.26,0,0,0-.41,3.46c-.71,13.19,12,21.64,24,16.13C763,670.37,767,664.68,769.82,658.07Z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M698.91 642.3c-1.39 1.67-6.86 8.76-8 10.83-1.53 2.74 1.27 5.05.05 4.67 3.07 9.11 7.75 12.75 17.41 13.82 7 .78 11.86-1.12 15.57-4.43C715 665.53 701.7 653.14 698.91 642.3zM741.87 654.63c.07-1.28 2.38-16.15 2.57-17.21-4 7.72-16 8.67-9.32 29.68 4.17 6.9 13.05 10.06 21.59 6.14a20.68 20.68 0 0 0 5-3.3C755.26 667.57 741.43 662.75 741.87 654.63z"/>
                        <path class={[Fill.green].join(" ")} d="M383.6 693.29c-3.32-1.66-23.95-4.88-27.51-7.41a209.94 209.94 0 0 0-21.49-13.38 491.29 491.29 0 0 0-76.81-4.85 20.35 20.35 0 0 1-3 2.31.78.78 0 0 1 .08.22c.47 13 1.18 30.09-5.23 41.82-3.56 6.52-10.4 6.65-16.9 7.83-19 3.44-37.35 8.22-56 12.87-19.28 4.8-52.18 10.29-59.27 32.09-3.48 10.55 3.87 22.92 12 29.26 15 11.69 35.66 12.42 54.14 11.78 43.38-1.52 92-.6 131-4.85 14-1.53 29-.32 38.65-12.12 9-11 11.94-39.44 8.82-52.48C359.47 725.45 371.75 700.7 383.6 693.29zM403.76 686.76a77.89 77.89 0 0 0 10.41-6A209.94 209.94 0 0 1 436 667.93a491.29 491.29 0 0 1 76.9-3 20.35 20.35 0 0 0 3 2.38.8.8 0 0 0-.09.21c-.58 9.64 7.33 52.49 14.43 54.44 33.22 9.14 68.85 12.8 100.89 25.37 9 3.53 19.73 9.3 19.93 20.26 1.39 9.94-4.3 20.44-12.82 26.75-15.31 11.33-35.95 11.57-54.4 10.49-43.33-2.55-86.7-3.34-130.11-3.46-14.08 0-29-1-38.36-13-8.75-11.24-7.32-26.14-3.89-39.11C414.29 738.35 415.43 694.45 403.76 686.76z"/>
                        <path class={[Fill.green].join(" ")} d="M417.23,737.13c-.8-4.21,0-8.58-1.26-12.74-1.89-6.07-11.56-10.43-21.07-11.25-10.39-.9-23.65,1.7-31.87,5.84-8.46,4.26-9.57,9.43-8.44,15.71a4.42,4.42,0,0,0,1.38,3c-.59-.48,9.53-12.37,11.13-13.28,8.82-5,20.24-6.07,30-4,2.69.56,5.52,1.5,7.17,3.7,4.85,6.49,2,13.47,3.15,20.55.49,3.07-.08,4.12,3.67,5.07,2,.51,5.46.17,6.14-2.22C418.29,743.8,417.93,740.84,417.23,737.13Z"/>
                        <path class={[Fill.none].join(" ")} d="M654.4,651.45l-.63.6Q660.43,651.33,654.4,651.45Z"/>
                        <path class={[Fill.green].join(" ")} d="M654.4,651.45l.23-.22-.65.22Z"/>
                        <path class={[Fill.greenThree, Opacity._05].join(" ")} d="M654.4,651.45l.23-.22-.65.22Z"/>
                        <path class={[Fill.lightBlack, Stroke.lightBlack, Stroke.Width_6, Opacity._03].join(" ")} d="M309.8 167.63c-9-11.37-21.27-18.6-34.18-24.69-19.24-9.08-43.42-12.71-62.35-1-6.77 4.2-7.81 12.42-1.2 17.46a1.45 1.45 0 0 0 1.91-.14c9.51-9.44 26.42-12.18 38.86-10.27 21.32 3.27 42.65 14.7 60 27.55a1.43 1.43 0 0 0 2.05-1.94Q312.49 171 309.8 167.63zM453.3 147.28c13.28-5.84 27.49-6.52 41.75-5.88 21.26 1 44.33 9 55.59 28.25 4 6.87 1.1 14.63-7.09 16a1.45 1.45 0 0 1-1.62-1c-4-12.78-17.67-23.11-29.57-27.23-20.38-7.07-44.58-6.92-65.91-3.65a1.43 1.43 0 0 1-.91-2.67Q449.34 149 453.3 147.28z"/>
                        <path class={[Fill.lightBlack].join(" ")} d="M555.53,487.56c2.46-16.61,6.31-33.4,12.82-48.91,5.26-12.53,12.26-24.33,15.31-37.54-9.95-5.86-20.06-8.86-31.48-11.44a112.41,112.41,0,0,0-7.36,12.11c-.16.22-.31.44-.48.66l0,0,0,0c-.33.43-.69.83-1,1.21l-.35.36q-.42.43-.87.82l-.35.31a19,19,0,0,1-2.65,1.88l-.22.12q-.63.36-1.28.67l-.2.09a20.62,20.62,0,0,1-4.8,1.54h0a20.93,20.93,0,0,1-5.08.34h0a19.78,19.78,0,0,1-3.27-.46h0c-.5-.11-1-.25-1.46-.41l-.16-.05a16.9,16.9,0,0,1-2.81-1.22l-.2-.11q-.54-.31-1.06-.66l-.26-.18a14,14,0,0,1-2.16-1.9l-.23-.27q-.36-.41-.69-.86l-.24-.32a13,13,0,0,1-.73-1.18l0,0a13.06,13.06,0,0,1-.61-1.33c-.05-.13-.1-.27-.15-.4q-.19-.52-.34-1.07c0-.14-.08-.29-.12-.44a14.39,14.39,0,0,1-.29-1.55c-.11-.88-.25-1.7-.4-2.49v-.09l0-.09q-.23-1.18-.53-2.23v0c-.07-.26-.15-.53-.23-.78l0-.13c-.07-1.34-.16-2.69-.25-4-2,4.65-4,9.44-6.86,13.25a17.63,17.63,0,0,1-11.17,7.13c-9,1.68-19.73-2.54-20.71-12.69a54.53,54.53,0,0,0-1.24-7.65c0-.47,0-.94-.06-1.41-3,5.5-8.82,11.22-19.39,12.92-6.06,1-12.63,0-17.15-4.22s-5.84-10.48-6.83-16.37q.86-1.84,1.74-3.65l.76-1.55-3.33.11c.07.45.15.89.22,1.33h0q.3,1.52.6,3a75.37,75.37,0,0,0-4.48,8.94l-.36.55c-3.72,5.38-11.34,8.53-18.82,8.07-9.39-.57-13.1-6.36-15.47-13.16-.43-1.22-2.42-6-1.95-7.26a113.15,113.15,0,0,0-5.65,13.36c-.12.22-.24.45-.36.67-7.41,13-28.32,13.42-32.16-.34a32.79,32.79,0,0,0-2.08-5.6c-.45-2.23-.93-4.46-1.42-6.68a7.86,7.86,0,0,1,.16-.86l0-.89c-.3,1-.54,1.93-.55,2a30.13,30.13,0,0,1-2,6A33.28,33.28,0,0,1,335.4,393c-14.82,14.31-32.82.36-38.21-14.42-4.29,11-8.54,23.19-22.82,22.58a14.5,14.5,0,0,1-12-6.61,23.47,23.47,0,0,1-1.42-2.66c-.47-1-3-7.78-4.16-11.41-.13.26-.26.5-.34.67a14.82,14.82,0,0,0-.87,2.48c-1.4,5.41-.49,11.23-4.5,15.65-3.32,3.65-8.09,5.51-12.9,6.13a27.42,27.42,0,0,1-5.39.19,20.23,20.23,0,0,1-14-7.22A51,51,0,0,1,212,387.08c-.18-.38-.38-1-.64-1.42-15,3.74-41.25,6.4-39.48,22,4.07,36,17.5,82.53,35.08,110.33,12.28,19.41,37.88,26.64,59.36,36.06,11.31-7.79,24.21-13,36.87-18.33,12.43-5.22,30.68-9.45,44-6a79.31,79.31,0,0,1,19.06,8c4.59-2.92,9.23-5.53,13.23-8,30.38-19,91.91-7.36,110.93,27.15,3.18-1.09,6.35-2.27,9.5-3.58,18.52-7.71,36.62-17.85,52.3-30.57C552.82,511,553.8,499.23,555.53,487.56Z"/>
                        <path class={[Fill.pink].join(" ")} d="M379.44,529.73c-4,2.5-8.64,5.12-13.23,8a79.3,79.3,0,0,0-19.06-8c-13.31-3.48-31.56.75-44,6-12.65,5.31-25.56,10.54-36.87,18.33q11.3,5,23.06,8.89l.29-.14.33.35c47.7,15.88,100.17,19.1,148.4,7,17.59-4.4,35-7.49,52-13.34C471.35,522.37,409.82,510.74,379.44,529.73Zm67.39,13.34c.16-1.33.33-1.56.51.08Z"/>
                        <path class={[Fill.white].join(" ")} d="M510.39,381.57c-.18,0,0,0-.29-.09s-.49-.08-.79-.14q-18.88-3.2-37.88-5.59h-.29l-.6,0h0l-1.12,0,.87,0,.06-.1c-2-.25-4-.52-6-.75q-36.86-4.32-74-5.41l-2-.05h-.1l-1.09,0v0h0v0l-3.18-.07q-7.94-.17-15.88-.19a741.44,741.44,0,0,0-149.72,15c-2.32.48-4.65,1-7,1.58.26.46.45,1,.64,1.42a51,51,0,0,0,6.91,11.29,20.23,20.23,0,0,0,14,7.22,27.42,27.42,0,0,0,5.39-.19c4.81-.62,9.58-2.48,12.9-6.13,4-4.42,3.11-10.24,4.5-15.65a14.83,14.83,0,0,1,.87-2.48c.08-.18.2-.41.34-.67,1.13,3.63,3.69,10.39,4.16,11.41a23.48,23.48,0,0,0,1.42,2.66,14.5,14.5,0,0,0,12,6.61c14.27.61,18.52-11.54,22.82-22.58,5.38,14.78,23.39,28.72,38.21,14.42a33.28,33.28,0,0,0,7.11-10.44,30.13,30.13,0,0,0,2-6c0-.08.25-1,.55-2l0,.89a7.87,7.87,0,0,0-.16.86c.48,2.23,1,4.45,1.42,6.68a32.78,32.78,0,0,1,2.08,5.6c3.84,13.75,24.75,13.39,32.16.34.13-.22.24-.45.36-.67a111.63,111.63,0,0,1,5.52-13.09l.1,0c-.17,1.58,1.58,5.8,2,6.95,2.37,6.8,6.08,12.59,15.47,13.16,7.47.45,15.09-2.69,18.82-8.07l.36-.55a72.61,72.61,0,0,1,4.13-8.33h.4l-.06.12c1,5.89,2.3,12.13,6.83,16.37s11.1,5.19,17.15,4.22c10.57-1.69,16.4-7.42,19.39-12.92,0,.47,0,.94.06,1.41a54.53,54.53,0,0,1,1.24,7.65c1,10.15,11.7,14.37,20.71,12.69a17.63,17.63,0,0,0,11.17-7.13c2.89-3.81,4.86-8.6,6.86-13.25.09,1.34.18,2.69.25,4l0,.13c.08.25.15.52.23.78v0q.29,1.05.53,2.23l0,.09,0,.09c.15.79.29,1.61.4,2.49a14.42,14.42,0,0,0,.29,1.55c0,.15.08.29.12.44q.15.55.34,1.07c0,.13.1.27.15.4a13.06,13.06,0,0,0,.61,1.33l0,0a12.92,12.92,0,0,0,.73,1.18l.24.32q.33.44.69.86l.23.27a14,14,0,0,0,2.16,1.9l.26.18q.51.35,1.06.66l.2.11a16.91,16.91,0,0,0,2.81,1.22l.16.05c.48.15,1,.29,1.46.41h0a19.76,19.76,0,0,0,3.27.46h0a21,21,0,0,0,5.09-.34h0a20.63,20.63,0,0,0,4.8-1.54l.2-.09q.65-.31,1.28-.67l.22-.12a19,19,0,0,0,2.65-1.88l.35-.31q.44-.39.87-.82l.35-.36c.36-.39.72-.79,1-1.21l0,0,0,0c.17-.21.32-.44.48-.66a112.41,112.41,0,0,1,7.36-12.11c-1.53-.35-3.07-.68-4.64-1q-14.3-3.05-28.7-5.65c-2.71-.49-5.42-.94-8.14-1.4"/>
                        <path class={[Fill.offWhite].join(" ")} d="M564.82 250.1c-.16 39.35-26.44 65.34-65.79 65.06-36.15-.26-62.89-28-63.17-65.59-.28-38.26 21.51-34.06 59.37-33.91C535 215.8 565 209.9 564.82 250.1zM265.38 310.49c-35.05-.19-59.34-25.58-59.06-61.74.27-35.08 30.09-41.82 60.54-41.1 39.63.93 60 8.22 59.46 42.49C325.74 285.66 300.4 310.68 265.38 310.49z"/>
                        <path class={[Fill.purple].join(" ")} d="M642.82 300.92l.22.22zM681.9 275.94a1.21 1.21 0 0 0-.3-.2 1.17 1.17 0 0 1 .3.2 1.68 1.68 0 0 0 .28.2A1.69 1.69 0 0 1 681.9 275.94zM687.47 312l-.4-.47.73.84z"/>
                        <path class={[Fill.green].join(" ")} d="M275.21,257.24a29.23,29.23,0,0,0-45.39,27.37A31.6,31.6,0,0,0,250,310.73C283.09,322.71,304.47,276.45,275.21,257.24Z"/>
                        <path class={[Fill.lightBlack].join(" ")} d="M269.9,265.58a19.49,19.49,0,0,0-30.27,18.25,21.07,21.07,0,0,0,13.48,17.42C275.15,309.24,289.41,278.39,269.9,265.58Z"/>
                        <circle class={[Fill.white].join(" ")} cx="276.6" cy="269" r="12.9"/>
                        <path class={[Fill.green].join(" ")} d="M500.71,248.05c-19.42-.24-36.41,17.72-32.49,40.19,2.85,16.37,17.78,28.64,32.53,28.64C538.47,316.88,539.94,248.53,500.71,248.05Z"/>
                        <path class={[Fill.lightBlack].join(" ")} d="M500,259.35c-13-.16-24.46,11.9-21.83,27,1.92,11,11.94,19.24,21.85,19.24C525.39,305.58,526.38,259.67,500,259.35Z"/>
                        <circle class={[Fill.white].join(" ")} cx="518" cy="265" r="11.6"/>
                        <path class={[Fill.green].join(" ")} d="M421.58,777.11c-18.4-14.56-4-29.5-3.68-45.19,0-.25-.05-.48-.06-.72,1.3-.52,2.23-1.36,2.13-2.59,0-.3-.14-.54-.17-.83l0-.08c-.54-2.93-1.85-13.56-4.55-15.27-16.94-14.69-59.77,6.22-59.77,25.51,0,4.19,7.76,11.41,7.76,7.22,0-5.57-1.58-11.83,1.7-16.85,5.22-8,21.58-6.91,29.76-6.62,5.05.18,10.62,2.4,12.38,7.14a20.9,20.9,0,0,1,1,4.07,12.63,12.63,0,0,1,1,5,43.55,43.55,0,0,1-1.7,10.31c0,.27.07.52.08.8.16,3.74.13,7.47,0,11.21.26,4.78.88,9.6,1.47,14.23.08.61.19,1.23.29,1.84a23.56,23.56,0,0,0,5.07,5.38C418.37,785,425.69,780.36,421.58,777.11Z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M326 785.11c-39 4.25-87.64 3.33-131 4.85-18.47.65-39.1-.09-54.14-11.78-7.85-6.1-14.93-17.78-12.35-28.05-5.08 3.87-9.06 8.62-11 14.65-3.48 10.55 3.87 22.92 12 29.26 15 11.69 35.66 12.42 54.14 11.78 43.38-1.52 92-.6 131-4.85 14-1.53 29-.32 38.65-12.12a35.06 35.06 0 0 0 5.43-10.51C349.4 784.44 337.35 783.87 326 785.11zM379.24 696.76a27.69 27.69 0 0 1 4.37-3.47 13 13 0 0 0-2-.71Q380.34 694.63 379.24 696.76zM646.66 778.89c-15.31 11.33-35.95 11.57-54.4 10.49-43.33-2.55-86.7-3.33-130.11-3.46-8.19 0-16.66-.38-24.16-3-10 0-19.16-.73-26.8-8.59-.77-.79-1.48-1.61-2.2-2.42a31.47 31.47 0 0 0 6.32 16.43c9.36 12 24.27 13 38.35 13 43.41.12 86.78.91 130.11 3.46 18.45 1.09 39.09.84 54.4-10.49a32.34 32.34 0 0 0 12.54-19A34.14 34.14 0 0 1 646.66 778.89zM28.06 680.05c-5.39-11.22-7.56-22.9-8.23-34.8a78.07 78.07 0 0 1-2.54-46.72A137.17 137.17 0 0 1 17.75 574c.38-3.55.89-7.05 1.48-10.52-.5 1.32-1 2.64-1.46 3.93-6.23 17.48-7.57 35.41-8.09 53.77a154.85 154.85 0 0 0 6.07 47c3.07 10.68 8.79 26.14 23.05 21.95a13.51 13.51 0 0 0 1.71-.65C35.58 688.88 30.93 686 28.06 680.05zM129.87 665.93a15.47 15.47 0 0 1-3.19 3.68c-.24.22-.5.41-.76.61A19.25 19.25 0 0 1 123.2 672a17 17 0 0 1-4.14 1.51 1 1 0 0 1-1.12.27 18.71 18.71 0 0 1-6 0 17.63 17.63 0 0 1-10.25-5.15 19.45 19.45 0 0 1-7.58-7.43 13.62 13.62 0 0 1-1-2.06 12 12 0 0 0-1.12.84c4 10.46 13.47 18.23 20.37 18.35 8.23.14 14.74-5.65 17.85-12.95h-.1C130.07 665.58 130 665.77 129.87 665.93zM86.7 674.21a19.55 19.55 0 0 1-10.9 7.14c-4.18.92-6.38.53-10.52-.19-4.64-.81-8.49-4.9-10.77-8.78-.18-.31-.33-.64-.48-1 .52 1.43 1.14 3 1.94 4.93.47 1.29.82 2.23.95 2.46 5.17 9.6 17.86 8.93 25.66 2.87A20.43 20.43 0 0 0 88.72 673c-.4.09-.91.27-1.38.42z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M20.25 644.65c-.1.17-.2.35-.31.51S20.06 645 20.25 644.65zM672.44 636.86c.2-3.43 2.53-6.69 4.82-10.12 21.54-32.28 13.24-81.28-18.88-102.93-.58 4.45-5.74 20.84-6.82 25.28-.32 1.3.13 2.28-.37 3.45 20 23.34 25.54 51.49 7.74 78.18-2.29 3.43-4.62 6.69-4.82 10.12a16.48 16.48 0 0 0 10 18.44 27.13 27.13 0 0 0 7.63 2.43c4.75.55 9.1-.9 13.07-3.35a20.76 20.76 0 0 0 1.92-1.4c-1.45-.47-2.84-1.06-4.28-1.67A16.48 16.48 0 0 1 672.44 636.86z"/>
                        <path class={[Fill.greenSix, Opacity._06].join(" ")} d="M657.11 348.65c1.79 7.8-5.92 13.11-17.18 16.29-12.31 3.48-20.64-.37-23.64-12.87-3.2-13.32.42-25.34 13.92-29.85C647.79 316.35 651.05 331.22 657.11 348.65zM622.07 282.46c8.89-.09 15.08 2.88 17 11.21 2 8.54-3.63 11.83-10.77 13.61-8.2 2-12.37-1.76-14.54-9.34C611.29 289.38 617.32 286.25 622.07 282.46zM633.15 403.2c-6.88 1.28-13.88-.39-15.75-7.92-1.73-7 2.16-13.71 9.56-15.58 6.52-1.65 11.87 1.24 13.73 8.63C642.43 395.28 640.71 400.36 633.15 403.2zM120.59 357.43c-2.32 10.11 7.68 17 22.27 21.12 16 4.51 26.76-.48 30.65-16.68 4.15-17.27-.54-32.84-18-38.69C132.67 315.56 128.44 334.84 120.59 357.43zM166 271.64c-11.52-.12-19.55 3.73-22 14.53-2.53 11.07 4.71 15.34 14 17.64 10.63 2.64 16-2.28 18.85-12.11C180 280.61 172.17 276.55 166 271.64z"/>
                    </g>
                </g>
            </g>
        </svg>

        );
    }
}

Hungry.defaultProps = {
    xPos: 0,
    yPos: 0,
    width: 824,
    height: 840
}

export default Hungry;
