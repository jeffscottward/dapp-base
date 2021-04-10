import Onboard from 'bnc-onboard'
import {networkID} from '../constants'
let onboard = undefined

const getOnboard = function (subscriptions) {
  if (!onboard) {
    onboard = Onboard({
      dappId: '834729ff-3ae1-42ec-b770-95de5ff553a0',
      subscriptions,
      hideBranding: true,
      networkId: networkID,
      walletSelect: {
        wallets: [
          { walletName: 'metamask', preferred: true },
          {
            walletName: 'walletConnect',
            preferred: true,
            infuraKey: 'e1fd18285cab4a02adac214587d3f112',
          },
        ],
      },
    })
  }
  return onboard
}

export default getOnboard
