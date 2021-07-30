import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Components

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

export const propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  parentPath: PropTypes.string,
  isExternal: PropTypes.bool,
  link: PropTypes.string,
}

function Item(props) {
  const { name, path, parentPath, isExternal, link } = props

  const router = useRouter()
  const { pathname } = router

  const itemPath = parentPath ? `/${parentPath}/${path}` : `/${path}`

  const isCurrentPath = itemPath === pathname

  return (
    <div className={cx('item')} data-is-active={isCurrentPath}>
      {!isExternal && (
        <Link href={itemPath}>
          <a className={cx('item-link')}>{name}</a>
        </Link>
      )}
      {isExternal && (
        <a className={cx('item-link')} href={link} target='_blank' rel='noreferrer'>
          {name}
        </a>
      )}
    </div>
  )
}

Item.propTypes = propTypes

export default Item
