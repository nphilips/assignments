import React from 'react'

const FindBeerForm = (props) => {
    const { tagline, description, image_url, handleChange, handleSubmit, abv } = props
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="tagline" 
                value={tagline} 
                onChange={handleChange}
                placeholder="Name of Beer"/>
                <button>Find Beer By Name</button>
            <input 
                type="number" 
                name="abv" 
                value={abv} 
                onChange={handleChange}
                placeholder="ABV: "/>
                <button>Find Beer By ABV</button>
        </form>
    )
}

export default FindBeerForm