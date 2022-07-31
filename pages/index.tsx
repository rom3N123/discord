import type { NextPage } from 'next'
import Layout from '~/components/shared/Layout'

const Home: NextPage = () => {
  return <Layout sidebar={<div>Sidebar</div>} content={<div>Content</div>} />
}

export default Home
