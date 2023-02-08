import { useState } from 'react'
// useContext,

// UI
import { Button, Form, Input, InputNumber, Space } from 'antd'

// FETCH
import axios from 'axios'

// EDEN COMPONENTS
import GeneratorInterface from '@/components/Create/GeneratorInterface/GeneratorInterface'
import ImageResult from '@/components/ImageResult/ImageResult'

interface RemixFormInputs {
  initImageUrl: string
  width: number
  height: number
}

const RemixTab = () => {
  const initialValues: RemixFormInputs = {
    initImageUrl: '',
    width: 512,
    height: 512,
  }

  const [form] = Form.useForm()
  const width = Form.useWatch('width', form)
  const height = Form.useWatch('height', form)
  const [resultUrl, setResultUrl] = useState<string>('')
  const [generating, setGenerating] = useState<boolean>(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleRemix = async (values: RemixFormInputs) => {
    setGenerating(true)
    try {
      const response = await axios.post('/api/remix', {
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
      <GeneratorInterface mediaType="audio" generatorName="tts" />

      {message && <p>{message}</p>}
      <ImageResult width={width} height={height} imageUrl={resultUrl} />
    </>
  )
}

export default RemixTab
