import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

// PropTypes
const propTypes = {
  children: PropTypes.object,
}

function BasicLayout(props) {
  const { children } = props

  return (
    <div className={cx('layout')}>
      <div className={cx('side')}>
        <div>navigation</div>
      </div>
      <div className={cx('body')}>
        <div className={cx('header')}>header</div>
        <div className={cx('main')}>{children}</div>
      </div>
    </div>
  )
}

BasicLayout.propTypes = propTypes

export default BasicLayout
