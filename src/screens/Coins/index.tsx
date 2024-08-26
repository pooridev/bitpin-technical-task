import { SyntheticEvent, useState } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import TabPanel from '@components/TabPanel'
import CoinsTable from './components/CoinsTable
import { useGetCoins } from './api/queries'
import usePagination from './hooks/usePagination'

const CoinsPage = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const { coins, fetchingStatus } = useGetCoins()

  const { paginatedItems: IRTCoins, ...IRTCoinsPagination } = usePagination({
    itemsPerPage: 10,
    items: coins?.IRTCoins || [],
  })

  const { paginatedItems: USDTCoins, ...USDTCoinsPagination } = usePagination({
    itemsPerPage: 10,
    items: coins?.USDTCoins || [],
  })

  const handleTabChange = (_: SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex)
  }

  return (
    <Container maxWidth='md'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2 }}>
        <Tabs value={tabIndex} onChange={handleTabChange} aria-label='market tabs'>
          <Tab label='پایه تومان' />
          <Tab label='پایه تتر' />
        </Tabs>
      </Box>

      <TabPanel value={tabIndex} index={0}>
        <CoinsTable fetchingStatus={fetchingStatus} coins={IRTCoins} paginationProps={IRTCoinsPagination} />
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        <CoinsTable fetchingStatus={fetchingStatus} coins={USDTCoins} paginationProps={USDTCoinsPagination} />
      </TabPanel>
    </Container>
  )
}

export default CoinsPage
