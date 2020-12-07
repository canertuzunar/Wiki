import React, { createContext, Dispatch, useContext, useReducer } from 'react'
import { InitialState, StateInterface } from './initalState'
import reducer, { ReducerInterface } from './reducer'

interface ContextInterface {
  state: StateInterface
  dispatch: Dispatch<ReducerInterface>
}

const StoreContext = createContext({} as ContextInterface)

interface StoreInterface {
  children: React.ReactNode
}

export const StoreProvider: React.FC<StoreInterface> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext)
