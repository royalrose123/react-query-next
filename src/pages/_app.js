import PropTypes from 'prop-types'

// Components
import BasicLayout from '@/layouts/BasicLayout'

// Styles
import '@/styles/main.scss'

// PropTypes
const propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

function MyApp({ Component, pageProps }) {
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  )
}

MyApp.propTypes = propTypes

export default MyApp
