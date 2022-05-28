/** @jsxImportSource theme-ui **/
import { Themed } from 'theme-ui'
import { NextRouter, useRouter } from 'next/router'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'

const FallBack = () => {
  const router: NextRouter = useRouter()
  return (
    <Layout>
      <Header />
      <Content>
        <div
          className="404message"
          sx={{ height: '100vh', display: 'grid', placeItems: 'center' }}
        >
          <Themed.h1>404 - could not find route {router.asPath}</Themed.h1>
        </div>
      </Content>
    </Layout>
  )
}

export default FallBack
