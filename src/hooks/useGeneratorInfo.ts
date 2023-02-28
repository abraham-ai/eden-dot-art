import useSWR from 'swr'

// UTILS
import { fetcher } from '@/util/fetcher'

// TYPES
import GeneratorInfo from '@/interfaces/GeneratorInfo'
import GeneratorData from '@/interfaces/GeneratorData'

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

  const { data, error, isLoading, mutate } = useSWR<GeneratorData>(
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

  const optionalParameters = data?.generatorVersion.parameters
    .filter((parameter: { optional: boolean }) => parameter.optional)
    .map(parameter => ({
      id: parameter.name,
      name: parameter.name,
      value: undefined, // set default value as undefined
      allowedValues: [], // set default allowed values as an empty array
      selectedValues: [], // set default allowed values as an empty array
      optional: true,
      selectedValue: undefined, // set default selected value as undefined
      label: parameter.label, // add label property
      isRequired: false, // add isRequired property
      description: parameter.description, // add description property
    }))

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
