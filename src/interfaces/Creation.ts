import Task from '@/interfaces/Task'

interface Creation {
  _id: string
  _v: number
  attributes: string[]
  delagateHasClaimed: boolean
  name: string
  user: string
  task: Task
  thumbnail: string
  createdAt: string
  updatedAt: string
  key: number
  address: string
  uri: string
  timestamp: string
}

export default Creation
