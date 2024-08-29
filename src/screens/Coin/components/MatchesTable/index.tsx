import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TableHead from '@mui/material/TableHead'
import Alert from '@mui/material/Alert'

import { FetchingStatus } from '@api'
import { NormalizedMatch } from '@screens/Coin/api/types'
import { MATCHES_TABLE_HEAD } from '@screens/Coin/constants'
import TableSkeloten from '@components/TableSkeloten'
import { formatPrice, toPersian } from '@utils'

interface Props {
  matches: Array<NormalizedMatch>
  fetchingStatus: FetchingStatus
}

const MatchesTable = ({ matches, fetchingStatus }: Props) => {
  if (fetchingStatus == 'error') {
    return <Alert severity='error'>خطا در دریافت اطلاعات</Alert>
  }

  const isEmpty = matches.length == 0

  if (fetchingStatus != 'loading' && isEmpty) {
    return <Alert severity='info'>معامله‌ای تاکنون انجام نشده است.</Alert>
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {MATCHES_TABLE_HEAD.map(col => (
              <TableCell key={col.id}>{col.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {fetchingStatus == 'loading' ? (
            <TableSkeloten rowCount={10} columnCount={MATCHES_TABLE_HEAD.length} />
          ) : (
            matches?.map(match => (
              <TableRow key={match.matchId}>
                <TableCell>{formatPrice(String(match.price))}</TableCell>
                <TableCell>{toPersian(match.time)}</TableCell>
                <TableCell>{toPersian(match.matchAmount)}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MatchesTable
