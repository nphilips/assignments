import React from 'react'

const Wizard = (props) =>{
    const {firstName, lastName, isGood, _id, handleDelete} = props
    return(
        <div style={isGood ? {backgroundColor: "cornflowerblue"} : {backgroundColor: "firebrick"}}>
            <h1>{firstName} {lastName}</h1>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    )
}

export default Wizard