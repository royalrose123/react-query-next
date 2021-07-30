import PropTypes from 'prop-types'
import classnames from 'classnames/bind'

// Components
import { Input } from 'antd'

// Styles
import styles from './style.module.scss'
import 'antd/lib/input/style/index.css'

// Variables
const cx = classnames.bind(styles)

// PropTypes
const propTypes = {
  className: PropTypes.string,
}

function InputComponent(props) {
  const { className, ...restProps } = props

  return (
    <div className={cx('input-wrapper')}>
      <Input className={cx('input', className)} {...restProps} />
    </div>
  )
}

InputComponent.propTypes = propTypes

export default InputComponent
