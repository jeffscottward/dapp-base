import React, { createContext, Dispatch, useContext, useReducer } from 'react'
import reducer from './reducers'

const initialState = {
  dapp: {
   test: 123
  },
}

////////////
// Context, Hook, Provider
////////////

const StateContext = createContext(null)
const useStateValue = () => useContext(StateContext)
const StateProvider = ({ children }) => {
  const [allStates, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={[allStates, dispatch]}>{children}</StateContext.Provider>
  )
}

////////////
// EXPORTS
////////////
export { StateProvider, useStateValue }
