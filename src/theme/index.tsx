import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'

import MuiThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'
import CssBaseline from '@mui/material/CssBaseline'
import { PaletteMode } from '@mui/material'

const ColorModeContext = createContext({ toggleColorMode: () => {} })

export const useColorMode = () => {
  const context = useContext(ColorModeContext)

  if (!context) throw new Error('useColorMode must be used within a ColorModeContext provider')

  return context
}

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [mode, setMode] = useState<PaletteMode>('light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                background: mode == 'dark' ? 'rgba(31, 32, 35);' : 'white',
              },
            },
          },
        },
        typography: {
          fontFamily: 'Rubik',
        },
        palette: {
          mode,
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CacheProvider value={cacheRtl}>
        <MuiThemeProvider theme={theme}>
          {children}
          <CssBaseline />
        </MuiThemeProvider>
      </CacheProvider>
    </ColorModeContext.Provider>
  )
}

export default ThemeProvider
