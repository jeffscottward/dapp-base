/** @jsxImportSource theme-ui **/
import React from 'react'
import { Flex, Button, Themed } from 'theme-ui'
import Image from 'next/image'
import Close from '../../public/images/close.svg'
import { useStateValue } from '../state/state'

type ModalProps = {
  screen: string
  close: () => void
}

const Modal = ({ screen = 'connect', close }: ModalProps) => {
  const [{ dapp }, dispatch] = useStateValue()

  return (
    <Flex
      className="overlay"
      sx={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 10000,
        background: 'rgba(0,0,0,.4)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Flex
        sx={{
          width: '39.375rem',
          height: '35.625rem',
          top: '0rem',
          left: '0rem',
          backgroundColor: 'darkgreen',
          boxShadow: '0rem 1.5625rem 2.5rem rgba(0, 0, 0, 0.06)',
          borderRadius: '0.5rem',
          pt: '2.1875rem',
          pb: '4.375rem',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000000,
          px: 5,
        }}
      >
        {screen === 'connect' && (
          <React.Fragment>
            <Close
              onClick={close}
              sx={{
                position: 'absolute',
                right: 4,
                top: 4,
                fill: '#597980',
                '&:hover': {
                  fill: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <Image
              src="/images/eth-logo-hollow.svg"
              alt="eth"
              width={140}
              height={140}
            />
            <Themed.h1
              sx={{
                color: 'white',
                fontSize: '2.75rem',
                fontWeight: 'bold',
                pt: 4,
                mb: 2,
              }}
            >
              Connect wallet
            </Themed.h1>
            <Themed.h4
              sx={{
                maxWidth: '80%',
                color: 'white',
                pb: 3,
                fontSize: '1.25rem',
                textAlign: 'center',
              }}
            >
              Please connect an ethereum wallet to continue.
            </Themed.h4>
            <Button variant="primaryLarge" onClick={()=>{}}>
              Connect
            </Button>
          </React.Fragment>
        )}
        {screen === 'disconnect' && (
          <React.Fragment>
            <Close
              onClick={close}
              sx={{
                position: 'absolute',
                right: 4,
                top: 4,
                fill: '#597980',
                '&:hover': {
                  fill: 'white',
                  cursor: 'pointer',
                },
              }}
            />
            <Image
              src="/images/eth-logo-hollow.svg"
              alt="eth"
              width={140}
              height={140}
            />
            <Themed.h1
              sx={{
                color: 'white',
                fontSize: '2.75rem',
                fontWeight: 'bold',
                pt: 4,
                mb: 2,
              }}
            >
              Wallet Connected
            </Themed.h1>
            <Themed.h4
              sx={{
                maxWidth: '80%',
                color: 'white',
                pb: 3,
                fontSize: '1.25rem',
                textAlign: 'center',
              }}
            >
              Address: {dapp.address}
            </Themed.h4>
            <Button variant="primaryLarge" onClick={handleDisconnect}>
              Disconnect
            </Button>
          </React.Fragment>
        )}
      </Flex>
    </Flex>
  )
}

export default Modal
