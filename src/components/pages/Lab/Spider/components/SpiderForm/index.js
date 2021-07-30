import React from 'react'
// import PropTypes from 'prop-types'
import classnames from 'classnames/bind'
import { useFormikContext } from 'formik'

// Components
import Form from '@/components/common/Form'
// import Button from '@/components/common/Button'

// Lib MISC
import styles from './style.module.scss'

const cx = classnames.bind(styles)

export const propTypes = {}

function SpiderForm(props) {
  //   const {} = props

  const { submitForm } = useFormikContext()

  return (
    <div className={cx('sider-form')}>
      <Form.InputField className={cx('sider-form-input')} name='name' type='dark' placeholder='Name' maxLength={10} />
      <Form.InputField className={cx('sider-form-input')} name='email' type='dark' placeholder='Email address' />
      <Form.InputField className={cx('sider-form-input')} name='phone' type='dark' placeholder='Phone number (optional)' />
      <div className={cx('sider-form-submit')}>
        <button className={cx('sider-form-submit-button')} onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  )
}

SpiderForm.propTypes = propTypes

export default SpiderForm
