import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const CoinsPage = lazy(() => import('@screens/Coins'))
const TradePage = lazy(() => import('@screens/Trade'))
const NotFoundPage = lazy(() => import('@screens/NotFound'))

const AppRouter = () => {
  return (
    <Routes>
      <Route index Component={CoinsPage} />
      <Route path='/trade/:marketId' Component={TradePage} />
      <Route path='*' Component={NotFoundPage} />
    </Routes>
  )
}

export default AppRouter
