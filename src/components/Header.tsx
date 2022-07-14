import { s, Flex } from './stitches'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

export default () => {
  return (
    <Flex role="header" css={{ py: '$3', px: '$4', bg: '$gray10' }} className="Header">
      <Flex css={{ fl: 1, jc: 'space-between' }}>
        <Link href="/">
          <s.a css={{ d: 'flex', fd: 'column', pc: 'center' }}>
            <s.div className="logo">
              <s.h3 css={{ m: 0, color: 'primary00' }}>dApp Base</s.h3>
            </s.div>
          </s.a>
        </Link>
        <s.div>
          <ConnectButton />
        </s.div>
      </Flex>
    </Flex>
  )
}
