import { GetMarketsResponse, NormalizedMarket, NormalizedMarketsResponse } from './types'

export const groupByBaseCurrency = (response: GetMarketsResponse): NormalizedMarketsResponse => {
  const normalizedMarkets: NormalizedMarketsResponse = {
    USDTMarkets: [],
    IRTMarkets: [],
  }

  return response.results.reduce((prevNormalizedResponse, market) => {
    const normalizedMarket: NormalizedMarket = {
      id: market.id,
      price: parseFloat(market.price),
      title: market.title,
      titleFa: market.title_fa,
      image: market.currency1.image,
    }

    if (market.currency2.code === 'USDT') {
      prevNormalizedResponse.USDTMarkets.push(normalizedMarket)
    } else if (market.currency2.code === 'IRT') {
      prevNormalizedResponse.IRTMarkets.push(normalizedMarket)
    }

    return prevNormalizedResponse
  }, normalizedMarkets)
}
