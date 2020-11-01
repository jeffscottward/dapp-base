/** @jsx jsx */
import { jsx } from 'theme-ui'

const Header = () => {
  return (
    <header role="header">
      <div className="header-row">
        <div className="brand">
          <a href="/">
            <div className="logo">
              {/* <img src="images/X.png" alt="logo" /> */}
            </div>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
