import React from 'react'
import Beer from './Beer'

const BeerList = (props) => {
    const mappedBeers = props.beers.map(beer => 
                                <Beer 
                                    {...beer} 
                                    handleDelete={props.handleDelete} 
                                    handleEdit={props.handleEdit}
                                    key={beer._id}
                                />)

    return (
        <div>
            { mappedBeers }
        </div>
    )
}

export default BeerList