/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'

const FallBack = () => {
  const router = useRouter()
  return (
    <Layout>
      <main>
        <div className="contents animate">
          <section className="content">
            <div
              className="404message"
              sx={{ height: '100vh', display: 'grid', placeItems: 'center' }}
            >
              <Styled.h1>404 - could not find route {router.asPath}</Styled.h1>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  )
}

export default FallBack
