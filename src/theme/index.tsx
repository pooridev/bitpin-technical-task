import { PropsWithChildren } from 'react'

import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import rtlPlugin from 'stylis-plugin-rtl'

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>
}

export default ThemeProvider
