import { API } from '@api'
import { GetCoinListResponse } from './types'

export const getCoinList = () => {
  return API.request<GetCoinListResponse>({
    url: '/mkt/markets/',
  })
}
