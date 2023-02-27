interface ParameterType {
  id: string
  name: string
  value: string | number
  allowedValues: string[] // array of allowed values for an option parameter
  default?: string | number // default value for a string or slider parameter
  mediaUpload?: boolean // boolean indicating if the parameter requires a media upload
  minLength?: number // minimum length for a string parameter
  maxLength?: number // maximum length for a string parameter
  selectedValue: string | number // selected value for a string or slider parameter
}

export type { ParameterType }
