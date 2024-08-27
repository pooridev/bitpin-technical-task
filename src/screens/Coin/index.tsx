import { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'

import Avatar from '@mui/material/Avatar'

import { ORDERS_TAB, OrdersTab, useOrdersTab } from './hooks/useOrdersTab'
import OrdersTable from './components/OrderTable'
import { useGetMatches, useGetOrders } from './api/queries'
import MatchesTable from './components/MatchesTable'
import TabPanel from '@components/TabPanel'
import SwitchTheme from '@components/SwitchTheme'

const CoinsPage = () => {
  const [percentage, setPercentage] = useState(0)

  const { handleChangeOrdersTab, activeOrdersTab } = useOrdersTab()

  const { marketId } = useParams<{ marketId: string }>()
  const { coinDetails } = useLocation().state
  const { title: coinTitle, image: coinImage } = coinDetails

  const { orders: buyOrders, ordersFetchingStatus: buyOrdersFetchingStatus } = useGetOrders({
    marketId: Number(marketId),
    type: 'buy',
    enabled: activeOrdersTab == ORDERS_TAB.BUY,
  })

  const { orders: sellOrders, ordersFetchingStatus: sellOrdersFetchingStatu } = useGetOrders({
    marketId: Number(marketId),
    type: 'sell',
    enabled: activeOrdersTab == ORDERS_TAB.SELL,
  })

  const { matches, matchesFetchingStatus } = useGetMatches({
    marketId: Number(marketId),
    enabled: activeOrdersTab == ORDERS_TAB.RECENT,
  })

  const handlePercentageChange = (percentage: number) => {
    if (percentage >= 0 && percentage <= 100) {
      setPercentage(percentage)
    }
  }

  return (
    <Container maxWidth='md'>
      <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ padding: 2 }}>
        <Box display='flex' alignItems='center' gap={2}>
          <Typography variant='h6'>{coinTitle}</Typography>
          <Avatar alt={coinTitle} src={coinImage} />
        </Box>

        <SwitchTheme />
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: 2 }}>
        <Tabs value={activeOrdersTab} onChange={(_, value: OrdersTab) => handleChangeOrdersTab(value)}>
          <Tab label='سفارشات فروش' />
          <Tab label='سفارشات خرید' />
          <Tab label='معاملات اخیر' />
        </Tabs>
      </Box>
      <TabPanel value={activeOrdersTab} index={ORDERS_TAB.BUY}>
        <OrdersTable
          orders={buyOrders || []}
          fetchingStatus={buyOrdersFetchingStatus}
          percentage={percentage}
          onPercentageChange={handlePercentageChange}
        />
      </TabPanel>

      <TabPanel value={activeOrdersTab} index={ORDERS_TAB.SELL}>
        <OrdersTable
          orders={sellOrders || []}
          fetchingStatus={sellOrdersFetchingStatu}
          percentage={percentage}
          onPercentageChange={handlePercentageChange}
        />
      </TabPanel>

      <TabPanel value={activeOrdersTab} index={ORDERS_TAB.RECENT}>
        <MatchesTable matches={matches || []} fetchingStatus={matchesFetchingStatus} />
      </TabPanel>
    </Container>
  )
}

export default CoinsPage
