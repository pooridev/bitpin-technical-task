import { useQuery } from '@tanstack/react-query'

import { GetMatchesParams, GetOrdersParams } from './types'
import { getMatches, getOrders } from './requests'
import { normalizeMatches, normalizeOrders } from './DTOs'
import { refetchInterval } from './constants'
import { getFetchingStatus } from '@api'

interface UseGetOrdersParams extends GetOrdersParams {
  enabled: boolean
}

export const useGetOrders = ({ marketId, type, enabled }: UseGetOrdersParams) => {
  const {
    data: orders,
    isLoading,
    isError,
    isRefetching,
  } = useQuery({
    queryKey: ['getOrders', type],
    queryFn: () => {
      return getOrders({
        type,
        marketId,
      })
    },
    enabled,
    refetchInterval,
    select: normalizeOrders,
  })

  return {
    orders,
    ordersFetchingStatus: getFetchingStatus({ isError, isLoading, isRefetching }),
  }
}

interface UseGetMatchesParams extends GetMatchesParams {
  enabled: boolean
}

export const useGetMatches = ({ marketId, enabled }: UseGetMatchesParams) => {
  const {
    data: matches,
    isLoading,
    isError,
    isRefetching,
  } = useQuery({
    queryKey: ['getMatches', marketId],
    queryFn: () => getMatches({ marketId }),
    refetchInterval,
    enabled,
    select: normalizeMatches,
  })

  return {
    matches,
    matchesFetchingStatus: getFetchingStatus({ isError, isLoading, isRefetching }),
  }
}
