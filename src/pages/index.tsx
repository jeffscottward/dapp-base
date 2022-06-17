/** @jsxImportSource theme-ui **/
// Hooks
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useAccount } from 'wagmi'
import { useStore } from '../hooks/useStore'
import { useForm } from 'react-hook-form'

// Components
import Link from 'next/link'
import { Button, Flex, Input, Select, Themed } from 'theme-ui'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'
import Modal from '../components/Modal'

// UI icons
import {
  Arrow,
  Check,
  Close,
  Fail,
  Github,
  HyperLink,
  Loading,
  Magnifying,
  Outbound,
  User,
} from '../utils/imageIndex'

const Home = () => {
  // Example of getting local component state
  const [modalVisible, setModalVisible] = useState(false)
  // Example of getting global state
  const state = useStore()
  // Example of getting wallet user Data with Rainbowkit via Provider
  const { data: userData } = useAccount()
  // Example of React Hook Form
  const {
    register,
    formState: { errors: formErrors },
    handleSubmit,
  } = useForm()

  // Submit form
  const onSubmit = (data) => {
    console.log('RESULT', data)
    alert(JSON.stringify(data))
  }

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
  console.log({ state }, { remoteData: { error, isLoading, queryData } }, { formErrors })

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
            <Arrow fill="orange" />
            <Check fill="blue" />
            <Close fill="black" />
            <Fail fill="red" />
            <Github fill="black" />
            <HyperLink stroke="gray" />
            <Loading fill="black" />
            <Magnifying stroke="black" />
            <User fill="green" />
            <Outbound />
          </Flex>
          <form
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              my: 2,
              '> div': {
                width: '20rem',
                mb: 2,
                justifyContent: 'space-between',
                alignItems: 'center',
                '& label + *': {
                  flex: 1,
                  maxWidth: '175px',
                  ml: 4,
                },
              },
            }}
          >
            <Flex>
              <label>Title: </label>
              <Select
                name="Title"
                {...register('title', { required: true })}
                className="selectbox"
              >
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </Select>
            </Flex>
            <Flex>
              <label>First name: </label>
              <Input
                type="text"
                {...register('First name', {
                  required: { 
                    value: true,
                    message: 'Missing First Name'
                  },
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: 'Alphabetical letters only for names',
                  },
                  maxLength: 80,
                })}
              />
            </Flex>
            <Flex>
              <label>Last name: </label>
              <Input
                type="text"
                {...register('Last name', {
                  required: { value: true,
                    message: 'Missing Last Name'
                  },
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: 'Alphabetical letters only for names',
                  },
                  maxLength: 80,
                })}
              />
            </Flex>
            <Flex>
              <label>Email: </label>
              <Input
                type="text"
                {...register('Email', {
                  required: { value: true,
                    message: 'Missing Email'
                  },
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Email syntax error',
                  },
                })}
              />
            </Flex>
            <Flex>
              <label>Mobile number: </label>
              <Input
                type="tel"
                {...register('Telephone', {
                  required: {
                    value: true,
                    message: 'Missing Phone',
                  },
                  pattern: {
                    value:
                      /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
                    message: 'Telephone syntax error',
                  },
                })}
              />
            </Flex>
            <div className="ErrorBox" sx={{ p: { maxWidth: '250px', color: 'white' } }}>
              {Object.keys(formErrors).map((error) => {
                return formErrors[error].type === 'required' ? (
                  <p key={error + 'msg'} sx={{ background: 'red' }}>
                    {formErrors[error].message}
                  </p>
                ) : formErrors[error].type === 'pattern' ? (
                  <p key={error + 'msg'} sx={{ background: 'orange' }}>
                    {formErrors[error].message}
                  </p>
                ) : null
              })}
            </div>
            <Button type="submit" variant="primarySmall">
              SUBMIT
            </Button>
          </form>
          <br />
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
