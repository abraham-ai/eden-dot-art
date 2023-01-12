import { useContext, useState } from 'react'

// UI
import { Button, Form, Input, InputNumber, Space } from 'antd'

// FETCH
import axios from 'axios'

// COMPONENTS
import ImageResult from '@/components/ImageResult'

// CONTEXT
import { AuthContext } from '../../contexts/AuthContext'

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

  const { selectedAuthMode } = useContext(AuthContext)

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
        authMode: selectedAuthMode,
      })
      setResultURL(response.data.outputUrl)
    } catch (error: any) {
      setMessage(`Error: ${error.response.data.error}`)
    }
    setGenerating(false)
  }

  return (
    <>
      <Form
        form={form}
        name="generate"
        initialValues={initialValues}
        onFinish={handleGenerate}
      >
        <Form.Item label="Prompt" name="prompt">
          <Input />
        </Form.Item>
        <Space style={{ display: 'flex', alignItems: 'center' }}>
          <Form.Item label="Width" name="width">
            <InputNumber placeholder="Width" min={0} />
          </Form.Item>
          <Form.Item label="Height" name="height">
            <InputNumber placeholder="Height" min={0} />
          </Form.Item>
        </Space>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={generating}
            disabled={generating}
          >
            Generate
          </Button>
        </Form.Item>
      </Form>
      {message && <p>{message}</p>}
      {resultURL ? (
        <ImageResult width={width} height={height} imageUrl={resultURL} />
      ) : null}
    </>
  )
}

export default GenerateTab
