/** @jsxImportSource theme-ui **/
import { Flex } from 'theme-ui'
import SignInArea from './SignInArea'

const Header = () => {
  return (
    <header role="header" sx={{ py: 3, px: 4 }} className="Header">
      <Flex sx={{ justifyContent: 'space-between' }}>
        <div>
          <a href="/">
            <div className="logo">
              Modern DApp Base
            </div>
          </a>
        </div>
        <div>
          <SignInArea />
        </div>
      </Flex>
    </header>
  )
}

export default Header
