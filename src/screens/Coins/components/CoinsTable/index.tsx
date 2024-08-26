import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import TableHead from '@mui/material/TableHead'
import Pagination from '@mui/material/Pagination'
import MuiLink from '@mui/material/Link'

import { NormalizedCoin } from '@screens/Coins/api/types'
import { Link } from 'react-router-dom'
import { getCoinDetailsState } from '@screens/Coins/utils'

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
                  <MuiLink state={getCoinDetailsState(coin)} component={Link} to={`/coin/${coin.id}`}>
                    جزئیات
                  </MuiLink>
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
