import Aside from '../components/organisms/aside/aside.component'
import Layout from '../components/templates/layout/layout.component'
import Core from '../components/organisms/core/core.component'

export default function Home () {
  return (
    <Layout>
       <Aside />
      <Core />
    </Layout>
  )
}
