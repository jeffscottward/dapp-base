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
  const [tab, setTab] = useState(router.query.tab)

  const handleTabClick = (e) => {
    e.stopPropagation()
    let selectedTab = e.target.classList[1]
    setTab(selectedTab)
    router.push(router.pathname + '?tab=' + selectedTab)
  }
  useEffect(() => {
    if (router.query.tab === undefined) {
      router.push(router.pathname + '?tab=' + 'tab1')
    } else {
      setTab(router.query.tab)
    }
  }, [router.query.tab])
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
