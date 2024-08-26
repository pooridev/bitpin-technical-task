import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Skeleton from '@mui/material/Skeleton'

const TableSkeloten = () => {
  return Array(10)
    .fill(null)
    .map((_, index) => (
      <TableRow key={index}>
        {Array(3)
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
