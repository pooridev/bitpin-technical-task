import { API } from '@api'
import { GetMarketsResponse } from './types'

export const getMarkets = () => {
  return API.request<GetMarketsResponse>({
    url: '/mkt/markets/',
  })
}
