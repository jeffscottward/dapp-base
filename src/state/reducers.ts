import type { StateActionType } from './actions'
import type { StateType } from './state'

export function dappReducer(state: StateType, action: StateActionType): StateType['dapp'] {
  console.log(state, action)
  switch (action.type) {
    case 'SET_ADDRESS':
      return { ...state.dapp, ...{ address: action.payload } }
    case 'SET_NETWORK':
      return { ...state.dapp, ...{ network: action.payload } }
    case 'SET_BALANCE':
      return { ...state.dapp, ...{ balance: action.payload } }
    case 'SET_WALLET':
      return { ...state.dapp, ...{ wallet: action.payload } }
    case 'SET_WEB3':
      return { ...state.dapp, ...{ web3: action.payload } }
    case 'SET_ENS':
      return { ...state.dapp, ...{ ens: action.payload } }
    default:
      return state.dapp
  }
}

export default function mainReducer(state: StateType, action: StateActionType): StateType {
  // middleware goes here, i.e calling analytics service, etc.
  // Service 1
  // Service 2

  // Finally return map of all stateObjects
  // stateObject: resulting state of a reducer function after passing in former state and action
  return {
    dapp: dappReducer(state, action as StateActionType),
  }
}
