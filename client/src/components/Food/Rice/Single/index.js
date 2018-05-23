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
            <svg xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 109.3 138.2">
            <title>
                Single_Rice
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.white].join(" ")} d="M109.35,6.83V0H0V6.83S8,11,8,69.1s-8,62.27-8,62.27v6.83H109.35v-6.83s-8-4.18-8-62.27S109.35,6.83,109.35,6.83Z"/>
                    <path class={[Fill.riceOffWhite].join(" ")} d="M0 0H109.3V6.8H0z"/>
                    <path class={[Fill.riceBlue].join(" ")} d="M1.5 1.6H107.6V3H1.5zM1.5 3.6H107.6V5H1.5z"/>
                    <path class={[Fill.riceOffWhite].join(" ")} d="M0 131.4H109.3V138.20000000000002H0z"/>
                    <path class={[Fill.riceBlue].join(" ")} d="M1.5 133H107.6V134.4H1.5zM1.5 135H107.6V136.4H1.5z"/>
                    <circle class={[Fill.riceGrey].join(" ")} cx="54.8" cy="69.1" r="38.5"/>
                    <path class={[Fill.riceBlue].join(" ")} d="M74.75,79c-.84.38-1.4.62-1.95.9-5.38,2.76-5,8.51-6.74,13.13a3.43,3.43,0,0,0,.39.26,31.12,31.12,0,0,0,1.39-3.08,5.92,5.92,0,0,1,3.07-3.74C73.61,85.1,74.81,82.62,74.75,79ZM61.7,76c-.5,4.46,1.9,8.6,5.17,9.09C68,81.46,65.68,77.34,61.7,76Zm7.58-14.49c-2.79,3.53-3.1,8.35-.77,10.72C71.51,69.17,71.84,65.14,69.29,61.47Zm3.77,8.61c-3.48,2.43-4.91,6.39-3.6,10A7.51,7.51,0,0,0,73.05,70.08Zm-5.54,7.11c-.21-4.55-2.84-7.76-6.5-8.09C60.58,72.79,64.05,77.2,67.51,77.19ZM66,64.08c1.71-3.75.64-7.64-2.51-9.3C62.37,58.52,63.31,62.83,66,64.08Zm-8.48-1.32c1.57,3.86,4.73,6,7.89,5.39C64.83,64.64,61.57,62.36,57.56,62.76Zm3.91-2.86c1.52-3.59-.23-7.78-3.58-8.86A8,8,0,0,0,61.48,59.89ZM45.82,57.15c3.51,1.57,6.91,1,8.49-1.32C51.26,54,48.39,54.41,45.82,57.15Zm14.12,3.64c-2.39-3-5.59-3.62-8.36-1.76C54,61.55,56.86,62.18,59.94,60.79ZM50,48.94c1,3.53,3.74,5.75,6.5,5.29C55.82,50.82,53.41,48.81,50,48.94ZM42.4,51.83c-2.26-2.08-5-2-7.63.18C37.47,53.78,40.13,53.72,42.4,51.83Zm1-2.65c1.2,2.89,4.2,4.48,6.62,3.52A5.55,5.55,0,0,0,43.37,49.17Zm-3,6.42A5,5,0,0,0,46.8,54C44,52.85,41.87,53.37,40.32,55.59Z"/>
                    <path class={[Fill.riceBlue].join(" ")} d="M74.75 79c.06 3.59-1.14 6.07-3.84 7.47a5.92 5.92 0 0 0-3.07 3.74 31.12 31.12 0 0 1-1.39 3.08 3.43 3.43 0 0 1-.39-.26c1.78-4.62 1.36-10.36 6.74-13.13C73.35 79.65 73.92 79.41 74.75 79zM61.7 76c4 1.38 6.26 5.5 5.17 9.09C63.6 84.56 61.21 80.42 61.7 76zM69.29 61.47c2.55 3.67 2.22 7.7-.77 10.72C66.18 69.82 66.49 65 69.29 61.47zM73.05 70.08a7.51 7.51 0 0 1-3.6 10C68.14 76.47 69.57 72.51 73.05 70.08zM67.51 77.19c-3.46 0-6.93-4.4-6.5-8.09C64.67 69.43 67.3 72.64 67.51 77.19zM66 64.08c-2.73-1.25-3.67-5.56-2.51-9.3C66.68 56.44 67.75 60.32 66 64.08zM57.56 62.76c4-.39 7.27 1.88 7.89 5.39C62.29 68.73 59.13 66.62 57.56 62.76zM61.48 59.89A8 8 0 0 1 57.89 51C61.25 52.12 63 56.31 61.48 59.89zM45.82 57.15c2.57-2.74 5.44-3.15 8.49-1.32C52.74 58.16 49.34 58.72 45.82 57.15zM59.94 60.79c-3.08 1.39-5.93.76-8.36-1.76C54.35 57.17 57.56 57.81 59.94 60.79zM50 48.94c3.42-.14 5.82 1.87 6.5 5.29C53.74 54.69 51 52.48 50 48.94zM42.4 51.83c-2.27 1.89-4.93 2-7.63.18C37.36 49.81 40.14 49.75 42.4 51.83zM43.37 49.17A5.55 5.55 0 0 1 50 52.69C47.56 53.65 44.57 52.06 43.37 49.17zM40.32 55.59C41.87 53.37 44 52.85 46.8 54A5 5 0 0 1 40.32 55.59zM60.59 84.24c-.55.25-.93.41-1.28.59-3.55 1.82-3.27 5.62-4.45 8.66a2.26 2.26 0 0 0 .26.17 20.53 20.53 0 0 0 .92-2 3.91 3.91 0 0 1 2-2.47C59.84 88.25 60.63 86.61 60.59 84.24zm-8.61-2c-.33 2.94 1.25 5.68 3.41 6A5 5 0 0 0 52 82.22zm5-9.56c-1.84 2.33-2 5.51-.51 7.08A5.25 5.25 0 0 0 57 72.65zm2.48 5.68a5.64 5.64 0 0 0-2.37 6.58A5 5 0 0 0 59.47 78.34zM55.81 83c-.14-3-1.87-5.12-4.29-5.34C51.24 80.12 53.53 83 55.81 83zm-1-8.65c1.13-2.48.42-5-1.65-6.14C52.42 70.71 53 73.55 54.84 74.38zm-5.59-.87c1 2.55 3.12 3.94 5.2 3.56A4.54 4.54 0 0 0 49.25 73.5zm2.58-1.89a4.35 4.35 0 0 0-2.36-5.85A5.3 5.3 0 0 0 51.83 71.62zM41.5 69.81c2.32 1 4.56.67 5.6-.87A4.1 4.1 0 0 0 41.5 69.81zm9.32 2.4c-1.58-2-3.69-2.39-5.52-1.16A4.54 4.54 0 0 0 50.82 72.21zm-6.57-7.82c.64 2.33 2.47 3.79 4.29 3.49A4 4 0 0 0 44.25 64.39zm-5 1.9c-1.49-1.37-3.33-1.33-5 .12A3.94 3.94 0 0 0 39.24 66.29zm.64-1.75c.79 1.91 2.77 3 4.37 2.32A3.66 3.66 0 0 0 39.88 64.54zm-2 4.24a3.32 3.32 0 0 0 4.27-1C40.29 67 38.89 67.31 37.87 68.78z"/>
                    <path class={[Fill.riceBlue].join(" ")} d="M60.59 84.24c0 2.37-.76 4-2.53 4.93a3.91 3.91 0 0 0-2 2.47 20.53 20.53 0 0 1-.92 2 2.26 2.26 0 0 1-.26-.17c1.18-3 .9-6.84 4.45-8.66C59.67 84.65 60 84.49 60.59 84.24zM52 82.22a5 5 0 0 1 3.41 6C53.23 87.89 51.65 85.16 52 82.22zM57 72.65a5.25 5.25 0 0 1-.51 7.08C54.94 78.17 55.14 75 57 72.65zM59.47 78.34a5 5 0 0 1-2.37 6.58A5.64 5.64 0 0 1 59.47 78.34zM55.81 83c-2.28 0-4.57-2.9-4.29-5.34C53.94 77.91 55.67 80 55.81 83zM54.84 74.38c-1.8-.83-2.42-3.67-1.65-6.14C55.26 69.34 56 71.9 54.84 74.38zM49.25 73.5a4.54 4.54 0 0 1 5.2 3.56C52.36 77.45 50.28 76.05 49.25 73.5zM51.83 71.62a5.3 5.3 0 0 1-2.36-5.85A4.35 4.35 0 0 1 51.83 71.62zM41.5 69.81a4.1 4.1 0 0 1 5.6-.87C46.06 70.47 43.82 70.84 41.5 69.81zM50.82 72.21A4.54 4.54 0 0 1 45.3 71C47.13 69.82 49.24 70.24 50.82 72.21zM44.25 64.39a4 4 0 0 1 4.29 3.49C46.72 68.18 44.89 66.72 44.25 64.39zM39.24 66.29a3.94 3.94 0 0 1-5 .12C35.92 65 37.75 64.92 39.24 66.29zM39.88 64.54a3.66 3.66 0 0 1 4.37 2.32C42.65 67.5 40.67 66.45 39.88 64.54zM37.87 68.78c1-1.47 2.42-1.81 4.27-1A3.32 3.32 0 0 1 37.87 68.78z"/>
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
