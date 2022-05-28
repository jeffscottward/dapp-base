/** @jsxImportSource theme-ui **/
import { Flex, Themed } from 'theme-ui'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

const Header = () => {
  return (
    <header role="header" sx={{ py: 3, px: 4, bg: 'gray000' }} className="Header">
      <Flex sx={{ justifyContent: 'space-between' }}>
        <Link href="/">
          <a sx={{ display: 'flex', flexDirection: 'column', placeContent: 'center' }}>
            <div className="logo">
              <Themed.h3 sx={{ m: 0, color: 'primary00' }}>dApp Base</Themed.h3>
            </div>
          </a>
        </Link>
        <div>
          <ConnectButton />
        </div>
      </Flex>
    </header>
  )
}

export default Header
