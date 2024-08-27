export type OrderType = 'sell' | 'buy'

export interface GetOrdersParams {
  type: OrderType
  marketId: number
}

type StringifiedNumber = `${number}`

interface Order {
  amount: StringifiedNumber
  remain: StringifiedNumber
  price: StringifiedNumber
  value: StringifiedNumber
}

export interface GetOrdersResponse {
  orders: Array<Order>
  volume: StringifiedNumber
}

export interface NormalizedOrder {
  remain: number
  price: number
  value: number
}

export type NormalizedGetOrdersResponse = Array<NormalizedOrder>

export interface GetMatchesParams {
  marketId: number
}

interface Match {
  time: number
  price: StringifiedNumber
  value: StringifiedNumber
  match_amount: StringifiedNumber
  type: OrderType
  match_id: string
}

export type GetMatchesResponse = Array<Match>

export type NormalizedMatch = {
  time: number
  price: number
  value: number
  matchAmount: number
  type: OrderType
  matchId: string
}

export type NormalizedGetMatchesResponse = Array<NormalizedMatch>
