import { focusVisibleOutset } from './focus.styles'
import { styled } from './stitches.config'

export const sharedInputStyles = {
  bg: '$background',
  border: '1px solid $gray4',
  br: '$default',
  color: '$text',
  fontVariantNumeric: 'tabular-nums',
  ...focusVisibleOutset,
  '&:focus': {
    bc: '$primary',
  },
  '&:disabled,&:read-only': {
    bgc: '$gray2',
    bc: '$gray4',
  },
  '&:disabled': {
    pointerEvents: 'none',
    color: '$gray5',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$gray6',
    },
  },
  '&:read-only': {
    '&:focus': {
      bc: '$primary',
    },
  },
}

const Input = styled('input', {
  // Reset
  appearance: 'none',
  d: 'block',
  ff: 'inherit',
  fs: '$body',
  m: 0,
  outline: 'none',
  p: 0,
  w: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  ...sharedInputStyles,

  '&:-webkit-autofill': {
    // boxShadow:
    //   'inset 0 0 0 1px $colors$blue500, inset 0 0 0 100px $colors$blue2',
  },

  '&:-webkit-autofill::first-line': {
    ff: '$sans',
    color: '$text',
  },

  '&::placeholder': {
    color: '$gray8',
  },

  variants: {
    size: {
      '1': {
        py: '$2',
        px: '$2',
        fs: '$body',
      },
      '2': {
        py: '$2',
        px: '$3',
        fs: '$5',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
})

export default Input