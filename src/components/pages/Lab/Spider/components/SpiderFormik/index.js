import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'

// Components

// Lib MISC
import getformikConfig from './formikConfig'

export const propTypes = {
  children: PropTypes.node,
}

export const defaultProps = {}

function SpiderFormik(props) {
  const { children } = props

  const formikConfig = getformikConfig(props)

  return <Formik {...formikConfig}>{() => children}</Formik>
}

SpiderFormik.propTypes = propTypes
SpiderFormik.defaultProps = defaultProps

export default SpiderFormik
