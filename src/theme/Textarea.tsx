import { styled } from './stitches.config'
import { sharedInputStyles } from './Input'

export default styled('textarea', {
  appearance: 'none',
  d: 'block',
  w: '100%',
  p: '$2',
  fs: 'inherit',
  ff: 'inherit',
  lh: 'inherit',
  ...sharedInputStyles,
})
