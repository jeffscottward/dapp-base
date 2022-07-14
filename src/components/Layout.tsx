import { s } from './stitches'
export default ({ children }: { children?: any }) => {
  return (
    <s.main
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
    </s.main>
  )
}
