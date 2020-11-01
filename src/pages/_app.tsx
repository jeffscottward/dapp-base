import { StateProvider } from '../state/state'
import InitialState from '../state/initialState'
import Reducer from '../state/reducer'

import { ThemeProvider } from 'theme-ui'
import theme from '../theme'

import 'animate.css/animate.css'

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={InitialState} reducer={Reducer}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />  
      </ThemeProvider>
    </StateProvider>
  )
}

export default MyApp