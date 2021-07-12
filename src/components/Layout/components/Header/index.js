// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

// PropTypes
const propTypes = {}

function Header(props) {
  return <div className={cx('header')}>Header</div>
}

Header.propTypes = propTypes

export default Header
