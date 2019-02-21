import React from 'react'
import Cards from './Cards.js'

const App = () => {
    let vacationSpots = [
        {
          place: "Meridian, Idaho",
          price: 40,
          timeToGo: "Spring"
        },{
          place: "Cancun",
          price: 900,
          timeToGo: "Winter"
        },{
          place: "China",
          price: 1200,
          timeToGo: "Fall"
        },{
          place: "Russia",
          price: 1100,
          timeToGo: "Summer"
        },{
          place: "Lebanon",
          price: 400,
          timeToGo: "Spring"
        }
      ]
    const mappedVacaySpots = vacationSpots.map((vacay, i) => <Cards 
                                                                place={vacay.place} 
                                                                price={vacay.price} 
                                                                timeToGo={vacay.timeToGo}  
                                                                key={i} 
                                                                />)

    return(
        <div>
            {mappedVacaySpots}
        </div>
    )
}

export default App