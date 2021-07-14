import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import Item from './components/Item'
import { UpOutlined, DownOutlined } from '@ant-design/icons'

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

// PropTypes
const propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  icon: PropTypes.object,
}

function Group(props) {
  const { children, title, icon: Icon } = props

  const [isOpen, setIsOpen] = useState(false)

  const onGroupClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className={cx('group')}>
      <div className={cx('group-item')} onClick={onGroupClick}>
        <div className={cx('group-item-wrapper')}>{Icon && <Icon className={cx('group-item-wrapper-icon')} />}</div>
        <p className={cx('group-item-title')}>{title}</p>
        {isOpen ? (
          <UpOutlined className={cx('group-item-dropdown')} width={10} height={10} />
        ) : (
          <DownOutlined className={cx('group-item-dropdown')} width={10} height={10} />
        )}
      </div>
      {isOpen && <>{children}</>}
    </div>
  )
}

Group.propTypes = propTypes

Group.Item = Item

export default Group
