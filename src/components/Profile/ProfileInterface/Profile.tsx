import { useState } from 'react'

// ANTD
import { Button, Form, Table } from 'antd'

// FETCH
import axios from 'axios'

interface MyCreationsFormInputs {
  datefrom: number
  dateto: number
}

const Profile = () => {
  const [form] = Form.useForm()
  const [creations, setCreations] = useState<object[]>([])
  const [generating, setGenerating] = useState<boolean>(false)
  const [message, setMessage] = useState<string | null>(null)

  const handleGenerate = async (values: MyCreationsFormInputs) => {
    setGenerating(true)
    try {
      const response = await axios.post('/api/creations', {
        ...values,
      })
      const data =
        response.data.creations &&
        response.data.creations.map((creation: any) => {
          return {
            key: creation._id,
            timestamp: creation.timestamp,
            prompt: creation.config.text_input,
            status: creation.status,
            output: creation.output,
          }
        })
      setCreations(data)
    } catch (error: any) {
      setMessage(`Error: ${error.response.data.error}`)
    }
    setGenerating(false)
  }

  const columns = [
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
      render: (timestamp: number) => new Date(timestamp).toLocaleString(),
    },
    {
      title: 'Prompt',
      dataIndex: 'prompt',
      key: 'prompt',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Output',
      dataIndex: 'output',
      key: 'output',
      render: (output: string) => (
        <a href={'https://minio.aws.abraham.fun/creations-stg/' + output}>
          download
        </a>
      ),
    },
  ]

  return (
    <>
      <Form
        form={form}
        name="generate"
        // initialValues={initialValues}
        onFinish={handleGenerate}
      >
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={generating}
            disabled={generating}
          >
            Get My Creations
          </Button>
        </Form.Item>
      </Form>
      {message && <p>{message}</p>}
      <Table dataSource={creations} columns={columns} />
    </>
  )
}

export default Profile
