/** @jsxImportSource theme-ui **/
import { Button, Flex, Themed } from 'theme-ui'
import { useQuery } from 'react-query'
import Link from 'next/link'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'
import { useStateValue } from '../state/state'
import { useAccount } from 'wagmi'
import { useEffect, useState } from 'react'
import Modal from '../components/Modal'

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false)
  // Example of getting local global state
  const [{ dapp }, dispatch] = useStateValue()

  // Example of getting wallet user Data with Rainbowkit
  const { data: userData } = useAccount()

  // Example of auto-executing dispatch to change local global state "test" variable
  useEffect(() => {
    dispatch({
      type: 'SET_TEST_DATA',
      payload: 456,
    })
  }, [])

  // React Query example
  const {
    isLoading,
    error,
    data: queryData,
  } = useQuery<{ subscribers_count }>(['repoData'], () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) =>
      res.json(),
    ),
  )
  console.log({ localState: dapp }, { remoteData: { isLoading, error, queryData } })

  const handleModalOpen = () => setModalVisible(true)
  const handleModalClose = () => setModalVisible(false)

  return (
    <Layout>
      <Header />
      {modalVisible ? <Modal close={() => handleModalClose()} /> : null}
      <Content>
        <Themed.h1>Index page</Themed.h1>
        {userData ? (
          <span>
            Connected to: <b>{userData.address}</b>
          </span>
        ) : null}
        <div />
        {queryData ? (
          <span>
            subscribers_count: <b>{queryData.subscribers_count}</b>
          </span>
        ) : null}
        <div
          sx={{
            button: {
              m: 2,
              ml: 0,
            },
          }}
        >
          <Flex>
            <Link href="/contact">
              <a>
                <Button variant="secondarySmall">Go to contact page</Button>
              </a>
            </Link>
          </Flex>
          <Flex>
            <Button variant="secondarySmall" onClick={handleModalOpen}>
              Fire Modal
            </Button>
          </Flex>
          <Flex>
            <Button variant="primarySmall">Primary Small</Button>
            <Button variant="primarySmall" disabled>
              Disabled Primary Small
            </Button>
          </Flex>
          <Flex>
            <Button variant="primaryMedium">Primary Medium</Button>
            <Button variant="primaryMedium" disabled>
              Disabled Primary Medium
            </Button>
          </Flex>
          <Flex>
            <Button variant="primaryLarge">Primary Large</Button>
            <Button variant="primaryLarge" disabled>
              Disabled Primary Large
            </Button>
          </Flex>

          <Flex>
            <Button variant="secondarySmall">Secondary Small</Button>
            <Button variant="secondarySmall" disabled>
              Disabled secondary Small
            </Button>
          </Flex>
          <Flex>
            <Button variant="secondaryMedium">Secondary Medium</Button>
            <Button variant="secondaryMedium" disabled>
              Disabled secondary Small
            </Button>
          </Flex>
          <Flex>
            <Button variant="secondaryLarge">Secondary Large</Button>
            <Button variant="secondaryLarge" disabled>
              Disabled secondary Small
            </Button>
          </Flex>
        </div>
      </Content>
    </Layout>
  )
}

export default Home
