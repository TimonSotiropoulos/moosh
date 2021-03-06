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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.2 125.1">
            <title>
                Single_Pasta
            </title>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path class={[Fill.pastaRed].join(" ")} d="M0 0H84.2V125.1H0z"/>
                    <path class={[Fill.pastaGreyA].join(" ")} d="M0 5.2H84.2V17.2H0zM0 107.9H84.2V119.9H0z"/>
                    <path class={[Fill.pastaGreyB].join(" ")} d="M28.15,46.58h0a3.7,3.7,0,0,0-1.85.56.93.93,0,0,0-.89.36,7.54,7.54,0,0,0-4,2.49c-1,.16-1.19,1.22-1.86,1.74l-.6.39c-.77-.1-.54.48-.58.87l-1.59,1.73a.26.26,0,0,0-.27,0A7.08,7.08,0,0,1,15,57.52c-.84-.25-.88.34-.94.9l-1.5.93c-1.52.67-1.29,2-1.07,3.18.32,1.7,1.36,2.75,2.65,2.64a15.23,15.23,0,0,1,4,.44c1.19.21,2.06,1.42,3.48,1.28.69-.07,1.23,1.19,1.46,1.09,1.24-.55,2.18.39,3.2.4,2.66,0,5.39.19,8-.83a20,20,0,0,0,8.27-5.83c1.9-2.3,3.09-5.21,6-6.71,1.16-.6,1.15-2.42.27-4.29a2.12,2.12,0,0,0-2.61-1.18,2.65,2.65,0,0,0-1.52-.13.46.46,0,0,0-.29,0l-3.07-1.14a1.57,1.57,0,0,0-1.19-.5,8.46,8.46,0,0,0-2.43-.88.54.54,0,0,0-.63-.29l-2.14-.26-.53-.09A4.79,4.79,0,0,0,31.78,46H31.2L29,46.37l-.63.1Z"/>
                    <path class={[Fill.pastaYellowA].join(" ")} d="M19.56,51.74c.68-.52.85-1.58,1.86-1.74,0,.57-.08,1.16.58,1.45,0,1.46.67,2.75,1,4.11a20,20,0,0,0,2,6,5.77,5.77,0,0,0,.86,3.33.83.83,0,0,0,1.14.48.75.75,0,0,0,.4-1c-.53-1-.36-2.21-1.13-3.09l0-1.25.89.31.32.61c.32,1.11.62,2.23,1,3.34a1.2,1.2,0,0,0,1,.88c.26,0,.6-.06.61-.32,0-1.35.56-.63,1-.25.67.59.91-.37,1.43-.4.37,0,.55-.41.38-.83-.57-1.4-.57-3-1.4-4.3a4.46,4.46,0,0,0-.13-1.5c-.88-2.84-1.72-5.7-2.58-8.55-.1-.83-.65-1.55-.6-2.42h0a.49.49,0,0,0,.24-.1l.63-.1.64,2.34,2.46,8.81c-.1.81,1,1.08.87,1.86-.13,1,.6,1.81.7,2.77.05.5.35,1,1,.86s.66-.58.5-1.15c-.47-1.64-.88-3.3-1.32-5L31.49,48.7A3.33,3.33,0,0,1,31.2,46h.58c-.18.91.87,1.48.66,2.39l2.11,7.29c.52,1.63,1,3.26,1.58,4.87.14.39,0,1.26.74,1a1.11,1.11,0,0,0,.82-1.52c-.51-1.53-.9-3.09-1.34-4.64a1,1,0,0,0-.59-.65c.23-2.22-1.09-4.05-1.52-6.11.3-.83-.84-1.69.07-2.5l.53.09c1.07,4.57,2.59,9,4,13.56.31-.69,1.35-.87,1.07-1.85-.41-1.44-.77-2.89-1.23-4.31A25.69,25.69,0,0,1,37,46.55a.54.54,0,0,1,.63.29,76.49,76.49,0,0,1,2.7,8.72c.15.55,0,1.48.85,1.26.58-.15.93-1,.85-1.71a4.1,4.1,0,0,0-.21-.73A38.15,38.15,0,0,1,40,47.72a1.58,1.58,0,0,1,1.19.5c0,1.69.76,3.17,1.19,4.75.11.41,0,1.06.6,1.05s.76-.62.91-1.07a1.64,1.64,0,0,0-.1-1.46c-.69-.93-.25-1.54.47-2.12a.47.47,0,0,1,.29,0,4.91,4.91,0,0,0,.08,1.35c.14.41,0,1.25.69,1.11a1.22,1.22,0,0,0,1-1.47c-.06-.29-.16-.58-.24-.87a2.12,2.12,0,0,1,2.61,1.18c.88,1.87.89,3.68-.27,4.29-2.87,1.5-4.06,4.41-6,6.71a20,20,0,0,1-8.27,5.83c-2.57,1-5.29.87-8,.83-1,0-2-1-3.2-.4-.23.1-.77-1.16-1.46-1.09-1.43.15-2.29-1.06-3.48-1.28a15.23,15.23,0,0,0-4-.44c-1.29.11-2.33-.94-2.65-2.64-.22-1.2-.45-2.52,1.07-3.18.33,1,.64,1.91,1,2.85.23.59.78.63,1.29.49s.47-.69.32-1.12c-.36-1.05-.74-2.1-1.11-3.15.07-.56.1-1.15.94-.9l1.23,4a1.87,1.87,0,0,0,.43,1.4c.43.52,1.1,1,1.68.6s0-1-.28-1.4l0-.33c0-1.63-1.14-2.94-1.21-4.55a7.45,7.45,0,0,1-.31-2.5.26.26,0,0,1,.27,0c.31.15.65.25.65.71a19.59,19.59,0,0,0,1,4.06,4.13,4.13,0,0,0,1.16,2.67,7.23,7.23,0,0,0,.05,1.36,1.47,1.47,0,0,0,1.64,1.25c.95-.22.06-1,.07-1.49a3,3,0,0,0-.25-.86l-.29-.29h0a5.22,5.22,0,0,0-.2-1.64c-.77-2.49-1.5-5-2.24-7.5,0-.39-.18-1,.58-.87a4.5,4.5,0,0,1,.66,1.33c.9,3,1.41,6.1,2.72,9-.12.86.56,1.49.65,2.3.06.59.68.63,1.07.63.59,0,.39-.59.41-.95a4.72,4.72,0,0,0-.65-2.29c-.35-2.67-1.51-5.13-2.12-7.74-.2-.85-.18-2.12-1.74-1.88C19.69,52.53,19.61,52,19.56,51.74Z"/>
                    <path class={[Fill.pastaYellowB].join(" ")} d="M37,46.8a24.8,24.8,0,0,0,1.72,7c.46,1.39.83,2.82,1.23,4.23.28,1-.75,1.14-1.07,1.82-1.44-4.46-3-8.81-4-13.3Z"/>
                    <path class={[Fill.pastaYellowC].join(" ")} d="M19.56,51.74c.05.3.13.79.4.75,1.56-.24,1.54,1,1.74,1.88.61,2.61,1.77,5.06,2.12,7.74-.49.13-1.07-.17-1.48.31-1.31-2.86-1.82-6-2.72-9A4.5,4.5,0,0,0,19,52.12Z"/>
                    <path class={[Fill.pastaYellowB].join(" ")} d="M40,47.72a38.15,38.15,0,0,0,1.75,6.66,4.1,4.1,0,0,1,.21.73c.07.75-.27,1.56-.85,1.71-.86.22-.7-.7-.85-1.26a76.49,76.49,0,0,0-2.7-8.72A8.46,8.46,0,0,1,40,47.72Z"/>
                    <path class={[Fill.pastaYellowA].join(" ")} d="M25.4,47.51a.93.93,0,0,1,.89-.36L26.94,49c.81,3.47,2.11,6.8,2.75,10.32.86,1.14.8,2.59,1.44,3.9a1.67,1.67,0,0,1-1.38-1c-.43-.68-.18-1.59-.72-2.24-1-3.36-1.79-6.81-3-10.11Z"/>
                    <path class={[Fill.pastaYellowD].join(" ")} d="M18.37,53c.74,2.5,1.47,5,2.24,7.5a5.22,5.22,0,0,1,.2,1.64l-1.24,0a4.13,4.13,0,0,1-1.16-2.67,19.59,19.59,0,0,1-1-4.06c0-.46-.34-.56-.65-.71Z"/>
                    <path class={[Fill.pastaYellowB].join(" ")} d="M44.3,49.37c-.72.58-1.16,1.19-.47,2.12a1.64,1.64,0,0,1,.1,1.46c-.15.45-.37,1.06-.91,1.07s-.48-.64-.6-1.05c-.43-1.57-1.22-3.06-1.19-4.75Z"/>
                    <path class={[Fill.pastaYellowE].join(" ")} d="M25.4,47.51,26,49.88a2,2,0,0,0-1.57.66c-.51-.52-.17-1.45-.89-1.94-.55.71-.22,1.48-.29,2.2-.43.2-.71.69-1.26.65-.66-.3-.6-.89-.58-1.45A7.54,7.54,0,0,1,25.4,47.51Z"/>
                    <path class={[Fill.pastaYellowB].join(" ")} d="M14.05,58.42c.37,1,.75,2.1,1.11,3.15.15.43.32.95-.32,1.12s-1.06.1-1.29-.49c-.37-.94-.67-1.9-1-2.85Z"/>
                    <path class={[Fill.pastaYellowE].join(" ")} d="M16.51 54.77a7.45 7.45 0 0 0 .31 2.5c-.55 0-.54.44-.62.86-.25 1.3.43 2.32.95 3.39l-.93 0-1.23-4A7.08 7.08 0 0 0 16.51 54.77zM34.31 46.2c-.91.81.23 1.68-.07 2.5-.6-.08-1.17-.42-1.8-.27.21-.92-.84-1.48-.66-2.39A4.79 4.79 0 0 1 34.31 46.2zM29.66 48.72L29 46.37 31.2 46a3.33 3.33 0 0 0 .29 2.66zM26.94 49l-.64-1.89a3.7 3.7 0 0 1 1.85-.56c0 .87.5 1.59.6 2.42zM46.11 49.54c.08.29.18.58.24.87a1.22 1.22 0 0 1-1 1.47c-.67.14-.55-.7-.69-1.11a4.91 4.91 0 0 1-.08-1.35A2.65 2.65 0 0 1 46.11 49.54z"/>
                    <path class={[Fill.pastaYellowE].join(" ")} d="M28.39,46.48a.49.49,0,0,1-.24.1Z"/>
                    <path class={[Fill.pastaYellowD].join(" ")} d="M26.94,49l1.81,0c.86,2.85,1.7,5.71,2.58,8.55a4.47,4.47,0,0,1,.13,1.5l-1.77.3C29,55.84,27.75,52.51,26.94,49Z"/>
                    <path class={[Fill.pastaYellowC].join(" ")} d="M24.44 50.54A2 2 0 0 1 26 49.88c1.23 3.3 2 6.75 3 10.11-.56.22-.81.95-1.52.93l-.32-.61c0-.34.07-.69-.28-.92zM22 51.45c.55 0 .83-.45 1.26-.65a62.08 62.08 0 0 1 2.79 8.56.56.56 0 0 0 .25.64q0 .63 0 1.25a1.68 1.68 0 0 0-1.27.32 20 20 0 0 1-2-6C22.68 54.2 22 52.91 22 51.45z"/>
                    <path class={[Fill.pastaYellowE].join(" ")} d="M27.51,60.93c.71,0,1-.71,1.52-.93.54.65.28,1.56.72,2.24a1.67,1.67,0,0,0,1.38,1c-.64-1.31-.58-2.75-1.44-3.9l1.77-.3c.84,1.31.83,2.9,1.4,4.3.17.42,0,.8-.38.83-.52,0-.76,1-1.43.4-.43-.38-1-1.1-1,.25,0,.26-.35.37-.61.32a1.2,1.2,0,0,1-1-.88C28.14,63.16,27.83,62,27.51,60.93Z"/>
                    <path class={[Fill.pastaYellowD].join(" ")} d="M29.66 48.72h1.83l2.41 8.21c-.65 0-1 .85-1.78.61zM32.44 48.43c.64-.15 1.2.19 1.8.27.43 2.05 1.75 3.89 1.52 6.11-.53.13-.56.94-1.21.91z"/>
                    <path class={[Fill.pastaYellowB].join(" ")} d="M34.54 55.72c.66 0 .68-.78 1.21-.91a1 1 0 0 1 .59.65c.44 1.55.83 3.11 1.34 4.64a1.11 1.11 0 0 1-.82 1.52c-.73.22-.6-.66-.74-1C35.55 59 35.06 57.34 34.54 55.72zM32.12 57.53c.75.24 1.13-.57 1.78-.61.44 1.65.85 3.31 1.32 5 .16.57.21 1-.5 1.15s-1-.36-1-.86c-.1-1-.83-1.74-.7-2.77C33.09 58.61 32 58.34 32.12 57.53z"/>
                    <path class={[Fill.pastaYellowE].join(" ")} d="M25.06,61.57a1.68,1.68,0,0,1,1.27-.32c.77.88.6,2.11,1.13,3.09a.75.75,0,0,1-.4,1,.83.83,0,0,1-1.14-.48A5.77,5.77,0,0,1,25.06,61.57Z"/>
                    <path class={[Fill.pastaYellowB].join(" ")} d="M22.33 62.41c.41-.49 1-.19 1.48-.31a4.72 4.72 0 0 1 .65 2.29c0 .36.18.94-.41.95-.39 0-1 0-1.07-.63C22.89 63.9 22.21 63.27 22.33 62.41zM19.57 62.16l1.24 0h0l.29.29a3 3 0 0 1 .25.86c0 .52.88 1.27-.07 1.49a1.47 1.47 0 0 1-1.64-1.25A7.23 7.23 0 0 1 19.57 62.16z"/>
                    <path class={[Fill.pastaYellowD].join(" ")} d="M17.16,61.51c-.52-1.07-1.19-2.09-.95-3.39.08-.42.07-.81.62-.86.07,1.6,1.24,2.92,1.21,4.55l-.88-.29Z"/>
                    <path class={[Fill.pastaYellowB].join(" ")} d="M16.23,61.53l.93,0h0c-.07.75.17,1,.91.62.31.44.78,1.06.28,1.4s-1.25-.08-1.68-.6A1.87,1.87,0,0,1,16.23,61.53Z"/>
                    <path class={[Fill.pastaYellowE].join(" ")} d="M26.3 60a.56.56 0 0 1-.25-.64l.86 0c.35.23.29.58.28.92zM18.06 62.14c-.73.42-1 .13-.91-.62l.89.29z"/>
                    <path class={[Fill.pastaYellowD].join(" ")} d="M21.09,62.42l-.29-.29Z"/>
                    <path class={[Fill.pastaYellowA].join(" ")} d="M26.91,59.39l-.86,0a62,62,0,0,0-2.79-8.56c.07-.72-.26-1.49.29-2.2.72.49.38,1.41.89,1.94Z"/>
                    <path class={[Fill.pastaYellowC].join(" ")} d="M53,58.71c0-.42.22-.61.64-.54,1.12,1.74,2.22,3.49,3.37,5.21.24.37.55,1.14,1.1.55.4-.43,1.39-.8.59-1.85-1.12-1.47-2-3.12-3.24-4.5l0-.32h.3c1.6,1.05,2.91.31,4.18-.67.6.57.37,1.54,1,2.08.22.17.28.65.63.5a1.19,1.19,0,0,0,.47-.71,3.65,3.65,0,0,0,.06-.89c1-.2,0-1.58.18-2.1a4.54,4.54,0,0,0,1-.18,4.14,4.14,0,0,1,1-.16c.42.66,1.89,1.37.93,2.63a8.26,8.26,0,0,0-2.84,3.11c-.41.57-.86,1.12-1.24,1.72a16.34,16.34,0,0,1-8.3,7c-1.37.51-2.77.93-4.16,1.39l-.63.24a4.19,4.19,0,0,0-1.82.4,7.22,7.22,0,0,0-2.85,1c-2.41,1.25-3.05,3.52-1.57,5.31a4,4,0,0,0,3.28,1.31c1.88,0,3.75.06,5.63.2s3.52.71,5.28.07l.62-.06L58,79.35l.28-.14C63,77.78,66.44,74.9,67.9,70c1-3.39,1.45-7,3.3-10.07a1.43,1.43,0,0,0-.14-1.44A2.75,2.75,0,0,0,67.63,57c-1.27,0-1.48-1.14-2.07-1.88A7.82,7.82,0,0,1,70,54.49c1.43.11,3.34,2.79,2.71,4-1.88,3.73-2.22,7.88-3.47,11.78-2,6.26-6.7,9.37-12.83,10.72-2.53.55-5,0-7.55-.23-2-.19-4,.1-5.91-.38A5.56,5.56,0,0,1,39.4,78c-1.11-1.76-.93-3.09.57-4.94.86-1.07,2.22-1.8,2.25-3.43,0-.11.42-.21.65-.32.13.37.06.82.42,1.1a1.33,1.33,0,0,0,1.29.13c.3-.1.59-.4.38-.68-.46-.59-.37-1.66-1.44-1.74.09-.65.09-1.35,1-1.5-.05,1.28,1.16,1.94,1.5,3.05.17.56.81.12,1.2,0,.57-.23.33-.62.09-1a17.27,17.27,0,0,0-1.39-2c-.45-.49-.08-.67.16-1,1.22.36,1.15,1.68,1.82,2.46.45.52.87,1.23,1.57.76s.16-1.18-.2-1.6a42.15,42.15,0,0,1-2.57-3.73c-.14-.87.45-1,1.08-1,.52,2.07,2.09,3.56,3,5.43a.52.52,0,0,0,.87.22c.38-.31.71-.66.24-1.13s-.71-1.37-1.21-1.92c-.9-1-1.22-2.44-2.47-3.14.09-.53.34-.9.94-.9,1.25,1.82,2.52,3.62,3.72,5.47.42.65.86.58,1.38.3.73-.39.25-.91,0-1.27C53,63.82,51.76,62,50.53,60.17c.1-.38.06-.91.73-.69a58.27,58.27,0,0,1,3.84,5.69c.22.31.34,1.14,1.08.63s.54-.88.17-1.54C55.28,62.38,53.88,60.71,53,58.71Zm7.87,1.45c-.45-.87-.73-1.9-1.89-2-.46,0-1.24.22-1,.83.36.9.78,2,1.74,2.33C60.26,61.51,60.76,60.79,60.91,60.16Z"/>
                    <path class={[Fill.pastaYellowE].join(" ")} d="M55.49 57.57c1.25 1.38 2.12 3 3.24 4.5.8 1-.19 1.42-.59 1.85-.54.58-.85-.18-1.1-.55-1.14-1.72-2.25-3.47-3.37-5.21l.9-.34.29-.12zM50.53 60.17C51.76 62 53 63.82 54.2 65.68c.24.36.72.88 0 1.27-.53.28-1 .35-1.38-.3-1.2-1.85-2.48-3.65-3.72-5.47zM53 58.71c.84 2 2.24 3.67 3.3 5.55.37.66.45 1.11-.17 1.54s-.86-.31-1.08-.63a58.27 58.27 0 0 0-3.84-5.69zM48.13 62.08c1.25.7 1.57 2.15 2.47 3.14.5.55.64 1.37 1.21 1.92s.15.82-.24 1.13A.52.52 0 0 1 50.7 68c-.88-1.87-2.45-3.36-3-5.43zM46.65 63.64a42.15 42.15 0 0 0 2.57 3.73c.36.43.86 1.16.2 1.6s-1.13-.24-1.57-.76c-.67-.78-.6-2.1-1.82-2.46h0l-.32-.93A3 3 0 0 1 46.65 63.64zM46 65.76c-.23.29-.6.47-.16 1a17.27 17.27 0 0 1 1.39 2c.24.35.49.75-.09 1-.38.15-1 .59-1.2 0-.34-1.11-1.56-1.77-1.5-3.05a1.46 1.46 0 0 1 .57-.94l1 .05z"/>
                    <path class={[Fill.pastaYellowD].join(" ")} d="M62.2,57.56a3.65,3.65,0,0,1-.06.89,1.19,1.19,0,0,1-.47.71c-.35.15-.42-.32-.63-.5-.66-.54-.44-1.51-1-2.08L60,56l1.52-.36C61.81,56.29,61.07,57.25,62.2,57.56Z"/>
                    <path class={[Fill.pastaYellowC].join(" ")} d="M60 56l0 .55c-1.28 1-2.59 1.72-4.18.67.24-.55.9-.42 1.21-.57C58.25 56.44 59.56 56 60 56zM64.37 55.12l.93-.11.27.07c.59.74.81 1.89 2.07 1.88-.14.31.39 1.11-.44.88-.66-.19-1.28.14-1.89-.08 1-1.26-.51-1.46-.93-2.12Q64.37 55.37 64.37 55.12z"/>
                    <path class={[Fill.pastaYellowE].join(" ")} d="M43.51,68.14c1.07.08,1,1.15,1.44,1.74.22.28-.07.58-.38.68a1.33,1.33,0,0,1-1.29-.13c-.36-.28-.29-.72-.42-1.1Z"/>
                    <path class={[Fill.pastaYellowC].join(" ")} d="M62.2 57.56c-1.13-.32-.39-1.27-.65-1.89l.26-.09a5.15 5.15 0 0 1 1-.16l.09.59C62.66 56.54 63.17 57.37 62.2 57.56zM46 65.76l-1-.05c.07-.4.13-.82.66-.88zM54.87 57.71l-.29.12z"/>
                    <path class={[Fill.pastaYellowF].join(" ")} d="M65.3,57.75c.56-.19.64-.26,1.31-.44.36-.1.77-.26,1-.35a2.75,2.75,0,0,1,3.43,1.52,1.43,1.43,0,0,1,.14,1.44C69.34,63,68.9,66.6,67.9,70c-1.46,4.91-4.87,7.79-9.66,9.21l-.28.14-1.24.09a1.29,1.29,0,0,0-1.23-1.15h0c0-1.32-1.41-1.7-1.83-2.74,4.25-.7,7.81-2.54,10.27-6.21a19,19,0,0,0,2.71-5.71c.63-2.4-.32-3.11-2.82-2.92-.45,0-.9.11-1.34.16A8.26,8.26,0,0,1,65.3,57.75Z"/>
                    <path class={[Fill.pastaYellowF].join(" ")} d="M62.47,60.86c.45-.06.89-.13,1.34-.16,2.5-.19,3.46.52,2.82,2.92a19,19,0,0,1-2.71,5.71c-2.46,3.67-6,5.5-10.27,6.21-.53,0-.75-.38-1-.76a2.83,2.83,0,0,0-2-1.38h0c-.16-1.15-1.39-1.49-1.82-2.43,1.39-.46,2.79-.88,4.16-1.39a16.34,16.34,0,0,0,8.3-7C61.6,62,62.05,61.43,62.47,60.86Z"/>
                    <path class={[Fill.pastaYellowF].join(" ")} d="M56.1,79.49c-1.76.64-3.54.07-5.28-.07s-3.75-.18-5.63-.2a4,4,0,0,1-3.28-1.31c-1.49-1.79-.85-4.06,1.57-5.31a7.23,7.23,0,0,1,2.85-1,1.92,1.92,0,0,1-.09.59c-1.1,2.12-.78,2.74,1.54,3.39,1.55.43,3.11.15,4.67.25,1.24.54,1.61,2.15,3,2.44h0C55.44,78.81,55.93,79.07,56.1,79.49Z"/>
                    <path class={[Fill.pastaYellowF].join(" ")} d="M52.44,75.83c-1.55-.1-3.11.18-4.67-.25-2.32-.64-2.64-1.27-1.54-3.39a1.92,1.92,0,0,0,.09-.59,4.19,4.19,0,0,1,1.82-.4,5.06,5.06,0,0,0,2.46,2.19h0C50.77,74.55,52,74.89,52.44,75.83Z"/>
                    <path class={[Fill.pastaYellowE].join(" ")} d="M60.91,60.16c-.15.63-.65,1.35-1.14,1.18C58.81,61,58.39,59.91,58,59c-.25-.61.54-.86,1-.83C60.18,58.25,60.46,59.29,60.91,60.16Z"/>
                    <path class={[Fill.pastaYellowF].join(" ")} d="M50.6 73.39a5.06 5.06 0 0 1-2.46-2.19l.63-.24C49.21 71.9 50.44 72.25 50.6 73.39zM56.1 79.49c-.17-.42-.66-.68-.61-1.21a1.29 1.29 0 0 1 1.23 1.15zM58 79.35l.28-.14zM52.44 75.83c-.44-.94-1.67-1.29-1.83-2.44a2.83 2.83 0 0 1 2 1.38c.26.39.48.76 1 .76.42 1 1.83 1.43 1.83 2.74C54.05 78 53.67 76.37 52.44 75.83z"/>
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
