import useSWR from 'swr'
import { fetcher } from '@/util/fetcher'

export const useTasks = () => {
  const { data, error, isLoading, mutate } = useSWR('/api/fetch', fetcher)

  return {
    tasks: data?.tasks || [],
    isLoading,
    error,
    mutate,
  }
}
