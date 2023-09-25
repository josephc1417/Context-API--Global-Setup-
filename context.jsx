import { createContext } from "react" 
import { useState } from "react"
import { useContext } from "react"
const GlobalContext = createContext()

//₋Custom Hook to set and get state values of ₋
export const useGlobalContext = () => {
    return useContext(GlobalContext)
}
const AppContext = ({ children }) => {
    const [name, setName] = useState('peter')
    
    return<GlobalContext.Provider value={{name, setName}}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext