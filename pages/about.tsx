import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="アバウト！">
    <h1>About</h1>
    <p>Aboutページですね！</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
