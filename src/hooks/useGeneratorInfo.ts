import useSWR from 'swr'

// UTILS
import { fetcher } from '@/util/fetcher'

// TYPES
import { GeneratorInfo } from '@/interfaces/GeneratorInfo'

const empty = {
  versionId: 'loading',
  requiredParameters: [],
  optionalParameters: [],
  isLoading: false,
  error: null,
  mutate: null,
}

const useGeneratorInfo = (generatorName: string): GeneratorInfo => {
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

export default useGeneratorInfo
