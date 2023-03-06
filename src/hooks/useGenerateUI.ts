// FETCH
//import axios, { AxiosError } from 'axios'
import axios from 'axios'

// CONTEXT
// import AppContext from '@/context/AppContext/AppContext'

const useGenerateUI = async (generatorName, values, config) => {
  const stringValues = { ...values }
  for (const key in stringValues) {
    if (typeof stringValues[key] === 'bigint') {
      stringValues[key] = stringValues[key].toString()
    }
  }
  const response = await axios.post('/api/generate', {
    generatorName: generatorName,
    config: config,
  })
  return response
}

export default useGenerateUI
