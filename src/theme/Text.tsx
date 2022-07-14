import { styled } from './stitches.config'

export default styled('span', {
  variants: {
    variant: {
      caps: {
        tt: 'uppercase',
        letterSpacing: '0.2em',
      },
      bold: {
        fw: 'bold'
      },
      underline: {
        td: 'underline'
      },
      italic: {
        fs: 'italic'
      },
    },
  },
})
