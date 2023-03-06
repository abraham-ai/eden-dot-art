import useSWR from 'swr'
// import { fetcher } from '@/util/fetcher'
import { useContext } from 'react'
import AppContext from '@/context/AppContext/AppContext'
import Task from '@/interfaces/Task'

interface TaskResponse {
  tasks: Task[]
}

const fetcher = async (url: string, postData: any) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(postData)
  });
  const data = await response.json();
  return data;
};

export const useTasks = () => {
  const { lastLoadTime } = useContext(AppContext);
  
  const { data, error, isLoading, mutate } = useSWR<TaskResponse>(
    '/api/fetch',
    (url: string) => fetcher(url, { 
      earliestTime: lastLoadTime.getTime(),
      limit: 10
    })
  );

  return {
    tasks: data?.tasks,
    isLoading,
    error,
    mutate,
  }
}
