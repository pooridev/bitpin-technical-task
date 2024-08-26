import { Route, Routes } from 'react-router-dom'
import { loadable } from '@utils'

const CoinsPage = loadable(() => import('@screens/Coins'))
const CoinPage = loadable(() => import('@screens/Coin'))
const NotFoundPage = loadable(() => import('@screens/NotFound'))

const AppRouter = () => {
  return (
    <Routes>
      <Route index Component={CoinsPage} />
      <Route path='/coin/:marketId' Component={CoinPage} />
      <Route path='*' Component={NotFoundPage} />
    </Routes>
  )
}

export default AppRouter
