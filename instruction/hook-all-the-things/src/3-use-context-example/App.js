import React, {useContext} from 'react'
import DataContext from './context/DataProvider.js'
import DataProvider from './context/DataProvider.js';



const App = () => {
    const {characters, getCharacters} = useContext(DataContext)

    useEffect(() => { getCharacters() }, [])


    return(
        <div>
            {characters.map(c => 
                <div style={{backgroundImage: `url(${c.image})`}}>
                    <h1>{c.name}</h1>
                </div> 
            )}
        </div>
    )
}

export default App