import PropTypes from 'prop-types'
import { QueryClient, QueryClientProvider } from 'react-query'

// Components
import BasicLayout from '@/layouts/BasicLayout'

// Constants
import navigations from '@/constants/navigations'

// Styles
import '@/styles/main.scss'

// PropTypes
const propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

const clientConfigs = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
}

const queryClient = new QueryClient(clientConfigs)

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : BasicLayout

  return (
    <QueryClientProvider client={queryClient}>
      <Layout navigations={navigations}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

MyApp.propTypes = propTypes

export default MyApp
