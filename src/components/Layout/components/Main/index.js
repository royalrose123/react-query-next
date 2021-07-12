import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

// PropTypes
const propTypes = {
  children: PropTypes.func,
}

function Main(props) {
  const { children } = props

  return <div className={cx('main')}>{children}</div>
}

Main.propTypes = propTypes

export default Main
