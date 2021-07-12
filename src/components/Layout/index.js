import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import Header from './components/Header'
import Main from './components/Main'

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

// PropTypes
const propTypes = {
  children: PropTypes.array,
}

function Layout(props) {
  const { children } = props

  return <div className={cx('layout')}>{children}</div>
}

Layout.propTypes = propTypes

Layout.Sidebar = Sidebar
Layout.Body = Body
Layout.Header = Header
Layout.Main = Main

export default Layout
