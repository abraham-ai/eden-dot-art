import { useState } from 'react'

// FETCH
import axios from 'axios'

// EDEN COMPONENTS
import GeneratorInterface from '@/components/Create/GeneratorInterface/GeneratorInterface'
import VideoResult from '@/components/Media/VideoResult/VideoResult'

interface InterpolateFormInputs {
  prompt1: string
  prompt2: string
  width: number
  height: number
  numFrames: number
}

const InterpolateTab = () => {
  const initialValues: InterpolateFormInputs = {
    prompt1: '',
    prompt2: '',
    width: 512,
    height: 512,
    numFrames: 30,
  }

  const [resultUrl, setResultUrl] = useState<string>('')
  const [generating, setGenerating] = useState<boolean>(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleInterpolate = async (values: InterpolateFormInputs) => {
    setGenerating(true)
    try {
      const response = await axios.post('/api/interpolate', {
        ...values,
      })
      setResultUrl(response.data.outputUrl)
    } catch (error: any) {
      setMessage(`Error: ${error.response.data.error}`)
    }
    setGenerating(false)
  }

  return (
    <>
      <GeneratorInterface
        mediaType="video"
        generatorName="interpolate"
        handleGenerate={handleInterpolate}
      />

      {generating ? message : null}

      <VideoResult resultUrl={resultUrl} />
    </>
  )
}

export default InterpolateTab
