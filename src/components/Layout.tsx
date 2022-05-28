/** @jsxImportSource theme-ui **/
import { useEffect } from 'react'
import { useStateValue } from '../state/state'

const Layout = ({ children }: {
  children?: any
}) => {
  return (
    <main
      className="Layout"
      sx={{
        margin: 'auto',
        width: '100%',
        minHeight: '100vh',
        height: 'max-content',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </main>
  )
}
export default Layout
