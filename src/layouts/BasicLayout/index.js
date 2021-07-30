import PropTypes from 'prop-types'

// Components
import Layout from '@/components/Layout'

// PropTypes
const propTypes = {
  children: PropTypes.object,
  navigations: PropTypes.array,
}

function BasicLayout(props) {
  const { children, navigations } = props

  return (
    <Layout>
      <Layout.Sidebar navigations={navigations} />
      <Layout.Body>
        <Layout.Header />
        <Layout.Main>{children}</Layout.Main>
      </Layout.Body>
    </Layout>
  )
}

BasicLayout.propTypes = propTypes

export default BasicLayout
