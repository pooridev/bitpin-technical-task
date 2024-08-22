import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Pagination } from '@mui/material'

import usePagination from '../../hooks/usePagination'
import { NormalizedMarket } from '@screens/Markets/api/types'

interface Props {
  markets: NormalizedMarket[]
}

const MarketTable = ({ markets }: Props) => {
  const { currentPage, totalPages, paginatedItems, goToPage } = usePagination({
    items: markets,
    itemsPerPage: 10,
  })

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Market Name</TableCell>
              <TableCell>Base Currency</TableCell>
              <TableCell>Quote Currency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedItems.map(market => (
              <TableRow key={market.id}>
                <TableCell>{market.title}</TableCell>
                <TableCell>{market.titleFa}</TableCell>
                <TableCell>{market.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display='flex' justifyContent='center' mt={2}>
        <Pagination count={totalPages} page={currentPage} onChange={(e, value) => goToPage(value)} color='primary' />
      </Box>
    </>
  )
}

export default MarketTable
