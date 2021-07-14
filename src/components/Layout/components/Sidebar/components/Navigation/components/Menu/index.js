import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Group from './components/Group'

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

// PropTypes
const propTypes = {
  children: PropTypes.array,
}

function Menu(props) {
  const { children } = props

  return <div className={cx('menu')}>{children}</div>
}

Menu.propTypes = propTypes

Menu.Group = Group

export default Menu
