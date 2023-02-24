import useSWR from 'swr'

// UTILS
import { fetcher } from '@/util/fetcher'

const empty = {
  versionId: 'loading',
  requiredParameters: [],
  optionalParameters: [],
  isLoading: false,
  error: null,
  mutate: null,
}

export interface ParameterType {
  name: string
  value: string | number
  allowedValues: string[] // array of allowed values for an option parameter
  default?: string | number // default value for a string or slider parameter
  mediaUpload?: boolean // boolean indicating if the parameter requires a media upload
  minLength?: number // minimum length for a string parameter
  maxLength?: number // maximum length for a string parameter
}

export interface GeneratorInfo {
  versionId: string
  requiredParameters: ParameterType[]
  optionalParameters: ParameterType[]
  isLoading: boolean
  error: string
  mutate: () => void
}

export const useGeneratorInfo = (generatorName: string): GeneratorInfo => {
  if (!generatorName) {
    return empty
  }

  const { data, error, isLoading, mutate } = useSWR(
    `/api/generators?name=${generatorName}`,
    fetcher,
  )

  if (isLoading || !data || error) {
    return {
      versionId: 'loading',
      requiredParameters: [],
      optionalParameters: [],
      isLoading,
      error,
      mutate,
    }
  }

  const requiredParameters = data?.generatorVersion.parameters.filter(
    (parameter: { optional: boolean }) => !parameter.optional,
  )

  const optionalParameters = data?.generatorVersion.parameters.filter(
    (parameter: { optional: boolean }) => parameter.optional,
  )

  return {
    versionId: data?.generatorVersion.versionId,
    requiredParameters: requiredParameters || [],
    optionalParameters: optionalParameters || [],
    isLoading,
    error,
    mutate,
  }
}
