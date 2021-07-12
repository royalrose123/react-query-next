// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

// PropTypes
const propTypes = {}

function Logo(props) {
  return <div className={cx('logo')}>Logo</div>
}

Logo.propTypes = propTypes

export default Logo
