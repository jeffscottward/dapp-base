import {networkID} from '../constants'

let initialState = {
  dapp: {
    balance: -1,
    address: undefined,
    wallet: { name: 'TEST' },
    network: networkID,
    web3: undefined,
  },
}

type dappType = {
  balance: number
  address: string
  wallet: { name: string }
  network: number
  web3?: any
}

export default initialState
export type { dappType }