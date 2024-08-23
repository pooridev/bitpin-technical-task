import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const CoinsPage = lazy(() => import('@screens/Coins'))
const CoinPage = lazy(() => import('@screens/Coin'))
const NotFoundPage = lazy(() => import('@screens/NotFound'))

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
