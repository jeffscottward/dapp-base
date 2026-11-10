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

const buttonSizes = {
  small: {
    px: '1rem',
    py: '0.5rem',
    fontSize: 0,
  },
  medium: {
    px: '2rem',
    py: '.75rem',
    fontSize: 1,
  },
  large: {
    px: '3rem',
    py: '1rem',
    fontSize: 2,
  },
}

const buttonColorStates = {
  primary: {
    bg: 'primary0',
    borderColor: 'primary0',
    color: 'white',
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
      borderColor: 'secondary00',
      color: 'white',
    },
    '&:active': {
      bg: 'secondary000',
      borderColor: 'secondary000',
    },
    '&[disabled]': {
      bg: 'gray0',
      borderColor: 'gray0',
      cursor: 'not-allowed',
      color: 'white',
    }
  },
}

Object.keys(buttonColorStates).map((name) => {
  Object.keys(buttonSizes).map((size) => {
    buttons[name + (size.charAt(0).toUpperCase() + size.slice(1))] = {
      ...buttonBase,
      ...buttonColorStates[name],
      ...buttonSizes[size]
    }
  })
})

export default buttons
