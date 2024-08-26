import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { NormalizedOrder } from '@screens/Coin/api/types'
import { calculatOrderSummary } from '@screens/Coin/utils'

interface Props {
  orders: Array<NormalizedOrder>
  percentage: number
}

const OrderSummary = ({ orders, percentage }: Props) => {
  const { totalVolume, averagePrice, totalAmount } = calculatOrderSummary(orders, percentage)

  return (
    <Box mt={2}>
      <Typography variant='h6'>خلاصه سفارشات</Typography>
      <Typography>حجم کل: {totalVolume.toFixed(2)}</Typography>
      <Typography>قیمت میانگین: {averagePrice.toFixed(2)}</Typography>
      <Typography>مبلغ کل: {totalAmount.toFixed(2)}</Typography>
    </Box>
  )
}

export default OrderSummary
