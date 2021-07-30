import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useRouter } from 'next/router'

// Components
import Item from './components/Item'

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

// PropTypes
const propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  path: PropTypes.string,
  parentPath: PropTypes.string,
  icon: PropTypes.object,
  isSub: PropTypes.bool,
  selectGroup: PropTypes.string,
  setSelectGroup: PropTypes.func,
}

function Group(props) {
  const { children, title, icon: Icon, path, parentPath, isSub, selectGroup, setSelectGroup } = props
  const router = useRouter()
  const { pathname } = router

  const pathArray = pathname.split('/') // ex: /social-management/t-facebook => ['/', 'social-management', 't-facebook']
  const groupWithoutItem = pathArray.slice(0, pathArray.length - 1) // 最後一個是 item 不是 group 所以要去掉
  const isCurrentGroup = groupWithoutItem.indexOf(path) !== -1
  const isSameGroup = pathname.includes(parentPath)

  const firstPath = pathArray[1] // pathArray[0] 是 '/'，所以要取 pathArray[1]
  const isRootPath = !isSub && firstPath === path // 因為透過 parentPath 沒辦法找到 rootPath，所以要另外找
  const isActiveGroup = (isCurrentGroup && isSameGroup) || isRootPath

  const [isOpen, setIsOpen] = useState(isActiveGroup)

  const onGroupClick = () => {
    if (!isSub) setSelectGroup(path)

    setIsOpen((prev) => !prev)
  }

  // 不是所選的 group 就 close
  useEffect(() => {
    if (!isSub && selectGroup !== path) setIsOpen(false)
  }, [selectGroup, path, isSub])

  return (
    <div className={cx('group')} data-is-open={isOpen}>
      <div className={cx('group-item')} data-is-active={isActiveGroup} onClick={onGroupClick}>
        <div className={cx('group-item-wrapper')}>{Icon && <Icon className={cx('group-item-wrapper-icon')} />}</div>
        <p className={cx('group-item-title')}>{title}</p>
        <div className={cx('group-item-arrow')} data-is-active={isActiveGroup} data-is-open={isOpen} />
      </div>
      <div className={cx('group-children')} data-is-open={isOpen}>
        {children}
      </div>
    </div>
  )
}

Group.propTypes = propTypes

Group.Item = Item

export default Group
