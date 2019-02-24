import React from 'react'

const BoxControls = (props) => {
    return(
        <div>
            <button onClick={props.handleChangeColor}>Change Colors</button>
        </div>
    )
}

export default BoxControls