import getOnboard from './Onboarding'
import {ethers} from 'ethers'
declare const window: any;

const onboardInit = (dispatch) => {
  return getOnboard({
    address: async (address) => {
      dispatch({
        type: 'SET_ADDRESS',
        payload: address,
      })
    },
    network: (network) => {
      dispatch({
        type: 'SET_NETWORK',
        payload: network,
      })
    },
    balance: (balance) => {
      dispatch({
        type: 'SET_BALANCE',
        payload: balance,
      })
    },
    wallet: (wallet) => {
      const web3 = new ethers.providers.Web3Provider(window.ethereum)
      dispatch({
        type: 'SET_WALLET',
        payload: wallet,
      })
      dispatch({
        type: 'SET_WEB3',
        payload: web3,
      })
    },
  })
}

export default onboardInit