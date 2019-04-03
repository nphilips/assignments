import React, {useContext} from 'react'
import axios from 'axios'

export const DataContext = React.createContext()

const DataProvider = () => {
    const initialState = []
    const [characters, setCharacters] = useState(initialState)

    const getCharacters = () => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(res => setCharacters(res.data.results))
            .catch(err => console.log(err))
    }



    return(
        <DataContext.Provider 
            value={{characters, getCharacters}}>
            {props.children}
        </DataContext.Provider>

    )
}

export default DataProvider