import { styled } from './stitches.config'

const Button = styled('button', {
  fs: 'normal',
  fw: 'bold',
  lh: '1rem',
  d: 'flex',
  ai: 'center',
  ta: 'center',
  tt: 'uppercase',
  br: '.25rem',
  bg: 'transparent',
  border: '2px solid transparent',
  color: 'text',
  cursor: 'pointer',
  '&[disabled]': {
    bg: '$gray0',
    bc: '$gray0',
    cursor: 'not-allowed',
    color: 'white',
  },
  variants: {
    color: {
      primary: {
        bg: '$blue10',
        bc: '$blue10',
        color: 'white',
        '&:hover': {
          bg: '$blue9',
          bc: '$blue9',
        },
        '&:active': {
          bg: '$blue8',
          bc: '$blue8',
        },
        '&[disabled]': {
          bg: '$gray11',
          bc: '$gray11',
          cursor: 'not-allowed',
          color: 'white',
        }
      },
      secondary: {
        bc: '$green10',
        color: '$green10',
        '&:hover': {
          bg: '$green9',
          bc: '$green9',
          color: 'white',
        },
        '&:active': {
          bg: '$green8',
          bc: '$green8',
        },
        '&[disabled]': {
          bg: '$gray11',
          bc: '$gray11',
          cursor: 'not-allowed',
          color: 'white',
        }
      },
    },
    size: {
      small: {
        px: '1rem',
        py: '0.5rem',
        fs: '$1',
      },
      medium: {
        px: '2rem',
        py: '.75rem',
        fs: '$2',
      },
      large: {
        px: '3rem',
        py: '1rem',
        fs: '$3',
      },
    }
  },
  defaultVariants: {
    color: 'primary',
    size: 'small',
  },
})

export default Button