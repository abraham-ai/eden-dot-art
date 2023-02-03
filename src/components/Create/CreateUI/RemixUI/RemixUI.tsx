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
        ...values
      })
      setResultUrl(response.data.outputUrl)
    } catch (error: any) {
      setMessage(`Error: ${error.response.data.error}`)
    }
    setGenerating(false)
  }

  return (
    <>
      <GeneratorInterface mediaType='image' generatorName='remix' />
      {/* <Form
        form={form}
        name="remix"
        initialValues={initialValues}
        onFinish={handleRemix}
      >
        <Form.Item label="Init Image" name="initImageUrl">
          <Input />
        </Form.Item>
        <Space>
          <Form.Item label="Width" name="width">
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item label="Height" name="height">
            <InputNumber min={0} />
          </Form.Item>
        </Space>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={generating}
            disabled={generating}
          >
            Generate Remix
          </Button>
        </Form.Item>
      </Form> */}
      {message && <p>{message}</p>}
      <ImageResult width={width} height={height} imageUrl={resultUrl} />
    </>
  )
}

export default RemixTab
