import { PropsWithChildren } from 'react'

import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const appTheme = createTheme({
  typography: {
    fontFamily: 'Rubik',
  },
})

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <CacheProvider value={cacheRtl}>
      <MuiThemeProvider theme={appTheme}>{children}</MuiThemeProvider>
    </CacheProvider>
  )
}

export default ThemeProvider
