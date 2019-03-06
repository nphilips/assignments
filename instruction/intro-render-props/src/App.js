import React from 'react'
import Toggle from './shared/Toggle.js'

const App = () => {
    return(
        <div>
            <Toggle render={({isToggled, toggler}) =>
                <Toggle render={({isToggled: fanIsToggled, toggler: fanToggler})=> 
                    <>
                        <h1>The light is {isToggled ? "On" : "Off"}</h1>
                        <button onClick={toggler}>
                            Turn {!isToggled ? "On" : "Off"} the light
                        </button>
                        <h1>The fan is {fanIsToggled ? "On" : "Off"}</h1>
                        <button onClick={fanToggler}>
                            Turn {!fanIsToggled ? "On" : "Off"} the fan
                        </button>
                    </>
                }/>
            }/>
            <Toggle render={({isToggled, toggler}) =>
                <>
                    <h1>The light is {isToggled ? "On" : "Off"}</h1>
                    <button onClick={toggler}>
                        Turn {!isToggled ? "On" : "Off"} the light
                    </button>
                </>
            }/>
        </div>
    )
}

{/* <Form
    render={props => <TodoForm {...props}/>}
    inputs={{title: '', description: ''}}
    submit={inputs => props.editTodo(_id, inputs)}
/>

const{title, firstName, lastName} = props

<Form
    render={props => <TodoForm {...props}/>}
    inputs={{title, firstName, lastName}}
    submit={inputs => props.editTodo(_id, inputs)}
/> */}

export default App