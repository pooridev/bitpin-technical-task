import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import TabPanel from './components/TabPanel'
import { SyntheticEvent, useState } from 'react'
import MarketTable from './components/MarketTable'
import { useGetMarkets } from './api/queries'

const MaketsPage = () => {
  const [tabIndex, setTabIndex] = useState(0)

  const { markets } = useGetMarkets()
  console.log({
    markets,
  })

  const handleTabChange = (_: SyntheticEvent, newIndex: number) => {
    setTabIndex(newIndex)
  }

  return (
    <Container maxWidth='md'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 2 }}>
        <Tabs value={tabIndex} onChange={handleTabChange} aria-label='market tabs'>
          <Tab label='IRT Markets' />
          <Tab label='USDT Markets' />
        </Tabs>
      </Box>

      <TabPanel value={tabIndex} index={0}>
        <MarketTable markets={markets?.IRTMarkets || []} tabIndex={0} />
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        <MarketTable markets={markets?.USDTMarkets || []} tabIndex={1} />
      </TabPanel>
    </Container>
  )
}

export default MaketsPage
