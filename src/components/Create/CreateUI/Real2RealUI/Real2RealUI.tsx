import { useState } from 'react' // useContext

// FETCH
import axios from 'axios'

// EDEN COMPONENTS
import GeneratorInterface from '@/components/Create/CreateUI/GeneratorInterface/GeneratorInterface'
import VideoResult from '@/components/Media/VideoResult/VideoResult'

interface Real2RealFormInputs {
  initImageUrl1: string
  initImageUrl2: string
  width: number
  height: number
  numFrames: number
}

const Real2RealTab = () => {
  // const initialValues: Real2RealFormInputs = {
  //   initImageUrl1: '',
  //   initImageUrl2: '',
  //   width: 512,
  //   height: 512,
  //   numFrames: 30,
  // }

  const [resultUrl, setResultUrl] = useState<string>('')
  const [generating, setGenerating] = useState<boolean>(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleReal2Real = async (values: Real2RealFormInputs) => {
    setGenerating(true)
    try {
      const response = await axios.post('/api/real2real', {
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
        generatorName="real2real"
        handleGenerate={handleReal2Real}
      />

      {generating ? `${message}` : null}
      <VideoResult resultUrl={resultUrl} />
    </>
  )
}

export default Real2RealTab
