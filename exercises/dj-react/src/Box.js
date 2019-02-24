import React from 'react'

const Box = (props) =>{
    return(
        <div>
            <div className='boxes'>
                <div className='box box1' style={{backgroundColor: this.prop.color1}}>
                    Box 1
                </div>
                <div className='box' style={{backgroundColor: this.prop.color2}}>
                    Box 2
                </div>
            </div>
            <div className='boxes'>
                <div className='box box1' style={{backgroundColor: this.prop.color3}}>
                    Box 3
                </div>
                <div className='box' style={{backgroundColor: this.prop.color4}}>
                    Box 4
                </div>\
            </div>
        </div>
    )
}

export default Box