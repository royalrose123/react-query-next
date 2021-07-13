import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

// PropTypes
const propTypes = {
  children: PropTypes.array,
}

function Body(props) {
  const { children } = props

  return <div className={cx('body')}>{children}</div>
}

Body.propTypes = propTypes

export default Body
