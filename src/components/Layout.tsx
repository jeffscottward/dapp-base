import { styled } from '../theme/stitches.config'
const Main = styled('main')

export default ({ children }: { children?: any }) => {
  return (
    <Main
      css={{
        m: 'auto',
        w: '100%',
        minH: '100vh',
        h: 'max-content',
        d: 'flex',
        fd: 'column',
      }}
    >
      {children}
    </Main>
  )
}
