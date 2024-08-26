import {
  GetMatchesResponse,
  GetOrdersResponse,
  NormalizedGetMatchesResponse,
  NormalizedGetOrdersResponse,
} from './types'
import { deepClone } from '@utils'

export const normalizeOrders = (response: GetOrdersResponse): NormalizedGetOrdersResponse => {
  // needed only first 10 orders
  return deepClone(response.orders)
    .slice(0, 10)
    .map(order => ({
      price: Number(order.price),
      remain: Number(order.remain),
      value: Number(order.value),
    }))
}

export const normalizeMatches = (response: GetMatchesResponse): NormalizedGetMatchesResponse => {
  // needed only first 10 orders
  return deepClone(response)
    .slice(0, 10)
    .map(match => ({
      value: Number(match.value),
      price: Number(match.price),
      matchAmount: Number(match.match_amount),
      type: match.type,
      time: Number(match.time),
      matchId: Number(match.match_id),
    }))
}
