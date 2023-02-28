interface GeneratorData {
  generatorVersion: {
    versionId: string
    parameters: {
      id: string
      value: string | number
      name: string
      optional: boolean
      allowedValues: string[]
      selectedValue: string | number
      label: string
      isRequired: boolean
      description: string
    }[]
  }
}

export default GeneratorData
