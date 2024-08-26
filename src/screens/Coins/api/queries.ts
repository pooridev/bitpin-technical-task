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
    // TODO remove this when development finished
    staleTime: 60 * 1000 * 10,
    select: groupByBaseCurrency,
  })

  return {
    coins,
    fetchingStatus: getFetchingStatus({ isError, isLoading, isRefetching }),
  }
}
