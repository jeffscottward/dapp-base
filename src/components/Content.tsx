import {s} from './stitches'
export default ({ children }: {
  children?: any
}) => {
  return (
    <s.section
      className="Content"
      css={{
        w: '100%',
        maxW: '1400px',
        m: '0 auto',
        p: 4,
        pb: 0,
      }}
    > 
      {children}
    </s.section>
  )
}
