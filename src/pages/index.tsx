/** @jsxImportSource theme-ui **/
import { Themed, Flex } from 'theme-ui'
import { useStateValue } from '../state/state'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'

const Home = () => {
  const [{ dapp }] = useStateValue()
  const router = useRouter()

  return (
    <Layout>
      <Header />
      <Content>
        <h1>Index page</h1>
      </Content>
    </Layout>
  )
}

export default Home
