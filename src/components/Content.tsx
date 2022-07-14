import { styled } from '../theme/stitches.config'
const Section = styled('section')

export default ({ children }: {
  children?: any
}) => {
  return (
    <Section
      className="Content"
      css={{
        w: '100%',
        maxW: '1400px',
        m: '0 auto',
        p: '$4',
        pb: 0,
      }}
    > 
      {children}
    </Section>
  )
}
