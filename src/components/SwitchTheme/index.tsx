import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

import { useColorMode } from '../../theme'
import { useTheme } from '@mui/material'

const SwitchTheme = () => {
  const theme = useTheme()
  const colorMode = useColorMode()

  return (
    <Box
      role='button'
      onClick={colorMode.toggleColorMode}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      حالت شب/روز
      <IconButton sx={{ ml: 1 }} color='inherit'>
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )
}

export default SwitchTheme
