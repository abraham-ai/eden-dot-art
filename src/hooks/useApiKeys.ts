import useSWR from 'swr'
import { fetcher } from '@/util/fetcher'

interface ApiKeysResponse {
  apiKeys: string[]
}

export const useApiKeys = () => {
  const { data, error, isLoading, mutate } = useSWR<ApiKeysResponse>(
    '/api/user/keys',
    fetcher,
  )

  return {
    apiKeys: data?.apiKeys,
    isLoading,
    error,
    mutate,
  }
}
