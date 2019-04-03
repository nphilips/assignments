import React, { useState} from 'react';
import {useToggle} from './custom-hooks'

// 1 custom hook for toggles
// 2 custom hook for text forms

const App = () => {
    const {toggle, toggler} = useToggle(true)
    const {toggle: toggle2, toggler: toggler2} = useToggle(false)
    // Declare initial inputs to give to our useFormProperties function(hook)
    const initialInputs = {firstName: "", lastName: ""}
    // Declare what the callback function for our handleSubmit should do
    const alertName = (inputs) => {
        alert(inputs.firstName + " " + inputs.lastname + " and I am " + inputs.age + " years old.")
    }
    // Pass our initial inputs into our hook, and get back all form functionallity
    const{inputs, handleChange, handleSubmit} = useFormProperties(initialInputs, alertName)


    return(
        <div>
            <h1>The Toggle is {toggle ? "On" : "Off"}</h1>
            <button onClick={toggler}>Toggler</button>
            <h1>The Toggle2 is {toggle2 ? "On" : "Off"}</h1>
            <button onClick={toggler2}>Toggler</button>

            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} placeholder={"First Name"}/>
                    <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} placeholder={"Last Name"}/>
                    <input type="text" name="age" value={inputs.age} onChange={handleChange} placeholder={"Age"}/>
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}

export default App