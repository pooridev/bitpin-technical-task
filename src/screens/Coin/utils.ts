import { NormalizedOrder } from './api/types'

export const calculatOrderSummary = (orders: Array<NormalizedOrder>, percentage: number) => {
  if (orders.length === 0) {
    return {
      totalVolume: 0,
      averagePrice: 0,
      totalAmount: 0,
    }
  }

  const totalRemain = orders.reduce((acc, order) => acc + order.remain, 0)
  const selectedVolume = (totalRemain * percentage) / 100

  let accumulatedVolume = 0
  let weightedSum = 0
  let totalAmount = 0

  for (const order of orders) {
    const currentVolume = Math.min(order.remain, selectedVolume - accumulatedVolume)
    accumulatedVolume += currentVolume
    weightedSum += currentVolume * order.price
    totalAmount += currentVolume * order.price
    if (accumulatedVolume >= selectedVolume) break
  }

  return {
    totalVolume: accumulatedVolume,
    averagePrice: accumulatedVolume ? weightedSum / accumulatedVolume : 0,
    totalAmount,
  }
}
