import React from 'react'

const Box = (props) => {
    return(
        <div className='box' onClick={props.handleChangeColor} style={{backgroundColor: props.color}}>
            {props.count}
        </div>
    )
}

export default Box