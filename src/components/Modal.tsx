import { s, Flex, Button, Box, Heading } from './stitches'
import { Cross1Icon } from '@radix-ui/react-icons'

const Modal = ({ screen = 'default', close }: { screen?: string; close: () => void }) => {
  return (
    <Box
      className="Modal"
      css={{
        pos: 'fixed',
        w: '100%',
        h: '100%',
        z: '$1',
        fd: 'column',
        jc: 'center',
        ai: 'center',
      }}
    >
      <Flex
        className="overlay"
        css={{
          pos: 'fixed',
          w: '100%',
          h: '100%',
          z: '$1',
          bg: 'rgba(0,0,0,.4)',
          fd: 'column',
          jc: 'center',
          ai: 'center',
        }}
      >
        <Flex
          css={{
            w: '39.375rem',
            h: '35.625rem',
            top: '0rem',
            left: '0rem',
            bgc: '$green10',
            bs: '0rem 1.5625rem 2.5rem rgba(0, 0, 0, 0.06)',
            br: '0.5rem',
            pt: '2.1875rem',
            pb: '4.375rem',
            fd: 'column',
            jc: 'center',
            ai: 'center',
            z: '$2',
            px: 5,
          }}
        >
          {screen === 'default' && (
            <>
              <Box
                onClick={close}
                css={{
                  pos: 'absolute',
                  right: 4,
                  top: 4,
                  fill: '#BBB',
                  '&:hover': {
                    fill: 'white',
                    cursor: 'pointer',
                  },
                }}
              >
                <Cross1Icon />
              </Box>
              <Heading variant="h3"
                css={{
                  color: 'white',
                  fs: '2.75rem',
                  fw: 'bold',
                  pt: 4,
                  mb: 2,
                }}
              >
                Default Modal
              </Heading>
              <Heading variant="h4"
                css={{
                  maxW: '80%',
                  color: 'white',
                  pb: 3,
                  fs: '1.25rem',
                  ta: 'center',
                }}
              >
                Add content below
              </Heading>
              <Button color="primary" size="medium" onClick={() => {}}>
                Do Something
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Modal
