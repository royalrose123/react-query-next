// import PropTypes from 'prop-types'
// import classnames from 'classnames/bind'

// Lib MISC

// Components
import SpiderForm from './components/SpiderForm'
import SpiderFormik from './components/SpiderFormik'

// Styles
// import styles from './style.module.scss'

// PropTypes
const propTypes = {}

// Variables
// const cx = classnames.bind(styles)

function Spider(props) {
  return (
    <SpiderFormik title='Upload Asset' {...props}>
      <SpiderForm />
    </SpiderFormik>
  )
}

Spider.propTypes = propTypes

export default Spider
