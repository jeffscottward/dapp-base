// Hooks
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useAccount } from 'wagmi'
import { useStore } from '../hooks/useStore'

// Components
import Link from 'next/link'
import { s, Flex, Button } from '../components/stitches'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'
import Form from '../components/Form'
import Modal from '../components/Modal'

import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons';

const Home: React.FC = () => {
  // Example of getting local component state
  const [modalVisible, setModalVisible] = useState(false)
  // Example of getting global state
  const state = useStore()
  // Example of getting wallet user Data with Rainbowkit via Provider
  const { data: userData } = useAccount()

  // Modal Toggle
  const toggleModal = () =>
    modalVisible ? setModalVisible(false) : setModalVisible(true)

  // React Query example
  const {
    isLoading,
    error,
    data: queryData,
  } = useQuery<{ subscribers_count }>(['repoData'], async () => {
    return (await fetch('https://api.github.com/repos/tannerlinsley/react-query')).json()
  })

  // Logging
  console.log({ state }, { remoteData: { error, isLoading, queryData } })

  return (
    <Layout>
      <Header />
      {modalVisible ? <Modal close={() => toggleModal()} /> : null}
      <Content>
        <s.h1>Index page</s.h1>
        <s.div>
          <s.b css={{ mr: '$3' }}>Count: {state.count}</s.b>
          <Button onClick={() => state.increaseCount(1)} color="primary" size="small">
            Increase++
          </Button>
        </s.div>
        {userData ? (
          <s.span>
            Connected to: <b>{userData.address}</b>
          </s.span>
        ) : null}
        <div />
        {queryData ? (
          <s.span>
            subscribers_count: <b>{queryData.subscribers_count}</b>
          </s.span>
        ) : null}
        <s.div
          css={{
            button: {
              m: 2,
              ml: 0,
            },
          }}
        >
          <Flex>
            <Link href="/contact">
              <s.a css={{ td: 'underline !important'}}>
                Go to contact page
              </s.a>
            </Link>
          </Flex>
          <Flex>
            <Button color="secondary" size="small" onClick={toggleModal}>
              Fire Modal
            </Button>
          </Flex>
          <Flex css={{ ai: 'center', '*': { mr: 1 } }}>
            <FaceIcon/>
            <ImageIcon/>
            <SunIcon/>
          </Flex>
          <Form/>
          <br />
          <Flex>
            <Button color="primary" size="small">Primary Small</Button>
            <Button color="primary" size="small" disabled>
              Disabled Primary Small
            </Button>
          </Flex>
          <Flex>
            <Button color="primary" size="medium">Primary Medium</Button>
            <Button color="primary" size="medium" disabled>
              Disabled Primary Medium
            </Button>
          </Flex>
          <Flex>
            <Button color="primary" size="large">Primary Large</Button>
            <Button color="primary" size="large" disabled>
              Disabled Primary Large
            </Button>
          </Flex>
          <Flex>
            <Button color="secondary" size="small">Secondary Small</Button>
            <Button color="secondary" size="small" disabled>
              Disabled secondary Small
            </Button>
          </Flex>
          <Flex>
            <Button color="secondary" size="medium">Secondary Medium</Button>
            <Button color="secondary" size="medium" disabled>
              Disabled secondary Small
            </Button>
          </Flex>
          <Flex>
            <Button color="secondary" size="large">Secondary Large</Button>
            <Button color="secondary" size="large" disabled>
              Disabled secondary Small
            </Button>
          </Flex>
        </s.div>
      </Content>
    </Layout>
  )
}

export default Home
