import React from 'react'

function Boxes(props){
    return(
        <div className={props.style}>
            <h1>Title: {props.title}</h1>
            <h2>Subtitle: {props.subtitle}</h2>
            <p>Information: {props.information}</p>
        </div>
    )
}

export default Boxes