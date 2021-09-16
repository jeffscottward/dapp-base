/** @jsxImportSource theme-ui **/
import { Themed } from 'theme-ui'
import { NextRouter, useRouter } from 'next/router'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
const FallBack = () => {
  const router: NextRouter = useRouter()
  return (
    <Layout>
      <div className="contents animate fadeIn">
        <Header />
        <main className="content">
          <div
            className="404message"
            sx={{ height: '100vh', display: 'grid', placeItems: 'center' }}
          >
            <Themed.h1>404 - could not find route {router.asPath}</Themed.h1>
          </div>
        </main>
        <Footer />
      </div>
    </Layout>
  )
}

export default FallBack
