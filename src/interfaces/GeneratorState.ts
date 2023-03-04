import Creation from './Creation'

export interface GeneratorState {
  progress: number
  taskId: string
  creation: Creation
  generating: boolean
}

export default GeneratorState
