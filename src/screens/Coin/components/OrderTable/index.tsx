import MuiTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import TableHead from '@mui/material/TableHead'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'

import { NormalizedOrder } from '@screens/Coin/api/types'
import OrderSummary from '../OrderSummary'
import { FetchingStatus } from '@api'
import { ORDERS_TABLE_HEAD } from '@screens/Coin/constants'
import { Skeleton } from '@mui/material'
import { memo } from 'react'

interface OrdersTableProps {
  orders: Array<NormalizedOrder>
  fetchingStatus: FetchingStatus
  percentage: number
  onPercentageChange: (percentage: number) => void
}

const OrdersTable = ({ orders, fetchingStatus, percentage, onPercentageChange }: OrdersTableProps) => {
  if (fetchingStatus == 'error') {
    return (
      <Alert sx={{ m: 2 }} severity='error'>
        خطا در دریافت اطلاعات
      </Alert>
    )
  }

  const isEmpty = orders.length == 0

  if (fetchingStatus != 'loading' && isEmpty) {
    return (
      <Alert sx={{ m: 2 }} severity='info'>
        سفارشی تاکنون ثبت نشده است
      </Alert>
    )
  }

  return (
    <Box>
      <TextField
        label='درصد دریافتی'
        type='number'
        value={percentage}
        onChange={({ target }) => onPercentageChange(Number(target.value))}
        fullWidth
        margin='normal'
      />
      <Table orders={orders} fetchingStatus={fetchingStatus} />
      <OrderSummary orders={orders} percentage={percentage} />
    </Box>
  )
}

interface TableProps {
  fetchingStatus: FetchingStatus
  orders: Array<NormalizedOrder>
}

const Table = memo(({ fetchingStatus, orders }: TableProps) => (
  <TableContainer component={Paper}>
    <MuiTable>
      <TableHead>
        <TableRow>
          {ORDERS_TABLE_HEAD.map(col => (
            <TableCell key={col.id}>{col.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {fetchingStatus == 'loading'
          ? Array.from(new Array(10)).map((_, idx) => (
              <TableRow key={idx}>
                {ORDERS_TABLE_HEAD.map((_, i) => (
                  <TableCell key={i}>
                    <Skeleton variant='text' />
                  </TableCell>
                ))}
              </TableRow>
            ))
          : orders?.map((order, index) => (
              <TableRow key={index}>
                <TableCell key={index}>{order.price}</TableCell>
                <TableCell key={index}>{order.value}</TableCell>
                <TableCell key={index}>{order.remain}</TableCell>
              </TableRow>
            ))}
      </TableBody>
    </MuiTable>
  </TableContainer>
))

export default OrdersTable
