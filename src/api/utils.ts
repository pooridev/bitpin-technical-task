interface FetchingStatusParams {
  isLoading: boolean
  isError: boolean
  isRefetching: boolean
}

export type FetchingStatus = 'error' | 'loading' | 'success' | 'refetching'

export const getFetchingStatus = ({ isLoading, isError, isRefetching }: FetchingStatusParams): FetchingStatus => {
  if (isError) return 'error'
  if (isLoading) return 'loading'
  if (isRefetching) return 'refetching'
  return 'success'
}
