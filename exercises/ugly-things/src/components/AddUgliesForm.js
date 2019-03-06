import React from 'react'

const AddUgliesForm = (props) => {
    const { title, description, imgUrl, handleChange, handleSubmit} = props

    return(
        <form onSubmit={handleSubmit}>
            <input
                placeholder='title' 
                type="text" 
                name='title' 
                value={title} 
                onChange={handleChange} />
            <input
                placeholder='description' 
                type="text" 
                name='description' 
                value={description} 
                onChange={handleChange} />
            <input 
                placeholder='imgUrl'
                type="text"
                name='imgUrl'
                value={imgUrl}
                onChange={handleChange}
                />
            <button>Add Uglies</button>
        </form>
    )
}

export default AddUgliesForm