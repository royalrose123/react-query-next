import { useState } from 'react'
import { useRouter } from 'next/router'
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

  const router = useRouter()
  const { pathname } = router
  const pathGroup = pathname.split('/')[1] // ex: /lab/spider => ['/', 'lab', 'spider'] // 取第一個 path

  const [selectGroup, setSelectGroup] = useState(pathGroup)

  const computedParentPath = (nest, path) => {
    return nest.map((item) => {
      return {
        ...item,
        nest: item.hasSub ? computedParentPath(item.nest, path) : [],
        parentPath: item.parentPath ? `${item.parentPath}/${path}` : path,
      }
    })
  }

  const renderMenu = ({ navigations, isSub = false }) => {
    return navigations.map((item) => {
      const { name, nest, hasSub, icon, path } = item

      const newNest = computedParentPath(nest, path)

      return hasSub ? (
        <Menu.Group key={item.id} title={name} icon={icon} isSub={isSub} selectGroup={selectGroup} setSelectGroup={setSelectGroup} {...item}>
          {renderMenu({ navigations: newNest, isSub: true })}
        </Menu.Group>
      ) : (
        <Menu.Group.Item key={item.id} path={path} {...item} />
      )
    })
  }

  return (
    <div className={cx('navigation')}>
      <Menu>{renderMenu({ navigations })}</Menu>
    </div>
  )
}

Navigation.propTypes = propTypes

export default Navigation
