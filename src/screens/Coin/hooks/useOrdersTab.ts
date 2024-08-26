import { useState } from 'react'

export const ORDERS_TAB = {
  BUY: 0,
  SELL: 1,
  RECENT: 2,
} as const

export type OrdersTab = (typeof ORDERS_TAB)[keyof typeof ORDERS_TAB]

export const useOrdersTab = () => {
  const [activeOrdersTab, setActiveOrdersTab] = useState<OrdersTab>(ORDERS_TAB.BUY)

  const handleChangeOrdersTab = (tab: OrdersTab) => setActiveOrdersTab(tab)

  return {
    handleChangeOrdersTab,
    activeOrdersTab,
  }
}
