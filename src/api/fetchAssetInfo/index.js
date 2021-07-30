import Service, { getCallApiFunction } from '../service'
// import denormalizer from './denormalizer'
// import normalizer from './normalizer'

class FetchAssetInfoApi extends Service {
  constructor() {
    super()
    this.name = 'FETCH_ASSET_INFO'

    this.config = {
      url: `/hello`,
      method: 'GET',
      params: {},
      baseURL: 'http://localhost:4000/web/marketing/api',
    }
  }
}

export const fetchAssetInfo = (...apiParams) => getCallApiFunction(new FetchAssetInfoApi(...apiParams))
