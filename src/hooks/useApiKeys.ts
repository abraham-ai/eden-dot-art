import useSWR from 'swr'
import { fetcher } from '@/util/fetcher'

// TYPES
import ApiKey from '@/interfaces/ApiKey'

interface ApiKeysResponse {
  apiKeys: ApiKey[]
}

export const useApiKeys = () => {
  const { data, error, isLoading, mutate } = useSWR<ApiKeysResponse>(
    '/api/user/keys',
    fetcher,
  )

  return {
    apiKeys: data?.apiKeys.map((apiKey, index) => ({
      ...apiKey,
      key: apiKey._id || index,
    })),
    isLoading,
    error,
    mutate,
  }
}
