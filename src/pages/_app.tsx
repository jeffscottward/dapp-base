import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
import { StateProvider } from '../state/state'
import Head from 'next/head'
import 'animate.css/animate.css'
import { SWRConfig } from 'swr'
import { fetcherREST } from '../utils/fetcher'
const swrOptions = {
  refreshInterval: 5000,
  fetcher: (resource) => fetcherREST(resource),
}

interface Props<T> {
  pageProps: React.PropsWithChildren<T>
  Component: React.FC<T>
}

function MyApp({ pageProps, Component }: Props<any>) {
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

export default MyApp