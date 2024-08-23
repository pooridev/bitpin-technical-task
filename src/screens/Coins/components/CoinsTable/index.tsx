import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Pagination } from '@mui/material'

import { NormalizedCoin } from '@screens/Coins/api/types'
import { Link } from 'react-router-dom'

interface Props {
  coins: NormalizedCoin[]
  paginationProps: {
    currentPage: number
    goToPage: (pageNumber: number) => void
    totalPages: number
  }
}

const CoinsTable = ({ coins, paginationProps }: Props) => {
  const { currentPage, totalPages, goToPage } = paginationProps

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>نام رمز‌ارز</TableCell>
              <TableCell>قیمت</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.map(coin => (
              <TableRow key={coin.id}>
                <TableCell>{coin.titleFa}</TableCell>
                <TableCell>{coin.price}</TableCell>
                <TableCell>
                  <Link to={`/markets/${coin.id}`}>جزئیات</Link>
                </TableCell>
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

export default CoinsTable
