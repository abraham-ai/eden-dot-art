import Task from './Task'
import Config from './Config'

interface CreationFullType {
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
  output: string
  status: string
  config: Config
}

export default CreationFullType
