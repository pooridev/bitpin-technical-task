import { NormalizedCoin } from './api/types'

export const getCoinDetailsState = (coin: NormalizedCoin) => {
  return {
    coinDetails: {
      title: coin.titleFa,
      image: coin.image,
    },
  }
}
