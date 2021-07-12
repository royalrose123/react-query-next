// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

// PropTypes
const propTypes = {}

function Navigation(props) {
  return <div className={cx('navigation')}>Navigation</div>
}

Navigation.propTypes = propTypes

export default Navigation
