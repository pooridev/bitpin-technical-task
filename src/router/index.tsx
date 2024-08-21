import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const MarketsPage = lazy(() => import('@screens/Markets'))
const TradePage = lazy(() => import('@screens/Trade'))
const NotFoundPage = lazy(() => import('@screens/NotFound'))

const AppRouter = () => {
  return (
    <Routes>
      <Route index Component={MarketsPage} />
      <Route path='/trade/:marketId' Component={TradePage} />
      <Route path='*' Component={NotFoundPage} />
    </Routes>
  )
}

export default AppRouter
