import useSWR from 'swr'
import { fetcher } from '@/util/fetcher'

interface BalanceResponse {
  balance: number
}

export const useCreditBalance = () => {
  const { data, error, isLoading, mutate } = useSWR<BalanceResponse>(
    '/api/user/manna',
    fetcher,
  )
  return {
    balance: data?.balance,
    isLoading,
    error,
    mutate,
  }
}
