/** @jsxImportSource theme-ui **/
import { Themed, Flex } from 'theme-ui'
import { useStateValue } from '../state/state'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Header from '../components/Header'
import BottomSpace from '../components/BottomSpace'

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
      <main>
        <div className="contents animate">
          <Header />
          <BottomSpace />
          <Flex
            className="tabs"
            onClick={handleTabClick}
            sx={{
              '*': { cursor: 'pointer', mr: 2, mb: 4 },
              h3: { flex: 1 },
              '.tab': {
                textAlign: 'center',
                fontWeight: 'bold',
                pb: ' 1.125rem',
                mb: 0,
                '&.active': {
                  fontWeight: 'bold',
                  color: 'green',
                  borderBottom: '0.125rem solid',
                  borderBottomColor: 'teal',
                },
                '&:hover': {
                  borderBottom: '0.125rem solid',
                  borderBottomColor: 'black',
                },
              },
            }}
          >
            <Themed.h3 className={'tab tab1 ' + (tab === 'tab1' && 'active')}>
              tab1
            </Themed.h3>
            <Themed.h3 className={'tab tab2 ' + (tab === 'tab2' && 'active')}>
              tab2
            </Themed.h3>
          </Flex>
          <section className="content">
            <div
              className="tab-content"
              sx={{
                '> *': {
                  px: '3.5rem',
                  pt: '5.5rem',
                },
              }}
            >
              {tab === 'tab1' && (
                <div className="tab1">
                  <Themed.h1>Contents of Tab 1</Themed.h1>
                </div>
              )}
              {tab === 'tab2' && (
                <div className="tab2">
                  <Themed.h1>Contents of Tab 2</Themed.h1>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default Home
