import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="ホーム！">
    <h1>トップページですね🤔</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
