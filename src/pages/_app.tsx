import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from '../theme/theme'
import { StateProvider } from '../state/state'
import Head from 'next/head'
import 'animate.css/animate.css'
import { SWRConfig } from 'swr'
import { fetcherREST } from '../utils/fetcher'
const swrOptions = {
  refreshInterval: 5000,
  fetcher: (resource) => fetcherREST(resource),
}

function App({ Component, pageProps }: AppProps) {
  return (
    <StateProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <title>DAPP BASE</title>
        </Head>
        <SWRConfig value={swrOptions}>
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </StateProvider>
  )
}

export default App