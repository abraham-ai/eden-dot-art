import { useState } from 'react'
// useContext, 

// UI
import { Button, Form, Input, InputNumber, Space } from 'antd'
const { Item } = Form;

// FETCH
import axios from 'axios'

// COMPONENTS
import ImageResult from '@/components/ImageResult'

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
        ...values
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
        <Item label="Prompt" name="prompt" style={{ display: 'flex', alignItems: 'center'}}>
          <Input />
        </Item>
        <Space style={{ display: 'flex', alignItems: 'center' }}>
          <Item label="Width" name="width" style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
            <InputNumber style={{ margin: 0}} placeholder="Width" min={0} />
          </Item>
          <Item label="Height" name="height" style={{ display: 'flex', alignItems: 'center', margin: 0 }} >
            <InputNumber style={{ margin: 0, display: 'flex', alignItems: 'center' }}  placeholder="Height" min={0} />
          </Item>
        </Space>
        <Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={generating}
            disabled={generating}
          >
            Generate
          </Button>
        </Item>
      </Form>
      {message && <p>{message}</p>}
      {resultURL ? (
        <ImageResult width={width} height={height} imageUrl={resultURL} />
      ) : null}
    </>
  )
}

export default GenerateTab
