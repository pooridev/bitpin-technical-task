import { useQuery } from '@tanstack/react-query'
import { groupByBaseCurrency } from './DTOs'
import { getCoinList } from './requests'

export const useGetCoins = () => {
  const { data: coins, isLoading: isLoadingCoins } = useQuery({
    queryKey: ['markets'],
    queryFn: getCoinList,
    // TODO remove this when development finished
    staleTime: 60 * 1000 * 10,
    select: groupByBaseCurrency,
  })

  return {
    coins,
    isLoadingCoins,
  }
}
