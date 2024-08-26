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
import { Skeleton } from '@mui/material'

interface Props {
  matches: Array<NormalizedMatch>
  fetchingStatus: FetchingStatus
}

const MatchesTable = ({ matches, fetchingStatus }: Props) => {
  if (fetchingStatus == 'error') {
    return (
      <Alert sx={{ m: 2 }} severity='error'>
        خطا در دریافت اطلاعات
      </Alert>
    )
  }

  const isEmpty = matches.length == 0

  if (fetchingStatus != 'loading' && isEmpty) {
    return (
      <Alert sx={{ m: 2 }} severity='info'>
        معامله‌ای تاکنون انجام نشده است.
      </Alert>
    )
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
          {fetchingStatus == 'loading'
            ? Array.from(new Array(10)).map((_, idx) => (
                <TableRow key={idx}>
                  {MATCHES_TABLE_HEAD.map((_, i) => (
                    <TableCell key={i}>
                      <Skeleton variant='text' />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : matches?.map((match, index) => (
                <TableRow key={index}>
                  <TableCell key={index}>{match.price}</TableCell>
                  <TableCell key={index}>{match.time}</TableCell>
                  <TableCell key={index}>{match.matchAmount}</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MatchesTable
