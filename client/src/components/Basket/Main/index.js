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

class Basket extends Component {


    render() {
        const { width, height, xPos, yPos } = this.props;
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} x={950} y={995} viewBox="0 0 415.9 426.6" style={{pointerEvents: "none"}}>
            <title>
                GardenBasket
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <g id="_Group_" data-name="&lt;Group&gt;">
                        {/* <path style={{zIndex: -100}} class={[Fill.basketBrownA].join(" ")} d="M388.34,208.83a10.86,10.86,0,0,1-11-10.76c0-97.35-76-176.54-169.43-176.54S38.53,100.72,38.53,198.07a11,11,0,0,1-21.92,0C16.61,88.85,102.45,0,208,0S399.3,88.85,399.3,198.07a10.86,10.86,0,0,1-11,10.76Z"/> */}
                        <path class={[Fill.basketBrownB].join(" ")} d="M16,226.61a201.43,201.43,0,0,0-2.37,32.26c0,119.34,87,167.71,194.33,167.71s194.33-48,194.33-167.35a205.86,205.86,0,0,0-2.37-32.62Z"/>
                        <path class={[Fill.basketBrownC].join(" ")} d="M340.24,391.41a142.82,142.82,0,0,0,21.61-18.53V226.61H340.24V391.41Z"/>
                        <path class={[Fill.basketBrownC].join(" ")} d="M244.85,424.55q11-1.26,21.61-3.32V226.61H244.85V424.55Z"/>
                        <path class={[Fill.basketBrownC].join(" ")} d="M149.46,421.19q10.55,2.08,21.61,3.34V226.61H149.46V421.19Z"/>
                        <path class={[Fill.basketBrownC].join(" ")} d="M54.07,372.65a143.21,143.21,0,0,0,21.61,18.59V226.61H54.07v146Z"/>
                        <path class={[Fill.basketBrownD].join(" ")} d="M14.38,277.48a195.07,195.07,0,0,0,3,22.05H398.56a195.45,195.45,0,0,0,3-22.05Z"/>
                        <path class={[Fill.basketBrownD].join(" ")} d="M14.21,242c-.39,5.44-.59,11.19-.59,16.85,0,1.75,0,3.48.06,5.2H402.23c0-1.6.06-3.21.06-4.84,0-5.72-.2-11.62-.6-17.21Z"/>
                        <path class={[Fill.basketBrownD].join(" ")} d="M20.64,312.92A153.63,153.63,0,0,0,28.7,335H387.35a153.32,153.32,0,0,0,8-22.05Z"/>
                        <path class={[Fill.basketBrownD].join(" ")} d="M35.71,348.37A136.36,136.36,0,0,0,52,370.42H364.13a135.75,135.75,0,0,0,16.24-22.05Z"/>
                        <path class={[Fill.basketBrownD].join(" ")} d="M65.79,383.66a158.9,158.9,0,0,0,35.06,22.05H315.3a158.34,158.34,0,0,0,35.05-22.05Z"/>
                        <path class={[Fill.basketBrownE].join(" ")} d="M139.21,418.94c21.37,5.18,44.54,7.65,68.74,7.65s47.51-2.47,68.94-7.65Z"/>
                        <path class={[Fill.basketBrownC].join(" ")} d="M16,226.61a201.43,201.43,0,0,0-2.37,32.26c0,28.88,5.11,53.59,14.35,74.47V226.61Z"/>
                        <path class={[Fill.basketBrownC].join(" ")} d="M101.76,406.13a195.51,195.51,0,0,0,21.61,8.37V226.61H101.76V406.13Z"/>
                        <path class={[Fill.basketBrownC].join(" ")} d="M197.15,426.42q5.37.17,10.8.17t10.8-.17V226.61H197.15v199.8Z"/>
                        <path class={[Fill.basketBrownC].join(" ")} d="M292.55,414.57a195.61,195.61,0,0,0,21.61-8.33V226.61H292.55v188Z"/>
                        <path class={[Fill.basketBrownC].join(" ")} d="M387.94,333.66c9.24-20.86,14.35-45.55,14.35-74.42a205.86,205.86,0,0,0-2.37-32.62h-12v107Z"/>
                        <rect class={[Fill.basketBrownC].join(" ")} y="194.8" width="415.9" height="34.3" rx="16.6" ry="16.6"/>
                    </g>
                </g>
            </g>
        </svg>
    );
}
}

Basket.defaultProps = {
    xPos: 0,
    yPos: 0,
    width: 415,
    height: 426
}

export default Basket;
