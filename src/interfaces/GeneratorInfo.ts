import { ParameterType } from './ParameterType'

interface GeneratorInfo {
  versionId: string
  requiredParameters: ParameterType[]
  optionalParameters: ParameterType[]
  isLoading: boolean
  error: string
  mutate: () => void
}

export type { GeneratorInfo }
