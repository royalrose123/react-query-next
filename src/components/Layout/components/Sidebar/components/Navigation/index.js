import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Menu from './components/Menu'

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

// PropTypes
const propTypes = {
  navigations: PropTypes.array,
}

function Navigation(props) {
  const { navigations } = props

  const computedParentPath = (nest, path) => {
    return nest.map((item) => {
      return {
        ...item,
        nest: item.hasSub ? computedParentPath(item.nest, path) : [],
        parentPath: item.parentPath ? `${item.parentPath}/${path}` : path,
      }
    })
  }

  const renderMenuItem = (item) => {
    return <Menu.Group.Item {...item} />
  }

  const renderMenu = (navigations) => {
    return navigations.map((item, index) => {
      const { name, nest, hasSub, icon, path } = item

      const newNest = computedParentPath(nest, path)

      return (
        <div key={index}>
          {hasSub ? (
            <Menu.Group title={name} icon={icon} {...item}>
              {renderMenu(newNest)}
            </Menu.Group>
          ) : (
            renderMenuItem(item, path)
          )}
        </div>
      )
    })
  }
  return (
    <div className={cx('navigation')}>
      <Menu>{renderMenu(navigations)}</Menu>
    </div>
  )
}

Navigation.propTypes = propTypes

export default Navigation
