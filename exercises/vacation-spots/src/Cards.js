import React from 'react'
import PropTypes from 'prop-types'

const Cards = (props) => {
    // let backgroundColor = style={{backgroundColor:'blue'}}
    // if(props.timeToGo === 'Spring'){
    //     background
    // }
    let myBackground;
    let numberDollar;

    if(props.price < 500){
        numberDollar = '$'
    }else if(props.price < 1000 && props.price > 500){
        numberDollar = '$$'
    }else if(props.price > 1000){
        numberDollar = '$$$'
    }
    
    if(props.timeToGo === "Summer"){
         myBackground = 'hotpink'
    }else if(props.timeToGo === "Winter"){
        myBackground = 'lightblue'
    }else if(props.timeToGo === "Spring"){
        myBackground = 'orange'
    }else if(props.timeToGo === "Fall"){
        myBackground = 'gold'
    }
    
    return (
        // <div className='cards'>
        <div className='cards' style={{backgroundColor: myBackground}}>
            <h1>Place: {props.place}</h1>
            <h3>{numberDollar}</h3>
            <h3>Price: ${props.price}</h3>
            <h3>Time To Go: {props.timeToGo}</h3>
        </div>
    )
}

Cards.propTypes = {
    place: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    timeToGo: PropTypes.string.isRequired
}

export default Cards