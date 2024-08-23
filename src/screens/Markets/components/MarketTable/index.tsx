import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Pagination } from '@mui/material'

import { NormalizedMarket } from '@screens/Markets/api/types'

interface Props {
  markets: NormalizedMarket[]
  paginationProps: {
    currentPage: number
    goToPage: (pageNumber: number) => void
    totalPages: number
  }
}

const MarketTable = ({ markets, paginationProps }: Props) => {
  const { currentPage, totalPages, goToPage } = paginationProps

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>نام رمز‌ارز</TableCell>
              <TableCell>قیمت</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {markets.map(market => (
              <TableRow key={market.id}>
                <TableCell>{market.titleFa}</TableCell>
                <TableCell>{market.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display='flex' justifyContent='center' mt={2}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, pageNumber) => goToPage(pageNumber)}
          color='primary'
        />
      </Box>
    </>
  )
}

export default MarketTable
