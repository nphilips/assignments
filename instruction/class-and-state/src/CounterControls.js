import React from 'react'
import PropTypes from 'prop-types'

const CounterControls = (props) => {
    return(
        <div style={{zoom:2,}}>
            <button onClick={props.handleIncrement} style={{ backgroundColor: 'lightgreen'}}>+</button>
            <button onClick={props.handleDecrement} style={{ backgroundColor: 'lightblue'}}>-</button>
            <button onClick={props.handleMult} style={{ backgroundColor: 'pink'}}>*</button>
            <button onClick={props.handleDiv} style={{ backgroundColor: 'yellow'}}>÷</button>
        </div>
    )
}

CounterControls.propTypes = {
    handleIncrement: PropTypes.func.isRequired,
    handleDecrement: PropTypes.func.isRequired,
    handleMult: PropTypes.func.isRequired,
    handleDiv: PropTypes.func.isRequired,
}

export default CounterControls