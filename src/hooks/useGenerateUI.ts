import { useCallback } from 'react'

// ANTD
import { message } from 'antd'

// FETCH
import axios, { AxiosError } from 'axios'

// CONTEXT
// import AppContext from '@/context/AppContext/AppContext'

const useGenerateUI = async (generatorName, values, config) => {
  //   const context = useContext(AppContext)
  //   const { setGenerating } = context

  //   setGenerating(true)

  //   if (!validateConfig(values)) {
  //     setGenerating(false)
  //     return
  //   }

  console.log('USE GENERATE UI')
  console.log({ values })

  const stringValues = { ...values }
  for (const key in stringValues) {
    if (typeof stringValues[key] === 'bigint') {
      stringValues[key] = stringValues[key].toString()
    }
  }

  console.log(stringValues)

  try {
    // const config = getConfig(stringValues)
    const response = await axios.post('/api/generate', {
      generatorName: generatorName,
      config: config,
    })
    const newTaskId = response.data.taskId
    message.success(`Task ${newTaskId} started.`)
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.message) {
        message.error(`Error: ${error.message}`)
      } else {
        message.error(`Error: ${error.response.data.error}`)
      }
    }
  }

  //   setGenerating(false)
}

export default useGenerateUI
