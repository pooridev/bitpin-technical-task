import { API } from '@api'
import type { GetMatchesParams, GetMatchesResponse, GetOrdersParams, GetOrdersResponse } from './types'

export const getOrders = ({ type, marketId }: GetOrdersParams) => {
  return API.request<GetOrdersResponse>({
    baseURL: `${import.meta.env.VITE_FALLBACK_BITPIN_ORIGIN}/v2`,
    url: `/mth/actives/${marketId}/`,
    params: {
      type,
    },
  })
}

export const getMatches = ({ marketId }: GetMatchesParams) => {
  return API.request<GetMatchesResponse>({
    url: `/mth/matches/${marketId}/`,
  })
}
