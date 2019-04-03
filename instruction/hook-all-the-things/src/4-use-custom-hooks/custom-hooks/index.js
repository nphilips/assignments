import React, {useState} from 'react'

/** This function 
 * @function useToggle
 * @param {boolean}
 * @returns {boolean, function, {Object}}
 */
export const useToggle = startingToggle => {
    const [toggle, setToggle] = useState(startingToggle)
    const toggler = () => setToggle(!toggle)
    return{ toggle, toggler}
}

/** this function takes inputs and a callback, and returns all form
 * @function useFormProperties
 * @param {Ovject} - The initial Inputs 
 * @param {Function} - What the submit function should do
 * @param {function, function, {inputs}}
 */
export const useFormProperties = (initInputs, callbacks) => {
    const [inputs, setInputs] = useState(initInputs)
    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        callback(inputs)
        setInputs(initInputs)
    }

    
    return {handleChange, handleSubmit, inputs}
}

