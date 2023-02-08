import { useState } from 'react'
// useContext,

// EDEN COMPONENT
import GeneratorInterface from '@/components/Create/GeneratorInterface/GeneratorInterface'

// UI
import { Button, Form, Input, InputNumber, Space } from 'antd'
const { Item } = Form

// FETCH
import axios from 'axios'

// COMPONENTS
import ImageResult from '@/components/ImageResult/ImageResult'

interface GenerateFormInputs {
  prompt: string
  width: number
  height: number
}

const GenerateTab = () => {
  const initialValues = {
    prompt: '',
    width: 512,
    height: 512,
  }

  const [form] = Form.useForm()
  const width = Form.useWatch('width', form)
  const height = Form.useWatch('height', form)
  const [resultURL, setResultURL] = useState<string>('')
  const [generating, setGenerating] = useState<boolean>(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleGenerate = async (values: GenerateFormInputs) => {
    setGenerating(true)
    try {
      const response = await axios.post('/api/generate', {
        ...values,
      })
      setResultURL(response.data.outputUrl)
    } catch (error: any) {
      setMessage(`Error: ${error.response.data.error}`)
    }
    setGenerating(false)
  }

  return (
    <>
      <GeneratorInterface mediaType="image" generatorName="create" />

      {message}
      {resultURL ? (
        <ImageResult width={width} height={height} imageUrl={resultURL} />
      ) : null}
    </>
  )
}

export default GenerateTab
