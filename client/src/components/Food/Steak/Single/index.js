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
import { Fill, MixBlend, Opacity } from '../../../../styles';
// --------------------------------

class Single extends Component {

    render() {

        const { width, height, xPos, yPos, active, onClick } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" x={xPos} y={yPos} width={125} height={125} viewBox="0 0 50 50" onClick={onClick}>
            <polygon className={[Fill.transparent].join(" ")} points="0,0 0,50, 50,50, 50,0" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.4 80.9">
            <title>
                Single_Steak
            </title>
            <g class="cls-1">
                <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <path class={[Fill.steakBrownA].join(" ")} d="M98.85,35.4h0l0,0c-.12-.21-.24-.42-.37-.63C84.59,11.38,25.81-3.8,4.15,34.7c-.23.4-.45.8-.67,1.2a.3.3,0,0,1,0,.08h0A30.75,30.75,0,0,0,50.89,73.36h0l.26-.23.53-.49c5.62-5.16,10.71-11.65,25.44-8h0a20,20,0,0,0,24.31-19.47A19.86,19.86,0,0,0,98.85,35.4Z"/>
                        <path class={[Fill.steakBrownA].join(" ")} d="M0 39.1H15.5V49.900000000000006H0zM85.9 34.9H101.4V46.099999999999994H85.9z"/>
                        <path class={[Fill.steakBrownB].join(" ")} d="M98.85,24.22h0l0,0c-.12-.21-.24-.42-.37-.63C84.59.2,25.81-15,4.15,23.52c-.23.39-.45.8-.67,1.2a.3.3,0,0,1,0,.08h0A30.75,30.75,0,0,0,50.89,62.18h0l.26-.23.53-.49c5.62-5.17,10.71-11.66,25.44-7.95h0A20,20,0,0,0,98.85,24.22Z"/>
                        <path class={[Fill.steakBrownC].join(" ")} d="M30.75,63.81A24.89,24.89,0,0,1,5.89,38.94,24.55,24.55,0,0,1,8.67,27.51l.06-.1c.16-.32.34-.63.51-.93l0-.08c9.53-16.95,26-20.51,38.14-20.51,20.81,0,40.06,10.73,46,20.68l.26.44.08.14A14.07,14.07,0,0,1,78.39,47.76l-.11,0c-.73-.18-1.4-.33-2-.45l-.07,0a32.1,32.1,0,0,0-7.29-.92c-6,0-9.82,2.18-13.16,4.1L54.8,51a49,49,0,0,0-5.71,4.85l-.08.08L47.7,57.13l-.42.38-.25.22A24.85,24.85,0,0,1,30.75,63.81Z"/>
                        <path class={[Fill.steakPinkA].join(" ")} d="M89.89,39.45c-1.87,3-5.51,4.66-10,4.66a22.4,22.4,0,0,1-6-.87,22.44,22.44,0,0,0-6.12-.86,25,25,0,0,0-6.87,1A33.24,33.24,0,0,0,56.58,45c-.84.37-1.69.78-2.56,1.23a37.5,37.5,0,0,0-6.7,5C44,54.13,40.51,57.13,35.85,58.4a19.51,19.51,0,0,1-5.05.67h0a19.91,19.91,0,0,1-3.37-.29c-.65-.11-1.29-.26-1.91-.43a21.33,21.33,0,0,1-11.88-8.71,18.56,18.56,0,0,1-3.14-9.77,19.09,19.09,0,0,1,0-2,23.85,23.85,0,0,1,1.4-6.61A33,33,0,0,1,24.55,15.53c.53-.37,1.09-.73,1.65-1.07a39,39,0,0,1,9.23-4.12l.61-.18c.74-.21,1.48-.4,2.22-.56a44.72,44.72,0,0,1,10-1.12A54.82,54.82,0,0,1,71.52,14c.93.44,1.81.89,2.65,1.34h0a65.12,65.12,0,0,1,8.46,5.31c.68.5,1.31,1,1.89,1.5a28.86,28.86,0,0,1,2.84,2.73C93.49,31.72,91.33,37.17,89.89,39.45Z"/>
                        <path class={[Fill.steakBrownC].join(" ")} d="M77.89 17.48c-4-1.88-8 0-10.08 1.22a22 22 0 0 1-11.2 2.9h-.12C48.23 21.55 42.38 16.45 36 10.16c.74-.21 1.48-.4 2.22-.56 5.73 5.59 11.1 10 18.24 10h.11c4.27 0 8.12-2.09 9.32-4s.41-3.32-1.29-4.34C66.54 10.52 77.46 14.77 77.89 17.48zM30.77 34.61c-2.33 4-7 6.11-13.12 6.11a32.69 32.69 0 0 1-7.15-.85 19.09 19.09 0 0 1 0-2c8.78 2.08 15.78.52 18.55-4.25s1-11.32-4.52-18.09c.53-.37 1.09-.73 1.65-1.07C32.11 21.85 33.88 29.26 30.77 34.61zM61 43.39A33.24 33.24 0 0 0 56.58 45a76.46 76.46 0 0 0-11.73.15C34.32 46.6 28.51 51.28 27.43 58.78c-.65-.11-1.29-.26-1.91-.43C26.75 50.06 35 40.44 60.25 41.68 62.91 41.81 58.48 43.24 61 43.39zM90.94 30.77c-3.85-7.91-14-5.43-18.3-3.85-8.84 3.24-7 8.3-21 10.06-.54.07-6.75-11-6.44-11.49s4.56-1.16 5.1-1.12c8.84.51 12.8 2 20.72.18 5.46-1.25 10.67-3.7 8.25-6.18C81.4 17.74 90.94 27.49 90.94 30.77z"/>
                        <path class={[Fill.steakBrownC].join(" ")} d="M20.48 18.74A5.17 5.17 0 0 1 27.64 20l1.15-1.86s-2.21-3.93 1-5.6c1.61-.85-1.68-1.35-1.68-1.35zM17 38.76c-2.4-.17-6.74-1.45-5.62-5.73.85-3.22-2-1.57-2-1.57L7.77 40 11 46.79s1.07 0 .56-1.4c-1-2.89.91-5 4.8-4.7S17 38.76 17 38.76zM31.6 59.07c-2.42-.06-4.36-1.67-2.7-5s-.76-2.37-.76-2.37-4 6.07-8.62 3.82c-5-2.43 4.58 4.51 4.58 4.51zM51 48.21c2-1.74 2.54-3.46-2-3.32-3.85.12 1-1.8 1-1.8s11.43-2.89 21.69-.39C77.1 44 52.24 48.89 52.24 48.89z"/>
                        <path class={[Fill.steakBrownC].join(" ")} d="M43 13.91c-1.93-1.67-2.86-5.31 2.41-5.34S45.19 7 45.19 7l-4.86.53-3.89.91-7 2.7 1.11 1s5.59-1.82 8.36.78C41.4 15.24 43 13.91 43 13.91zM60.53 30.77c0 3.53-5.21 6.4-11.65 6.4s-11.64-2.87-11.64-6.4 5.21-6.4 11.64-6.4S60.53 27.23 60.53 30.77z"/>
                        <path class={[Fill.steakPinkB].join(" ")} d="M57,30.77c0,2.12-3.56,3.85-8,3.85s-7.95-1.73-7.95-3.85,3.56-3.85,7.95-3.85S57,28.64,57,30.77Z"/>
                        <path class={[Fill.steakPinkC, MixBlend.multiply, Opacity._02].join(" ")} d="M85.89 30.43c1.81 1.85 1 7.53-2.89 9.17s-14.67 1.09-15.6-1.91S80.49 24.93 85.89 30.43zM22.52 22.64c2.62 0 5.56 6.38 3.76 9.16s-8.23 5.67-10.74 3.82S18.32 22.64 22.52 22.64z"/>
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

export default asFoodItem(Single);
