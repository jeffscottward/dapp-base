import { styled } from './stitches.config'

const Avatar = styled('div', {
  d: 'inline-flex',
  br: '$full',
  bg: '$gray8',
  color: '$gray5',
  fw: 'bold',
  ai: 'center',
  jc: 'center',
  bs: 'cover',
  variants: {
    variant: {
      small: {
        w: 35,
        h: 35,
        fs: '$2',
      },
      large: {
        w: 50,
        h: 50,
        fs: '$4',
      },
    },
  },
  defaultVariants: {
    variant: 'large',
  },
})

export default Avatar