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
        <Themed.h1>404 - Page {router.asPath} doesn't exist.</Themed.h1>
        <Themed.h3>*Did you forget to create the file in the /pages directory?*</Themed.h3>
      </Content>
    </Layout>
  )
}

export default FallBack
