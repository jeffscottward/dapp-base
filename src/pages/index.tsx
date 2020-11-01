/** @jsx jsx */
import { jsx, Flex, Button, useThemeUI, Styled } from 'theme-ui'
import { useStateValue } from '../state/state'
import Layout from '../components/Layout'

const Index = () => {
  const [stateContainers, dispatch] = useStateValue()
  const { theme } = useThemeUI()
  const handleIncrement = (num: number) => {
    dispatch({ type: 'INCREMENT_COUNTER', payload: num })
  }
  const handleDecrement = (num: number) => {
    dispatch({ type: 'DECREMENT_COUNTER', payload: num })
  }

  const buttonStyleBase = {
    fontSize: 3,
    color: '#FFF',
    mx: 1,
  }

  return (
    <Layout>
      <Button
        sx={{
          ...buttonStyleBase,
          background: theme.colors.primary,
        }}
        onClick={() => {
          handleIncrement(1)
        }}
      >
        +1
      </Button>
      <Button
        sx={{
          ...buttonStyleBase,
          background: theme.colors.secondary,
        }}
        onClick={() => {
          handleDecrement(1)
        }}
      >
        -1
      </Button>
      {Object.keys(stateContainers).map((stateKey) => (
        <Flex key={stateKey}>
          <Styled.pre>
            {stateKey}: {JSON.stringify(stateContainers[stateKey], null, 2)}
          </Styled.pre>
        </Flex>
      ))}
    </Layout>
  )
}

export default Index
