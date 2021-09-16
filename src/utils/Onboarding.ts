import Onboard from 'bnc-onboard'
import {networkID} from '../constants'
let onboard = undefined

const getOnboard = function (subscriptions) {
  if (!onboard) {
    onboard = Onboard({
      // dappId not actually needed unless using BlockNative products
      dappId: '00000000-0000-0000-0000-000000000000', 
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
