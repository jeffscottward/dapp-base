import { focusVisibleOutset } from './focus.styles'
import { styled } from './stitches.config'

const Link = styled('a', {
  d: 'inline-flex',
  lh: 'inherit',
  flexShrink: 0,
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: '$slate3',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&:hover': {
    textDecorationLine: 'underline',
  },
  ...focusVisibleOutset,
  variants: {
    variant: {
      blue: {
        color: '$blue9',
        textDecorationColor: '$blue3',
        '&:focus-visible': {
          outlineColor: '$blue7',
        },
      },
      subtle: {
        color: '$gray9',
        textDecorationColor: '$gray3',
        '&:focus-visible': {
          outlineColor: '$gray7',
        },
      },
      contrast: {
        color: '$hiContrast',
        td: 'underline',
        textDecorationColor: '$gray3',
        '&:hover': {
          textDecorationColor: '$gray6',
        },
        '&:focus-visible': {
          outlineColor: '$gray7',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
  },
})
export default Link