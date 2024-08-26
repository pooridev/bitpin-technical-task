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
import Alert from '@mui/material/Alert'

import { Link } from 'react-router-dom'

import { NormalizedCoin } from '@screens/Coins/api/types'
import { getCoinDetailsState } from '@screens/Coins/utils'
import { FetchingStatus } from '@api'
import TableSkeloten from '../TableSkeloten'
import { formatPrice } from '@utils'

interface Props {
  coins: NormalizedCoin[]
  fetchingStatus: FetchingStatus
  paginationProps: {
    currentPage: number
    goToPage: (pageNumber: number) => void
    totalPages: number
  }
}

const CoinsTable = ({ coins, paginationProps, fetchingStatus }: Props) => {
  const { currentPage, totalPages, goToPage } = paginationProps

  if (fetchingStatus == 'error') {
    return (
      <Alert sx={{ m: 2 }} severity='error'>
        خطا در دریافت اطلاعات
      </Alert>
    )
  }

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
            {fetchingStatus == 'loading' && <TableSkeloten />}
            {fetchingStatus == 'success' &&
              coins.map(coin => (
                <TableRow key={coin.id}>
                  <TableCell>{coin.titleFa}</TableCell>
                  <TableCell>{formatPrice(String(coin.price))}</TableCell>
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
