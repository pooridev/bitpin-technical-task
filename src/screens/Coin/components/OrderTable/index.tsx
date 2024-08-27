import { memo } from 'react'
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
import { formatPrice, toPersian } from '@utils'
import TableSkeloten from '@components/TableSkeloten'

interface OrdersTableProps {
  orders: Array<NormalizedOrder>
  fetchingStatus: FetchingStatus
  percentage: number
  onPercentageChange: (percentage: number) => void
}

const OrdersTable = ({ orders, fetchingStatus, percentage, onPercentageChange }: OrdersTableProps) => {
  if (fetchingStatus == 'error') {
    return <Alert severity='error'>خطا در دریافت اطلاعات</Alert>
  }

  const isEmpty = orders.length == 0

  if (fetchingStatus != 'loading' && isEmpty) {
    return <Alert severity='info'>سفارشی تاکنون ثبت نشده است</Alert>
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
        {fetchingStatus == 'loading' ? (
          <TableSkeloten rowCount={10} columnCount={3} />
        ) : (
          orders?.map(order => (
            <TableRow key={order.value}>
              <TableCell>{formatPrice(String(order.price))}</TableCell>
              <TableCell>{toPersian(order.value)}</TableCell>
              <TableCell>{toPersian(order.remain)}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </MuiTable>
  </TableContainer>
))

export default OrdersTable
