import React, { useState } from 'react'

// ANTD
import { Table } from 'antd'

// FETCH
import axios from 'axios'

// WALLET
import { useAccount } from 'wagmi'

// HOOKS
import { useApiKeys } from '@/hooks/useApiKeys'

const ApiKeys = () => {
  const { isConnected } = useAccount()
  const [apiKeyCreating, setApiKeyCreating] = useState(false)
  const [apiMessage, setApiMessage] = useState<string | null>(null)
  const { apiKeys, mutate } = useApiKeys()

  const handleCreateAPIKey = async () => {
    if (!isConnected) return
    setApiKeyCreating(true)
    try {
      await axios.post('/api/createkey')
      setApiKeyCreating(false)
      mutate()
    } catch (error: any) {
      setApiMessage(`Error: ${error.response.data.error}`)
      setApiKeyCreating(false)
    }
  }

  const columns = [
    {
      title: 'API Key',
      dataIndex: 'apiKey',
      key: 'apiKey',
    },
    {
      title: 'API Secret',
      dataIndex: 'apiSecret',
      key: 'apiSecret',
    },
    {
      title: 'Date created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (dateCreated: string) => new Date(dateCreated).toLocaleString(),
    },
  ]

  const data = apiKeys?.map((apiKey: any, index: any) => ({
    ...apiKey,
    key: apiKey._id || index,
  }))

  return (
    <div>
      <h1>My API Keys</h1>
      <Table dataSource={data} columns={columns} />
      <button
        className={`button ${apiKeyCreating ? 'loading' : ''}`}
        onClick={handleCreateAPIKey}
        // disabled={apiKeyCreating}
        // loading={apiKeyCreating}
      >
        Create new API key
      </button>
      {apiMessage && <p>{apiMessage}</p>}
    </div>
  )
}

export default ApiKeys
