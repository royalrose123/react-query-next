import PropTypes from 'prop-types'

// Components
import Layout from '@/components/Layout'

// PropTypes
const propTypes = {
  children: PropTypes.object,
}

function BasicLayout(props) {
  const { children } = props

  return (
    <Layout>
      <Layout.Sidebar />
      <Layout.Body>
        <Layout.Header />
        <Layout.Main>{children}</Layout.Main>
      </Layout.Body>
    </Layout>
  )
}

BasicLayout.propTypes = propTypes

export default BasicLayout
