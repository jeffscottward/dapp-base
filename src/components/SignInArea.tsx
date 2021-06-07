/** @jsxImportSource theme-ui **/
import React, { useState } from 'react'
import {  Flex } from 'theme-ui'
import { useStateValue } from '../state/state'
import addrShortener from '../utils/addrShortener'
import Modal from './Modal'
import User from '../../public/images/user.svg'

const ModalFrame = ({ children }) => (
  <div sx={{ position: 'fixed', top: 0, left: 0, zIndex: 100000 }}>{children}</div>
)

const SignInArea = () => {
  const [{ dapp }] = useStateValue()
  const [showConnectModal, setShowConnectModal] = useState(false)
  const [showDisconnectModal, setShowDisconnectModal] = useState(false)
  const handleConnect = () => setShowConnectModal(true)
  const handleDisconnect = () => setShowDisconnectModal(true)
  return (
    <React.Fragment>
      <Flex
        className="SignInArea"
        sx={{
          'ul, li': { display: 'flex', alignItems: 'center' },
          'li, span': { ml: 2 },
          li: { cursor: 'pointer' },
        }}
      >
        <ul>
          {!dapp.address ? (
            <li onClick={handleConnect} className="wallet-addr">
              <User fill="green"/>
              <span>Connect Wallet</span>
            </li>
          ) : (
            <li onClick={handleDisconnect} className="wallet-addr connected">
              <User fill="green"/>
              <span>{dapp.address && addrShortener(dapp.address)}</span>
            </li>
          )}
        </ul>
      </Flex>
      {showConnectModal && (
        <ModalFrame>
          <Modal
            screen={'connect'}
            close={() => {
              setShowConnectModal(false)
            }}
          />
        </ModalFrame>
      )}
      {showDisconnectModal && (
        <ModalFrame>
          <Modal
            screen={'disconnect'}
            close={() => {
              setShowDisconnectModal(false)
            }}
          />
        </ModalFrame>
      )}
    </React.Fragment>
  )
}

export default SignInArea
