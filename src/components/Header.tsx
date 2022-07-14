import { s, Flex, Box, Link, Heading } from './stitches'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import NextLink from 'next/link'

export default () => {
  return (
    <Flex role="header" css={{ py: '$3', px: '$4', bg: '$gray10' }} className="Header">
      <Flex css={{ fl: 1, jc: 'space-between' }}>
        <NextLink href="/">
          <Link css={{ d: 'flex', fd: 'column', pc: 'center' }}>
            <Box className="logo">
              <Heading variant={'h4'} css={{ m: 0, color: '$gray1' }}>Dapp Base</Heading>
            </Box>
          </Link>
        </NextLink>
        <Box>
          <ConnectButton />
        </Box>
      </Flex>
    </Flex>
  )
}
