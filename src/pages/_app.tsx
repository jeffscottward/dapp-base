import type { AppProps } from 'next/app'
// import { ThemeProvider } from 'theme-ui'
// import theme from '../theme/theme'
import 'animate.css/animate.css'
import Head from 'next/head'
import RainbowWagmiProvider from '../components/RainbowWagmiProvider'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { reset, globalStyles } from '../theme/stitches.config'
const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  reset()
  globalStyles()
  return (
    <RainbowWagmiProvider>
      <Head>
        <title>DAPP BASE</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RainbowWagmiProvider>
  )
}

export default App
