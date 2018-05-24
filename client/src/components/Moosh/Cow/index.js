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
import { Fill, Stroke, Opacity, MixBlend } from '../../../styles';
// --------------------------------

class Cow extends Component {


    render() {
        const { width, height, xPos, yPos } = this.props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={1580} height={1012} x={241} y={200} viewBox="0 0 1580.7 1012.1">
            <title>
                outcomeMoosh_1
            </title>
            <g>
                <g id="Layer_2" data-name="Layer 2">
                    <g id="moosh">
                        <ellipse style={{fill: "#48395f"}} cx="455.1" cy="962.8" rx="344.4" ry="35.6"/>
                        <path class={[Fill.pink].join(" ")} d="M581.66,856c2.16-1.75-12.33,35-9.77,32.93,8.38-6.75,18.92-9.64,27.45-16.13,9.85-7.5,16.32-22.93,13.41-35.4-1.49-6.39-6-11.17-8.5-17.06-3.29-7.64-3.59-15.31-4.72-23.38-1.44-10.28-4.8-19.74-6.81-29.77-2.25-11.27-.18-23.67-1-35.33-2.65-36.87-19.45-64.46-48.83-85-31-21.61-71.6-38.64-109.81-38.83-45.09-.22-89.46,15.55-130.82,32.61-36.55,15.08-67.3,49.91-91.1,80.95-3.65,4.76-2.6,9.57.47,12.78a12.16,12.16,0,0,0-6,11.45c.52,7.56,5.66,12.3,8.08,19.18,3.17,9,3.41,19.09,6.42,28.29,2.4,7.33,4,16.23,7.67,23a39.1,39.1,0,0,0,7.82,9.47,10.47,10.47,0,0,0-5.47,6.58c-.51,1.6-1,3.15-1.52,4.67-20.95,19.27-47.23,54.8-22.89,78.06,11.66,11.14,30.32,7.33,39.68-5.59,6.26-8.63,8.65-21.22,11.84-31.18,1.39-4.35,2.28-11.49,4.28-17,.42-.64.82-1.31,1.2-2,1.3-1.66,2.5-3.39,3.63-5.17,18.73,14.88,39.74,27.2,60.68,38.48-.17.47-.32.94-.49,1.4-5.46,7.61-11.35,14.69-15,23.52-.18.44-.33.88-.5,1.33-7.68,13.66-14.38,29.12-13.27,41.15a31.57,31.57,0,0,0,1.09,14.65c4.06,11.92,16.39,16.55,28,15.12,13.86-1.71,23.76-11.15,29.67-23.86,3.54-7.62,4.28-15,6-23,2.14-9.77,5.61-17.57,5.13-27.84a11.91,11.91,0,0,0-.42-2.5,163.81,163.81,0,0,0,19.4,6.7c8.79,2.4,16.36,2,25.36,2.48a181.54,181.54,0,0,1,23,3.32c-3.84,11.85-7.51,23.79-11.59,35.56-2.82,8.15-6.59,16.18-5.61,25a27,27,0,0,0,12.71,20.27c8.69,8.84,24.48,8.7,33.56-2.68,5.39-6.75,8.21-15.78,10.65-24a46.31,46.31,0,0,0,1.75-10.32c2.55-2.18,4-5.67,2.81-10.3a37.31,37.31,0,0,1-.82-4.94,11.3,11.3,0,0,0,5-8.2c1-7.52.19-14.71-3-20.74,4.8-.11,9.6-.06,14.53-1a149.28,149.28,0,0,0,20.29-5.54c-.74,8.84-.33,17.63-2.51,26.57a73.07,73.07,0,0,0-2.53,21.92c.47,15.69,10,35,28.56,29.85,17.64-4.94,30.24-23.26,33.62-41C583.78,938.76,590.14,871.11,581.66,856Zm-44.55,53.56.88-.4-.26.36Z"/>
                        <path class={[Fill.green].join(" ")} d="M294.34 760.8l2.11 1.19zM166.26 586c.13.9.28 1.78.43 2.68 0-.18-.05-.37-.08-.56C166.49 587.45 166.37 586.75 166.26 586z"/>
                        <path class={[Fill.green].join(" ")} d="M1035.4,523.28c-9.7-4.07-25.58,1.74-29.78,11.82,2.26-6.13,5.14-14,5.31-14.94,2.38-12.39-9.48-21.06-20.91-21.33-9.39-.22-17.67,6.76-24.36,12.51.33-1.74.62-3.49.95-5.2a18.88,18.88,0,0,0,.57-6.31,2.68,2.68,0,0,0-.3,1.16c.22-7.76.43-15.5-6.07-21-13.75-11.61-37.53.12-39.17,17.27-4.13,43.17-42.34,74.22-85.17,72.6,17.39-64.7,28-135.69,28.24-205,6.39,1.64,13,2.24,18.27,1.3a288.38,288.38,0,0,0,35.93-8.58c28-15.65,57.55-40.37,78.54-68.5,1.17-4.77,2.59-9.55,3.94-14.34a25.39,25.39,0,0,1-1-7.28,19.54,19.54,0,0,1-1.78-3.71c-1-1-2-2-3-3a352.94,352.94,0,0,0-82.69-35.79,246.93,246.93,0,0,0-31.74-7c-1,.05-2.08.09-3.13.15a120.16,120.16,0,0,0-29.64,5.81c-20.09-78-60-145-126.79-186C674.92,9.18,617.11-2,562.47.28,504.15,2.7,451.49,22.83,404.93,55a379.57,379.57,0,0,0-33.25,26,123.66,123.66,0,0,0-26-27.54c-.84-.63-1.68-1.24-2.52-1.86a247,247,0,0,0-30.29-11.81,352.94,352.94,0,0,0-88.62-16.27c-1.38.26-2.75.53-4.11.84a19.54,19.54,0,0,1-3.54,2.09,25.39,25.39,0,0,1-4.9,5.49c-1.55,4.73-3,9.49-4.71,14.11,1.78,35.05,12.54,72,27.14,100.62a288.42,288.42,0,0,0,25.08,27.12c5.39,5.17,14.41,9.23,23.19,11.16C244,243.15,214.2,309.68,193.74,376.18c-29.17-26.91-36.3-71.59-13.39-105.3,9.68-14.25-1.14-38.46-19.14-38.29-8.51.08-13.29,6.17-18.07,12.29a2.68,2.68,0,0,0,.51-1.09,18.88,18.88,0,0,0-3.59,5.22c-.84,1.53-1.73,3.06-2.59,4.61-1.48-8.69-3.4-19.35-10.77-25.17-9-7.09-23.64-8-29.71,3.07-.45.81-3.28,8.73-5.45,14.89,3.19-10.45-5.32-25.05-15.39-28.1-16.45-5-23.22,12.85-26.87,25.17a179.17,179.17,0,0,0-7.47,54.32c.43,21.23,1.82,42,8.85,62.27,18.6,53.6,61.92,128.13,112.78,146.77l3-7c-1.19,9.68-2.09,19.38-2.62,29.09a292.67,292.67,0,0,0,.51,40s0,0,0,0a8.28,8.28,0,0,0,.18,2.15c.07.79.13,1.58.21,2.36a11.94,11.94,0,0,0,.48,4.26h0c.12,1.08.28,2.14.42,3.22.09.72.18,1.43.28,2.15q.35,2.58.75,5.12l.18,1.1c0-.18-.07-.36-.1-.54.06.35.12.69.18,1,.25,1.5.49,3,.76,4.49.18,1,.38,2,.57,3,0-.18-.06-.37-.1-.55.08.43.17.86.25,1.29-.05-.25-.1-.49-.15-.74.21,1.06.4,2.12.63,3.17.13.64.29,1.27.43,1.91q.4,1.81.82,3.59.51,2.18,1.06,4.32c.2.78.38,1.57.59,2.35-.21-.77-.39-1.56-.59-2.34q.4,1.55.81,3.09c-.07-.25-.15-.5-.22-.75.1.36.21.71.3,1.06.41,1.49.83,3,1.27,4.45.31,1,.6,2.08.92,3.11q.32,1,.66,2.08c.22.7.46,1.39.69,2.08l.23.69c.28.84.55,1.69.84,2.52q1.27,3.64,2.64,7.21l.13.34q1.63,4.17,3.4,8.22l.16.36a215.1,215.1,0,0,0,11.25,22c-5.67,12.37-12.94,26.25-23.48,33.71-7,5-14.18,1.63-21.54-.44-21.46-6.05-43-10.43-64.78-15.07-22.47-4.79-59.46-15.8-77.89,3.25-9,9.19-7.62,25.79-2.36,36.52,9.69,19.78,30.76,31,50.29,39.73,45.85,20.45,95.91,46.09,138.63,61.48,15.32,5.52,30.31,14.4,46.33,7,15-6.88,32.44-34.93,35.81-50.07,1.66-7.47,7.31-18.53,17.21-23.08l1.91,1.07-1.91-1.07c6.91-3.17,15.88-3.17,27,3.45-.23-.3-.61-.81-1.08-1.47A447.63,447.63,0,0,0,395,797.4l107.33,28.41,11.19,3a45.41,45.41,0,0,1,38.83-10.21c10.9,2.31,28.57-4.66,37.61-9.18-3.08,1.9-6,3.76-8.6,5.54-4.19,2.82-22.69,18.94-26.57,20.77,38.87,0,26.71,45.8,23.39,58.35-4,15-5.62,32.24,4.5,45.24,10.83,13.92,28.08,15,44.37,15.08,50.21.14,100.38,1.05,150.5,4,21.34,1.26,45.22,1,62.93-12.13,9.86-7.29,16.43-19.44,14.83-30.94-.23-12.69-12.64-19.35-23-23.44C795.2,877.3,754,873.08,715.56,862.5c-8.21-2.26-17.36-51.82-16.69-63a.92.92,0,0,1,.1-.25,23.57,23.57,0,0,1-3.43-2.75,571,571,0,0,0-85.47,3.1C620,795,630.54,790,639.8,784.78c1.81-1,3.33-1.86,4.69-2.6,1.76-1.35,4.52-3.35,8.63-6.24,2.88-2,6.07-3.48,8.84-5.67,6.68-5.27,13.82-13.21,21.26-19.17q3.94-3.08-.11.53l9.57-8.12c2.59-2,5.7-3.65,8.49-5.52-2,.85,8.2-10.57,10.58-12.66,19.11-16.77,44-21.5,61.36-1.68.28.32.52.69.79,1,6.41-10.61,12.34-21.57,17.81-32.65,51.19,12.92,126.68-15.35,172.85-43.33,18.36-11.12,32.67-26.22,46.55-42.29A179.18,179.18,0,0,0,1040,559.81C1045.07,548,1051.25,529.94,1035.4,523.28ZM89.62,244.76c-.12-.2-.23-.41-.35-.61S89.41,244.34,89.62,244.76Zm918.52,290.29c.43-.19.72-.3.66-.24C1008.58,534.88,1008.36,535,1008.14,535.05Z"/>
                        <path class={[Fill.green].join(" ")} d="M738.65,743.78l-.75.26h.49Z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M296.45,762l-4.12-2.32c.85-1.37,4.76-1.05,5.69-2.35-33.48-19.53-58.58-47.84-79.75-82.72-10.63-17.52-21.94-34-26.3-55.29-2.13-10.41-2.1-21.86-6.52-31.32-1.4-3-2.92-5.84-4.46-8.68a19.31,19.31,0,0,1-9.38-.48,22.41,22.41,0,0,1-6.91-3.29,11.93,11.93,0,0,0,.44,2.13,233.43,233.43,0,0,0,14.12,58.08l.13.34q1.63,4.17,3.4,8.22l.16.36A218.78,218.78,0,0,0,215.55,697l.38.46c1.64,2,3.31,3.86,5,5.76L222,704.4q2.4,2.64,4.88,5.2l1.44,1.48q2.4,2.45,4.87,4.83l1.67,1.59c1.63,1.55,3.28,3.08,5,4.59l1.74,1.54c1.7,1.5,3.41,3,5.14,4.45l1.57,1.29c1.83,1.52,3.67,3,5.55,4.5l.11.08q6.89,5.41,14.13,10.42l0,0c1.61,1.12,3.25,2.2,4.89,3.29,1,.67,2,1.34,3,2,1.47,1,3,1.89,4.45,2.82,1.21.76,2.41,1.52,3.62,2.26,1.41.86,2.83,1.7,4.26,2.54s2.67,1.57,4,2.35"/>
                        <path class={[Fill.green].join(" ")} d="M268.05 744.38q-7.23-5-14.13-10.42Q260.82 739.36 268.05 744.38zM280.44 752.52c-1.49-.93-3-1.86-4.45-2.82C277.46 750.66 278.95 751.59 280.44 752.52zM253.82 733.88c-1.88-1.47-3.72-3-5.55-4.5C250.1 730.89 251.94 732.4 253.82 733.88zM273 747.71c-1.64-1.09-3.28-2.17-4.89-3.29C269.71 745.53 271.36 746.62 273 747.71zM233.19 715.91q-2.47-2.38-4.87-4.83Q230.72 713.53 233.19 715.91zM246.7 728.08c-1.74-1.46-3.45-3-5.14-4.45C243.25 725.13 245 726.62 246.7 728.08zM239.81 722.09q-2.51-2.26-5-4.59C236.49 719 238.14 720.58 239.81 722.09zM288.32 757.32c-1.42-.84-2.85-1.68-4.26-2.54C285.47 755.64 286.89 756.48 288.32 757.32zM220.94 703.21c-1.7-1.89-3.38-3.81-5-5.76Q218.39 700.38 220.94 703.21zM226.88 709.6q-2.48-2.57-4.88-5.2Q224.4 707 226.88 709.6zM182.81 644.31q-1.77-4.05-3.4-8.22Q181 640.26 182.81 644.31z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M395.03 797.4L502.35 825.8 395.02 797.4 395.03 797.4zM284.06 754.78c-1.22-.74-2.42-1.5-3.62-2.26C281.64 753.28 282.84 754 284.06 754.78zM292.33 759.67c-1.35-.77-2.68-1.56-4-2.35C289.65 758.11 291 758.9 292.33 759.67zM215.93 697.46l-.38-.46zM276 749.7c-1-.65-2-1.33-3-2C274 748.37 275 749 276 749.7zM179.41 636.09l-.13-.34zM241.55 723.63c-.58-.51-1.17-1-1.74-1.54C240.39 722.61 241 723.11 241.55 723.63zM234.86 717.5l-1.67-1.59zM248.27 729.37c-.52-.43-1.05-.86-1.57-1.29C247.21 728.52 247.75 728.94 248.27 729.37zM228.32 711.08l-1.44-1.48zM268.1 744.42l0 0zM253.93 734l-.11-.08zM222 704.4l-1.06-1.18zM183 644.67l-.16-.36z"/>
                        <path class={[Fill.green].join(" ")} d="M502.35,825.81c3.53,1.11,7.18,2.19,10.8,3.28l.39-.32Z"/>
                        <path class={[Fill.pink].join(" ")} d="M502.35,825.81c3.53,1.11,7.18,2.19,10.8,3.28l.39-.32Z"/>
                        <path class={[Fill.green].join(" ")} d="M711.75,725.32c-2.38,2.09-12.61,13.51-10.58,12.66-2.79,1.87-5.91,3.51-8.49,5.52l-9.57,8.12q4-3.61.11-.53c-7.44,6-14.59,13.9-21.26,19.17-2.77,2.19-6,3.65-8.84,5.67-4.11,2.89-6.87,4.89-8.63,6.24-1.36.75-2.88,1.59-4.69,2.6-15.68,8.79-35.06,17-48.85,24.11-8.69,4.49-27.29,12.06-38.58,9.67a45.41,45.41,0,0,0-38.83,10.21l11.9,3.15c59.4,8.5,120.66,6.6,173-25.63l.8-.5-.42-.11.71-.07c1-.65,2.1-1.26,3.14-1.93q4-2.6,7.83-5.45c24.88-18.42,45.88-44.66,63.36-73.58-.27-.33-.51-.7-.79-1C755.76,703.82,730.86,708.55,711.75,725.32Z"/>
                        <path class={[Fill.none].join(" ")} d="M738.39,744l-.73.7Q745.37,743.88,738.39,744Z"/>
                        <path class={[Fill.green].join(" ")} d="M738.39,744l.26-.25-.75.26Z"/>
                        <path class={[Fill.purple].join(" ")} d="M828.84 267.22l.18.31zM881.37 420a1.4 1.4 0 0 0-.27-.31 1.36 1.36 0 0 1 .28.31 1.94 1.94 0 0 0 .25.31A2 2 0 0 1 881.37 420zM876.41 461.94l-.31-.65.55 1.16z"/>
                        <path class={[Fill.greenTwo].join(" ")} d="M212.93 815.13c-42.72-15.4-92.78-41-138.63-61.48C54.77 744.94 33.7 733.7 24 713.92c-5.06-10.33-6.48-26.06 1.41-35.43-7.24 1.44-13.8 4.35-18.9 9.63-9 9.19-7.62 25.79-2.36 36.52 9.69 19.78 30.76 31 50.29 39.73 45.85 20.45 95.91 46.09 138.63 61.48 15.32 5.52 30.31 14.4 46.33 7a40.56 40.56 0 0 0 11-8.17C237.64 826.33 225.39 819.62 212.93 815.13zM850.3 928.37c-17.71 13.1-41.58 13.39-62.93 12.13-50.12-2.95-100.29-3.86-150.5-4-9.48 0-19.27-.44-27.95-3.5-11.59 0-22.17-.84-31-9.94-.89-.92-1.71-1.86-2.55-2.8a36.4 36.4 0 0 0 7.31 19c10.83 13.92 28.08 15 44.36 15.08 50.21.14 100.38 1.05 150.5 4 21.34 1.26 45.22 1 62.92-12.13 7.32-5.41 12.81-13.5 14.5-22A39.49 39.49 0 0 1 850.3 928.37z"/>
                        <path class={[Fill.offWhite].join(" ")} d="M704.52 306.7c-32.68-9.22-63 2-80.36 27.4a83.31 83.31 0 0 0-11.63 25.45c-8.87 32.84 2.28 64 26.81 81.46a38.05 38.05 0 0 1 .17-3.94c2.59-26.26 27.09-41 48.66-34.73a31.17 31.17 0 0 1 16.61 11.16c.32.06.63.08.95.16a13.37 13.37 0 0 1 9.3 16.46 13.21 13.21 0 0 1-3.38 5.74 51.37 51.37 0 0 1-2.91 16.68c17.5-5.51 31.84-17.89 40.94-36a92.61 92.61 0 0 0 6.4-16.48C768.72 355.33 748.75 319.17 704.52 306.7zM436.86 235.82c-33.72-10.23-68.72 12.72-79.89 51.73a81.44 81.44 0 0 0-3.19 25.2c.68 20.6 10 38.52 26.06 50.37a34.22 34.22 0 0 1 .3-9.61 33.75 33.75 0 0 1 57.7-17.8 14.81 14.81 0 0 1 10.29 24.86 35 35 0 0 1-3.33 14.1C466 368.11 483 351 490.28 326.26a71.57 71.57 0 0 0 2.85-23.74C491.74 273 471.56 246.34 436.86 235.82z"/>
                        <path class={[Fill.green].join(" ")} d="M448.12 360.57A14.88 14.88 0 0 1 436 365.45a24.89 24.89 0 0 1-7.09 12 67.18 67.18 0 0 0 15.92-2.79A35 35 0 0 0 448.12 360.57zM391.31 355.68a22.51 22.51 0 0 1 34.76-15 14.88 14.88 0 0 1 11.77-4.95 33.75 33.75 0 0 0-57.7 17.8 34.22 34.22 0 0 0-.3 9.61 70.81 70.81 0 0 0 14.1 8A24.11 24.11 0 0 1 391.31 355.68z"/>
                        <path d="M422.75,346.59a14.77,14.77,0,0,1,3.31-5.93,22.51,22.51,0,0,0-34.76,15,24.11,24.11,0,0,0,2.63,15.48,79.6,79.6,0,0,0,9.73,3.48,75.77,75.77,0,0,0,25.2,2.81,24.89,24.89,0,0,0,7.09-12,14.87,14.87,0,0,1-13.22-18.86Z"/>
                        <path class={[Fill.white].join(" ")} d="M448.12,360.57a14.75,14.75,0,0,0,3.37-6,14.82,14.82,0,0,0-13.66-18.87c.45.46.93.86,1.36,1.35A34.21,34.21,0,0,1,448.12,360.57Z"/>
                        <path class={[Fill.white].join(" ")} d="M426.06,340.66a23.69,23.69,0,0,1,4.63,4A22.51,22.51,0,0,1,436,365.45a14.88,14.88,0,0,0,12.16-4.88,34.21,34.21,0,0,0-8.93-23.51c-.43-.49-.91-.89-1.36-1.35A14.88,14.88,0,0,0,426.06,340.66Z"/>
                        <path class={[Fill.white].join(" ")} d="M430.69,344.71a23.69,23.69,0,0,0-4.63-4,14.77,14.77,0,0,0-3.31,5.93A14.87,14.87,0,0,0,436,365.45,22.51,22.51,0,0,0,430.69,344.71Z"/>
                        <path class={[Fill.green].join(" ")} d="M711.66 435.86a13.28 13.28 0 0 1-12.06 3.74 35 35 0 0 1-5.18 15.78 70.08 70.08 0 0 0 14.33-2.84A51.37 51.37 0 0 0 711.66 435.86zM651.22 438c1.74-17.64 18.2-27.55 32.69-23.33a22.11 22.11 0 0 1 7.57 3.83 13.31 13.31 0 0 1 13.31-5 31.17 31.17 0 0 0-16.61-11.16c-21.57-6.28-46.06 8.47-48.66 34.73a38.06 38.06 0 0 0-.17 3.94 73.85 73.85 0 0 0 13 7.37A26.48 26.48 0 0 1 651.22 438z"/>
                        <path d="M689.27,423a13.29,13.29,0,0,1,2.2-4.42,22.11,22.11,0,0,0-7.57-3.83C669.42,410.49,653,420.4,651.22,438a26.48,26.48,0,0,0,1.08,10.33,78.55,78.55,0,0,0,10.32,3.83,85.55,85.55,0,0,0,31.8,3.18,35,35,0,0,0,5.18-15.78c-.34-.07-.68-.08-1-.18A13.37,13.37,0,0,1,689.27,423Z"/>
                        <path class={[Fill.white].join(" ")} d="M711.66,435.86a13.21,13.21,0,0,0,3.38-5.74,13.37,13.37,0,0,0-9.3-16.46c-.32-.09-.63-.1-.95-.16C709.51,419.76,711.67,427.67,711.66,435.86Z"/>
                        <path class={[Fill.white].join(" ")} d="M691.47,418.54c6.33,5,8.74,13,8.12,21.06a13.28,13.28,0,0,0,12.06-3.74c0-8.19-2.14-16.1-6.88-22.37A13.31,13.31,0,0,0,691.47,418.54Z"/>
                        <path class={[Fill.white].join(" ")} d="M691.47,418.54a13.3,13.3,0,0,0,7.1,20.88c.34.09.68.11,1,.18C700.21,431.5,697.8,423.51,691.47,418.54Z"/>
                        <circle class={[Fill.lightBlack].join(" ")} cx="472.2" cy="582.2" r="50"/>
                        <path class={[Fill.white].join(" ")} d="M1241.09 451.3a7.24 7.24 0 0 1-1 1.55c-1 .77-1.55.58-2.91 1-.58.19-1.55 0-2.52.19a18 18 0 0 1-3.1.78c-1.16.19-2.52.19-3.87.39-2.13.19-4.26.77-6.58.77-1.74 1-2.91.78-5.61.78-.58-1-1.55-1.55-2.13-2.52a9.29 9.29 0 0 1 1.74-5.23c-.19-.58-.19-1.16-.39-1.74 0-.39.19-.39.19-.77s.39-.39.19-.78a10.18 10.18 0 0 1 .19-4.07c0-.39.58-1 .58-1.55.58-3.49 0-7.55.19-11.23a16 16 0 0 0 .78-1.74c0-.77-.39-1.55-.39-2.32.19-1 1-1.94 1.16-2.71 0-1.16-1-2.32.39-3.1-1.16-1.94-.58-4.26-.58-6.58 0-.78-.19-1.55-.19-2.13 0-3.29.78-6.78.58-10.07-.19-1.35-1-2.9-1.16-4.45a7.77 7.77 0 0 1 0-2.13 8.68 8.68 0 0 1-.58-2.13c-.19-1.36.19-2.71 0-4.07 0-1.16-.58-2.13-.58-3.1 0-1.16.58-2.13.39-3.1a9.57 9.57 0 0 0-.58-2.52 8.68 8.68 0 0 0-.19-2.52c-.19-.78-1-1.36-1.55-2.32a21.19 21.19 0 0 0-1.16-2.13c-.58-1-1.36-2.13-2.13-3.29-.39-.58-.78-.58-1.55-1.16 0-.19-.19-.58-.19-.77-.58-.19-.58.19-1.36 0-.39 0-.39-.39-.77-.58a10.35 10.35 0 0 0-2.52-.58c-1.16-.19-1.74.19-2.9.39-1 .19-2.13.19-2.71.39-.39 0-.58.39-1 .58s-1 0-1.36.19a33.12 33.12 0 0 0-3.49 2.13c-1 .77-2.13 1.35-3.1 2.13-.39.19-.39.77-.78 1-.19.19-1.36.39-1.74 1-.39.19-.58.58-1 1.16-.19 0-.78.58-1 1-.39.39-.39 1.16-1.36 1.16-.19 2.71-2.13 4.45-3.49 6.39-.19.39-.78.58-1 1a20.58 20.58 0 0 0-1.35 3.68c0 .19-.58.58-.58.58-.19.39 0 1-.19 1.36 0 .19-.58.39-.58.58s.19.78 0 1c-.39.77-1.55 1.55-1.94 2.52-.19.58-.19 1.74-.39 2.32-.19.77-.78 1-1 1.55-.19.78-.19 1.55-.39 2.32 0 .19-.39.19-.58.58s0 .78 0 1.16c-.19.78-.78 1.16-1 1.94-.19.58-.19 1.55-.39 2.13 0 .19-.58.58-.58.58-.39 1 0 2.32-1.16 2.9.19 2.9-1.94 5.23-2.33 8.33a13.64 13.64 0 0 1 .19 2.71c0 1-.19 2.13-.19 2.91-.19.77-.58 1.35-.77 2.13-.19 1.16-.19 2.91-.39 4.45 0 .58-.39 1.16-.39 1.74 0 .39.39.58.39 1-.19 1.74.78 3.48-.19 5.42.39 1.16 1.74 3.49.19 4.65a6.26 6.26 0 0 1 1.55 2.52c.19 1.16 0 2.71.19 4.07.39 1.36 1.74 2.71 1.16 5-.39 1.74-2.13 1.94-3.49 3.1-1.16-.78-2.9-.58-4.45-1.36-.19-.19-.39-.58-.78-.77a40.4 40.4 0 0 0-4.84.19 19.62 19.62 0 0 1-3.29.58c-1 0-1.75-.58-2.52-.58-1.55-.19-2.71.58-4.06-.19-2.13-2.13-1-7.55.58-9.68-.58-.39-.39-1.36-1-1.74 1.16-.78 1.16-3.87 1-5.42s1-2.52 1.16-4.07c0-.77-.39-1.55-.39-2.52.19-3.1.58-9.1.77-13.94 0-1.16.19-2.9.39-4.65 0-.39-.39-.39-.39-.77 0 0 .58-1 .78-1.36 0-1.94-1-3.68.39-5.42.19-.58-.58-.78-.58-1.16-.19-.58.19-1.16 0-1.55a12.14 12.14 0 0 1-1.16-3.48c0-.39.39-.58.39-1a8.45 8.45 0 0 1-.78-1.36c0-.39.19-1 .19-1.55-.19-.77-.78-1.35-1-2.13 0-.58.39-.77.39-1.35 0-1.16-.39-4.65-1.16-5.81s-.39-1.94-.58-2.52c-.39-1.16-1-1.94-1.55-3.29-.19-.58-.58-.77-.78-1.74-.39-1.16-.78-1.94-1.16-2.91a28.52 28.52 0 0 0-4.65-6.58 12.26 12.26 0 0 1-4.26-1.74c-.78-.19-1.36.19-2.32.19-.58.19-1.55-.39-2.13-.19a6.26 6.26 0 0 0-1.16.58 30.7 30.7 0 0 0-3.87 1.36c-1.75.77-3.49 1.16-5 1.74-2.32 1.16-4.06 3.1-6.39 4.07-1.16 1.55-1.74 4.07-3.87 4.84.39 1-.19 2.13-.58 3.1-.19.58-.58 1-.58 1.55-.19.58-.19 1.16-.39 1.94-.19 0-.58.39-.78.58 0 .19.19.58 0 1-.39 1.16-.78 3.29-2.13 3.87.19 1.74-.58 2.52-1.16 3.48.19 3.29-1 5.81-1.94 8.33s-.58 6.78-2.52 9.68c-.19 1.16.77 1.36.58 2.52.19 1.35-1 1.55-1 2.71 1.36 3.49 1 9.87-1 13.17 1.16 1.36.58 2.32.58 4.45 0 .58.39.77.39 1.16-.19.77-.58 1.55-.39 2.13a10.15 10.15 0 0 0 .58 2.32c0 .58-.39 1-.39 1.74 0 1.16 0 3.87.19 5.81.19 2.9 2.13 5.81 1 8.71-5.42 3.29-11.62 0-18.78.19.39-1.16-1-.77-1.55-1.35 0-1.16-.58-2.52-.39-3.68 0-1.16.77-2.13 1-3.1 0-.58-.39-1.16-.39-1.94.19-2.71.58-6.2.58-9.68a15.93 15.93 0 0 1 .39-5.23c-1.16-2.71.39-6-.58-8.71 1.16-3.49 0-7.16 1.16-11.62.19-1-1-.77-1-1.55-.19-2.52-.19-4.84-.19-7.55 0-.77.39-1.36.39-1.94a23.53 23.53 0 0 0-.58-3.29c0-1.35.19-2.52.19-3.87-.19-1-.39-2.13-.58-3.1a23.92 23.92 0 0 1-.58-5.62c0-.58.39-1.16.39-1.55 0-.58-.39-1-.58-1.55a12.78 12.78 0 0 1-.19-2.52V374a9.31 9.31 0 0 0-.19-4.07c-.19-.78.19-1.16-.19-2.32 0-1.16-.39-1.74-.19-2.52 0-.77.39-1.55.19-2.32 0-1.16-.58-2.13-.78-3.29.19-1 .78-1.36 1-2.13-.58-2.32 0-5 .78-7.55.58-1.55 1.16-3.1 1.94-3.68 2.13-1.36 4.84.77 7 1.74 4.07-.39 8.91-.19 13.36-.39a31.27 31.27 0 0 1 2.13 3.29c0 2.13-.58 3.1.19 4.65 1.55.39 2.32-.58 3.48-1.16.19 0 .78-.19 1-.19 1-.77 1.94-2.32 3.49-2.52.58-.78 1.55-1 1.94-1.74a9.75 9.75 0 0 0 2.52-1c.19-.19 1-.39 1.16-.58.58-.77.78-.58 1-.58.58-.39 1-1.35 1.55-1.55s1.55-.39 2.33-.58l1.74-.58c1.55-.39 2.9-1.16 4.26-1.16 1.94-.19 3.87 1.16 6.2.19.58 0 1 .58 1.55 1 1.74-.58 5-.39 6.19.77a5.25 5.25 0 0 1 2.91-.58c1.16 0 2.9 1.94 3.87 2.52 1 .39 2.32.58 3.48 1a1.16 1.16 0 0 1 .19.78c.19 0 .58-.19.78 0 .39.58.78.39.78.58 1.55.77 4.65 2.9 5.23 4.26.77 1.16.77 2.9 1.16 4.26a11.69 11.69 0 0 0 1.36 1.94c.19.58.58 1.36.78 1.94.77 1.36 1.16 2.52 1.74 3.68 2.32-.39 3.29-2.32 4.26-4.26 1-.39 2.13-1 2.13-2.32 2.71-.19 2.33-3.1 5.23-3.1 0-1 1.16-1 1.16-2.13 2.52-1 4.45-2.9 6.78-4.26 1.36-.77 3.49-1.55 5.23-2.71 2.52.39 5.42-.39 8.52-.78 2.9-.19 6-.19 8.71-.39 2.52 0 5.81-.39 8.71.19 1 .19 2.13.77 3.1 1 1.16.39 2.52.39 3.49.77a8 8 0 0 1 2.13 1.36 13.39 13.39 0 0 0 2.52 1 7.5 7.5 0 0 0 1.55 1.94c.58.58 1 .39 1.16.58.39.19.39.78.58 1 1.16 1 2.32 2.32 3.68 2.9a3.64 3.64 0 0 0 1.55 2.13c.39 1.94 1.74 3.68 2.32 5.81l.39.77c.39 1.36.19 3.1.58 5 0 .39.39.77.58 1.55.19 1.55.39 3.29.78 5a14 14 0 0 1 .19 6.39c.78 1.16.78 3.29 1.75 4.26a23.4 23.4 0 0 0-.39 4.45c0 1.94 1 4.45-.19 5.62 2.71 3.48 1.36 8.71 1.55 14.33a34 34 0 0 1 .58 4.07c0 2.52-.77 5.62-.77 7.16 0 .58.39 1.36.19 1.94 0 .77-.58 1.74-.58 2.52a15.64 15.64 0 0 0 .58 2.9c0 .58-.39 1-.39 1.74s.39 1.36.19 1.94c0 1-.58 1.94-.58 2.71 0 .58.19 1.35.19 1.94V441c0 .77.58 1.94.58 2.71.19 1.74-.39 2.91.19 4.07.39 1 1.16 1 1.16 2.52A8.34 8.34 0 0 0 1241.09 451.3zM1370.81 402.12c-.19 1.16.78 3.1-.19 4.07 1.55 1.35.58 3.1.19 5.23-.19 1.16.19 2.52 0 3.29-.19.58-.77 1.16-1 1.74-.39.58-.39 1.55-1 1.55a8.69 8.69 0 0 1-.77 4.45c-.19.39-.19 1-.39 1.55 0 .39-.58.78-.58 1.16-.19.58.19 1.36 0 1.94s-.78 1.16-1 1.74c-.78 1.94-1.55 3.87-2.33 6-1.16 2.52-2.13 5-3.68 6.78a11.09 11.09 0 0 1 0 2.52 15.33 15.33 0 0 0-3.29 3.68 11.48 11.48 0 0 1-1.94 3.1c-1 1.16-2.33 1.74-3.49 2.91-1.36 0-1.16.39-2.13 0-1.94 1.94-3.48 2.71-6.58 3.68a4.27 4.27 0 0 0-1 .58c-.58 0-1.16-.19-1.55 0-1.55.39-3.1 1.36-5 1.36-.58 0-1.36-.39-1.94-.39-1 .19-1.74.77-2.91 1-1.94.39-4.26.19-6.58.39-.39 0-.58.39-.78.39-.39 0-.39-.39-.78-.39s-.78.58-1.16.58h-1.36c-.58 0-1.36-.19-1.75 0-1.55.19-2.9 1.16-5.42.77-.58-.19-.39.58-1 .58-3.1.19-7.94.78-10.46-1.16a3.77 3.77 0 0 1-2.52.19c-.58 0-.78-.39-1.36-.58h-1.16c-2.52-.58-5.61-1.36-7.55-2.9a5.38 5.38 0 0 0-1.75-.19c-1.74-1-2.71-2.32-5.23-2.52 0-1-.78-1-.58-1.94-1 .58-1.36-.58-1.94-1s-1.36-.58-1.94-1a8.9 8.9 0 0 0-1.36-1.36c-.58-.39-1.55-.58-1.94-1a8.44 8.44 0 0 1-1.55-1.94c-.39-.39-1.55-.77-1.16-1.74-1-.77-1.74-1.55-2.71-2.32-.19-1-.77-1.36-.58-2.52-.58-.58-1-.58-1.55-1.36-.19-.19-.19-.58-.39-.77-.77-.19-.39-.58-.58-.78-.39-.58-1-1.35-1.55-2.13a34.4 34.4 0 0 1-1.16-3.48c-.19-.58 0-.78-.19-1.36a4.42 4.42 0 0 1-.58-3.29c-.39-.77-1.36-1.16-1.55-1.94-.39-1.94-.19-3.68-.58-5.42-.19-1.16-1.36-2.13-.78-3.48-.78-.77-1-2.13-1.74-2.71.39-1.55-.58-3.1-.58-5a17.06 17.06 0 0 1 .39-2.9v-3.29a20.55 20.55 0 0 1 1.16-4.07c.19-1.35 0-2.71 1-3.1-1-3.29 1.16-5.81 1.16-9.1.58-.39.58-1.74 1.16-2.13 0-2.71 1.36-4.07 1.74-6.2 1.36-.58 1.75-1.94 2.52-3.1.39-.39.77-.39 1-.58.58-.39.58-2.13 1.94-1.94.39-1 0-.58 0-1.74 1.55-.58 2.13-2.13 3.68-3.1.39-.19 1.16-.39 1.55-.58.39-.39.78-.58 1.16-1a14.74 14.74 0 0 0 1.75-1.74A19 19 0 0 1 1280 362a14.63 14.63 0 0 1 3.29-2.52c.39-.19 1-1 1.55-1.16a4.27 4.27 0 0 1 1.55-.19c.78-.39 2.32-1.74 3.49-1 1.74-1.74 4.64-2.32 8.13-2.32 1 .19 1-.77 1.55-.77 2.52-.19 3.87-.77 7-.58 1 0 1.94.39 2.71.39a18.64 18.64 0 0 0 3.48-.58c.78 0 1.36-.19 1.94-.19a12.42 12.42 0 0 1 4.64 0c.58.19 1.36.77 1.94.77s1.55-.39 2.13-.39c.78.19 1.55.58 2.13.77a7.37 7.37 0 0 0 1.94.58c.78.19 1.74 0 2.52.19a9.54 9.54 0 0 1 3.1 1c1 .19 2.13.77 3.1 1 3.48.58 6.39-.19 9.68 1.16.58.19 1.36 1 2.13 1.36.19 0 .78-.19 1 0 .39.19.78 1 1.16 1.16.58.58 1.55.39 1.16 1.35 3.1 1 5.23 3.1 7.55 4.84A6.08 6.08 0 0 0 1360 370c1 1 1.74 1.94 2.71 2.9.39.39.19 1.16.58 2.13a31.85 31.85 0 0 0 2.32 4.26c0 1.94.19 1.55 1 3.1.58 1.35 1.16 3.68 2.91 4.45-.19 1.36 1 2.71 1.16 4.07a49.6 49.6 0 0 1 .19 5.23c0 .58-.39 1.16-.19 1.55 0 1 .39 1.94.39 2.9C1371.2 401.15 1370.81 401.54 1370.81 402.12zm-22.46-4.45a9.24 9.24 0 0 0 0-2.32c-.39-2.52-1.74-4.65-2.33-7.55-.19-1.55.19-3.29-.39-5-1-.39-.78-1.55-1.36-2.13-.58-1-1.94-1.35-2.13-2.52a22.07 22.07 0 0 1-3.68-1.94 17.77 17.77 0 0 1-3.68-.39c-1.16-.39-1.75-1.16-2.71-1.36-1.94-.19-2.13 1-4.26.58-1.36-.58-1.74-2.13-2.9-2.9a5.57 5.57 0 0 0-2.52-.19c-.78-.19-.78-1.16-1.94-1-2.13.58-4.84 1.94-7.75.77a5.67 5.67 0 0 0-2.32 1.36c0-.77-1.55-.19-2.13-.39-2.13 1.36-5.23 2.52-7.16 3.49-.58.19-1 0-1.36.39-.77.39-1.36 1.55-1.94 2.13a22 22 0 0 1-2.13 2.13 7.05 7.05 0 0 1-1.36.58c-2.33 1.16-3.49 3.48-5.62 4.45-.19 1.94-1.94 2.91-2.71 4.65-.58 1.36-.77 3.48-1.35 4.65a13.29 13.29 0 0 1-.58 1.55c-1 2.9 0 6-1.55 8.52.78.39.39 1.55.58 2.52.39 1.36 1.16 2.52.58 4.07-.19.39-.78.19-.58 1 .58.19.58 1 .78 1.55a4.19 4.19 0 0 1 1 1.55c.19.19-.19.58 0 1 .19.78 1.36 1.55.78 2.71 1.16.39 1 1.94 1.94 2.32-.58 1.35 1.36 2.71.78 5a4.16 4.16 0 0 1 1 .58c.19.39 0 .77.19 1.36.58.58 1.36 1.16 1.36 2.13 1.36.39 2.13 1.94 3.29 2.9.58.58 1.16.77 1.74 1.36 1.16.77 1.75 1.55 2.52 2.13.19.19.39.58.58.58.77.39 1.74.39 2.52.77s1.36 1.16 1.94 1.36c1.94.77 4.45.39 6.19 2.32 2.13 0 3.29 1 5.81.77 1 0 1.36 1 2.52 1a15.33 15.33 0 0 1 2.52-.58c1.16-.19 2.52.39 3.48.39a16.06 16.06 0 0 0 4.07-1.74 5.31 5.31 0 0 1 3.49-1.55c.19-1.16 1.36-1.74 2.13-2.52a10.65 10.65 0 0 0 2.91-3.1 24.57 24.57 0 0 1 1.94-2.32 53.45 53.45 0 0 0 4.26-7.16 19.48 19.48 0 0 0 1.94-4.07c.19-.39 0-1 0-1.55.19-1 1-1.35.39-1.74.58-2.13 1-3.29.78-4.65 1.36-1.36 1-3.1 1.36-5.42.19-1.16 1-2.13 1-3.1a42 42 0 0 0 .39-6.58C1348.74 398.06 1348.35 398.06 1348.35 397.67zm148.31-7.16c-.19 1.16.78 3.1-.19 4.07 1.55 1.36.58 3.1.19 5.23-.19 1.16.19 2.52 0 3.29-.19.58-.77 1.16-1 1.74-.39.58-.39 1.55-1 1.55a8.69 8.69 0 0 1-.77 4.45c-.19.39-.19 1-.39 1.55 0 .39-.58.77-.58 1.16-.19.58.19 1.35 0 1.94s-.78 1.16-1 1.74c-.78 1.94-1.55 3.87-2.33 6-1.16 2.52-2.13 5-3.68 6.78a11.09 11.09 0 0 1 0 2.52 15.32 15.32 0 0 0-3.29 3.68 11.48 11.48 0 0 1-1.94 3.1c-1 1.16-2.33 1.74-3.49 2.9-1.36 0-1.16.39-2.13 0-1.94 1.94-3.48 2.71-6.58 3.68a4.22 4.22 0 0 0-1 .58c-.58 0-1.16-.19-1.55 0-1.55.39-3.1 1.35-5 1.35-.58 0-1.36-.39-1.94-.39-1 .19-1.74.77-2.91 1-1.94.39-4.26.19-6.58.39-.39 0-.58.39-.78.39-.39 0-.39-.39-.78-.39s-.78.58-1.16.58h-1.36c-.58 0-1.36-.19-1.74 0-1.55.19-2.91 1.16-5.42.77-.58-.19-.39.58-1 .58-3.1.19-7.94.77-10.46-1.16a3.78 3.78 0 0 1-2.52.19c-.58 0-.78-.39-1.36-.58h-1.16c-2.52-.58-5.61-1.36-7.55-2.9a5.37 5.37 0 0 0-1.75-.19c-1.74-1-2.71-2.32-5.23-2.52 0-1-.78-1-.58-1.94-1 .58-1.36-.58-1.94-1s-1.36-.58-1.94-1a8.9 8.9 0 0 0-1.36-1.35c-.58-.39-1.55-.58-1.94-1a8.42 8.42 0 0 1-1.55-1.94c-.39-.39-1.55-.77-1.16-1.74-1-.77-1.74-1.55-2.71-2.32-.19-1-.78-1.35-.58-2.52-.58-.58-1-.58-1.55-1.36-.19-.19-.19-.58-.39-.77-.77-.19-.39-.58-.58-.77-.39-.58-1-1.36-1.55-2.13a35.51 35.51 0 0 1-1.16-3.49c-.19-.58 0-.77-.19-1.36a4.41 4.41 0 0 1-.58-3.29c-.39-.78-1.36-1.16-1.55-1.94-.39-1.94-.19-3.68-.58-5.42-.19-1.16-1.36-2.13-.78-3.49-.78-.77-1-2.13-1.74-2.71.39-1.55-.58-3.1-.58-5a17.06 17.06 0 0 1 .39-2.91v-3.29a20.54 20.54 0 0 1 1.16-4.07c.19-1.35 0-2.71 1-3.1-1-3.29 1.16-5.81 1.16-9.1.58-.39.58-1.74 1.16-2.13 0-2.71 1.36-4.07 1.75-6.2 1.35-.58 1.74-1.94 2.52-3.1.39-.39.77-.39 1-.58.58-.39.58-2.13 1.94-1.94.39-1 0-.58 0-1.74 1.55-.58 2.13-2.13 3.68-3.1.39-.19 1.16-.39 1.55-.58.39-.39.78-.58 1.16-1a14.73 14.73 0 0 0 1.75-1.74 18.94 18.94 0 0 1 3.29-2.13 14.63 14.63 0 0 1 3.29-2.52c.39-.19 1-1 1.55-1.16a4.27 4.27 0 0 1 1.55-.19c.78-.39 2.32-1.74 3.49-1 1.74-1.74 4.64-2.32 8.13-2.32 1 .19 1-.78 1.55-.78 2.52-.19 3.87-.77 7-.58 1 0 1.94.39 2.71.39a18.73 18.73 0 0 0 3.49-.58c.77 0 1.35-.19 1.94-.19a12.46 12.46 0 0 1 4.64 0c.58.19 1.36.78 1.94.78s1.55-.39 2.13-.39c.78.19 1.55.58 2.13.77a7.37 7.37 0 0 0 1.94.58c.78.19 1.74 0 2.52.19a9.54 9.54 0 0 1 3.1 1c1 .19 2.13.78 3.1 1 3.48.58 6.39-.19 9.68 1.16.58.19 1.36 1 2.13 1.36.19 0 .78-.19 1 0 .39.19.78 1 1.16 1.16.58.58 1.55.39 1.16 1.36 3.1 1 5.23 3.1 7.55 4.84a6.08 6.08 0 0 0 1.16 3.1c1 1 1.74 1.94 2.71 2.9.39.39.19 1.16.58 2.13a31.85 31.85 0 0 0 2.32 4.26c0 1.94.19 1.55 1 3.1.58 1.36 1.16 3.68 2.91 4.45-.19 1.35 1 2.71 1.16 4.07a49.61 49.61 0 0 1 .19 5.23c0 .58-.39 1.16-.19 1.55 0 1 .39 1.94.39 2.9C1497.05 389.54 1496.66 389.92 1496.66 390.51zm-22.46-4.45a9.24 9.24 0 0 0 0-2.32c-.39-2.52-1.74-4.65-2.33-7.55-.19-1.55.19-3.29-.39-5-1-.39-.78-1.55-1.36-2.13-.58-1-1.94-1.36-2.13-2.52a22 22 0 0 1-3.68-1.94 17.77 17.77 0 0 1-3.68-.39c-1.16-.39-1.75-1.16-2.71-1.35-1.94-.19-2.13 1-4.26.58-1.36-.58-1.74-2.13-2.9-2.9a5.57 5.57 0 0 0-2.52-.19c-.78-.19-.78-1.16-1.94-1-2.13.58-4.84 1.94-7.74.77a5.67 5.67 0 0 0-2.33 1.36c0-.77-1.55-.19-2.13-.39-2.13 1.36-5.23 2.52-7.16 3.49-.58.19-1 0-1.36.39-.77.39-1.36 1.55-1.94 2.13a22 22 0 0 1-2.13 2.13 7.05 7.05 0 0 1-1.36.58c-2.33 1.16-3.49 3.49-5.62 4.45-.19 1.94-1.94 2.9-2.71 4.65-.58 1.36-.77 3.49-1.35 4.65a13.27 13.27 0 0 1-.58 1.55c-1 2.9 0 6-1.55 8.52.78.39.39 1.55.58 2.52.39 1.36 1.16 2.52.58 4.07-.19.39-.78.19-.58 1 .58.19.58 1 .78 1.55a4.2 4.2 0 0 1 1 1.55c.19.19-.19.58 0 1 .19.77 1.36 1.55.78 2.71 1.16.39 1 1.94 1.94 2.32-.58 1.35 1.36 2.71.78 5a4.22 4.22 0 0 1 1 .58c.19.39 0 .78.19 1.36.58.58 1.36 1.16 1.36 2.13 1.36.39 2.13 1.94 3.29 2.9.58.58 1.16.77 1.74 1.36 1.16.77 1.75 1.55 2.52 2.13.19.19.39.58.58.58.77.39 1.74.39 2.52.77s1.36 1.16 1.94 1.36c1.94.77 4.45.39 6.19 2.32 2.13 0 3.29 1 5.81.77 1 0 1.36 1 2.52 1a15.2 15.2 0 0 1 2.52-.58c1.16-.19 2.52.39 3.48.39a16 16 0 0 0 4.07-1.74 5.31 5.31 0 0 1 3.49-1.55c.19-1.16 1.36-1.74 2.13-2.52a10.65 10.65 0 0 0 2.91-3.1 24.69 24.69 0 0 1 1.94-2.32 53.87 53.87 0 0 0 4.26-7.16 19.65 19.65 0 0 0 1.94-4.07c.19-.39 0-1 0-1.55.19-1 1-1.36.39-1.74.58-2.13 1-3.29.78-4.65 1.36-1.36 1-3.1 1.36-5.42.19-1.16 1-2.13 1-3.1a42 42 0 0 0 .39-6.58C1474.59 386.44 1474.21 386.44 1474.21 386.05zM1580.31 343.45a5.63 5.63 0 0 1-.39 1.74c-.19 1.55.19 2.9 0 4.65-.19 1.94-1.36 3.68-.78 5.62-1 1.16-1 2.32-1.55 3.87-.19.39-.58.77-.58 1.16a17.09 17.09 0 0 0-.39 2.9 6.87 6.87 0 0 1-1 1.55 13.78 13.78 0 0 1-1.55 2.9l-.58.58A11.53 11.53 0 0 0 1572 370c-.39.39-.39.77-.58 1.16-.19.19-.78 0-1 .19-.19.39-.78 1.16-1.16 1.74l-.58.58a11.16 11.16 0 0 1-3.87 2.52l-.58.58a2.33 2.33 0 0 0-1.55.58c-1.75 1-3.49 1.35-5 2.32a6.48 6.48 0 0 0-1.94 0 6.38 6.38 0 0 1-4.45 1.36 49.48 49.48 0 0 1-5.23 1 22.91 22.91 0 0 0-.78 4.84c0 .39.39.58.19.78 0 .39-.19.39-.19.77a20.57 20.57 0 0 0 .58 2.32c.19 3.29.19 7.74 0 11.81a32.41 32.41 0 0 0-.39 6c0 .78.39 1.74.39 2.52s-.39 1.74-.39 2.52c.19 1 1 2.13 1 3.29-.19 1.94-1.16 3.1-2.9 4.26-1.36 0-2.32-.58-3.49-.58-2.52-.19-4.65 1.16-7.16.77-1.36.77-2.52.77-5.23.39-.78-.19-1.55-.19-2.13-.39-.58-.58-1.55-.58-2.13-1 0 0 0-.58-.19-.77l-1-1a32.3 32.3 0 0 1 .58-5.23c.19-1 1-1.16 1.16-2.13.78-.77-.58-1.16-.58-2.13 0-1.16 1-1.36 1.36-2.32-1-.77-.78-2.13-1-3.29a49.07 49.07 0 0 1-.39-5.81c0-.39-.39-.58-.39-1a13.81 13.81 0 0 0-.39-4.26c-.39-3.29.19-6.78-.78-9.68-.19-1.16 1-1 .78-2.13a8.94 8.94 0 0 0-1.74-3.29c0-.78 0-1.36.39-1.74-.58-.58-.58-1.55-1-2.32a30.59 30.59 0 0 1-1-5.42c-.19-2.13-.39-3.1 1.16-4.45 1.55-.39 3.1.77 4.84 1 1 .19 2.32 0 3.49.19.58 0 1.55.58 2.13.58 1.36 0 2.52-1 3.49-.19a9.08 9.08 0 0 0 1.94-1 9.27 9.27 0 0 0 2.9-.78c.19 0 .39-.58.58-.58.58-.19 1.55 0 2.13-.19s1.16-1 2.13-.77a3.27 3.27 0 0 0 1.16-1.55c2.33-.19 3.68-1.74 5.42-3.1 1.74-1.16 2.91-2.9 4.26-3.87-.39-1 .39-1.55 1-2.32a21.46 21.46 0 0 0 2.32-5.23 15.41 15.41 0 0 0 1.36-6.78 14 14 0 0 0-.77-3.68c-.58-1.74-.78-3.1-2.33-4.07-.19-.19-.58-.19-.78-.39a12.92 12.92 0 0 0-2.32-1.16 7.26 7.26 0 0 1-1.16-1c-.58-.19-1.36-.19-2.13-.39a35.84 35.84 0 0 1-5-1.55c-2.13 1.16-4.46 0-6.58.39-3.29.58-5 3.49-7.74 4.65-1.16 2.32-1.75 5.42-2.33 9.1 0 1-.39 1.94-.39 2.71a11.75 11.75 0 0 0 1 2.32c-.19 2.32-1 4.07-2.52 5-1.55-.58-3.29-.19-5-1-1.55 1-2.52 1.74-5 1-.58 0-1.16-.58-1.75-.77s-1.36 0-1.74-.19c-1-.77-3.49-.77-4.26-1.16a22.36 22.36 0 0 1-3.1-2.71c-.78-1.36-.58-2.9-.78-4.26-.19-.39-.58-.39-.58-1-.19-.39-.19-1-.39-1.16a15 15 0 0 0-.78-2.13 4.36 4.36 0 0 0 0-3.48 2.64 2.64 0 0 0 .39-2.71c.78-.58 1-1.74 1.36-2.52a64.23 64.23 0 0 1 3.1-7.75 14.39 14.39 0 0 1 2.9-1.74c.78-.58-1-1.16.19-1.94a7.4 7.4 0 0 1 3.87-2.9c.39-.39.39-1.55 1-1.74a18.06 18.06 0 0 0 3.49-2.32c1-.78 1.36-.78 3.1-1.36a6.16 6.16 0 0 1 1.75-.58l1.74-.58c.58-.19 1-.77 1.55-1 1-.19 3.1-.58 4.26-.77.19 0 2.71.39 3.1.39s1.16.39 1.55.39c1.16 0 2.71-.39 3.87.58 2.32-.77 4.84.19 6.78.78 1.16.39 2.52 0 2.9 1 .58-.19.78 0 1.55 0 .58.39.78 0 1.16.19.39 0 .58.39 1.16.58a5.24 5.24 0 0 1 1.75 0c.58 0 .58.39 1.16.58 1.16.39 1.94.19 2.9.78 1.16.39 2.33 1.16 3.68 1.74.77.39 1.55.58 2.32 1a28.28 28.28 0 0 1 4.07 3.1c.39.19.39.58.78.77a6.14 6.14 0 0 1 1.16.77c.39.19.58.58 1 .78a14 14 0 0 1 1.94 2.52 11.47 11.47 0 0 1 1.55 1.55 13.57 13.57 0 0 1 1.16 1.74c.39.58 1 1.36 1.16 1.74.19 1.16 0 2.71.19 3.87.19 1.55.58 3.1 1 4.84.19.39.58.77.58 1.16.19.58-.19 1.74 0 2.32 0 .58.58 1.16.58 1.55A15.41 15.41 0 0 1 1580.31 343.45zm-31.18 105.14c-.77 1-.58 2.71-1.16 3.87-.19.39-1.36.39-1 1.16-.58.19-1.16.58-1.75.77a2.06 2.06 0 0 1-1.74 1.36c-.58.19-.39.77-.39 1.35a5.88 5.88 0 0 0-3.68 2.13 16.79 16.79 0 0 0-4.45 1.16c-1.94-.39-3.49-1.16-5.23-1.55-.58-.19-1.36-.19-1.74-.39a36.67 36.67 0 0 1-2.71-2.52 13.21 13.21 0 0 1-2.33-2.32c-.58-1-.39-2.32-.77-3.29a5.21 5.21 0 0 0-1-1.16c-.19-.58-.19-1-.78-1.16.19-2.9-1.16-4.07-.39-7.55 0-.39.58-.78.58-1.16a8.26 8.26 0 0 1 .58-2.32 5.12 5.12 0 0 1 1-1.16 1.9 1.9 0 0 1 1.55-.77 11.28 11.28 0 0 0 1.16-2.13h1.16c1.36-1.94 3.48-2.9 5.81-3.68a9.71 9.71 0 0 1 4.07 2.52 7.82 7.82 0 0 1 2.13 0c.39 0 .58.39 1.16.58 1.16.39 1.55-.19 2.33.39.78.39 1.36 1.55 1.94 2.32l2.13 2.13c.77.19.77 1 1.16 1.16.19.39.39.39.58.77.39.58 1.55 1.74 2.32 2.71A32.52 32.52 0 0 1 1549.14 448.59z"/>
                        <path class={[Fill.lightBlack, Opacity._03, MixBlend.multiply].join(" ")} d="M297.36 148.82c15.18-16.26 32-30.83 49-45.07a87.63 87.63 0 0 0-22.67-26.67L322 75.8a169.81 169.81 0 0 0-20.81-8.11 242.42 242.42 0 0 0-60.87-11.17c-.94.18-1.89.36-2.82.57a13.34 13.34 0 0 1-2.43 1.44 17.44 17.44 0 0 1-3.36 3.77c-1.06 3.25-2.08 6.52-3.23 9.69 1.22 24.08 8.62 49.46 18.64 69.11a198 198 0 0 0 17.23 18.63c6.69 6.42 21.48 10.33 28.81 7.65C291 161.6 291.69 154.9 297.36 148.82zM861.81 323.1c-4.71-18.95-11.46-37.62-18.56-56.2A75.39 75.39 0 0 1 873.15 261l1.94.06a180.25 180.25 0 0 1 20.11 5.59 268.36 268.36 0 0 1 53.18 24.76c.67.62 1.33 1.24 2 1.88a13.38 13.38 0 0 0 1.28 2.25 15.17 15.17 0 0 0 1 4.31c-.62 2.74-1.28 5.47-1.79 8.21-11.78 15.49-29 28.6-45.78 36.46a173.77 173.77 0 0 1-22 3.36c-8.17.76-21.63-4.45-26.23-10.14C861.13 335.05 863.57 330.18 861.81 323.1zM490.18 190.5c-17.63-11.4-50.67-13.17-70.93-10.49-23.11 3.06-50.35 14.79-66 33-6.27 7.3 4.32 18 10.64 10.64 12.91-15 33.64-20.38 52.39-24 17.42-3.36 51.37-5.87 66.48 3.91C490.87 208.84 498.3 195.75 490.18 190.5zM777.39 294.33C770 283.06 756.74 269.11 746 261c-23.27-17.6-54.67-21.72-84-21.34a7.74 7.74 0 0 0-2.5.46A44.26 44.26 0 0 0 662 250.19a106.71 106.71 0 0 1 52.34 16.93 108 108 0 0 1 13.86 8.35c9.9 7.08 20.34 15 27.84 24.66 3.52 4.53 15.81 20.37 16.28 26.06.8 9.59 15.86 9.67 15 0C786.43 314.47 783.68 304 777.39 294.33z"/>
                        <path class={[Fill.lightBlack, Opacity._03, MixBlend.multiply].join(" ")} d="M541.94 166.64c-21.13-25.45-58.29-29.78-88-29.84a231.77 231.77 0 0 0-37.09 3.13c-8.61 2.47-17.28 5.06-25.71 8.18a242.72 242.72 0 0 0-38.79 22.3c1.64 3.79 5.7 6.23 9.89 3.09 9-6.74 27.39-9 37.87-11.43 14.88-3.5 29.83-4.81 45.05-6 27.33-2.14 66.35-2.58 86.11 21.22C537.48 184.73 548.09 174 541.94 166.64zM799.38 305.81c-.16-12.5 1.34-25.18.19-37.58a88.24 88.24 0 0 0-3.81-18.17 111.08 111.08 0 0 0-19.63-21c-10.34-8.72-27.82-18.17-40.72-23.14-18.79-7.23-37.26-7.93-57.09-7.58-5.55.1-7.91 5.08-7.1 9.29-.13-.68 22.45 1.86 24.78 2.37 31.7 7 55.58 22.31 77.82 45.85 10 10.58 19.74 22.73 21.34 37.2C795.66 297.6 795.9 303.17 799.38 305.81zM565.77 137.8c-11-14.1-20.23-22.3-37.46-28.28-24.88-2.53-49.42 1.82-74.05 5.06a6.94 6.94 0 0 0 7.12 6c18.16 0 39.66-3.19 57.25 1.68 17 4.7 26.14 13 36.5 26.22C561.07 156.05 571.66 145.34 565.77 137.8zM756.15 176.77c0-.08 0-.17-.08-.25-13-8.73-24.38-19.93-40.35-23.37-20.1-4.33-51.19-1-63.73 6.27-8.38 4.88-9.7 15 0 15 19.13 0 41-2.84 59.91.77 17.69 3.38 29.94 11.64 45.47 19.57a7.23 7.23 0 0 0 5.58.54C760.43 189.32 758.41 183.06 756.15 176.77z"/>
                        <path class={[Fill.greenSix, Opacity._06].join(" ")} d="M827.31 498c-.51 11.1-12.79 15.33-29 15.41-17.75.08-27.46-8.17-26.83-26 .67-19 10-33.73 29.71-34.74C826.85 451.31 825.68 472.41 827.31 498zM805 396.44c11.92 3.18 19.1 9.46 18.55 21.3-.56 12.14-9.25 14.47-19.46 14.2-11.72-.32-15.89-6.95-16-17.89C788.05 401.69 797.28 399.74 805 396.44zM775 562c-9.68-.85-18.42-5.68-18.12-16.44.27-10 8-17.53 18.58-17.29 9.33.22 15.42 6.07 15.15 16.65C790.35 554.86 786.18 561 775 562zM232.17 335.1c-6.28 11.6 3.62 23.43 20.09 33.45 18 11 32.94 8.51 43.22-10 11-19.74 10.52-40.41-8.94-53.54C261.21 287.92 249.48 310.1 232.17 335.1zM298.18 237.93c-14.07-4.07-25.22-2.08-31.92 10.31-6.87 12.7.55 20.39 11.1 26.36 12.12 6.86 20.42 2.66 27.21-8.42C312.25 253.67 304.06 246 298.18 237.93z"/>
                    </g>
                </g>
            </g>
        </svg>

    );
}
}

Cow.defaultProps = {
    xPos: 0,
    yPos: 0,
    width: 824,
    height: 840
}

export default Cow;