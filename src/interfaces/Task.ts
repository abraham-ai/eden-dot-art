import Config from '@/interfaces/Config'
import Generator from '@/interfaces/Generator'

interface Task {
  _id: string
  config: Config
  generator: Generator
  status: string
  key: number
  address: string
  uri: string
  timestamp: string
  prompt: string
}

export default Task
