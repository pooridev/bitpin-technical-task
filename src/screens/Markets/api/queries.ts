import { useQuery } from '@tanstack/react-query'
import { groupByBaseCurrency } from './DTOs'
import { getMarkets } from './requests'

export const useGetMarkets = () => {
  const { data: markets, isLoading: isLoadingMarkets } = useQuery({
    queryKey: ['markets'],
    queryFn: getMarkets,
    // TODO remove this when development finished
    staleTime: 60 * 1000 * 10,
    select: groupByBaseCurrency,
  })

  return {
    markets,
    isLoadingMarkets,
  }
}
