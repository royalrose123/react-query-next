import { DashboardOutlined, FacebookOutlined } from '@ant-design/icons'

// id 不可重複
// 內部連結的 path 需對應 pages 結構
// 如果有子層(nest)，hasSub 為 true
// 如果是外部連結，isExternal 為 true，link 為連結
const navigations = [
  {
    id: '1',
    path: 'dashboard',
    name: 'Dashboard',
    hasSub: true,
    icon: DashboardOutlined,
    nest: [
      {
        id: '1-1',
        path: 'analysis',
        name: '留單數據分析',
        hasSub: false,
        icon: null,
        nest: [],
        isExternal: false,
        link: '',
      },
      {
        id: '1-2',
        path: 'monitor',
        name: '留單數據監控',
        hasSub: false,
        icon: null,
        nest: [],
        isExternal: false,
        link: '',
      },
    ],
  },
  {
    id: '2',
    path: 'list',
    name: '用戶管理',
    hasSub: true,
    icon: DashboardOutlined,
    nest: [
      {
        id: '2-1',
        path: 'listInfo',
        name: '留單清冊',
        hasSub: false,
        icon: null,
        nest: [],
        isExternal: false,
        link: '',
      },
    ],
  },
  {
    id: '3',
    path: 'lab',
    name: 'RD天地',
    hasSub: true,
    icon: DashboardOutlined,
    nest: [
      {
        id: '3-1',
        path: 'spider',
        name: '阿弟資訊局',
        hasSub: false,
        icon: null,
        nest: [],
        isExternal: false,
        link: '',
      },
    ],
  },
  {
    id: '9',
    path: '',
    name: 'test天地',
    hasSub: true,
    icon: DashboardOutlined,
    nest: [
      {
        id: '9-1',
        path: '',
        name: 'test資訊局',
        hasSub: false,
        icon: null,
        nest: [],
        isExternal: true,
        link: 'https://yahoo.com.tw',
      },
    ],
  },
  {
    id: '4',
    path: 'social-management',
    name: '社群管理',
    hasSub: true,
    icon: FacebookOutlined,
    nest: [
      {
        id: '4-1',
        path: 't-facebook',
        name: 'TutorABC Facebook 粉絲團',
        hasSub: true,
        icon: null,
        nest: [
          {
            id: '4-1-1',
            path: 'list',
            name: '貼文互動管理',
            hasSub: false,
            icon: null,
            nest: [],
            isExternal: false,
            link: '',
          },
        ],
      },
      {
        id: '4-2',
        path: 'tjr-facebook',
        name: 'TutorABC Facebook 粉絲團',
        hasSub: true,
        icon: null,
        nest: [
          {
            id: '4-2-1',
            path: 'list',
            name: '貼文互動管理',
            hasSub: false,
            icon: null,
            nest: [],
            isExternal: false,
            link: '',
          },
        ],
      },
    ],
  },
]

export default navigations
