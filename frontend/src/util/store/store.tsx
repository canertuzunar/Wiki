import React, {createContext, useContext, useReducer} from'react'
import {InitialState, StateInterface} from './initalState'
import Reducer from'./reducer'

interface ContextInterface {
    state: StateInterface,
    dispatch: ({type}: {type:string}) => void
}

const StoreContext = createContext({} as ContextInterface)

interface StoreInterface { 
    children: React.ReactNode
}

export const StoreProvider:React.FC<StoreInterface> = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, InitialState)
    return(
    <StoreContext.Provider value={{state, dispatch}}>
        {children}
    </StoreContext.Provider>)
}

export const useStore = () => useContext(StoreContext)