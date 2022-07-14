// Hooks
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useAccount } from 'wagmi'
import { useStore } from '../hooks/useStore'

// Components
import NextLink from 'next/link'
import { s, Flex, Button, Box, Text, Heading, Link } from '../components/stitches'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'
import Form from '../components/Form'
import Modal from '../components/Modal'

import { FaceIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons'
import addrShortener from '../utils/addrShortener'

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
        <Heading variant="h3">Index page</Heading>
        <Flex css={{ '.area': { minW: '200px', mr: '$8' } }}>
          <Box className="area">
            <Box>
              <Heading variant={'h6'} css={{ mb: 10, fw: 'bold', mt: '$0' }}>
                Zustand Global State + Funcs
              </Heading>
              <Box css={{ mr: '$3', mb: 5 }}>
                <Text>Count: </Text>
                <Text variant="bold">{state.count}</Text>
              </Box>
              <Button onClick={() => state.increaseCount(1)} color="primary" size="small">
                Increase++
              </Button>
            </Box>
            <Box>
              <Heading variant={'h6'} css={{ mb: 10, fw: 'bold' }}>
                RainbowKit Example
              </Heading>
              {userData ? (
                <Text>
                  Connected to: <br />
                  <s.b css={{ color: '$blue10' }}>{addrShortener(userData.address)}</s.b>
                </Text>
              ) : (
                <Text>Please Connect Wallet</Text>
              )}
            </Box>
            <Box>
              <Heading variant={'h6'} css={{ mb: 10, fw: 'bold' }}>
                ReactQuery Example
              </Heading>
              {queryData ? (
                <Text>
                  subscribers_count: <b>{queryData.subscribers_count}</b>
                </Text>
              ) : (
                <Text>Loading</Text>
              )}
            </Box>
            <Box
              css={{
                button: {
                  m: 2,
                  ml: 0,
                },
              }}
            >
              <Heading variant={'h6'} css={{ mb: 10, fw: 'bold' }}>
                NextLink Example
              </Heading>
              <NextLink href="/contact">
                <Link css={{ mb: '$2' }}>Go to contact page</Link>
              </NextLink>
            </Box>
            <Box>
              <Heading variant={'h6'} css={{ mb: 10, fw: 'bold' }}>
                Miscellaneous
              </Heading>
              <Button color="secondary" size="small" onClick={toggleModal}>
                Fire Modal
              </Button>
              <br />
              <Flex css={{ ai: 'center', '*': { mr: '$5' } }}>
                <FaceIcon />
                <ImageIcon />
                <SunIcon />
              </Flex>
            </Box>
          </Box>
          <Box className="area">
            <Form />
          </Box>
          <Box className="area" css={{ button: { mb: '$2' } }}>
            <Heading variant={'h6'} css={{ mb: 10, fw: 'bold', mt: 0 }}>
              Buttons
            </Heading>
            <Button color="primary" size="small">
              Primary Small
            </Button>
            <Button color="primary" size="medium">
              Primary Medium
            </Button>
            <Button color="primary" size="large">
              Primary Large
            </Button>
            <Button color="secondary" size="small">
              Secondary Small
            </Button>
            <Button color="secondary" size="medium">
              Secondary Medium
            </Button>
            <Button color="secondary" size="large">
              Secondary Large
            </Button>
            <Button color="primary" size="small" disabled>
              Disabled Small
            </Button>
            <Button color="primary" size="medium" disabled>
              Disabled Medium
            </Button>
            <Button color="primary" size="large" disabled>
              Disabled Large
            </Button>
          </Box>
        </Flex>
      </Content>
    </Layout>
  )
}

export default Home
