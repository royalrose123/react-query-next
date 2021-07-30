import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Logo from './components/Logo'
import Navigation from '@/components/Navigation'

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

// PropTypes
const propTypes = {
  navigations: PropTypes.array,
}

function Sidebar(props) {
  const { navigations } = props

  return (
    <div className={cx('sidebar')}>
      <Logo />
      <Navigation navigations={navigations} />
    </div>
  )
}

Sidebar.propTypes = propTypes

export default Sidebar
