import type { AppProps } from 'next/app'
import Head from 'next/head'
import RainbowWagmiProvider from '../components/RainbowWagmi'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { reset, globalStyles } from '../theme/stitches.config'
import 'animate.css/animate.css'

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  // Styles reset & global
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
