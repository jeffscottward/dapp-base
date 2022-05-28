/** @jsxImportSource theme-ui **/
import { useEffect } from 'react'
import { Global } from '@emotion/react'
import GlobalStyles from './GlobalStyles'
import { useStateValue } from '../state/state'
import useSWR from 'swr'

type LayoutProps = {
  children?: any
}

const Layout = ({ children }: LayoutProps) => {
  const [, dispatch] = useStateValue()
  const { data: dapps, error } = useSWR('/api/rest')

  useEffect(() => {
    // Dummy example dispatch
    // Add this case to reducer.ts
    // dispatch({
    //   type: 'SET_AVAILABLE_DAPPS',
    //   payload: dapps,
    // })
  }, [dapps])

  return (
    <main
      className="layout"
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
