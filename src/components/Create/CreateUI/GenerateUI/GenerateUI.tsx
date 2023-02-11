import { useState } from 'react'

// ANTD
import { Form } from 'antd'

// FETCH
import axios from 'axios'

// EDEN COMPONENT
import GeneratorInterface from '@/components/Create/GeneratorInterface/GeneratorInterface'

// COMPONENTS
import ImageResult from '@/components/ImageResult/ImageResult'

interface GenerateFormInputs {
  prompt: string
  width: number
  height: number
}

const GenerateTab = () => {
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
      <GeneratorInterface
        mediaType="image"
        generatorName="create"
        handleGenerate={handleGenerate}
      />

      {generating ? message : null}
      {resultURL ? (
        <ImageResult width={width} height={height} imageUrl={resultURL} />
      ) : null}
    </>
  )
}

export default GenerateTab
