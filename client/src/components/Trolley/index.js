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
import { Dimensions } from '../../constants';
// --------------------------------

// *******************************************
// Utility Imports
// -------------------------------------------

// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Fill, Stroke, Opacity } from '../../styles';
// --------------------------------

class Trolley extends Component {


    render() {
        const { width, height, xPos, yPos } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} x={930} y={935} viewBox="0 0 521.4 443.4" style={{pointerEvents: "none"}}>
            <title>
                SupermarketTrolley
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.trolleyPink].join(" ")} d="M435.32,386.95H111.9a9.38,9.38,0,0,1-8.76-12.74l17.2-44.86h-8.51a9.4,9.4,0,0,1-9.36-8.61L80.46,55,5.22,17.81A9.38,9.38,0,1,1,13.55,1l80,39.59a9.4,9.4,0,0,1,5.2,7.64l21.72,262.37H134a9.38,9.38,0,0,1,8.76,12.75l-17.21,44.85H435.32a9.39,9.39,0,0,1,0,18.77Z"/>
                    <path class={[Fill.trolleyOffWhite].join(" ")} d="M101.95,314.39h39.57a9.35,9.35,0,0,0-7.52-3.82H120.47L98.75,48.21a9.4,9.4,0,0,0-5.2-7.64L13.55,1A9.38,9.38,0,1,0,5.22,17.81L80.46,55Z"/>
                    <path class={[Fill.trolleyGreen].join(" ")} d="M80.49,55.25H99.33l-.58-7a9.4,9.4,0,0,0-5.2-7.64L13.55,1A9.38,9.38,0,1,0,5.22,17.81L80.46,55Z"/>
                    <path class={[Fill.trolleyOffWhite].join(" ")} d="M144.85,377.56a32.91,32.91,0,1,0,32.9,32.91A32.91,32.91,0,0,0,144.85,377.56Z"/>
                    <path class={[Fill.trolleyGrey].join(" ")} d="M144.85,398.55a11.92,11.92,0,1,0,11.91,11.92A11.93,11.93,0,0,0,144.85,398.55Z"/>
                    <path class={[Fill.trolleyGrey].join(" ")} d="M144.85,377.56a32.91,32.91,0,1,0,32.9,32.91A32.91,32.91,0,0,0,144.85,377.56Zm0,54.74a21.83,21.83,0,1,1,21.82-21.83A21.83,21.83,0,0,1,144.85,432.3Z"/>
                    <path class={[Fill.trolleyOffWhite].join(" ")} d="M400.87,377.56a32.91,32.91,0,1,0,32.9,32.91A32.91,32.91,0,0,0,400.87,377.56Z"/>
                    <path class={[Fill.trolleyGrey].join(" ")} d="M400.87,398.55a11.92,11.92,0,1,0,11.92,11.92A11.92,11.92,0,0,0,400.87,398.55Z"/>
                    <path class={[Fill.trolleyGrey].join(" ")} d="M400.87,377.56a32.91,32.91,0,1,0,32.9,32.91A32.91,32.91,0,0,0,400.87,377.56Zm0,54.74a21.83,21.83,0,1,1,21.82-21.83A21.84,21.84,0,0,1,400.87,432.3Z"/>
                    <path class={[Fill.trolleyOffWhite].join(" ")} d="M504.85 117.52H95.57a2.42 2.42 0 1 1 0-4.83H504.85a2.42 2.42 0 0 1 0 4.83zM495.32 158.18H93.51a2.42 2.42 0 0 1 0-4.83H495.32a2.42 2.42 0 0 1 0 4.83zM483.75 198.85H103a2.41 2.41 0 1 1 0-4.82h380.7a2.41 2.41 0 0 1 0 4.82zM474.08 239.51H108.7a2.42 2.42 0 0 1 0-4.83H474.08a2.42 2.42 0 0 1 0 4.83zM464.41 280.18H110.51a2.42 2.42 0 1 1 0-4.83h353.9a2.42 2.42 0 1 1 0 4.83z"/>
                    <path class={[Fill.trolleyOffWhite].join(" ")} d="M118.08 328.46a2.42 2.42 0 0 1-2.41-2.41V74.17a2.42 2.42 0 1 1 4.83 0V326A2.42 2.42 0 0 1 118.08 328.46zM142.25 326.61a2.41 2.41 0 0 1-2.41-2.41V78.12a2.41 2.41 0 1 1 4.83 0V324.2A2.41 2.41 0 0 1 142.25 326.61zM166.41 330.57a2.41 2.41 0 0 1-2.41-2.41V76.28a2.42 2.42 0 1 1 4.83 0V328.15A2.41 2.41 0 0 1 166.41 330.57zM190.59 328.72a2.42 2.42 0 0 1-2.42-2.42V74.42a2.42 2.42 0 0 1 4.83 0V326.3A2.41 2.41 0 0 1 190.59 328.72zM214.75 326.87a2.41 2.41 0 0 1-2.41-2.41V78.38a2.42 2.42 0 1 1 4.83 0V324.46A2.41 2.41 0 0 1 214.75 326.87zM238.92 325a2.41 2.41 0 0 1-2.41-2.41V76.53a2.42 2.42 0 0 1 4.83 0V322.61A2.41 2.41 0 0 1 238.92 325zM264.58 325.43a2.42 2.42 0 0 1-2.42-2.41V76.93a2.42 2.42 0 0 1 4.84 0V323A2.42 2.42 0 0 1 264.58 325.43zM288.75 323.58a2.41 2.41 0 0 1-2.41-2.42V75.09a2.41 2.41 0 1 1 4.83 0V321.16A2.41 2.41 0 0 1 288.75 323.58zM312.92 327.54a2.42 2.42 0 0 1-2.42-2.42V79a2.42 2.42 0 0 1 4.84 0V325.12A2.43 2.43 0 0 1 312.92 327.54zM337.09 331.49a2.42 2.42 0 0 1-2.42-2.41V77.2a2.42 2.42 0 1 1 4.83 0V329.07A2.42 2.42 0 0 1 337.09 331.49zM484.33 207.64a2.42 2.42 0 0 1-2.42-2.42V78.84a2.42 2.42 0 1 1 4.83 0V205.22A2.41 2.41 0 0 1 484.33 207.64zM460.16 306.18a2.42 2.42 0 0 1-2.42-2.42V77a2.41 2.41 0 0 1 4.83 0V303.76A2.41 2.41 0 0 1 460.16 306.18zM434.48 325.88a2.41 2.41 0 0 1-2.41-2.41V77.4a2.41 2.41 0 1 1 4.82 0V323.47A2.41 2.41 0 0 1 434.48 325.88zM410.31 324a2.42 2.42 0 0 1-2.42-2.41V75.55a2.42 2.42 0 0 1 4.83 0V321.63A2.41 2.41 0 0 1 410.31 324zM386.15 328a2.42 2.42 0 0 1-2.41-2.42V79.5a2.42 2.42 0 0 1 4.83 0V325.58A2.42 2.42 0 0 1 386.15 328zM362 332a2.42 2.42 0 0 1-2.41-2.41V77.66a2.42 2.42 0 0 1 4.83 0V329.54A2.43 2.43 0 0 1 362 332z"/>
                    <path class={[Fill.trolleyOffWhite].join(" ")} d="M448.9,331.58h-335c-6.41,0-11.07-5.23-11.6-11.62-.58-6.89-.84-11.6-.84-11.6H448.9a11.61,11.61,0,0,1,0,23.22Z"/>
                    <path class={[Fill.trolleyOffWhite].join(" ")} d="M453.84,325.77a6.06,6.06,0,0,1-1.43-.18,5.81,5.81,0,0,1-4.2-7.06L508.14,83.59H95.67a5.81,5.81,0,0,1,0-11.61H515.6a5.81,5.81,0,0,1,5.63,7.24L459.46,321.4A5.81,5.81,0,0,1,453.84,325.77Z"/>
                </g>
            </g>
        </svg>
    );
}
}

Trolley.defaultProps = {
    xPos: 0,
    yPos: 0,
    width: 540,
    height: 520
}

export default Trolley;
