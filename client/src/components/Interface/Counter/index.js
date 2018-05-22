// *******************************************************
// Interface - Counter
// -------------------------------------------------------

// *******************************************
// Module Imports
// -------------------------------------------
import React, { Component } from 'react';
// --------------------------------

// *******************************************
// Style Imports
// -------------------------------------------
import { Fill, Text } from '../../../styles';
// --------------------------------

class Counter extends Component {

    getTextX = () => {
        const { value } = this.props;
        if (value === 0) {
            return 37;
        }
        if (value === 1) {
            return 42;
        }
        if (value === 7) {
            return 39;
        }
        if (value >= 10) {
            return 33
        }
        return 37;
    }

    render () {

        return (
            <svg x={300} y={40} width={100} height={100} viewPort={"0 0 100 100"}>
                <circle cx="50" cy="50" r="40" className={[Fill.white].join(" ")}/>
                <text x={this.getTextX()} y={65} className={[Text.interfaceCounter].join(" ")}>{this.props.value}</text>
            </svg>
        )
    }
}

Counter.defaultProps = {
    value: 0
}

export default Counter;
