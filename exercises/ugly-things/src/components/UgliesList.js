import React from 'react'
import Uglies from './Uglies.js'

const UgliesList = (props) => {

    const mappedUglies = props.uglies.map(uglies => 
    <Uglies 
        {...uglies} 
        handleDelete={props.handleDelete} 
        key={uglies._id}
    />)

    return(
        <div>
            {mappedUglies}
        </div>
    )
}

export default UgliesList