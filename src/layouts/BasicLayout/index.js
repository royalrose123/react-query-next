import PropTypes from 'prop-types'

// PropTypes
const propTypes = {
  children: PropTypes.object,
}

function BasicLayout(props) {
  const { children } = props

  return (
    <div>
      header
      {children}
    </div>
  )
}

BasicLayout.propTypes = propTypes

export default BasicLayout
