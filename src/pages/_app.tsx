import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import { StateProvider } from '../state/state'
import InitialState from '../state/initialState'
import Reducer from '../state/reducer'
import Head from 'next/head'
import 'animate.css/animate.css'
import { SWRConfig } from 'swr'
import { fetcherREST } from '../utils/fetcher'
const swrOptions = {
  refreshInterval: 5000,
  fetcher: (resource) => fetcherREST(resource),
}

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={InitialState} reducer={Reducer}>
      <ThemeProvider theme={theme}>
      <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Istok+Web:wght@400;700&&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <SWRConfig value={swrOptions}>
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </StateProvider>
  )
}

export default MyApp