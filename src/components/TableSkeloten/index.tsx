import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Skeleton from '@mui/material/Skeleton'

interface Props {
  rowCount: number
  columnCount: number
}

const TableSkeloten = ({ rowCount, columnCount }: Props) => {
  return Array(rowCount)
    .fill(null)
    .map((_, index) => (
      <TableRow key={index}>
        {Array(columnCount)
          .fill(null)
          .map((_, i) => (
            <TableCell key={i}>
              <Skeleton variant='text' />
            </TableCell>
          ))}
      </TableRow>
    ))
}

export default TableSkeloten
