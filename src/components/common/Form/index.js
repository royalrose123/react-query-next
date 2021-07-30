import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import classnames from 'classnames/bind'

// Components
import InputField from './components/InputField'

// Style
import styles from './style.module.scss'

// Variables
const cx = classnames.bind(styles)

export const propTypes = {
  className: PropTypes.string,
  forwardRef: PropTypes.any,
  formik: PropTypes.object,
  formCss: PropTypes.object,
}

function Form(props) {
  const { className, formCss, forwardRef, formik, ...restProps } = props

  return <form className={cx('form')} ref={forwardRef} onReset={formik.handleReset} onSubmit={formik.handleSubmit} {...restProps} />
}

Form.propTypes = propTypes

const ConnectedForm = connect(Form)
const ConnectedFormWithRef = React.forwardRef((props, ref) => <ConnectedForm {...props} forwardRef={ref} />)

ConnectedFormWithRef.InputField = InputField

export default ConnectedFormWithRef
