import useSWR from 'swr'
import { fetcher } from '@/util/fetcher'

// TYPES
import Task from '@/interfaces/Task'
interface TaskResponse {
  tasks: Task[]
}

export const useTasks = () => {
  const { data, error, isLoading, mutate } = useSWR<TaskResponse>(
    '/api/fetch',
    fetcher,
  )

  return {
    tasks: data?.tasks || [],
    isLoading,
    error,
    mutate,
  }
}
