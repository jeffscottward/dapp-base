import React, { createContext, Dispatch, useContext, useReducer } from 'react'
import ethers from 'ethers'

import reducer from './reducers'
import type { StateActionType } from './actions'
import { networkID } from '../constants'

////////////
// Types
////////////

export interface StateType {
  dapp: dappType
}

export const initialState: StateType = {
  dapp: {
    balance: '-1',
    address: undefined,
    wallet: { name: 'TEST' },
    network: networkID,
    web3: undefined,
    ens: undefined
  },
}

type dappType = {
  balance: string
  address: string
  wallet: { name: string }
  network: number
  web3?: ethers.providers.JsonRpcProvider
  ens: string
}

////////////
// Context, Hook, Provider
////////////

const StateContext = createContext<[StateType, Dispatch<StateActionType>]>(null)
const useStateValue = () => useContext(StateContext)
const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <StateContext.Provider value={[state, dispatch]}>{children}</StateContext.Provider>
  )
}

////////////
// EXPORTS
////////////

export type { dappType }
export { StateProvider, useStateValue }
