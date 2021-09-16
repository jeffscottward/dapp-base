let buttons = {}

const buttonBase = {
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '1rem',
  lineHeight: '1rem',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  textTransform: 'uppercase',
  borderRadius: '.25rem',
  bg: 'transparent',
  border: '2px solid transparent',
  color: 'text',
}

const buttonPaddingSizes = {
  small: {
    px: '2rem',
    py: '0.75rem'
  },
  medium: {
    px: '3rem',
    py: '1rem'
  },
  large: {
    px: '4rem',
    py: '1.25rem'
  },
}

const buttonColorStates = {
  primary: {
    bg: 'primary0',
    borderColor: 'primary0',
    color: 'white',
    boxShadow: '0px 15px 30px rgba(20, 102, 204, 0.16)',
    '&:hover': {
      bg: 'primary00',
      borderColor: 'primary00',
    },
    '&:active': {
      bg: 'primary000',
      borderColor: 'primary000',
    },
    '&[disabled]': {
      bg: 'gray0',
      borderColor: 'gray0',
      cursor: 'not-allowed'
    }
  },
  secondary: {
    borderColor: 'secondary0',
    color: 'secondary0',
    '&:hover': {
      bg: 'secondary00',
    },
    '&:active': {
      bg: 'secondary000',
    },
    '&[disabled]': {
      bg: 'gray0',
      borderColor: 'gray0',
      cursor: 'not-allowed'
    }
  },
}

Object.keys(buttonColorStates).map((name) => {
  Object.keys(buttonPaddingSizes).map((size) => {
    buttons[name + (size.charAt(0).toUpperCase() + size.slice(1))] = {
      ...buttonBase,
      ...buttonColorStates[name],
      ...buttonPaddingSizes[size]
    }
  })
})

export default buttons
