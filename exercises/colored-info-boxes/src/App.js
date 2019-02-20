import React from 'react'
import './style.css'
import Boxes from './Boxes.js'


function App(){
    

    return(
        <div className='container'>
            <Boxes 
                style='color1' 
                title='title1'
                subtitle="I'm a subtitle 1"
                information='I have information 1'
            />
            <Boxes
                style='color2' 
                title='title 2'
                subtitle="I'm a subtitle 2"
                information="I have information 2"
            />
            <Boxes
                style='color3' 
                title='title 3'
                subtitle="I'm a subtitle 3"
                information="I have information 3"
            />
            <Boxes
                style='color4' 
                title='title 4'
                subtitle="I'm a subtitle 4"
                information="I have information 4"
            />
            <Boxes
                style='color5' 
                title='title 5'
                subtitle="I'm a subtitle 5"
                information="I have information 5"
            />
            <Boxes
                style='color6' 
                title='title 6'
                subtitle="I'm a subtitle 6"
                information="I have information 6"
            />
            <Boxes
                style='color7' 
                title='title 7'
                subtitle="I'm a subtitle 7"
                information="I have information 7"
            />
            <Boxes
                style='color8' 
                title='title 8'
                subtitle="I'm a subtitle 8"
                information="I have information 8"
            />
            <Boxes
                style='color9' 
                title='title 9'
                subtitle="I'm a subtitle 9"
                information="I have information 9"
            />
            <Boxes
                style='color10' 
                title='title10'
                subtitle="I'm a subtitle 10"
                information="I have information 10 9"
            />
        </div>
    )
}

export default App