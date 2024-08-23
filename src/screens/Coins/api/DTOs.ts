import Decimal from 'decimal.js'
import { GetCoinListResponse, NormalizedCoin, NormalizeCoinListResponse } from './types'

export const groupByBaseCurrency = (response: GetCoinListResponse): NormalizeCoinListResponse => {
  const initialNormalizedCoins: NormalizeCoinListResponse = {
    IRTCoins: [],
    USDTCoins: [],
  }

  return response.results.reduce((prevNormalizedResponse, market) => {
    const normalizedCoin: NormalizedCoin = {
      id: market.id,
      price: new Decimal(market.price).floor().toNumber(),
      title: market.title,
      titleFa: market.title_fa,
      image: market.currency1.image,
    }

    if (market.currency2.code === 'USDT') {
      prevNormalizedResponse.USDTCoins.push(normalizedCoin)
    } else if (market.currency2.code === 'IRT') {
      prevNormalizedResponse.IRTCoins.push(normalizedCoin)
    }

    return prevNormalizedResponse
  }, initialNormalizedCoins)
}
