import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useFormikContext, useField } from 'formik'

// Components
import Input from '@/components/common/Input'
// import ErrorMessage from '../ErrorMessage'

// Variables / Functions
import styles from './style.module.scss'

const cx = classnames.bind(styles)

export const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  isOnlyNumber: PropTypes.bool,
  onChange: PropTypes.func,
}

export const defaultProps = { size: 'md', isOnlyNumber: false, onChange: () => {} }

function InputField(props) {
  const { className, name, size, isOnlyNumber, onChange: onChangeProps, ...restProps } = props
  const [field] = useField(props)
  const { setFieldValue } = useFormikContext()

  const onChange = (event) => {
    const value = event.target.value

    const numberRex = /^[0-9]*$/g
    const isNumber = value.match(numberRex)

    // 限制 input 只能輸入數字
    if (isOnlyNumber && !isNumber) return

    setFieldValue(field.name, value)
    onChangeProps(value)
  }

  return (
    <div className={cx('input-field-wrapper', className)}>
      <Input {...restProps} onChange={onChange} value={field.value} name={name} />
      {/* <ErrorMessage name={name} size={size} /> */}
    </div>
  )
}

InputField.propTypes = propTypes
InputField.defaultProps = defaultProps

export default InputField
