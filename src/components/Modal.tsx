/** @jsxImportSource theme-ui **/
import { Flex, Button, Themed } from 'theme-ui'
import Close from '../../public/images/close.svg'

const Modal = ({ screen = 'default', close }: { screen?: string; close: () => void }) => {
  return (
    <div className="Modal" sx={{
      position: 'fixed',
      width: '100%',
      height: '100%',
      zIndex: 10000,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Flex
        className="overlay"
        sx={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          zIndex: 10000,
          background: 'rgba(0,0,0,.4)',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Flex
          sx={{
            width: '39.375rem',
            height: '35.625rem',
            top: '0rem',
            left: '0rem',
            backgroundColor: 'secondary0',
            boxShadow: '0rem 1.5625rem 2.5rem rgba(0, 0, 0, 0.06)',
            borderRadius: '0.5rem',
            pt: '2.1875rem',
            pb: '4.375rem',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 10000000000,
            px: 5,
          }}
        >
          {screen === 'default' && (
            <>
              <Close
                onClick={close}
                sx={{
                  position: 'absolute',
                  right: 4,
                  top: 4,
                  fill: '#BBB',
                  '&:hover': {
                    fill: 'white',
                    cursor: 'pointer',
                  },
                }}
              />
              <Themed.h1
                sx={{
                  color: 'white',
                  fontSize: '2.75rem',
                  fontWeight: 'bold',
                  pt: 4,
                  mb: 2,
                }}
              >
                Default Modal
              </Themed.h1>
              <Themed.h4
                sx={{
                  maxWidth: '80%',
                  color: 'white',
                  pb: 3,
                  fontSize: '1.25rem',
                  textAlign: 'center',
                }}
              >
                Add content below
              </Themed.h4>
              <Button variant="primaryLarge" onClick={() => {}}>
                Do Something
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </div>
  )
}

export default Modal
