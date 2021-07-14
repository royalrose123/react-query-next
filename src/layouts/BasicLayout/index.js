import PropTypes from 'prop-types'

// Components
import Layout from '@/components/Layout'
import { DashboardOutlined, FacebookOutlined } from '@ant-design/icons'

// PropTypes
const propTypes = {
  children: PropTypes.object,
}

const navigations = [
  {
    id: 'dashboard',
    path: 'dashboard',
    name: 'Dashboard',
    hasSub: true,
    icon: DashboardOutlined,
    nest: [
      {
        id: 'analysis',
        path: 'analysis',
        name: '留單數據分析',
        hasSub: false,
        icon: null,
        nest: [],
      },
      {
        id: 'monitor',
        path: 'monitor',
        name: '留單數據監控',
        hasSub: false,
        icon: null,
        nest: [],
      },
    ],
  },
  {
    id: 'social-management',
    path: 'social-management',
    name: '社群管理',
    hasSub: true,
    icon: FacebookOutlined,
    nest: [
      {
        id: 't-facebook',
        path: 't-facebook',
        name: 'TutorABC Facebook 粉絲團',
        hasSub: true,
        icon: null,
        nest: [
          {
            id: 'list',
            path: 'list',
            name: '貼文互動管理',
            hasSub: false,
            icon: null,
            nest: [],
          },
        ],
      },
      {
        id: 'tjr-facebook',
        path: 'tjr-facebook',
        name: 'TutorABC Facebook 粉絲團',
        hasSub: true,
        icon: null,
        nest: [
          {
            id: 'list',
            path: 'list',
            name: '貼文互動管理',
            hasSub: false,
            icon: null,
            nest: [],
          },
        ],
      },
    ],
  },
]

function BasicLayout(props) {
  const { children } = props

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
