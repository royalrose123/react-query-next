import PropTypes from 'prop-types'

import BasicLayout from '@/layouts/BasicLayout'

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
