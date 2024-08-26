import { useQuery } from '@tanstack/react-query'
import { groupByBaseCurrency } from './DTOs'
import { getCoinList } from './requests'
import { getFetchingStatus } from '@api'

export const useGetCoins = () => {
  const {
    data: coins,
    isLoading,
    isError,
    isRefetching,
  } = useQuery({
    queryKey: ['markets'],
    queryFn: getCoinList,
    select: groupByBaseCurrency,
  })

  return {
    coins,
    fetchingStatus: getFetchingStatus({ isError, isLoading, isRefetching }),
  }
}
