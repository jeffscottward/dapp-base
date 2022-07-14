import { styled } from './stitches.config'

const heading = {
  ff: '$sans',
  lh: '$heading',
  fw: '$light',
  mb: '$4',
  mt: '$6',
  color: '$text',
}

const Heading = styled('h2', {
  variants: {
    variant: {
      h1: {
        ...heading,
        fs: '$9',
        mt: '$9',
      },
      h2: {
        ...heading,
        fs: '$8',
        mt: '$9',
      },
      h3: {
        ...heading,
        fs: '$7',
      },
      h4: {
        ...heading,
        fs: '$6',
      },
      h5: {
        ...heading,
        fs: '$5',
      },
      h6: {
        ...heading,
        fs: '$4',
      },
      sectionHeading: {
        ...heading,
        fs: '$9',
        m: 0,
      },
      sectionSubHeading: {
        ...heading,
        fs: '$7',
        m: 0,
        tt: 'uppercase',
        color: '$gray6',
      },
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
})

export default Heading
