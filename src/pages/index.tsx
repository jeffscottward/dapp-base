/** @jsxImportSource theme-ui **/
// Hooks
import { useState } from 'react'
import { useQuery } from 'react-query'
import { useAccount } from 'wagmi'
import { useStore } from '../hooks/useStore'

// Components
import Link from 'next/link'
import { Button, Flex, Themed } from 'theme-ui'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'
import Modal from '../components/Modal'

// UI icons
import ArrowImg from '../../public/images/arrow-back.svg'
import CheckImg from '../../public/images/check-circle.svg'
import CloseImg from '../../public/images/close.svg'
import FailImg from '../../public/images/fail.svg'
import GithubImg from '../../public/images/github.svg'
import LinkImg from '../../public/images/link.svg'
import LoadingImg from '../../public/images/loading.svg'
import MagnifyingImg from '../../public/images/magnifying-glass.svg'
import OutboundImg from '../../public/images/outbound.svg'
import UserImg from '../../public/images/user.svg'

const Home = () => {
  // Example of getting local component state
  const [modalVisible, setModalVisible] = useState(false)
  // Example of getting global state
  const state = useStore()
  // Example of getting wallet user Data with Rainbowkit via Provider
  const { data: userData } = useAccount()
  // Modal Toggle
  const toggleModal = () => modalVisible ? (setModalVisible(false)) : setModalVisible(true)
  // React Query example
  const {
    isLoading,
    error,
    data: queryData,
  } = useQuery<{ subscribers_count }>(['repoData'], async () => {
    return (await fetch('https://api.github.com/repos/tannerlinsley/react-query')).json()
  })
  // Data logging
  console.log({ localState: state }, { remoteData: { error, isLoading, queryData } })
  return (
    <Layout>
      <Header />
      {modalVisible ? <Modal close={() => toggleModal()} /> : null}
      <Content>
        <Themed.h1>Index page</Themed.h1>
        <Flex>
          <span sx={{ mr: 3 }}>Count: {state.count}</span>
          <Button onClick={() => state.increaseCount(1)} variant="primarySmall">
            Increase++
          </Button>
        </Flex>
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
            <Button variant="secondarySmall" onClick={toggleModal}>
              Fire Modal
            </Button>
          </Flex>
          <Flex sx={{ alignItems: 'center', '*': { mr: 1 } }}>
            <ArrowImg fill="orange" />
            <CheckImg fill="blue" />
            <CloseImg fill="black" />
            <FailImg fill="red" />
            <GithubImg fill="black" />
            <LinkImg stroke="gray" />
            <LoadingImg fill="black" />
            <MagnifyingImg stroke="black" />
            <UserImg fill="green" />
            <OutboundImg />
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
