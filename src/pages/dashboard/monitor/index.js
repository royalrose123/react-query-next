import { useQuery } from 'react-query'
// import PropTypes from 'prop-types'
import { fetchAssetInfo } from '@/api/fetchAssetInfo'

// import PropTypes from 'prop-types'

// Components

// PropTypes
const propTypes = {}

function MonitorPage(props) {
  const { isLoading, error, data } = useQuery('repoData', fetchAssetInfo)

  console.log(`data 11111`, data)
  console.log(`isLoading 22222`, isLoading)
  console.log(`error 33333`, error)

  return <div>monitor</div>
}

MonitorPage.propTypes = propTypes

export default MonitorPage
