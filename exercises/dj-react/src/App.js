import React from 'react'


class App extends React.Component {

    constructor(){
        super()
        this.state = {
            color1: 'blue',
            color2: 'green',
            color3: 'purple',
            color4: 'red'
            
        }
    }
    handleChangeColor = () => {
        const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple']
        const currentColor = colors[Math.floor(Math.random() * colors.length)]
        this.setState({
            color1: currentColor,
            color2: currentColor,
            color3: currentColor,
            color4: currentColor,
        })
    }
    handleColorSwap = () => {
        const colors = ['black', 'white']
        const currentColor1 = colors[Math.floor(Math.random() * colors.length)]
        const currentColor2 = colors[Math.floor(Math.random() * colors.length)]
        const currentColor3 = colors[Math.floor(Math.random() * colors.length)]
        const currentColor4 = colors[Math.floor(Math.random() * colors.length)]
    
        this.setState({
            color1: currentColor1,
            color2: currentColor2,
            color3: currentColor3,
            color4: currentColor4,
        })
    }
    
    render(){
        return(
            <div>
                <div className='boxes'>
                    <div className='box box1' style={{backgroundColor: this.state.color1}}>
                        Box 1
                    </div>
                    <div className='box' style={{backgroundColor: this.state.color2}}>
                        Box 2
                    </div>
                </div>
                <div className='boxes'>
                    <div className='box box1' style={{backgroundColor: this.state.color3}}>
                        Box 3
                    </div>
                    <div className='box' style={{backgroundColor: this.state.color4}}>
                        Box 4
                    </div>

                </div>
                <button onClick={this.handleChangeColor}>Change Color</button>
                <button onClick={this.handleColorSwap}>Black and White</button>
            </div>
        )
    }
}

export default App