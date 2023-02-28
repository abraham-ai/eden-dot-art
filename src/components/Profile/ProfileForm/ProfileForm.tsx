import { useState } from 'react'

// ANTD
import { Button, Form, Table } from 'antd'

// FETCH
import axios, { AxiosError } from 'axios'

// TYPES
import Creation from '@/interfaces/Creation'

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
        response.data.creations.map((creation: Creation) => {
          return {
            key: creation._id,
            timestamp: creation.createdAt,
            prompt: creation.task.config.text_input,
            status: creation.task.status,
            output: creation.uri,
          }
        })
      setCreations(data)
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        // Inside this block, err is known to be a AxiosError
        setMessage(`Error: ${error}`)
      }
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
      render: (output: string) => <a href={output}>download</a>,
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
