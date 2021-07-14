import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import Link from 'next/link'

// Components

// Styles
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

export const propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  parentPath: PropTypes.string,
}

function Item(props) {
  const { name, path, parentPath } = props

  const itemPath = parentPath ? `/${parentPath}/${path}` : `/${path}`

  return (
    <div className={cx('item')}>
      <Link href={itemPath}>
        <a className={cx('item-link')}>{name}</a>
      </Link>
    </div>
  )
}

Item.propTypes = propTypes

export default Item
